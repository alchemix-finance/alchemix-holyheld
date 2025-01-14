import { useState } from 'react';
import { Network, TransferData } from '@holyheld/sdk';
import { useHolyheldSDK } from './useHolyheld';

interface UseConvertTokenToEURReturn {
  convertTokenToEUR: (
    tokenAddress: string,
    decimals: number,
    amount: string,
    network: Network
  ) => Promise<{ EURAmount: string; transferData?: TransferData } | null>;
  isLoading: boolean;
  error: string | null;
}

export const useConvertTokenToEUR = (): UseConvertTokenToEURReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { convertToEUR } = useHolyheldSDK(); 
  const convertTokenToEUR = async (
    tokenAddress: string,
    decimals: number,
    amount: string,
    network: Network
  ): Promise<{ EURAmount: string; transferData?: TransferData } | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await convertToEUR(tokenAddress, decimals, amount, network);

      if (!result) {
        throw new Error('Failed to retrieve conversion data');
      }

      return {
        EURAmount: result.EURAmount,
        transferData: result.transferData,
      };
    } catch (err: any) {
      console.error('Error converting token to EUR:', err);
      setError('Failed to convert token to EUR.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    convertTokenToEUR,
    isLoading,
    error,
  };
};
