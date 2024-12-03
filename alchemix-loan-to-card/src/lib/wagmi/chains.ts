import { arbitrum, mainnet, optimism, fantom } from "viem/chains";
import type { Chain } from "@rainbow-me/rainbowkit";

type SupportedChainId = 1 | 10 | 42161 | 1337;

export const isSupported = (chainId: number): chainId is SupportedChainId => {
  return chainId === 1 || chainId === 10 || chainId === 42161 || chainId === 1337;
};

// Configuration de la chaîne locale Ganache
const ganacheChain = {
  id: 1337,
  name: 'Ganache',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
  },
  blockExplorers: {
    default: { name: 'Local Explorer', url: '' },
  },
  testnet: true,
} as const satisfies Chain;

const mainnetWithRpcs = {
  ...mainnet,
  rpcUrls: {
    default: {
      http: ['https://ethereum-rpc.publicnode.com'],
    },
  },
} as const satisfies Chain;

const optimismWithRpcs = {
  ...optimism,
  rpcUrls: {
    default: {
      http: ['https://optimism-rpc.publicnode.com'],
    },
  },
} as const satisfies Chain;

const arbitrumWithRpcs = {
  ...arbitrum,
  rpcUrls: {
    default: {
      http: ['https://arbitrum-one-rpc.publicnode.com'],
    },
  },
} as const satisfies Chain;

const fantomWithRpcsAndIcon = {
  ...fantom,
  rpcUrls: {
    default: {
      http: ['https://fantom-rpc.publicnode.com'],
    },
  },
  iconUrl: "/images/icons/fantom_blue.svg",
} as const satisfies Chain;

export const chains = [
  ganacheChain,
  mainnetWithRpcs,
  optimismWithRpcs,
  arbitrumWithRpcs,
  fantomWithRpcsAndIcon,
] as const;

export const supportedChains = {
  [mainnetWithRpcs.id]: mainnetWithRpcs,
  [optimismWithRpcs.id]: optimismWithRpcs,
  [arbitrumWithRpcs.id]: arbitrumWithRpcs,
  [ganacheChain.id]: ganacheChain,
} as const;