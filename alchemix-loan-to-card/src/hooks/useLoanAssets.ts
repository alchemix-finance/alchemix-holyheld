import { useState, useEffect } from 'react';
import { type WalletClient } from 'viem';
import { useAlchemists } from '../lib/queries/useAlchemists';
import {
  SYNTH_ASSETS,
  SYNTH_ASSETS_METADATA,
  type SynthAsset
} from '@/lib/config/synths';

interface LoanAssetInfo {
  symbol: any;
  label: string;
  icon: string;
  address: string;
  maxBorrowable: bigint;
  minimumCollateralization: bigint;
}

export const useLoanAssets = (
  depositAsset: string,
  depositAmount: string,
  walletClient: WalletClient | null,
  address: string,
) => {
  const [loanAssets, setLoanAssets] = useState<LoanAssetInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Utiliser le hook existant
  const { data: alchemists, isLoading: isLoadingAlchemists } = useAlchemists();

  useEffect(() => {
    const calculateLoanAssets = async () => {
      if (!depositAsset || !walletClient || isLoadingAlchemists || !alchemists) {
        setLoanAssets([]);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Trouver l'alchemist correspondant au type de dépôt
        const alchemist = alchemists.find(al =>
          depositAsset.toLowerCase().includes('eth')
            ? al.synthType === SYNTH_ASSETS.ALETH
            : al.synthType === SYNTH_ASSETS.ALUSD
        );

        if (!alchemist) {
          throw new Error('No matching alchemist found for deposit asset');
        }

        // Calcul du maximum empruntable
        const depositValue = depositAmount ? BigInt(depositAmount) : 0n;
        const maxBorrowable = depositValue / alchemist.minimumCollateralization - alchemist.position.debt;

        const assets: LoanAssetInfo[] = [{
          symbol: alchemist.synthType,
          label: SYNTH_ASSETS_METADATA[alchemist.synthType].label,
          icon: SYNTH_ASSETS_METADATA[alchemist.synthType].icon,
          address: alchemist.debtToken,
          maxBorrowable,
          minimumCollateralization: alchemist.minimumCollateralization
        }];

        setLoanAssets(assets);
      } catch (err) {
        console.error('Error calculating loan assets:', err);
        setError('Failed to calculate available loan assets');
        setLoanAssets([]);
      } finally {
        setIsLoading(false);
      }
    };

    calculateLoanAssets();
  }, [depositAsset, depositAmount, walletClient, address, alchemists, isLoadingAlchemists]);

  return {
    loanAssets,
    isLoading: isLoading || isLoadingAlchemists,
    error,
    defaultLoanAsset: loanAssets[0]?.symbol || "",
    getLoanAsset: (symbol: SynthAsset) =>
      loanAssets.find(asset => asset.symbol === symbol),
    getLoanAssetAddress: (symbol: SynthAsset) =>
      loanAssets.find(asset => asset.symbol === symbol)?.address || "",
    getMaxBorrowable: (symbol: SynthAsset) =>
      loanAssets.find(asset => asset.symbol === symbol)?.maxBorrowable || 0n
  };
};