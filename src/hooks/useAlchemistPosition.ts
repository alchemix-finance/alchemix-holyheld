import { useState, useEffect } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { formatUnits } from 'ethers';
import { useChain } from './useChain';
import { alchemistV2Abi } from '../abi/alchemistV2';

/**
 * Type definition for Alchemist contract addresses by chain
 */
type AlchemistAddresses = {
    [chainId: number]: {
        alETH: `0x${string}`;
        alUSD: `0x${string}`;
    };
};

/**
 * Mapping of chain IDs to Alchemist contract addresses
 */
const ALCHEMIST_ADDRESSES: AlchemistAddresses = {
    1: {
        alETH: '0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c' as `0x${string}`,
        alUSD: '0x5C6374a2ac4EBC38DeA0Fc1F8716e5Ea1AdD94dd' as `0x${string}`
    },
    10: {
        alETH: '0xe04Bb5B4de60FA2fBa69a93adE13A8B3B569d5B4' as `0x${string}`,
        alUSD: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`
    }
} as const;

/**
 * Type guard to check if a chain ID is supported by the Alchemist protocol
 * @param {number} chainId - The chain ID to check
 * @returns {boolean} True if the chain ID is supported
 */
const isSupportedChainId = (chainId: number): chainId is keyof typeof ALCHEMIST_ADDRESSES => {
    return chainId in ALCHEMIST_ADDRESSES;
};

/**
 * Interface representing a user's position in the Alchemist protocol
 * @interface Position
 * @property {Object} collateral - Information about deposited collateral
 * @property {string} collateral.amount - Amount of collateral deposited
 * @property {string} collateral.asset - Address of collateral asset
 * @property {string} collateral.symbol - Symbol of collateral asset
 * @property {Object} debt - Information about borrowed debt
 * @property {string} debt.amount - Amount of debt
 * @property {string} debt.asset - Address of debt asset
 * @property {string} debt.symbol - Symbol of debt asset
 * @property {string} shares - Number of vault shares owned
 * @property {string} lastAccruedWeight - Last accrued weight for yield calculation
 * @property {string} collateralization - Current collateralization ratio
 * @property {string} [subscriptions] - Active subscriptions (optional)
 * @property {string} [renewalTask] - Renewal task identifier (optional)
 * @property {boolean} isLoading - Loading state of position data
 * @property {string|null} error - Error message if fetching failed
 */
interface Position {
    collateral: {
        amount: string;
        asset: string;
        symbol: string;
    };
    debt: {
        amount: string;
        asset: string;
        symbol: string;
    };
    shares: string;
    lastAccruedWeight: string;
    collateralization: string;
    subscriptions?: string;
    renewalTask?: string;
    isLoading: boolean;
    error: string | null;
}

/**
 * Supported deposit assets in the Alchemist protocol
 */
type DepositAsset = 'ETH' | 'WETH' | 'USDC' | 'USDT' | 'DAI';

const TOKEN_ADDRESSES: { [key: string]: { [chainId: number]: `0x${string}` } } = {
    'ETH': {
        1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' as `0x${string}`, // WETH
        10: '0x337B4B933d60F40CB57DD19AE834Af103F049810' as `0x${string}`, // WETH on Optimism
    },
    'WETH': {
        1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' as `0x${string}`,
        10: '0x337B4B933d60F40CB57DD19AE834Af103F049810' as `0x${string}`,
    },
    'USDC': {
        1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' as `0x${string}`,
        10: '0x4186Eb285b1efdf372AC5896a08C346c7E373cC4' as `0x${string}`,
    },
    'USDT': {
        1: '0xdAC17F958D2ee523a2206206994597C13D831ec7' as `0x${string}`,
        10: '0x2680b58945A31602E4B6122C965c2849Eb76Dd3B' as `0x${string}`,
    },
    'DAI': {
        1: '0x6B175474E89094C44Da98b954EedeAC495271d0F' as `0x${string}`,
        10: '0x43A502D7e947c8A2eBBaf7627E104Ddcc253aBc6' as `0x${string}`,
    },
};

const defaultChain = { id: 1 };

const getSynthSymbol = (depositAsset: string): string => {
    const synthMapping: Record<string, string> = {
        USDC: "alUSD",
        DAI: "alUSD",
        WETH: "alETH",
        ETH: "alETH",
        USDT: "alUSD",
    };
    return synthMapping[depositAsset] || 'Unknown';
};

export function useAlchemistPosition(depositAsset: DepositAsset | `0x${string}` | '') {
    const [position, setPosition] = useState<Position>({
        collateral: { amount: '0', asset: '', symbol: '' },
        debt: { amount: '0', asset: '', symbol: '' },
        shares: '0',
        lastAccruedWeight: '0',
        collateralization: '0',
        subscriptions: undefined,
        renewalTask: undefined,
        isLoading: false,
        error: null,
    });

    const chain = useChain();
    const { address: account } = useAccount();
    const publicClient = usePublicClient();

    const fetchPosition = async () => {
        if (!account || !depositAsset || !publicClient) {
            setPosition(prev => ({ ...prev, isLoading: false }));
            return;
        }

        const chainId = chain?.id ?? defaultChain.id;

        if (!isSupportedChainId(chainId)) {
            setPosition(prev => ({
                ...prev,
                isLoading: false,
                error: `Unsupported chain ID: ${chainId}`
            }));
            return;
        }

        try {
            setPosition(prev => ({ ...prev, isLoading: true, error: null }));

            // If depositAsset is a token symbol, get its address
            const assetAddress = TOKEN_ADDRESSES[depositAsset as keyof typeof TOKEN_ADDRESSES]?.[chainId];
            if (!assetAddress) {
                throw new Error(`Invalid asset address for ${depositAsset}`);
            }

            const chainAddresses = ALCHEMIST_ADDRESSES[chainId];
            if (!chainAddresses) {
                throw new Error(`No contracts found for chain ID: ${chainId}`);
            }

            // Determine which Alchemist to use based on deposit asset
            const wethAddress = TOKEN_ADDRESSES['ETH']?.[chainId];
            const synthType = assetAddress.toLowerCase() === wethAddress?.toLowerCase()
                ? 'alETH'
                : 'alUSD';

            const alchemistAddress = chainAddresses[synthType];
            if (!alchemistAddress) {
                throw new Error(`No Alchemist contract found for ${synthType}`);
            }

            // Get positions from the contract
            const [positionData, accountData] = await Promise.all([
                publicClient.readContract({
                    address: alchemistAddress,
                    abi: alchemistV2Abi,
                    functionName: 'positions',
                    args: [account, assetAddress]
                }),
                publicClient.readContract({
                    address: alchemistAddress,
                    abi: alchemistV2Abi,
                    functionName: 'accounts',
                    args: [account]
                })
            ]);

            const [shares, lastAccruedWeight] = positionData;

            // Calculer le montant de collateral à partir des shares
            const collateralAmount = calculateCollateralFromShares(shares.toString());

            const assetSymbol = depositAsset as string; const synthSymbol = getSynthSymbol(assetSymbol);

            setPosition({
                collateral: {
                    amount: collateralAmount,
                    asset: assetAddress,
                    symbol: assetSymbol
                },
                debt: {
                    amount: formatUnits(accountData?.[0] || 0n, 18),
                    asset: synthType,
                    symbol: synthSymbol
                },
                shares: shares.toString(),
                lastAccruedWeight: lastAccruedWeight.toString(),
                collateralization: '0',
                subscriptions: undefined,
                renewalTask: undefined,
                isLoading: false,
                error: null
            });
        } catch (err) {
            console.error('Error fetching Alchemist position:', err);
            setPosition(prev => ({
                ...prev,
                isLoading: false,
                error: err instanceof Error ? err.message : 'Failed to fetch position'
            }));
        }
    };

    const calculateCollateralFromShares = (shares: string): string => {
        return shares;
    };

    useEffect(() => {
        fetchPosition();
    }, [account, chain.id, publicClient, depositAsset]);

    return position;
};