// hooks/useTokenBalance.ts
import { useState, useEffect } from 'react';
import { formatUnits } from 'ethers';
import { usePublicClient } from 'wagmi';
import { erc20Abi } from 'viem';
import { CONTRACTS } from '../lib/wagmi/chains';
import { VAULTS } from '../lib/queries/useVaults';

type SupportedChainId = keyof typeof CONTRACTS;

export const useTokenBalance = (
  address: `0x${string}` | undefined,
  chainId: number | undefined,
  depositAsset: string
) => {
  const [Tbalance, setBalance] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const publicClient = usePublicClient();

  useEffect(() => {
    const getBalance = async () => {
      if (!address || !publicClient || !chainId || !depositAsset) return;

      if (!(chainId in CONTRACTS)) {
        console.error(`Unsupported chain ID: ${chainId}`);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        let bal;
        if (depositAsset === 'ETH') {
          bal = await publicClient.getBalance({ address });
          setBalance(Number(formatUnits(bal, 18)));
        } else {
          const vaults = VAULTS[chainId as SupportedChainId];
          if (!vaults) return;

          const vault = Object.values(vaults).find(v => v.underlyingSymbol === depositAsset);
          if (!vault) return;

          const tokenKey = depositAsset.toUpperCase() as keyof typeof CONTRACTS[SupportedChainId]["TOKENS"];
          const tokenInfo = CONTRACTS[chainId as SupportedChainId]?.TOKENS[tokenKey];
          if (!tokenInfo?.token) return;

          bal = await publicClient.readContract({
            address: tokenInfo.token,
            abi: erc20Abi,
            functionName: 'balanceOf',
            args: [address],
          });
          setBalance(Number(formatUnits(bal, tokenInfo.decimals)));
        }
      } catch (err) {
        console.error('Error fetching balance:', err);
        setError(err instanceof Error ? err.message : 'Error fetching balance');
        setBalance(0);
      } finally {
        setIsLoading(false);
      }
    };

    getBalance();
  }, [address, publicClient, depositAsset, chainId]);

  return { Tbalance, isLoading, error };
};