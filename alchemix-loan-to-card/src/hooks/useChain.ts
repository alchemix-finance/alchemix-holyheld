import { useAccount } from "wagmi";
import { mainnet } from "viem/chains";
import { useMemo } from "react";
import { wagmiConfig } from "../lib/wagmi/wagmiConfig";
import { tenderlyForkChain } from "../lib/wagmi/tenderly";
import { Chain } from "wagmi/chains";

const defaultChain = tenderlyForkChain ?? mainnet;

/**
 * Hook to get the current chain.
 * If the connected chain is unsupported, returns the default chain.
 * @returns The currently connected chain or the default chain if unsupported.
 */
export const useChain = (): Chain => {
  const { chain } = useAccount<typeof wagmiConfig>(); // Retrieve the connected chain
  const isUnsupported = useChainUnsupported();

  return useMemo(() => {
    // Return default chain if no chain is connected or if the chain is unsupported
    return chain && !isUnsupported ? chain : defaultChain;
  }, [chain, isUnsupported]);
};

/**
 * Hook to determine if the current chain is unsupported.
 * @returns `true` if the connected chain is unsupported, otherwise `false`.
 */
export const useChainUnsupported = () => {
  const { chain } = useAccount<typeof wagmiConfig>(); // Retrieve the connected chain

  return useMemo(() => {
    // Check if the connected chain is in the supported chains list
    return !wagmiConfig.chains.some((c: { id: number }) => c.id === chain?.id);
  }, [chain]);
};
