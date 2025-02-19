import { useState } from 'react';
import { useWriteContract, useAccount, usePublicClient } from 'wagmi';
import { parseUnits } from 'viem';
import { alchemistV2Abi } from '../abi/alchemistV2';
import { arbitrum, mainnet, optimism } from 'wagmi/chains';

/**
 * Contract addresses for Alchemist on different chains
 */
const ALCHEMIST_CONTRACTS = {
  [mainnet.id]: {
    alETH: "0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c" as `0x${string}`,
    alUSD: "0x5C6374a2ac4EBC38DeA0Fc1F8716e5Ea1AdD94dd" as `0x${string}`
  },
  [optimism.id]: {
    alETH: "0xe04Bb5B4de60FA2fBa69a93adE13A8B3B569d5B4" as `0x${string}`,
    alUSD: "0x10294d57A419C8eb78C648372c5bAA27fD1484af" as `0x${string}`
  },
  [arbitrum.id]: {
    alETH: "0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c" as `0x${string}`,
    alUSD: "0x10294d57A419C8eb78C648372c5bAA27fD1484af" as `0x${string}`
  },
} as const;

/**
 * Return type for the useMintAl hook
 * @interface UseMintAlReturn
 * @property {Function} mint - Function to mint synthetic assets
 * @property {boolean} isLoading - Loading state of the minting process
 * @property {string|null} error - Error message if minting fails
 */
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

/**
 * Hook for minting Alchemix synthetic assets (alETH or alUSD)
 * 
 * This hook provides functionality to mint synthetic assets against deposited collateral.
 * It handles the interaction with the Alchemist contract across different supported chains.
 * 
 * @returns {UseMintAlReturn} Object containing minting function and state
 * @property {Function} mint - Async function to perform minting
 * @property {boolean} isLoading - Indicates if a minting operation is in progress
 * @property {string|null} error - Error message if the last operation failed
 * 
 * @example
 * ```typescript
 * const { mint, isLoading, error } = useMintAl();
 * 
 * // Mint 1 alETH
 * await mint(
 *   parseUnits("1", 18),
 *   "0x...", // recipient address
 *   "alETH"
 * );
 * ```
 */
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

      const chainId = await publicClient.getChainId();
      console.log('Active Chain ID:', chainId);

      const chainAddresses = ALCHEMIST_CONTRACTS[chainId as keyof typeof ALCHEMIST_CONTRACTS];
      if (!chainAddresses) {
        throw new Error(`Unsupported chain ID: ${chainId}`);
      }

      const alchemistAddress = chainAddresses[synthType];
      if (!alchemistAddress || alchemistAddress === "0x0000000000000000000000000000000000000000") {
        throw new Error(`No contract address found for synth type: ${synthType} on chain ID: ${chainId}`);
      }

      let sharesToMint: bigint;
      try {
        console.log('Input shares amount:', shares);
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
        gas: 950000n,
      });

      console.log(`Transaction sent. Hash: ${hash}`);

      // Attendre la confirmation de la transaction
      const receipt = await publicClient.waitForTransactionReceipt({ hash });

      console.log('Transaction receipt:', receipt);

      // Vérifier si le status est "success"
      if (receipt.status !== 'success') {
        throw new Error('Transaction failed or reverted');
      }

      console.log(`Transaction successful. Minted ${sharesToMint.toString()} of ${synthType}`);

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