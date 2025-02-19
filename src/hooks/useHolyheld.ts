import { useState, useEffect } from 'react';
import HolyheldSDK, { Network, TransferData, TopUpCallbackConfig } from '@holyheld/sdk';

/**
 * Interface for the Holyheld SDK hook return value
 * @interface UseHolyheldSDKReturn
 * @property {Function} validateHolytag - Validates a Holyheld tag
 * @property {Function} convertToEUR - Converts token amount to EUR
 * @property {Function} performTopUp - Executes a top-up transaction
 * @property {Function} getServerSettings - Retrieves server configuration
 * @property {boolean} isInitialized - Whether SDK is initialized
 * @property {boolean} isProcessing - Whether a transaction is processing
 * @property {string|null} error - Error message if any
 * @property {HolyheldSDK} sdk - Instance of the Holyheld SDK
 */
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
  getServerSettings: () => Promise<any>;
  isInitialized: boolean;
  isProcessing: boolean;
  error: string | null;
  sdk: HolyheldSDK;
}

/**
 * Hook for interacting with the Holyheld SDK
 * 
 * This hook provides functionality to interact with Holyheld's services,
 * including tag validation, currency conversion, and top-up operations.
 * It automatically initializes the SDK on mount.
 * 
 * @returns {UseHolyheldSDKReturn} Object containing SDK functions and state
 * 
 * @example
 * ```typescript
 * const {
 *   validateHolytag,
 *   convertToEUR,
 *   performTopUp,
 *   isInitialized,
 *   error
 * } = useHolyheldSDK();
 * 
 * // Validate a Holyheld tag
 * const isValid = await validateHolytag('username');
 * 
 * // Convert token amount to EUR
 * const { EURAmount, transferData } = await convertToEUR(
 *   tokenAddress,
 *   18,
 *   '1.0',
 *   Network.Ethereum
 * );
 * ```
 */
export const useHolyheldSDK = (): UseHolyheldSDKReturn => {
  const [sdk, setSDK] = useState<HolyheldSDK | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isProcessing] = useState(false);
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

  const getServerSettings = async () => {
    if (!sdk) throw new Error('SDK not initialized');
    try {
      const data = await sdk.getServerSettings();
      console.log('Server Settings:', data);
      return data;
    } catch (err) {
      console.error('Error fetching server settings:', err);
      throw err;
    }
  };

  return {
    validateHolytag,
    convertToEUR,
    performTopUp,
    getServerSettings,
    isInitialized,
    isProcessing,
    error,
    sdk: sdk!,
  };
};
