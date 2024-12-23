import { useState } from 'react';
import { formatUnits, parseUnits } from 'ethers';
import { usePublicClient } from 'wagmi';
import { erc20Abi } from 'viem';
import { CONTRACTS } from '../lib/wagmi/chains';

type SupportedChainId = keyof typeof CONTRACTS;

export const useMaxAmount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const publicClient = usePublicClient();

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