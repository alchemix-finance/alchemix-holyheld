import { vi } from 'vitest';

const mockAddress = '0x1234567890123456789012345678901234567890';

export const useAccount = vi.fn().mockReturnValue({
    address: mockAddress,
    isConnecting: false,
    isDisconnected: false,
    status: 'connected',
    chain: {
        id: 42161,
        name: 'Arbitrum',
    },
});

export const useWalletClient = vi.fn().mockReturnValue({
    data: {
        account: { address: mockAddress },
        chain: { id: 42161 },
    },
});

export const usePublicClient = vi.fn().mockReturnValue({
    getBalance: vi.fn().mockResolvedValue(BigInt(1000000000000000000)),
});

export const useWriteContract = vi.fn().mockReturnValue({
    writeContractAsync: vi.fn().mockResolvedValue('0x123'),
    isLoading: false,
    isError: false,
    error: null,
});

export const createConfig = vi.fn().mockReturnValue({
    autoConnect: true,
    connectors: [],
    publicClient: {},
});