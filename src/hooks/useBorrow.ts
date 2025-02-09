import { useState, useCallback } from 'react';
import { parseUnits, formatUnits } from 'ethers';
import { erc20Abi } from 'viem';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { useChain } from './useChain';
import { useMintAl } from './UseMintAlETH';
import { useAlchemists } from "@/lib/queries/useAlchemists";
import { CONTRACTS } from '@/lib/wagmi/chains';
import { SYNTH_ASSETS, SYNTH_ASSETS_ADDRESSES } from "@/lib/config/synths";
import type { SynthAsset } from "@/lib/config/synths";
import { useHolyheldSDK } from './useHolyheld';
import { Network } from '@holyheld/sdk';

type SupportedChainId = keyof typeof CONTRACTS;

interface BorrowResult {
    status: string;
    mintedAmount: string;
    synthType: SynthAsset;
    transactionHash: string;
}

const mapNetworkName = (networkName: string): Network => {
    const networkMapping: Record<string, Network> = {
        'arbitrum one': Network.arbitrum,
        arbitrum: Network.arbitrum,
        polygon: Network.polygon,
        ethereum: Network.ethereum,
        optimism: Network.optimism,
        'op mainnet': Network.optimism,
    };
    return networkMapping[networkName.toLowerCase()] || networkName.toLowerCase();
};

export const useBorrow = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { address } = useAccount();
    const { data: walletClient } = useWalletClient();
    const chain = useChain();
    const publicClient = usePublicClient();
    const { validateHolytag, convertToEUR, performTopUp } = useHolyheldSDK();

    const { mint } = useMintAl();
    const { data: alchemists } = useAlchemists();
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

        console.log('Balance:', balance);

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
        depositAmount: string | null,
        selectedStrategy: string,
        isBorrowOnly: boolean
    ) => {
        if (!depositAsset) throw new Error('No deposit asset selected');
        // Only validate deposit amount if not in borrow-only mode
        if (!isBorrowOnly && (!depositAmount || parseFloat(depositAmount) <= 0)) {
            throw new Error('Invalid deposit amount');
        }
        if (!selectedStrategy) throw new Error('No strategy selected');
    }, []);

    const borrow = useCallback(async (
        depositAsset: string,
        depositAmount: string,
        borrowAmount: string,
        selectedStrategy: string,
        holytag: string
    ): Promise<BorrowResult> => {
        setIsLoading(true);
        setError(null);

        try {
            // Check if this is a borrow-only operation
            const isBorrowOnly = depositAmount === '0';
            
            // Validation des entrées
            validateInputs(depositAsset, isBorrowOnly ? null : depositAmount, selectedStrategy, isBorrowOnly);
            
            if (!borrowAmount || parseFloat(borrowAmount) <= 0) {
                throw new Error('Invalid borrow amount');
            }

            if (!address || !publicClient || !walletClient || !chain) {
                throw new Error('Wallet not connected');
            }

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


            // Traitement ETH et ERC20
            const { type: synthType } = getSynthToken(depositAsset);

            // Utiliser le borrowAmount pour le mint
            console.log('=== AMOUNT DETAILS ===');
            console.log('1. Original borrowAmount:', borrowAmount);
            console.log('1b. In ETH:', formatUnits(borrowAmount, 18));
            
            if (!borrowAmount) {
                throw new Error('Invalid borrow amount');
            }

            // Le montant est déjà en wei (18 décimales)
            // La limite du contrat est 5000000000000000000000000 (5e24)
            // Nous devons nous assurer que notre montant est en dessous
            const amount = BigInt(borrowAmount);
            const maxLimit = BigInt('5000000000000000000000000'); // 5e24

            console.log('2. Amount as BigInt:', amount.toString());
            console.log('3. Max limit:', maxLimit.toString());
            console.log('4. Is amount > limit:', amount > maxLimit);
            console.log('===================');

            if (amount > maxLimit) {
                throw new Error('Amount exceeds contract limit');
            }
            
            console.log('Minting with amount:', {
                originalAmount: borrowAmount,
                amountInWei: amount.toString(),
                amountInETH: formatUnits(amount.toString(), 18),
                maxLimit: maxLimit.toString(),
                maxLimitInETH: formatUnits(maxLimit.toString(), 18),
                synthType
            });

            // Mint the tokens
            const mintResult = await mint(
                amount.toString(),
                address as `0x${string}`,
                synthType,
                holytag
            );

            if (!mintResult) throw new Error(`${synthType} minting failed.`);

            console.log('Mint successful:', mintResult);

            // Validation du holytag
            const isValidTag = await validateHolytag(holytag as string);
            if (!isValidTag) {
                throw new Error('Invalid Holytag. Please enter a valid holytag before proceeding.');
            }

            // Déterminer le réseau pour Holyheld
            const chainName = chain?.name;
            if (!chainName) {
                throw new Error('Chain name is undefined');
            }
            const network = mapNetworkName(chainName);
            if (!network) {
                throw new Error(`Unsupported network for Holyheld topup: ${chainName}`);
            }

            // Get the correct alAsset (alUSD or alETH) for conversion
            const synthTokenAddress = SYNTH_ASSETS_ADDRESSES[chain.id][synthType];
            if (!synthTokenAddress) {
                throw new Error(`Synthetic token address not found for ${synthType}`);
            }

            console.log('Using synthetic token address:', synthTokenAddress);

            // Le montant pour le topup doit être le borrowAmount original, pas le montant minté
            const formattedAmount = formatUnits(parseUnits(borrowAmount, 18), 18);

            console.log('Converting to EUR with parameters:', {
                borrowAmount,
                formattedAmount,
                decimals: 18,
                network: network,
            });

            // Convertir le montant en EUR
            try {
                const { transferData } = await convertToEUR(
                    synthTokenAddress,
                    18,
                    formattedAmount, // Utiliser le borrowAmount formaté
                    network
                );

                console.log('Conversion successful, transfer data:', transferData);

                if (!transferData) {
                    throw new Error('Transfer data is undefined after conversion');
                }

                // Effectuer le topup sur Holyheld
                if (!holytag) {
                    throw new Error('Holytag is required for topup');
                }

                await performTopUp(
                    publicClient,
                    walletClient,
                    address,
                    synthTokenAddress,
                    network,
                    formattedAmount, // Utiliser le même montant formaté
                    transferData,
                    holytag,
                    true,
                    {}
                );

            } catch (conversionError: unknown) {
                console.error('Conversion error:', {
                    error: conversionError,
                    synthType,
                    network,
                    mintedAmount: mintResult.mintedAmount,
                    tokenAddress: synthTokenAddress
                });

                let errorMessage = 'Unknown error';
                if (conversionError instanceof Error) {
                    errorMessage = conversionError.message;
                } else if (typeof conversionError === 'object' && conversionError !== null) {
                    errorMessage = (conversionError as any).message || JSON.stringify(conversionError);
                }

                throw new Error(`Failed to convert ${synthType} to EUR: ${errorMessage}. Please try with a smaller amount or contact support if the issue persists.`);
            }

            return {
                status: 'success',
                mintedAmount: mintResult.mintedAmount,
                synthType,
                transactionHash: mintResult.transactionHash
            };

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            setError(errorMessage);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, [address, publicClient, walletClient, chain, synthMapping, getSynthToken, validateHolytag, convertToEUR, performTopUp, mint]);

    return {
        borrow,
        isLoading,
        error,
        synthMapping,
        getSynthToken
    };
};