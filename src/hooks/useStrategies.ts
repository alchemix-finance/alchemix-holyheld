// hooks/useStrategies.ts
import { useMemo } from 'react';
import { VAULTS } from '../lib/queries/useVaults';

/**
 * Interface for a yield strategy in the Alchemix protocol
 * @interface Strategy
 * @property {string} address - Contract address of the strategy
 * @property {string} label - Human-readable name of the strategy
 * @property {string} image - URL of the strategy's icon
 * @property {string} yieldSymbol - Symbol of the yield token
 */


/**
 * Hook for fetching available yield strategies for a given chain and deposit asset
 * 
 * This hook filters and formats the available yield strategies based on the
 * chain ID and deposit asset. For ETH deposits, it specifically looks for
 * WETH vaults with ETH gateways.
 * 
 * @param {number | undefined} chainId - ID of the blockchain network
 * @param {string} depositAsset - Asset being deposited (e.g., 'ETH', 'USDC')
 * @returns {Object} Available strategies and their formatted versions
 * @property {Strategy[]} strategies - Full strategy objects with all details
 * @property {Array<{value: string, label: string}>} formattedStrategies - Simplified strategy objects for UI dropdowns
 * 
 * @example
 * ```typescript
 * const { strategies, formattedStrategies } = useStrategies(1, 'ETH');
 * 
 * // Use formattedStrategies for select inputs
 * <Select options={formattedStrategies} />
 * 
 * // Use strategies for detailed information
 * strategies.map(s => console.log(s.yieldSymbol));
 * ```
 */
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