import { useState } from 'react';
import { useWriteContract, useAccount, usePublicClient } from 'wagmi';
import { alchemistV2Abi } from '../abi/alchemistV2';
import { parseEther, parseUnits } from 'viem';
import { useChain } from '../../src/hooks/useChain';
import { VAULTS } from '../lib/queries/useVaults';
import { arbitrum, fantom, mainnet, optimism } from 'viem/chains';
import { wethGatewayAbi } from '../abi/wethGateway';

type SupportedChainId = typeof mainnet.id | typeof optimism.id | typeof arbitrum.id | typeof fantom.id;

const ALCHEMIST_ADDRESSES = {
  [mainnet.id]: {
    alETH: "0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c" as `0x${string}`,
    alUSD: "0x10294d57A419C8eb78C648372c5bAA27fD1484af" as `0x${string}`
  },
  [optimism.id]: {
    alETH: "0x10294d57A419C8eb78C648372c5bAA27fD1484af" as `0x${string}`,
    alUSD: "0x10294d57A419C8eb78C648372c5bAA27fD1484af" as `0x${string}`
  },
  [arbitrum.id]: {
    alETH: "0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c" as `0x${string}`,
    alUSD: "0x10294d57A419C8eb78C648372c5bAA27fD1484af" as `0x${string}`
  },
  [fantom.id]: {
    alETH: "0x0000000000000000000000000000000000000000" as `0x${string}`,
    alUSD: "0x0000000000000000000000000000000000000000" as `0x${string}`
  }
} as const;

export const useAlchemixDeposit = () => {
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
      if (!publicClient || !userAddress || !chain.id) {
        throw new Error('Missing required connection');
      }

      const chainId = chain.id as SupportedChainId;

      // Vérifier si la chaîne est supportée
      if (!ALCHEMIST_ADDRESSES[chainId]) {
        throw new Error(`Chain ${chainId} is not supported`);
      }

      // Récupérer les infos de la vault pour cette chaîne
      const vaultInfo = VAULTS[chainId]?.[selectedStrategy];
      if (!vaultInfo) {
        throw new Error(`No vault found for strategy ${selectedStrategy} on chain ${chainId}`);
      }

      // Vérifier que le depositAsset correspond bien au underlyingSymbol de la vault
      if (vaultInfo.underlyingSymbol !== depositAsset) {
        throw new Error(`Invalid deposit asset. Expected ${vaultInfo.underlyingSymbol}, got ${depositAsset}`);
      }

      // Obtenir l'adresse de l'alchemist approprié
      const alchemistAddress = ALCHEMIST_ADDRESSES[chainId][vaultInfo.synthAssetType === 'alETH' ? 'alETH' : 'alUSD'];
      if (alchemistAddress === "0x0000000000000000000000000000000000000000") {
        throw new Error(`No alchemist contract available for ${vaultInfo.synthAssetType} on chain ${chainId}`);
      }

      // Gérer les différents decimals selon l'asset
      const decimals = depositAsset === 'USDC' || depositAsset === 'USDT' ? 6 : 18;

      const amountInWei = decimals === 18 
        ? parseEther(amount) 
        : parseUnits(amount, decimals);
      const minimumAmountOut = (amountInWei * 80n) / 100n;

      let hash: `0x${string}`;

      // Si c'est ETH/WETH et qu'il y a un gateway, utiliser le gateway
      if ((depositAsset === 'WETH' || depositAsset === 'ETH') && vaultInfo.wethGateway) {
        console.log('Using WETH gateway:', {
          gateway: vaultInfo.wethGateway,
          amount: amountInWei.toString()
        });

        hash = await writeContractAsync({
          address: vaultInfo.wethGateway as `0x${string}`,
          abi: wethGatewayAbi,
          functionName: 'depositUnderlying',
          args: [
            selectedStrategy,
            recipient, 
            minimumAmountOut,
            userAddress,  
            0n           
          ],
          value: amountInWei,
          gas: 550000n,
        });
      } else {
        console.log('Using standard deposit:', {
          alchemist: alchemistAddress,
          strategy: selectedStrategy,
          amount: amountInWei.toString()
        });

        hash = await writeContractAsync({
          address: alchemistAddress,
          abi: alchemistV2Abi,
          functionName: 'depositUnderlying',
          args: [selectedStrategy, amountInWei, recipient, minimumAmountOut],
          gas: 550000n,
        });
      }

      const receipt = await publicClient.waitForTransactionReceipt({ hash });

      if (receipt.status !== 'success') {
        throw new Error('Transaction failed');
      }

      return {
        transactionHash: hash,
        sharesIssued: receipt.logs[0]?.data || '0',
        depositReceipt: receipt,
      };

    } catch (err: any) {
      console.error('Deposit error:', err);
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deposit,
    isLoading,
    error
  };
};