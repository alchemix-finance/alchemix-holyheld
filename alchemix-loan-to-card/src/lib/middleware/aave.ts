import { createPublicClient, http, PublicClient } from "viem";
import { supportedChains } from "@/lib/wagmi/chains";
import { SupportedChainId } from "@/lib/wagmi/wagmiConfig";

// Constants
export const RAY = 10n ** 27n;
const SECONDS_PER_YEAR = 31_536_000;

// Types
export interface ReserveData {
  underlyingAsset: `0x${string}`;
  liquidityRate: bigint;
  variableBorrowRate: bigint;
  lastUpdateTimestamp: number;
}

interface AaveReserveResponse {
  configuration: { data: bigint };
  liquidityIndex: bigint;
  variableBorrowIndex: bigint;
  currentLiquidityRate: bigint;
  currentVariableBorrowRate: bigint;
  currentStableBorrowRate: bigint;
  lastUpdateTimestamp: number;
  aTokenAddress: string;
  stableDebtTokenAddress: string;
  variableDebtTokenAddress: string;
  interestRateStrategyAddress: string;
  id: number;
}

// Lending Pool ABI
const LENDING_POOL_ABI = [
  {
    inputs: [{ name: "asset", type: "address" }],
    name: "getReserveData",
    outputs: [
      {
        components: [{ name: "data", type: "uint256" }],
        name: "configuration",
        type: "tuple",
      },
      { name: "liquidityIndex", type: "uint128" },
      { name: "variableBorrowIndex", type: "uint128" },
      { name: "currentLiquidityRate", type: "uint128" },
      { name: "currentVariableBorrowRate", type: "uint128" },
      { name: "currentStableBorrowRate", type: "uint128" },
      { name: "lastUpdateTimestamp", type: "uint40" },
      { name: "aTokenAddress", type: "address" },
      { name: "stableDebtTokenAddress", type: "address" },
      { name: "variableDebtTokenAddress", type: "address" },
      { name: "interestRateStrategyAddress", type: "address" },
      { name: "id", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Mapping des adresses du Lending Pool
const LENDING_POOL_ADDRESSES: Record<SupportedChainId, `0x${string}`> = {
  1: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
  10: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
} as const;

// Initialisation des clients
const clients: Record<number, PublicClient> = Object.fromEntries(
  Object.entries(supportedChains).map(([chainId, chain]) => [
    Number(chainId),
    createPublicClient({
      chain,
      transport: http(chain.rpcUrls.default.http[0]),
    }),
  ])
);

export const getAaveReserves = async ({
  chainId,
  tokenAddress,
}: {
  chainId: SupportedChainId;
  tokenAddress: `0x${string}`;
}): Promise<ReserveData> => {
  if (!tokenAddress || tokenAddress.length !== 42) {
    throw new Error(`Invalid token address: ${tokenAddress}`);
  }

  const client = clients[chainId];
  if (!client) {
    throw new Error(`Client not found for chain ID ${chainId}`);
  }

  const lendingPoolAddress = LENDING_POOL_ADDRESSES[chainId];
  if (!lendingPoolAddress) {
    throw new Error(`No LendingPool address configured for chain ID ${chainId}`);
  }

  try {
    const result = await client.readContract({
      address: lendingPoolAddress,
      abi: LENDING_POOL_ABI,
      functionName: "getReserveData",
      args: [tokenAddress],
    }) as unknown as unknown[];

    console.log('Raw contract result:', result);

    // Les indices correspondent à la structure de données Aave
    const currentLiquidityRate = result[3]; // index 3 pour liquidityRate
    const currentVariableBorrowRate = result[4]; // index 4 pour variableBorrowRate
    const lastUpdateTimestamp = Number(result[6]); // index 6 pour timestamp

    if (currentLiquidityRate === undefined || currentVariableBorrowRate === undefined) {
      throw new Error("Rate data is undefined from Aave");
    }

    const liquidityRate = BigInt(currentLiquidityRate.toString());
    const variableBorrowRate = BigInt(currentVariableBorrowRate.toString());

    console.log('Converted rates:', {
      liquidityRate: liquidityRate.toString(),
      variableBorrowRate: variableBorrowRate.toString(),
      timestamp: lastUpdateTimestamp
    });

    return {
      underlyingAsset: tokenAddress,
      liquidityRate,
      variableBorrowRate,
      lastUpdateTimestamp
    };
  } catch (error) {
    console.error('Error in getAaveReserves:', error);
    throw error;
  }
};


export const calculateApy = (liquidityRate: bigint): number => {
  // 1. Le taux est en RAY (27 décimales)
  // Convertir en pourcentage annuel simple
  const rayDecimals = 27;

  // 2. Convertir le taux en decimal
  const rateAsDecimal = Number(liquidityRate) / (10 ** rayDecimals);
  // console.log('Rate as decimal:', rateAsDecimal);

  // 3. Convertir en taux annuel (APR)
  const apr = rateAsDecimal * SECONDS_PER_YEAR;
  // console.log('APR (simple):', apr);

  // 4. Convertir en pourcentage et arrondir à 2 décimales
  const roundedApr = Math.round(apr * 10000) / 100;

  return roundedApr;
};

export const getAaveApr = async ({
  chainId,
  underlyingToken
}: {
  chainId: SupportedChainId;
  underlyingToken: `0x${string}`;
}): Promise<number> => {
  const client = clients[chainId];
  const lendingPool = LENDING_POOL_ADDRESSES[chainId];

  if (!client || !lendingPool) {
    throw new Error(`Unsupported chain ID: ${chainId}`);
  }

  try {
    // Obtenir les données de réserve
    const result = await client.readContract({
      address: lendingPool,
      abi: LENDING_POOL_ABI,
      functionName: "getReserveData",
      args: [underlyingToken]
    }) as unknown as unknown[];
    // console.log(result)

    // Utiliser l'index approprié selon le réseau
    const rateIndex = chainId === 10 ? 2 : 3;
    const liquidityRate = BigInt(result[rateIndex].toString());
    // console.log(liquidityRate)

    const divisor = chainId === 10 ? 1000 : 1;

    // Calculer l'APR
    const rateAsDecimal = (Number(liquidityRate) / Number(RAY) * 100);

    return Number(rateAsDecimal.toFixed(2));
  } catch (error) {
    console.error("Error fetching Aave APR:", error);
    throw error;
  }
};


type AprFn = (params: {
  chainId: SupportedChainId;
  underlyingToken: `0x${string}`;
  additionalData?: Record<string, unknown>;
}) => Promise<number>;

