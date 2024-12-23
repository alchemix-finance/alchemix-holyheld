import { useEffect, useState } from 'react';
import { parseUnits, formatUnits } from 'ethers';
import { useChain } from './useChain';
import { type WalletClient, zeroAddress } from 'viem';

export const useBorrowableLimit = (
  depositAmount: string,
  depositAsset: string,
  address: string,
  walletClient: WalletClient | null
) => {
  const [borrowableLimit, setBorrowableLimit] = useState<bigint>(BigInt(0));
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const chain = useChain();

  useEffect(() => {
    const calculateBorrowableLimit = async () => {
      if (!depositAmount || !walletClient || !address || address === zeroAddress) {
        setBorrowableLimit(BigInt(0));
        return;
      }

      try {
        setIsCalculating(true);
        setError(null);

        const depositBN = parseUnits(depositAmount, 18);
        const collateralRatio = parseUnits('2', 18);
        const borrowable = depositBN * BigInt(1e18) / collateralRatio;
        
        setBorrowableLimit(borrowable);
      } catch (err) {
        console.error('Error calculating borrowable limit:', err);
        setError('Failed to calculate borrowable limit');
        setBorrowableLimit(BigInt(0));
      } finally {
        setIsCalculating(false);
      }
    };

    calculateBorrowableLimit();
  }, [depositAmount, depositAsset, address, walletClient, chain]);

  return {
    borrowableLimit,
    isCalculating,
    error,
    formattedLimit: formatUnits(borrowableLimit, 18),
    chain
  };
};