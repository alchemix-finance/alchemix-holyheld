import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiConfig, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, optimism,fantom,arbitrum } from 'wagmi/chains';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';

// Configuration de la chaîne Ganache
/* const ganacheChain: Chain = {
  id: 1337,
  name: 'Ganache',
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
    public: {
      http: ['http://127.0.0.1:8545'],
    }
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  testnet: true
}; */

const projectId = '22c21855cd736c9593d1ef75539c863f';
const appName = 'Alchemix loan to card';
const chains = [mainnet,optimism,fantom,arbitrum] as const;

// Configuration des wallets
const { wallets } = getDefaultWallets({
  appName,
  projectId,
});

const connectors = connectorsForWallets(wallets, {
  projectId,
  appName,
});

// Configuration Wagmi
const config = createConfig({
  connectors,
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [fantom.id]: http(),
    [optimism.id]: http(),
    //[ganacheChain.id]: http(),
  },
});

// Client React Query
const queryClient = new QueryClient();

// Rendu de l'application
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  </React.StrictMode>
);