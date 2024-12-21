import { arbitrum, mainnet, optimism, fantom } from "viem/chains";
import type { Chain } from "@rainbow-me/rainbowkit";

export const CONTRACTS = {
  42161: {
    ALCHEMIST: {
      ALUSD: '0xb46eE2E4165F629b4aBCE04B7Eb4237f951AC66F',
      ALETH: '0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c',
      USDC: '0xb46eE2E4165F629b4aBCE04B7Eb4237f951AC66F'
    },
    TOKENS: {
      USDC: { token: '0x248a431116c6f6FCD5Fe1097d16d0597E24100f5', decimals: 6 },
      WETH: { token: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', decimals: 18 },
      ALETH: { token: '0x17573150d67d820542EFb24210371545a4868B03', decimals: 18 },
      ETH: { token: 'NATIVE_ETH', decimals: 18 }
    }
  },
  10: {
    ALCHEMIST: {
      ALUSD: '0x10294d57A419C8eb78C648372c5bAA27fD1484af',
      ALETH: '0xe04Bb5B4de60FA2fBa69a93adE13A8B3B569d5B4',
      USDC: '0x10294d57A419C8eb78C648372c5bAA27fD1484af'
    },
    TOKENS: {
      USDC: { token: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', decimals: 6 },
      WETH: { token: '0x4200000000000000000000000000000000000006', decimals: 18 },
      ALETH: { token: '0x3E29D3A9316dAB217754d13b28646B76607c5f04', decimals: 18 },
      ALUSD: { token: '0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A', decimals: 18 },
      DAI: { token: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', decimals: 18 },
      USDT: { token: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', decimals: 6 },

    }
  },
  1: {
    ALCHEMIST: {
      ALUSD: '0x5C6374a2ac4EBC38DeA0Fc1F8716e5Ea1AdD94dd',
      ALETH: '0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c',
      USDC: '0xA0b86991C6218b36c1d19D4a2e9Eb0cE3606eB48'
    },
    TOKENS: {
      USDC: { token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', decimals: 6 },
      WETH: { token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', decimals: 18 },
      ALETH: { token: '0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6', decimals: 18 },
      DAI: { token: '0x6B175474E89094C44Da98b954EedeAC495271d0F', decimals: 18 },
      USDT: { token: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6 },

      ETH: { token: 'NATIVE_ETH', decimals: 18 }
    }
  }
} as const;



type SupportedChains = keyof typeof CONTRACTS;

// Définir les IDs des chaînes supportées
type SupportedChainId = 1 | 10 | 42161;

// Fonction utilitaire pour vérifier si une chaîne est supportée
export const isSupported = (chainId: number): chainId is SupportedChainId => {
  return [1, 10, 42161].includes(chainId);
};

// Configuration des chaînes avec des URLs RPC spécifiques
const mainnetWithRpcs: Chain = {
  ...mainnet,
  rpcUrls: {
    default: {
      http: ['https://mainnet.infura.io/v3/b4476d1d984e4d8cbd5c044bdd6141cd'],
    },
  },
};

const optimismWithRpcs: Chain = {
  ...optimism,
  rpcUrls: {
    default: {
      http: ['https://optimism-rpc.publicnode.com'],
    },
  },
};

const arbitrumWithRpcs: Chain = {
  ...arbitrum,
  rpcUrls: {
    default: {
      http: ['https://arbitrum-one-rpc.publicnode.com'],
    },
  },
};

const fantomWithRpcsAndIcon: Chain = {
  ...fantom,
  rpcUrls: {
    default: {
      http: ['https://fantom-rpc.publicnode.com'],
    },
  },
  iconUrl: "/images/icons/fantom_blue.svg", // Ajout d'une icône personnalisée
};

// Tableau des chaînes disponibles
export const chains = [
  mainnetWithRpcs,
  optimismWithRpcs,
  arbitrumWithRpcs,
  fantomWithRpcsAndIcon,
];

// Objet des chaînes supportées pour un accès rapide par ID
export const supportedChains: Record<SupportedChainId, Chain> = {
  1: mainnetWithRpcs,
  10: optimismWithRpcs,
  42161: arbitrumWithRpcs,
};
