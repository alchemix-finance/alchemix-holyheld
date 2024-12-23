import { createConfig, http } from "wagmi";
import { createClient, fallback } from "viem";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  walletConnectWallet,
  rabbyWallet,
  metaMaskWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { tenderlyForkChain } from "./tenderly";
import { chains } from "./chains";




const projectId = import.meta.env.VITE_WC_PROJECT_ID;
if (!projectId) {
  throw new Error("Missing VITE_WC_PROJECT_ID environment variable");
}

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        injectedWallet,
        rabbyWallet,
        metaMaskWallet,
        walletConnectWallet,
        coinbaseWallet,
      ],
    },
  ],
  {
    projectId,
    appName: "Alchemix",
  },
);

export const wagmiConfig = createConfig({
  connectors,
  chains: tenderlyForkChain ? [tenderlyForkChain] : chains,
  client({ chain }) {
    return createClient({
      chain,
      transport: fallback(
        chain.rpcUrls.default.http.map((rpcUrl) => http(rpcUrl)),
      ),
      batch: {
        multicall: true,
      },
    });
  },
});

// Type des chaînes supportées
export type SupportedChainId = (typeof wagmiConfig)["chains"][number]["id"];

// Function de vérification des chaînes supportées
export const isSupported = (chainId: number): chainId is SupportedChainId => {
  return wagmiConfig.chains.some(chain => chain.id === chainId);
};

// Helper pour obtenir la configuration d'une chaîne
export const getSupportedChain = (chainId: number) => {
  if (!isSupported(chainId)) {
    throw new Error(`Chain ${chainId} not supported`);
  }
  return wagmiConfig.chains.find(chain => chain.id === chainId)!;
};