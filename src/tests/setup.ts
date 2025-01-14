import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.ethereum
const ethereum = {
  request: vi.fn(),
  on: vi.fn(),
  removeListener: vi.fn(),
};

Object.defineProperty(window, 'ethereum', {
  value: ethereum,
});

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock wagmi hooks
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x1234567890123456789012345678901234567890',
    isConnecting: false,
    isDisconnected: false,
  })),
  useWalletClient: vi.fn(() => ({
    data: {
      account: {
        address: '0x1234567890123456789012345678901234567890',
      },
      chain: {
        id: 42161,
      },
    },
  })),
  usePublicClient: vi.fn(() => ({
    getBalance: vi.fn().mockResolvedValue(BigInt(1000000000000000000)),
  })),
}));

// Mock Holyheld SDK
vi.mock('@holyheld/sdk', () => ({
  Network: {
    Arbitrum: 'arbitrum',
  },
  HolyheldSDK: vi.fn().mockImplementation(() => ({
    offRamp: {
      getTagInfoForTopUp: vi.fn().mockResolvedValue({ found: true }),
      convertTokenToEUR: vi.fn().mockResolvedValue('100.00'),
    },
  })),
}));
