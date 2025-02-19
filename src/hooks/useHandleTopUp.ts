import { useState } from 'react';
import { useHolyheldSDK } from './useHolyheld';
import { useAlchemixDeposit } from './useAlchemixLoan';
import { useChain } from './useChain';
import { useAccount } from 'wagmi';
import { isSupported } from '../lib/wagmi/chains';
import type { Network, TopUpCallbackConfig } from '@holyheld/sdk';

/**
 * Interface for the useHandleTopUp hook return value
 * @interface UseHandleTopUpReturn
 * @property {Function} handleTopUp - Function to process a top-up transaction
 * @property {boolean} isLoading - Whether a transaction is being processed
 * @property {string|null} error - Error message if the transaction fails
 */
interface UseHandleTopUpReturn {
  handleTopUp: (
    holytag: string,
    depositAmount: string,
    depositAsset: string
  ) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook for handling top-up operations in the Alchemix protocol
 * 
 * This hook combines functionality from Holyheld SDK and Alchemix deposit
 * to process top-up transactions. It handles validation, EUR conversion,
 * and execution of the top-up operation.
 * 
 * The process includes:
 * 1. Validating the chain and wallet connection
 * 2. Checking server settings and Holytag validity
 * 3. Converting token amounts to EUR
 * 4. Executing the deposit transaction
 * 5. Performing the top-up operation
 * 
 * @returns {UseHandleTopUpReturn} Object containing top-up function and state
 * 
 * @example
 * ```typescript
 * const { handleTopUp, isLoading, error } = useHandleTopUp();
 * 
 * // Process a top-up
 * try {
 *   await handleTopUp(
 *     'username',           // Holyheld tag
 *     '1.0',               // Amount to deposit
 *     '0x1234...5678'      // Token address
 *   );
 * } catch (err) {
 *   console.error('Top-up failed:', err);
 * }
 * ```
 */
export const useHandleTopUp = (): UseHandleTopUpReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { validateHolytag, convertToEUR, performTopUp, getServerSettings } = useHolyheldSDK();
  const { deposit } = useAlchemixDeposit();
  const currentChain = useChain();
  const { address: walletAddress } = useAccount();

  const handleTopUp = async (holytag: string, depositAmount: string, depositAsset: string) => {
    if (!currentChain || !isSupported(currentChain.id)) {
      setError('Unsupported chain. Please switch to a supported network.');
      return;
    }

    if (!walletAddress) {
      setError('No wallet connected. Please connect your wallet.');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Validate deposit asset address format
      if (!/^0x[a-fA-F0-9]{40}$/.test(depositAsset)) {
        throw new Error('Invalid deposit asset address format.');
      }

      // Step 1: Check server settings
      const serverSettings = await getServerSettings();
      if (!serverSettings.external.isTopupEnabled) {
        throw new Error('Top-up is currently disabled. Please try again later.');
      }

      // Step 2: Validate Holytag
      const isValidTag = await validateHolytag(holytag);
      if (!isValidTag) {
        throw new Error('Invalid Holytag.');
      }

      const percentage = 0.90; // 5% tolerance for loss
      const minimumAmountOut = BigInt(depositAmount) * BigInt(Math.floor(percentage * 100)) / BigInt(100);

      // Step 3: Execute deposit transaction via Alchemix
      const depositResult = await deposit(
        depositAsset as `0x${string}`,
        depositAmount,
        walletAddress as `0x${string}`,
        minimumAmountOut.toString()
      );
      if (!depositResult) {
        throw new Error('Deposit transaction failed.');
      }

      // Step 4: Convert borrowed funds to EUR
      const { EURAmount, transferData } = await convertToEUR(
        "0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A",
        18,
        depositAmount,
        currentChain.name.toLowerCase() as Network
      );

      // Check conversion limits (min/max)
      if (
        parseFloat(EURAmount) < parseFloat(serverSettings.external.minTopUpAmountInEUR) ||
        parseFloat(EURAmount) > parseFloat(serverSettings.external.maxTopUpAmountInEUR)
      ) {
        throw new Error(
          `Amount must be between €${serverSettings.external.minTopUpAmountInEUR} and €${serverSettings.external.maxTopUpAmountInEUR}.`
        );
      }

      // Step 5: Perform top-up operation
      const callbacks: TopUpCallbackConfig = {
        onHashGenerate: (hash) => console.log('Transaction Hash:', hash),
        onStepChange: (step) => console.log('Current Step:', step),
      };

      await performTopUp(
        {}, 
        null, 
        walletAddress as `0x${string}`,
        depositAsset as `0x${string}`,
        currentChain.name.toLowerCase() as Network,
        depositAmount,
        transferData,
        holytag,
        true,
        callbacks
      );

      alert('Top-up successful!');
    } catch (err: any) {
      console.error('Error during top-up:', err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleTopUp, isLoading, error };
};
