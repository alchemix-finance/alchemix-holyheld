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
        holytag?: string
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


            // Traitement ETH et ERC20
            const { type: synthType } = getSynthToken(depositAsset);

            // Convertir le montant en nombre décimal
            const depositFloat = parseFloat(depositAmount);
            const mintAmountFloat = depositFloat / 2; // On mint la moitié comme dans App.tsx
            const mintAmount = mintAmountFloat.toString();

            console.log('Minting with amount:', {
                originalAmount: depositAmount,
                depositFloat,
                mintAmountFloat,
                mintAmount
            });

            // Mint the tokens avec le montant décimal
            const mintResult = await mint(
                mintAmount,
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

            // Le montant est déjà en wei dans mintResult.mintedAmount
            // Pour Holyheld, nous devons le convertir en format décimal
            const formattedAmount = formatUnits(mintResult.mintedAmount, 18);

            console.log('Converting to EUR with parameters:', {
                mintedAmountWei: mintResult.mintedAmount,
                formattedDecimal: formattedAmount,
                decimals: 18,
                network: network,
            });

            // Convertir le montant en EUR
            try {
                const { transferData } = await convertToEUR(
                    synthTokenAddress,
                    18,
                    formattedAmount, // Utiliser le montant formaté en décimal
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
    };

    return {
        borrow,
        isLoading,
        error,
        synthMapping,
        getSynthToken
    };
};