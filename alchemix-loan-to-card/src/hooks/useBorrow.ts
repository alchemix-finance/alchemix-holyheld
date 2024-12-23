import { useState, useCallback } from 'react';
import { formatUnits, parseUnits } from 'ethers';
import { erc20Abi } from 'viem';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { useChain } from './useChain';
import { useAlchemixDeposit } from './useAlchemixLoan';
import { useMintAl } from './UseMintAlETH';
import { useAlchemists } from "@/lib/queries/useAlchemists";
import { useMaxAmount } from './useMaxAmount';
import { VAULTS } from '@/lib/queries/useVaults';
import { CONTRACTS } from '@/lib/wagmi/chains';
import { SYNTH_ASSETS, SYNTH_ASSETS_ADDRESSES } from "@/lib/config/synths";
import type { SynthAsset } from "@/lib/config/synths";

type SupportedChainId = keyof typeof CONTRACTS;

interface BorrowResult {
    mintedAmount: string;
    synthType: SynthAsset;
    transactionHash: string;
}

export const useBorrow = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { address } = useAccount();
    const { data: walletClient } = useWalletClient();
    const chain = useChain();
    const publicClient = usePublicClient();

    const { deposit } = useAlchemixDeposit();
    const { mint } = useMintAl();
    const { data: alchemists, isLoading: alchemistsLoading, error: alchemistsError } = useAlchemists();
    const { calculateMaxAmount } = useMaxAmount();

    // Mapping des assets
    const synthMapping: Record<string, string> = {
        USDC: "alUSD",
        DAI: "alUSD",
        WETH: "alETH",
        ETH: "alETH",
        USDT: "alUSD",
    };

    // Vérifier le solde
    const checkBalance = async (
        userAddress: `0x${string}`,
        tokenAddress: `0x${string}`,
        amount: bigint,
        asset: string
    ) => {
        if (!publicClient) {
            throw new Error('Public client not initialized');
        }

        const balance = await publicClient.readContract({
            address: tokenAddress as `0x${string}`,
            abi: erc20Abi,
            functionName: 'balanceOf',
            args: [userAddress],
        }) as bigint;

        if (balance < amount) {
            throw new Error(`Insufficient ${asset} balance`);
        }
    };

    // Gérer les approbations
    const handleApproval = async (
        tokenAddress: `0x${string}`,
        spenderAddress: `0x${string}`,
        amount: bigint,
        userAddress: `0x${string}`
    ) => {
        if (!publicClient || !walletClient) {
            throw new Error('Clients not initialized');
        }

        const allowance = await publicClient.readContract({
            address: tokenAddress as `0x${string}`,
            abi: erc20Abi,
            functionName: 'allowance',
            args: [userAddress, spenderAddress],
        }) as bigint;

        if (allowance < amount) {
            const hash = await walletClient?.writeContract({
                address: tokenAddress as `0x${string}`,
                abi: erc20Abi,
                functionName: 'approve',
                args: [spenderAddress, amount],
            });

            if (hash) {
                await publicClient.waitForTransactionReceipt({
                    hash,
                    confirmations: 1,
                });
            }
        }
    };

    const getSynthToken = useCallback((asset: string): { type: SynthAsset; address: string } => {
        const assetUpper = asset.toUpperCase();
        const chainId = chain?.id;

        if (!chainId || !(chainId in CONTRACTS)) {
            throw new Error(`Unsupported chain ID: ${chainId}`);
        }

        const typedChainId = chainId as keyof typeof CONTRACTS;

        if (assetUpper === 'WETH' || assetUpper === 'ETH') {
            const address = SYNTH_ASSETS_ADDRESSES[chainId][SYNTH_ASSETS.ALETH];
            return {
                type: SYNTH_ASSETS.ALETH,
                address
            };
        }

        if (assetUpper === 'USDC' || assetUpper === 'DAI' || assetUpper === 'USDT') {
            const address = SYNTH_ASSETS_ADDRESSES[chainId][SYNTH_ASSETS.ALUSD];
            return {
                type: SYNTH_ASSETS.ALUSD,
                address
            };
        }

        throw new Error(`Unsupported deposit asset: ${asset}`);
    }, [chain?.id]);

    const validateInputs = useCallback((
        depositAsset: string,
        depositAmount: string,
        selectedStrategy: string
    ) => {
        if (!depositAsset) throw new Error('No deposit asset selected');
        if (!depositAmount || parseFloat(depositAmount) <= 0) {
            throw new Error('Invalid deposit amount');
        }
        if (!selectedStrategy) throw new Error('No strategy selected');
    }, []);

    const borrow = async (
        depositAsset: string,
        depositAmount: string,
        selectedStrategy: string,
    ): Promise<BorrowResult> => {
        setIsLoading(true);
        setError(null);

        try {
            if (!address || !walletClient || !chain || !publicClient) {
                throw new Error('Please connect your wallet and ensure all clients are initialized.');
            }

            validateInputs(depositAsset, depositAmount, selectedStrategy);

            // Log détaillé des données avant la recherche
            console.log('Current state:', {
                depositAsset,
                uppercaseAsset: depositAsset.toUpperCase(),
                expectedSynthType: synthMapping[depositAsset.toUpperCase()],
                alchemists: alchemists?.map(al => ({
                    synthType: al.synthType,
                    address: al.address
                })),
                chainId: chain.id
            });

            const mappedSynthType = synthMapping[depositAsset.toUpperCase()] || depositAsset.toUpperCase();
            console.log('Looking for alchemist with synthType:', mappedSynthType);
            const alchemist = alchemists?.find((al) => {
                console.log('Comparing:', {
                    alchemistType: al.synthType,
                    mappedType: mappedSynthType,
                    matches: al.synthType === mappedSynthType
                });
                return al.synthType === mappedSynthType;
            });


            if (!alchemist) {
                console.error('Alchemist not found:', {
                    depositAsset,
                    mappedSynthType,
                    availableSynthTypes: alchemists?.map(al => al.synthType)
                });
                throw new Error(`No alchemist found for asset: ${depositAsset} (mapped to ${mappedSynthType})`);
            }

            const chainId = chain.id as SupportedChainId;

            // Traitement ETH
            if (depositAsset === 'ETH') {
                const vaults = VAULTS[chainId];
                const vault = Object.entries(vaults).find(([addr]) => addr === selectedStrategy)?.[1];

                if (!vault?.wethGateway) {
                    throw new Error('Selected strategy does not support ETH deposits');
                }

                const depositResult = await deposit(
                    selectedStrategy as `0x${string}`,
                    depositAmount,
                    address as `0x${string}`,
                    depositAsset
                );

                if (!depositResult) throw new Error('ETH deposit failed');

                const depositReceipt = await publicClient.waitForTransactionReceipt({
                    hash: depositResult.transactionHash,
                });

                if (depositReceipt.status !== 'success') {
                    throw new Error('ETH deposit transaction failed');
                }

                await new Promise(resolve => setTimeout(resolve, 15000));

                const mintAmount = (parseFloat(depositAmount) / 2).toString();
                const { type: synthType } = getSynthToken(depositAsset);

                const mintResult = await mint(
                    mintAmount.toString(),
                    address,
                    synthType
                );

                if (!mintResult) throw new Error(`${synthType} minting failed`);

                return {
                    mintedAmount: mintResult.mintedAmount,
                    synthType,
                    transactionHash: mintResult.transactionHash
                };

            } else {
                // Traitement ERC20
                const tokenKey = depositAsset.toUpperCase() as keyof typeof CONTRACTS[SupportedChainId]["TOKENS"];
                const tokenInfo = CONTRACTS[chainId]?.TOKENS[tokenKey];

                if (!tokenInfo) {
                    throw new Error(`Token configuration not found for asset: ${depositAsset}`);
                }

                const tokenAddress = tokenInfo.token;
                const depositDecimals = tokenInfo.decimals;
                const depositAmountWei = parseUnits(depositAmount, depositDecimals);

                // Vérifier le solde
                await checkBalance(address as `0x${string}`, tokenAddress as `0x${string}`, depositAmountWei, depositAsset);

                // Gérer l'approbation
                await handleApproval(
                    tokenAddress as `0x${string}`,
                    alchemist.address as `0x${string}`,
                    depositAmountWei,
                    address as `0x${string}`
                );

                // Dépôt
                const depositResult = await deposit(
                    selectedStrategy as `0x${string}`,
                    depositAmount,
                    address as `0x${string}`,
                    depositAsset
                );

                if (!depositResult) throw new Error('Deposit failed.');

                await publicClient.waitForTransactionReceipt({
                    hash: depositResult.transactionHash,
                });

                await new Promise(resolve => setTimeout(resolve, 15000));

                const mintAmountFloat = parseFloat(depositAmount) / 2;
                const mintAmount = mintAmountFloat.toString();
                const { type: synthType } = getSynthToken(depositAsset);

                const mintResult = await mint(
                    mintAmount,
                    address as `0x${string}`,
                    synthType
                );

                if (!mintResult) throw new Error(`${synthType} minting failed.`);

                return {
                    mintedAmount: mintResult.mintedAmount,
                    synthType,
                    transactionHash: mintResult.transactionHash
                };
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        borrow,
        isLoading,
        error,
        synthMapping,
        getSynthToken
    };
};