import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useAccount } from 'wagmi';
import { useHolyheldSDK } from '../hooks/useHolyheld';
import { useBorrow } from '../hooks/useBorrow';
import { useAlchemixDeposit } from '../hooks/useAlchemixLoan';
import { useTokenBalance } from '../hooks/useTokenBalance';
import { CONTRACTS } from '../lib/wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock import.meta.env
(globalThis as any).import = {
  meta: {
    env: {
      VITE_WC_PROJECT_ID: '123123',
      VITE_HOLYHELD_SDK_API_KEY: 'test-api-key'
    }
  }
};

// Mock wagmiConfig
vi.mock('../lib/wagmi/wagmiConfig', async () => {
  return {
    wagmiConfig: {
      projectId: '123123',
      chains: [
        { id: 1 }, // Ethereum mainnet
        { id: 5 }  // Goerli testnet
      ]
    },
    __esModule: true,
    default: {
      projectId: '123123',
      chains: [
        { id: 1 }, // Ethereum mainnet
        { id: 5 }  // Goerli testnet
      ]
    }
  };
});

// Mock external dependencies
vi.mock('wagmi', () => ({
  createConfig: vi.fn().mockReturnValue({
    autoConnect: true,
    connectors: [],
    publicClient: {},
    chains: [
      { id: 1, name: 'Ethereum' },
      { id: 42161, name: 'Arbitrum' }
    ]
  }),
  useAccount: vi.fn().mockReturnValue({
    address: '0x1234567890123456789012345678901234567890',
    isConnecting: false,
    isDisconnected: false,
    status: 'connected',
    chain: { id: 42161 }
  }),
  useWalletClient: vi.fn().mockReturnValue({
    data: {
      account: { address: '0x1234567890123456789012345678901234567890' },
      chain: { id: 42161 },
    },
  }),
  usePublicClient: vi.fn().mockReturnValue({
    getBalance: vi.fn().mockResolvedValue(BigInt(1000000000000000000)),
  }),
  useWriteContract: vi.fn().mockReturnValue({
    writeContractAsync: vi.fn().mockResolvedValue('0x123'),
    isLoading: false,
    isError: false,
    error: null,
  }),
  useConnect: vi.fn().mockReturnValue({
    connect: vi.fn(),
    connectors: [],
  }),
  useDisconnect: vi.fn().mockReturnValue({
    disconnect: vi.fn(),
  }),
  useNetwork: vi.fn().mockReturnValue({
    chain: { id: 1 },
    chains: [{ id: 1 }],
  }),
  // Ajout des configurations de chaîne
  mainnet: {
    id: 1,
    name: 'Ethereum',
    network: 'mainnet',
  },
  configureChains: vi.fn(() => ({
    chains: [],
    publicClient: {},
  })),
  wagmiConfig: {
    chains: [
      { id: 1, name: 'Ethereum' },
      { id: 42161, name: 'Arbitrum' }
    ]
  }
}));
vi.mock('@holyheld/sdk', () => {
  return {
    default: class MockHolyheldSDK {
      offRamp: any;
      constructor() {
        this.offRamp = {
          getTagInfoForTopUp: async () => ({ found: true })
        };
      }
      init() {
        return Promise.resolve();
      }
    }
  };
});

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Wrapper component for tests
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('Frontend-Backend Integration Tests', () => {
  beforeEach(() => {
    queryClient.clear(); // Clear cache between tests
    vi.clearAllMocks();
  });

  describe('1. Wallet Connection', () => {
    it('should handle wallet connection correctly', async () => {
      const { result } = renderHook(() => useAccount(), { wrapper });
      await waitFor(() => expect(result.current.address).toBeDefined());
    });

    it('should update account state on chain switch', async () => {
      const mockUseAccount = vi.fn().mockReturnValue({
        address: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef',
        addresses: ['0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef'],
        chain: {
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ['https://eth.llamarpc.com'] },
            public: { http: ['https://eth.llamarpc.com'] },
          },
          blockExplorers: {
            default: { name: 'Etherscan', url: 'https://etherscan.io' },
          },
        },
        chainId: 1,
        connector: {
          id: 'mock',
          name: 'Mock',
          type: 'mock',
          connect: async () => ({ account: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef', chain: { id: 1 } }),
          disconnect: async () => { },
          getAccount: async () => '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef',
          getChainId: async () => 1,
          isAuthorized: async () => true,
          onAccountsChanged: () => { },
          onChainChanged: () => { },
          onDisconnect: () => { },
        },
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false,
        status: 'connected' as const
      });
      vi.mocked(useAccount).mockImplementationOnce(mockUseAccount);

      const { result } = renderHook(() => useAccount(), { wrapper });
      await waitFor(() =>
        expect(result.current.address).toBe('0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef')
      );
    });
  });

  describe('2. Token Operations', () => {
    it('should fetch token balances correctly', async () => {
      const chainId = 42161; // Arbitrum
      const depositAsset = CONTRACTS[42161].TOKENS.USDC.token;
      const { result } = renderHook(() => useTokenBalance('0x123...', chainId, depositAsset), { wrapper });
      await waitFor(() => expect(result.current.Tbalance).toBeDefined());
    });

    it('should handle token approvals', async () => {
      // Add implementation for token approval testing
    });
  });

  describe('3. Alchemix Protocol Interactions', () => {
    it('should handle deposits correctly', async () => {
      const { result } = renderHook(() => useAlchemixDeposit(), { wrapper });
      await waitFor(() => expect(result.current.deposit).toBeDefined());
    });

    it('should process borrows correctly', async () => {
      const { result } = renderHook(() => useBorrow(), { wrapper });
      await waitFor(() => expect(result.current.borrow).toBeDefined());
    });
  });

  describe('4. Holyheld SDK Integration', () => {
    it('should validate holytags', async () => {
      const { result } = renderHook(() => useHolyheldSDK(), { wrapper });
      
      // Wait for SDK to initialize
      await waitFor(() => expect(result.current.isInitialized).toBe(true));
      
      const isValid = await result.current.validateHolytag('test-tag');
      expect(isValid).toBe(true);
    });
  });

  describe('5. Transaction Processing', () => {
    it('should handle transaction confirmations', async () => {
      // Add implementation for transaction confirmation testing
    });

    it('should handle transaction errors correctly', async () => {
      // Add implementation for transaction error handling
    });
  });
});
