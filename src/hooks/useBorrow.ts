import { useState, useCallback } from 'react';
import { parseUnits, formatUnits } from 'ethers';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { useChain } from './useChain';
import { useMintAl } from './UseMintAlETH';
import { useAlchemists } from "@/lib/queries/useAlchemists";
import { CONTRACTS } from '@/lib/wagmi/chains';
import { SYNTH_ASSETS, SYNTH_ASSETS_ADDRESSES } from "@/lib/config/synths";
import type { SynthAsset } from "@/lib/config/synths";
import { useHolyheldSDK } from './useHolyheld';
import { Network } from '@holyheld/sdk';

interface BorrowResult {
    status: string;
    mintedAmount: string;
    synthType: SynthAsset;
    transactionHash: string;
}

const synthMapping: Record<string, string> = {
    USDC: "alUSD",
    DAI: "alUSD",
    WETH: "alETH",
    ETH: "alETH",
    USDT: "alUSD",
};

const mapNetworkName = (networkName: string): Network => {
    const mapping: Record<string, Network> = {
        'arbitrum one': Network.arbitrum,
        arbitrum: Network.arbitrum,
        polygon: Network.polygon,
        ethereum: Network.ethereum,
        optimism: Network.optimism,
        'op mainnet': Network.optimism,
    };
    return mapping[networkName.toLowerCase()] || networkName.toLowerCase();
};

export const useBorrow = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { address } = useAccount();
    const { data: walletClient } = useWalletClient();
    const chain = useChain();
    const publicClient = usePublicClient();

    const { mint } = useMintAl();
    const { data: alchemists } = useAlchemists();
    const { validateHolytag, convertToEUR, performTopUp } = useHolyheldSDK();

    const getSynthToken = useCallback((asset: string): { type: SynthAsset; address: string } => {
        const assetUpper = asset.toUpperCase();
        const chainId = chain?.id;
        if (!chainId || !(chainId in CONTRACTS)) {
            throw new Error(`Unsupported chain ID: ${chainId}`);
        }
        if (assetUpper === 'WETH' || assetUpper === 'ETH') {
            return { type: SYNTH_ASSETS.ALETH, address: SYNTH_ASSETS_ADDRESSES[chainId][SYNTH_ASSETS.ALETH] };
        }
        if (assetUpper === 'USDC' || assetUpper === 'DAI' || assetUpper === 'USDT') {
            return { type: SYNTH_ASSETS.ALUSD, address: SYNTH_ASSETS_ADDRESSES[chainId][SYNTH_ASSETS.ALUSD] };
        }
        throw new Error(`Unsupported deposit asset: ${asset}`);
    }, [chain?.id]);

    const validateInputs = useCallback((
        depositAsset: string,
        selectedStrategy: string,
        userInputMintAmount: string,
        holytag?: string
    ) => {
        if (!depositAsset) throw new Error('No deposit asset selected');
        if (!selectedStrategy) throw new Error('No strategy selected');
        if (!userInputMintAmount) throw new Error('No mint amount provided');
        if (!holytag) throw new Error('Holytag is required');
    }, []);

    const borrow = async (
        depositAsset: string,
        _depositAmount: string, // Ignoré puisque le dépôt n'est pas géré ici
        selectedStrategy: string,
        _isBorrowOnly: boolean, // Paramètre conservé pour la signature, mais non utilisé
        holytag?: string,
        userInputMintAmount?: string
    ): Promise<BorrowResult> => {
        setIsLoading(true);
        setError(null);

        try {
            if (!address || !walletClient || !chain || !publicClient) {
                throw new Error('Veuillez connecter votre wallet et vous assurer que tous les clients sont initialisés.');
            }
            validateInputs(depositAsset, selectedStrategy, userInputMintAmount || '', holytag);

            console.log('Paramètres de borrow :', { depositAsset, selectedStrategy, mintAmount: userInputMintAmount, holytag });

            const mappedSynthType = synthMapping[depositAsset.toUpperCase()] || depositAsset.toUpperCase();
            const alchemist = alchemists?.find(al => al.synthType === mappedSynthType);
            if (!alchemist) {
                throw new Error(`Aucun alchimiste trouvé pour l'actif : ${depositAsset} (correspond à ${mappedSynthType})`);
            }

            // Utiliser le montant renseigné par l'utilisateur
            const mintAmount = userInputMintAmount as string;
            if (parseFloat(mintAmount) <= 0) {
                throw new Error('Le montant à mint doit être supérieur à 0.');
            }

            const maxMintLimit = parseUnits('5000', 18);
            const mintAmountBN = parseUnits(mintAmount, 18);
            if (mintAmountBN > (maxMintLimit)) {
                throw new Error(`Le montant à mint dépasse la limite (max 5000 ETH).`);
            }
            console.log('Montant à mint :', mintAmount);

            const { type: synthType } = getSynthToken(depositAsset);
            const mintResult = await mint(mintAmount, address, synthType);
            if (!mintResult) throw new Error(`${synthType} minting failed.`);

            // Validation du holytag
            const isValidTag = await validateHolytag(holytag as string);
            if (!isValidTag) {
                throw new Error('Holytag invalide. Veuillez saisir un holytag valide.');
            }

            // Conversion du montant minté et top-up via Holyheld
            const chainName = chain.name;
            if (!chainName) throw new Error('Nom de chaîne indéfini');
            const network = mapNetworkName(chainName);
            const synthTokenAddress = SYNTH_ASSETS_ADDRESSES[chain.id][synthType];
            if (!synthTokenAddress) throw new Error(`Adresse du token synthétique non trouvée pour ${synthType}`);
            const formattedAmount = formatUnits(mintResult.mintedAmount, 18);

            console.log('Conversion en EUR avec :', { mintedAmount: mintResult.mintedAmount, formattedAmount, network });
            const { transferData } = await convertToEUR(synthTokenAddress, 18, formattedAmount, network);
            if (!transferData) {
                throw new Error(`Échec de la conversion de ${synthType} en EUR`);
            }

            await performTopUp(
                publicClient,
                walletClient,
                address,
                synthTokenAddress,
                network,
                formattedAmount,
                transferData,
                holytag as string,
                true,
                {}
            );

            return {
                status: 'success',
                mintedAmount: mintResult.mintedAmount,
                synthType,
                transactionHash: mintResult.transactionHash
            };

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur inconnue est survenue';
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return { borrow, isLoading, error, getSynthToken };
};
