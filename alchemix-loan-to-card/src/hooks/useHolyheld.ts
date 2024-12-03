import { useState, useEffect } from 'react';
import HolyheldSDK, { Network, TransferData, TopUpStep, TopUpCallbackConfig } from '@holyheld/sdk';

interface UseHolyheldSDKReturn {
  validateHolytag: (holytag: string) => Promise<boolean>;
  convertToEUR: (
    tokenAddress: string,
    decimals: number,
    tokenAmount: string,
    network: Network
  ) => Promise<{ EURAmount: string; transferData?: TransferData }>;
  performTopUp: (
    publicClient: any,
    walletClient: any,
    walletAddress: string,
    tokenAddress: string,
    tokenNetwork: Network,
    tokenAmount: string,
    transferData: TransferData | undefined,
    holytag: string,
    supportsSignTypedDataV4: boolean,
    callbacks: TopUpCallbackConfig
  ) => Promise<void>;
  isInitialized: boolean;
  isProcessing: boolean;
  error: string | null;
  sdk: HolyheldSDK;
}

export const useHolyheldSDK = (): UseHolyheldSDKReturn => {
  const [sdk, setSDK] = useState<HolyheldSDK | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initSDK = async () => {
      try {
        const instance = new HolyheldSDK({
          apiKey: import.meta.env.VITE_HOLYHELD_SDK_API_KEY || '',
        });
        await instance.init();
        setSDK(instance);
        setIsInitialized(true);
      } catch (err) {
        console.error('Error initializing Holyheld SDK:', err);
        setError('Failed to initialize Holyheld SDK.');
      }
    };

    initSDK();
  }, []);

  const validateHolytag = async (holytag: string) => {
    if (!sdk) throw new Error('SDK not initialized');
    return (await sdk.offRamp.getTagInfoForTopUp(holytag)).found;
  };

  const convertToEUR = async (
    tokenAddress: string,
    decimals: number,
    tokenAmount: string,
    network: Network
  ) => {
    if (!sdk) throw new Error('SDK not initialized');
    return sdk.offRamp.convertTokenToEUR(tokenAddress, decimals, tokenAmount, network);
  };

  const performTopUp = async (
    publicClient: any,
    walletClient: any,
    walletAddress: string,
    tokenAddress: string,
    network: Network,
    tokenAmount: string,
    transferData: TransferData | undefined,
    holytag: string,
    supportsSignTypedDataV4: boolean,
    callbacks: any
  ) => {
    if (!sdk) throw new Error('SDK not initialized');
    return sdk.offRamp.topup(
      publicClient,
      walletClient,
      walletAddress,
      tokenAddress,
      network,
      tokenAmount,
      transferData,
      holytag,
      supportsSignTypedDataV4,
      callbacks
    );
  };

  return {
    validateHolytag,
    convertToEUR,
    performTopUp,
    isInitialized,
    isProcessing,
    error,
    sdk: sdk!,
  };
};
