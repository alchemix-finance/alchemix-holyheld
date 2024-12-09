import { useState } from 'react';
import { useWriteContract, useAccount, usePublicClient } from 'wagmi';
import { alchemistV2Abi } from '../abi/alchemistV2';
import { erc20Abi } from 'viem';
import { parseEther, parseUnits } from 'viem';
import { useChain } from '../../src/hooks/useChain';

const CONTRACTS = {
    10: { // Optimism
      ALCHEMIST: {
        ALETH: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`,
        ALUSD: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`,
        USDC: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`
      },
      TOKENS: {
        USDC: {
          token: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607' as `0x${string}`, // Optimism USDC
          vault: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`, // Optimism USDC vault
          decimals: 6
        }
      }
    },
    42161: { // Arbitrum
      ALCHEMIST: {
        ALETH: '0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c' as `0x${string}`,
        ALUSD: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`,
        USDC: '0x10294d57A419C8eb78C648372c5bAA27fD1484af' as `0x${string}`
      },
      TOKENS: {
        USDC: {
          token: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607' as `0x${string}`,
          vault: '0x4186Eb285b1efdf372AC5896a08C346c7E373cC4' as `0x${string}`,
          decimals: 6
        },
        WETH: {
          token: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1' as `0x${string}`,
          vault: '0x5979D7b546E38E414F7E9822514be443A4800529' as `0x${string}`,
          decimals: 18
        },
        ALETH: {
          token: '0x17573150d67d820542EFb24210371545a4868B03' as `0x${string}`,
          vault: '0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c' as `0x${string}`,
          decimals: 18
        }
      }
    }
  } as const;

const MAX_UINT256 = 2n ** 256n - 1n;

interface UseAlchemixDepositReturn {
  deposit: (
    selectedStrategy: `0x${string}`,
    amount: string,
    recipient: `0x${string}`,
    depositAsset: string
  ) => Promise<{
    transactionHash: `0x${string}`;
    sharesIssued: string;
    depositReceipt: any;
  } | null>;
  isLoading: boolean;
  error: string | null;
}

export const useAlchemixDeposit = (): UseAlchemixDepositReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { address: userAddress } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract();
  const chain = useChain();



  const deposit = async (
    selectedStrategy: `0x${string}`,
    amount: string,
    recipient: `0x${string}`,
    depositAsset: string
  ) => {
    setIsLoading(true);
    try {
      if (!publicClient) throw new Error('Public client not initialized');
      if (!userAddress) throw new Error('No wallet connected');
      if (!chain.id) throw new Error('Chain ID not available');

      const amountNum = parseFloat(amount);
      if (isNaN(amountNum) || amountNum <= 0) {
        throw new Error('Amount must be a valid positive number');
      }

      // Get config for this chain and asset
      const assetUpper = depositAsset.toUpperCase();
      const config = CONTRACTS[42161].TOKENS[assetUpper as keyof typeof CONTRACTS[42161]['TOKENS']];
      if (!config) {
        throw new Error(`Unsupported asset: ${depositAsset}`);
      }

      // Set Alchemist contract address based on asset type
      let alchemistAddress: `0x${string}`;
      if (assetUpper === 'USDC') {
        alchemistAddress = CONTRACTS[42161].ALCHEMIST.USDC;
      } else if (assetUpper === 'ALETH') {
        alchemistAddress = CONTRACTS[42161].ALCHEMIST.ALETH;
      } else {
        alchemistAddress = CONTRACTS[42161].ALCHEMIST.ALUSD;
      }

      // Verify if the address is a contract
      const code = await publicClient.getCode({ address: alchemistAddress });
      if (code === '0x') {
        throw new Error('The specified address is not a contract');
      }

      // Convert amount to correct decimals
      const amountInWei = config.decimals === 18 
        ? parseEther(amount) 
        : parseUnits(amount, config.decimals);

      // Vérifier et approuver si nécessaire


      const minimumAmountOut = (amountInWei * 90n) / 100n; // Adjusted slippage tolerance to 90%

      console.log('Depositing with parameters:', {
        alchemist: alchemistAddress,
        vault: config.vault,
        amount: amountInWei.toString(),
        recipient,
        minimumAmountOut: minimumAmountOut.toString()
      });

      const hash = await writeContractAsync({
        address: alchemistAddress,
        abi: alchemistV2Abi,
        functionName: 'depositUnderlying',
        args: [config.vault, amountInWei, recipient, minimumAmountOut],
      });

      const receipt = await publicClient.waitForTransactionReceipt({
        hash
      });

      setIsLoading(false);
      return {
        transactionHash: hash,
        sharesIssued: receipt.logs[0]?.data || '0',
        depositReceipt: receipt,
      };
    } catch (err: any) {
      console.error('Error during deposit:', err);
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      setIsLoading(false);
      throw new Error(`Alchemix deposit failed: ${errorMessage}`);
    }
  };

  return {
    deposit,
    isLoading,
    error
  };
};
