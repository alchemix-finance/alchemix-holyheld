import { useState, useEffect, useMemo } from 'react';
import { formatUnits } from 'ethers';
import { erc20Abi, createPublicClient, http } from 'viem';
import { supportedChains, CONTRACTS } from '../lib/wagmi/chains';

/**
 * Cache to store token balances to reduce RPC calls
 * Key format: `${chainId}-${depositAsset}-${address}`
 */
const balanceCache = new Map<string, number>();

/**
 * Hook for fetching token balances with caching support
 * 
 * This hook retrieves the balance of a specified token for a given address
 * on a specific blockchain. It includes caching to minimize RPC calls and
 * handles both ETH and ERC20 token balances.
 * 
 * @param {`0x${string}` | undefined} address - The address to check balance for
 * @param {number | undefined} chainId - The blockchain network ID
 * @param {string} depositAsset - The token symbol (e.g., 'ETH', 'USDC')
 * 
 * @returns {Object} Balance information and loading state
 * @property {number} Tbalance - The token balance
 * @property {boolean} isLoading - Whether the balance is being fetched
 * @property {string|null} error - Error message if the fetch failed
 * 
 * @example
 * ```typescript
 * const { Tbalance, isLoading, error } = useTokenBalance(
 *   "0x123...",
 *   1,
 *   "ETH"
 * );
 * 
 * if (isLoading) {
 *   console.log("Loading balance...");
 * } else if (error) {
 *   console.error("Error:", error);
 * } else {
 *   console.log(`Balance: ${Tbalance}`);
 * }
 * ```
 */
export const useTokenBalance = (
  address: `0x${string}` | undefined,
  chainId: number | undefined,
  depositAsset: string
) => {
  const [Tbalance, setBalance] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const publicClient = useMemo(
    () =>
      chainId
        ? createPublicClient({
          chain: supportedChains[chainId as keyof typeof supportedChains],
          transport: http(supportedChains[chainId as keyof typeof supportedChains].rpcUrls.default.http[0]),
        })
        : null,
    [chainId]
  );

  useEffect(() => {
    const getBalance = async () => {
      if (!address || !chainId || !depositAsset || !publicClient) return;

      const cacheKey = `${chainId}-${depositAsset}-${address}`;
      if (balanceCache.has(cacheKey)) {
        setBalance(balanceCache.get(cacheKey) as number);
        return;
      }

      const chainConfig = CONTRACTS[chainId as keyof typeof CONTRACTS];
      if (!chainConfig) {
        console.error(`Unsupported chain ID: ${chainId}`);
        setError(`Unsupported chain ID: ${chainId}`);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        let balance;
        let formattedBalance;

        if (depositAsset === 'ETH') {
          balance = await publicClient.getBalance({ address });
          formattedBalance = Number(formatUnits(balance, 18));
        } else {
          const tokenKey = depositAsset.toUpperCase();
          const tokens = chainConfig.TOKENS;

          if (!tokens || !(tokenKey in tokens)) {
            setError(`Token ${depositAsset} is not available on chain ID ${chainId}`);
            return;
          }

          const tokenInfo = tokens[tokenKey as keyof typeof tokens];
          if (!tokenInfo) {
            setError(`Token ${depositAsset} configuration not found`);
            return;
          }

          balance = await publicClient.readContract({
            address: tokenInfo.token,
            abi: erc20Abi,
            functionName: 'balanceOf',
            args: [address],
          });
          formattedBalance = Number(formatUnits(balance, tokenInfo.decimals));
        }

        setBalance(formattedBalance);
        balanceCache.set(cacheKey, formattedBalance);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching balance');
        setBalance(0);
      } finally {
        setIsLoading(false);
      }
    };

    getBalance();
  }, [address, chainId, depositAsset, publicClient]);

  return { Tbalance, isLoading, error };
};
