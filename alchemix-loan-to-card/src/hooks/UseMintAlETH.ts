import { useState } from 'react';
import { useWriteContract, useAccount, usePublicClient } from 'wagmi';
import { parseUnits } from 'viem';
import { alchemistV2Abi } from '../abi/alchemistV2';

const ALCHEMIST_CONTRACTS = {
  ALETH: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`,
  ALUSD: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`
};

interface UseMintAlReturn {
  mint: (
    shares: string,
    recipient: `0x${string}`,
    synthType: 'alETH' | 'alUSD'
  ) => Promise<{
    transactionHash: `0x${string}`;
    mintedAmount: string;
    type: 'alETH' | 'alUSD';
  } | null>;
  isLoading: boolean;
  error: string | null;
}

export const useMintAl = (): UseMintAlReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { address: userAddress } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract();

  const mint = async (
    shares: string,
    recipient: `0x${string}`,
    synthType: 'alETH' | 'alUSD'
  ): Promise<{ transactionHash: `0x${string}`; mintedAmount: string; type: 'alETH' | 'alUSD' } | null> => {
    try {
      if (!publicClient || !userAddress) {
        throw new Error('Client not initialized');
      }

      setIsLoading(true);
      
      const alchemistAddress = synthType === 'alETH' 
        ? ALCHEMIST_CONTRACTS.ALETH 
        : ALCHEMIST_CONTRACTS.ALUSD;

      // Formatage du montant avec 18 décimales
      let sharesToMint: bigint;
      try {
        sharesToMint = parseUnits(shares, 18);
        
        console.log('Amount details:', {
          input: shares,
          formatted: sharesToMint.toString()
        });
      } catch (error) {
        console.error('Error formatting amount:', error);
        throw new Error('Invalid amount format');
      }

      console.log('Mint parameters:', {
        amount: sharesToMint.toString(),
        recipient,
        alchemistAddress,
        synthType
      });

      const hash = await writeContractAsync({
        address: alchemistAddress,
        abi: alchemistV2Abi,
        functionName: 'mint',
        args: [sharesToMint, recipient],
        gas: 550000n,
      });

      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      
      if (receipt.status === 'reverted') {
        throw new Error('Transaction reverted');
      }

      return {
        transactionHash: hash,
        mintedAmount: sharesToMint.toString(),
        type: synthType
      };

    } catch (err: any) {
      console.error(`Error minting ${synthType}:`, err);
      setError(err.message || `Failed to mint ${synthType}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mint,
    isLoading,
    error
  };
};