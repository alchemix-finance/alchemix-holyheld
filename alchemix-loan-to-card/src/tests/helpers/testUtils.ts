import { Network } from '@holyheld/sdk';

export const mockWalletAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

export const mockTokenData = {
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
  decimals: 18,
};

export const mockTransferData = {
  amount: '1000000000000000000',
  recipient: '0x123...',
  deadline: Math.floor(Date.now() / 1000) + 3600,
};

export const mockHolytagData = {
  tag: 'test-tag',
  isValid: true,
};

export const mockNetworkData = {
  network: 'ethereum' as Network,
  chainId: 1,
};

export const mockTransactionData = {
  hash: '0x123...',
  wait: async () => ({ status: 1 }),
};

export const createMockProvider = () => ({
  getBalance: async () => BigInt('1000000000000000000'),
  getCode: async () => '0x',
});

export const createMockSigner = () => ({
  getAddress: async () => mockWalletAddress,
  signMessage: async () => '0x123...',
});
