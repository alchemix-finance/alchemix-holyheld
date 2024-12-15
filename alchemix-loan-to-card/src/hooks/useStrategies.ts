// hooks/useStrategies.ts
import { useMemo } from 'react';
import { VAULTS } from '../lib/queries/useVaults';

type Strategy = {
  address: string;
  label: string;
  image: string;
  yieldSymbol: string;
};

export const useStrategies = (chainId: number | undefined, depositAsset: string) => {
  const availableStrategies = useMemo(() => {
    if (!chainId || !depositAsset) return [];
    const vaults = VAULTS[chainId];
    if (!vaults) return [];

    if (depositAsset === 'ETH') {
      return Object.entries(vaults)
        .filter(([_, vault]) => 
          vault.underlyingSymbol === 'WETH' && vault.wethGateway
        )
        .map(([address, vault]) => ({
          address,
          label: vault.label,
          image: vault.image,
          yieldSymbol: vault.yieldSymbol,
        }));
    }

    return Object.entries(vaults)
      .filter(([_, vault]) => vault.underlyingSymbol === depositAsset)
      .map(([address, vault]) => ({
        address,
        label: vault.label,
        image: vault.image,
        yieldSymbol: vault.yieldSymbol,
      }));
  }, [chainId, depositAsset]);

  const formattedStrategies = availableStrategies.map((strategy) => ({
    value: strategy.address,
    label: strategy.label,
  }));

  return {
    strategies: availableStrategies,
    formattedStrategies,
  };
};