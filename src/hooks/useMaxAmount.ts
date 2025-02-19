import { useState } from 'react';
import { formatUnits, parseUnits } from 'ethers';
import { usePublicClient } from 'wagmi';
import { erc20Abi } from 'viem';
import { CONTRACTS } from '../lib/wagmi/chains';

/**
 * Type for supported blockchain network IDs
 */
type SupportedChainId = keyof typeof CONTRACTS;

/**
 * Hook for calculating the maximum amount available for deposit or transfer
 * 
 * This hook provides functionality to calculate the maximum amount of tokens
 * that can be used in a transaction. For ETH, it includes a gas buffer to
 * ensure enough ETH remains for transaction fees.
 * 
 * @returns {Object} Functions and state for max amount calculation
 * @property {Function} calculateMaxAmount - Async function to calculate max amount
 * @property {boolean} isLoading - Whether calculation is in progress
 * @property {string|null} error - Error message if calculation failed
 * 
 * @example
 * ```typescript
 * const { calculateMaxAmount, isLoading, error } = useMaxAmount();
 * 
 * // Calculate max ETH amount
 * const maxAmount = await calculateMaxAmount(
 *   "0x123...", // address
 *   1,          // chainId (mainnet)
 *   "ETH"       // asset
 * );
 * 
 * console.log(`Max amount: ${maxAmount} ETH`);
 * ```
 */
export const useMaxAmount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const publicClient = usePublicClient();

  /**
   * Calculate the maximum amount available for a given token
   * @param {`0x${string}` | undefined} address - User's wallet address
   * @param {number | undefined} chainId - Blockchain network ID
   * @param {string | undefined} depositAsset - Token symbol (e.g., 'ETH', 'USDC')
   * @returns {Promise<string>} Maximum amount formatted with 8 decimal places
   */
  const calculateMaxAmount = async (
    address: `0x${string}` | undefined,
    chainId: number | undefined,
    depositAsset: string | undefined
  ): Promise<string> => {
    if (!publicClient || !address || !chainId || !depositAsset) {
      setError('Missing required parameters');
      return '0';
    }

    setIsLoading(true);
    setError(null);

    try {
      if (depositAsset === 'ETH') {
        const bal = await publicClient.getBalance({ address });
        const gasBuffer = parseUnits(chainId === 1 ? '0.01' : '0.05', 18);
        const maxBal = bal > gasBuffer ? bal - gasBuffer : 0n;
        return Number(formatUnits(maxBal, 18)).toFixed(8);
      }

      const tokenKey = depositAsset.toUpperCase() as keyof typeof CONTRACTS[SupportedChainId]["TOKENS"];
      const tokenInfo = CONTRACTS[chainId as SupportedChainId]?.TOKENS[tokenKey];

      if (!tokenInfo?.token) {
        throw new Error('Token not found');
      }

      const bal = await publicClient.readContract({
        address: tokenInfo.token,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [address],
      }) as bigint;

      return Number(formatUnits(bal, tokenInfo.decimals)).toFixed(8);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error calculating max amount';
      setError(errorMessage);
      return '0';
    } finally {
      setIsLoading(false);
    }
  };

  return {
    calculateMaxAmount,
    isLoading,
    error
  };
};