import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiConfig, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { optimism, arbitrum } from 'wagmi/chains';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';
import { theme } from './theme';

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

const projectId = import.meta.env.VITE_WC_PROJECT_ID;
if (!projectId) {
  throw new Error('Missing VITE_WC_PROJECT_ID environment variable');
}

const chains = [optimism] as const;

// Configuration des wallets
/* const { wallets } = getDefaultWallets({
  appName,
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets
], {
  projectId,
  appName,
  initialChain: chains[0],
  metadata: {
    name: appName,
    description: 'Alchemix loan to card application',
    url: window.location.origin,
    icons: []
  }
}); */



const alchemixTheme = {
  ...darkTheme(),

  colors: {
    ...darkTheme().colors,
    accentColor: "#F5C59F",
    accentColorForeground: "#232833",
    connectButtonBackground: "#20242C",
    connectButtonInnerBackground: "#171B24",
    modalBackground: "#282D3A",
    modalBorder: "#20242C",
    modalTextSecondary: "#979BA2",
    profileAction: "#232833",
    profileActionHover: "#20242C",
  },
  radii: {
    ...darkTheme().radii,
    actionButton: "0.25rem",
    menuButton: "0.25rem",
    modal: "0.5rem",
    modalMobile: "0.5rem",
  },
}

alchemixTheme.colors.connectButtonText = '#f5caa4'; // Texte du bouton Connect
alchemixTheme.colors.connectButtonTextError = '##f5caa4';

// Configuration Wagmi
const config = createConfig({
  chains,
  transports: {
    //[mainnet.id]: http(),
    [arbitrum.id]: http(),
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
        <ThemeProvider theme={theme}>
          <RainbowKitProvider theme={alchemixTheme} showRecentTransactions={true}>
            <App />
          </RainbowKitProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiConfig>
  </React.StrictMode>
);