import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { optimism } from 'wagmi/chains';
import { darkTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ThemeProvider } from '@mui/material/styles';
import { Buffer } from 'buffer';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';
import { theme } from './theme';
import { MessageProvider } from './context/MessageContext';

// Polyfill Buffer for mobile
window.Buffer = window.Buffer || Buffer;



const projectId = import.meta.env.VITE_WC_PROJECT_ID;
if (!projectId) {
  throw new Error('Missing VITE_WC_PROJECT_ID environment variable');
}


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
const config = getDefaultConfig({
  appName: 'ALchemix Holyheld Top-Up',
  projectId: import.meta.env.VITE_WC_PROJECT_ID,
  chains: [optimism]
});

// Client React Query
const queryClient = new QueryClient();

// Rendu de l'application
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RainbowKitProvider theme={alchemixTheme} showRecentTransactions={true}>
            <MessageProvider>
              <App />
            </MessageProvider>
          </RainbowKitProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);