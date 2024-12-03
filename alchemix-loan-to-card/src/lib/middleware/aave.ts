import { AprFn } from "@/lib/config/metadataTypes";
import { SupportedChainId, isSupported } from "@/lib/wagmi/wagmiConfig";
import { arbitrum, fantom, mainnet, optimism } from "viem/chains";
import { gql, request } from "graphql-request";
import { defineChain } from "viem";

const apiKey = import.meta.env.VITE_SUBGRAPH_API_KEY;
console.log(import.meta.env);


// Définir la chaîne Ganache
export const ganache = defineChain({
  id: 1337, // ID utilisé par Ganache
  name: "Ganache",
  network: "ganache",
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
    public: { http: ["http://127.0.0.1:8545"] },
  },
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
});

// Ajouter Ganache dans le type `SupportedChainId`
type AaveApiParams = Record<number, { url: string; query: ReturnType<typeof gql> }>;

const aaveApiParams: AaveApiParams = {
  [mainnet.id]: {
    url: `https://gateway-arbitrum.network.thegraph.com/api/1e1884bc2dec23cd401ea0a3bad17475/subgraphs/id/8wR23o1zkS4gpLqLNU4kG3JHYVucqGyopL5utGxP2q1N`,
    query: gql`
      {
        reserves {
          name
          underlyingAsset
          liquidityRate
          stableBorrowRate
          variableBorrowRate
          totalATokenSupply
          totalCurrentVariableDebt
        }
      }
    `,
  },
  [optimism.id]: {
    url: `https://gateway-arbitrum.network.thegraph.com/api/1e1884bc2dec23cd401ea0a3bad17475/subgraphs/id/DSfLz8oQBUeU5atALgUFQKMTSYV9mZAVYp4noLSXAfvb`,
    query: gql`
      {
        reserves {
          name
          underlyingAsset
          liquidityRate
          stableBorrowRate
          variableBorrowRate
          totalATokenSupply
          totalCurrentVariableDebt
          aToken {
            rewards {
              emissionsPerSecond
            }
          }
          vToken {
            rewards {
              rewardToken
              emissionsPerSecond
            }
          }
          price {
            priceInEth
          }
          decimals
        }
      }
    `,
  },
  [arbitrum.id]: {
    url: `https://gateway-arbitrum.network.thegraph.com/api/1e1884bc2dec23cd401ea0a3bad17475/subgraphs/id/DLuE98kEb5pQNXAcKFQGQgfSQ57Xdou4jnVbAEqMfy3B`,
    query: gql`
      {
        reserves {
          name
          underlyingAsset
          liquidityRate
          stableBorrowRate
          variableBorrowRate
          totalATokenSupply
          totalCurrentVariableDebt
          aToken {
            rewards {
              emissionsPerSecond
            }
          }
          vToken {
            rewards {
              rewardToken
              emissionsPerSecond
            }
          }
          price {
            priceInEth
          }
          decimals
        }
      }
    `,
  },
  [ganache.id]: {
    url: `http://127.0.0.1:8000/subgraphs/name/aave/mock`,
    query: gql`
      {
        reserves {
          name
          underlyingAsset
          liquidityRate
          stableBorrowRate
          variableBorrowRate
          totalATokenSupply
          totalCurrentVariableDebt
          aToken {
            rewards {
              emissionsPerSecond
            }
          }
          vToken {
            rewards {
              rewardToken
              emissionsPerSecond
            }
          }
          price {
            priceInEth
          }
          decimals
        }
      }
    `,
  },
};

interface AaveReserve {
  name: string;
  underlyingAsset: string;
  liquidityRate: string;
  stableBorrowRate: string;
  variableBorrowRate: string;
  aEmissionPerSecond: string;
  vEmissionPerSecond: string;
  sEmissionPerSecond: string;
  totalATokenSupply: string;
  totalCurrentVariableDebt: string;
  aToken?: {
    rewards: {
      rewardToken: string;
      emissionsPerSecond: string;
    }[];
  };
  decimals?: number;
}

// Vérification des chaînes supportées
const isAaveSupportedChain = (chainId: number): chainId is SupportedChainId => {
  return isSupported(chainId) && chainId !== fantom.id && chainId in aaveApiParams;
};

// Fonction pour obtenir les réserves Aave
export const getAaveReserves = async (chainId: SupportedChainId) => {
  if (!isAaveSupportedChain(chainId)) {
    throw new Error("Chain not supported in Aave API");
  }

  const { url, query } = aaveApiParams[chainId];
  const response = await request<{ reserves: AaveReserve[] }>(url, query);
  return response.reserves;
};

// Traitement du APR
export const processApr = async ({
  underlyingToken,
  aaveReserves,
}: {
  underlyingToken: `0x${string}`;
  aaveReserves: AaveReserve[] | undefined;
}) => {
  if (!aaveReserves) throw new Error("Aave reserves not ready");

  const reserve = aaveReserves.find(
    (r) =>
      r.underlyingAsset.toLowerCase() === underlyingToken.toLowerCase() &&
      r.aEmissionPerSecond !== "0",
  );

  if (!reserve) throw new Error("Reserve not found");

  const ray = 10 ** 27;
  const apr = (parseFloat(reserve.liquidityRate) / ray) * 0.9 * 100;
  return apr;
};

// Fonction principale pour obtenir le APR
export const getAaveApr: AprFn = async ({ chainId, underlyingToken }) => {
  const aaveReserves = await getAaveReserves(chainId);
  return await processApr({ aaveReserves, underlyingToken });
};
