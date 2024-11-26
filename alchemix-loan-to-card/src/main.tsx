import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, polygon } from 'wagmi/chains';
import {
  RainbowKitProvider,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';

// Create Wagmi Config with RainbowKit
const config = getDefaultConfig({
  appName: 'Alchemix loan to card',
  projectId: '22c21855cd736c9593d1ef75539c863f',
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
});

// Create React Query Client
const queryClient = new QueryClient();

// Render App
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);