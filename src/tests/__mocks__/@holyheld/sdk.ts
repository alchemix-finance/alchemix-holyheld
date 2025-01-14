import { vi } from 'vitest';

export const Network = {
    Arbitrum: 'arbitrum',
    ethereum: 'ethereum',
} as const;

const mockSDKInstance = {
    offRamp: {
        getTagInfoForTopUp: vi.fn().mockResolvedValue({ found: true }),
        convertTokenToEUR: vi.fn().mockResolvedValue({ EURAmount: '100.00' }),
    }
};

// Mock de la classe HolyheldSDK
export class HolyheldSDK {
    static instance = mockSDKInstance;

    static initialize() {
        return mockSDKInstance;
    }
}

// Export par défaut nécessaire
export default {
    Network,
    HolyheldSDK,
};