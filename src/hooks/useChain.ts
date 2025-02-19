import { useAccount } from "wagmi";
import { mainnet } from "viem/chains";
import { useMemo } from "react";
import { wagmiConfig } from "../lib/wagmi/wagmiConfig";
import { tenderlyForkChain } from "../lib/wagmi/tenderly";

/**
 * Default chain to use when no chain is connected or when connected to an unsupported chain
 */
const defaultChain = tenderlyForkChain ?? mainnet;

/**
 * Hook to get the current blockchain network
 * 
 * This hook provides information about the currently connected blockchain network.
 * If the user is connected to an unsupported chain, it returns the default chain
 * (mainnet or tenderly fork if configured).
 * 
 * @returns {Chain} The currently connected chain or the default chain
 * 
 * @example
 * ```typescript
 * const chain = useChain();
 * console.log(`Connected to chain ID: ${chain.id}`);
 * console.log(`Network name: ${chain.name}`);
 * ```
 */
export const useChain = () => {
  const { chain } = useAccount(); // Retrieve the connected chain
  const isUnsupported = useChainUnsupported();

  return useMemo(() => {
    // Return default chain if no chain is connected or if the chain is unsupported
    return chain && !isUnsupported ? chain : defaultChain;
  }, [chain, isUnsupported]);
};

/**
 * Hook to check if the current blockchain network is supported
 * 
 * This hook determines whether the currently connected blockchain network
 * is supported by the application. It checks against the list of chains
 * configured in the wagmi config.
 * 
 * @returns {boolean} True if the current chain is not in the supported chains list
 * 
 * @example
 * ```typescript
 * const isUnsupported = useChainUnsupported();
 * if (isUnsupported) {
 *   console.log('Please switch to a supported network');
 * }
 * ```
 */
export const useChainUnsupported = () => {
  const { chain } = useAccount(); // Retrieve the connected chain

  return useMemo(() => {
    // Check if the connected chain is in the supported chains list
    return !wagmiConfig.chains.some((c: { id: number }) => c.id === chain?.id);
  }, [chain]);
};
