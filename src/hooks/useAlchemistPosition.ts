import { useState, useEffect } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { formatUnits } from 'ethers';
import { useChain } from './useChain';
import { alchemistV2Abi } from '../abi/alchemistV2';

type AlchemistAddresses = {
    [chainId: number]: {
        alETH: `0x${string}`;
        alUSD: `0x${string}`;
    };
};

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

// Type guard to check if a chain ID is supported
const isSupportedChainId = (chainId: number): chainId is keyof typeof ALCHEMIST_ADDRESSES => {
    return chainId in ALCHEMIST_ADDRESSES;
};

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
    collateralization: string;
    subscriptions?: string;
    renewalTask?: string;
    isLoading: boolean;
    error: string | null;
}

type DepositAsset = 'ETH' | 'WETH' | 'USDC' | 'USDT' | 'DAI';

const TOKEN_ADDRESSES: { [key: string]: { [chainId: number]: `0x${string}` } } = {
    'ETH': {
        1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' as `0x${string}`, // WETH
        10: '0x4200000000000000000000000000000000000006' as `0x${string}`, // WETH on Optimism
    },
    'WETH': {
        1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' as `0x${string}`,
        10: '0x4200000000000000000000000000000000000006' as `0x${string}`,
    },
    'USDC': {
        1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' as `0x${string}`,
        10: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607' as `0x${string}`,
    },
    'USDT': {
        1: '0xdAC17F958D2ee523a2206206994597C13D831ec7' as `0x${string}`,
        10: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58' as `0x${string}`,
    },
    'DAI': {
        1: '0x6B175474E89094C44Da98b954EedeAC495271d0F' as `0x${string}`,
        10: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1' as `0x${string}`,
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

            // Format the results
            const assetSymbol = depositAsset as string; const synthSymbol = getSynthSymbol(assetSymbol);

            setPosition({
                collateral: {
                    amount: formatUnits(positionData?.[0] || 0n, 18),
                    asset: assetAddress,
                    symbol: assetSymbol
                },
                debt: {
                    amount: formatUnits(accountData?.[0] || 0n, 18),
                    asset: synthType,
                    symbol: synthSymbol
                },
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

    useEffect(() => {
        fetchPosition();
    }, [account, chain.id, publicClient, depositAsset]);

    return position;
};