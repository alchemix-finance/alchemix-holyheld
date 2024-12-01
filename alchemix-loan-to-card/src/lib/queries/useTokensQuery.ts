import { useQuery } from "@tanstack/react-query";
import { useChain } from "@/hooks/useChain";
import { usePublicClient } from "wagmi";
import { erc20Abi } from "viem";
import { lsService } from "@/lib/localStorage";
import { useAlchemists } from "./useAlchemists";
import { QueryKeys } from "../utils/queryKeys";
import { VAULTS } from "@/lib/config/vaults";
import {
  ALCX_MAINNET_ADDRESS,
  ALCX_ARBITRUM_ADDRESS,
  ALCX_OPTIMISM_ADDRESS,
  G_ALCX_MAINNET_ADDRESS,
  GAS_ADDRESS,
  ONE_DAY_IN_MS,
} from "../utils/constants";

export const useTokensQuery = () => {
  const chain = useChain();
  const publicClient = usePublicClient({ chainId: chain.id });
  const { data: alchemists } = useAlchemists();

  return useQuery({
    queryKey: [QueryKeys.Tokens, chain.id, alchemists],
    queryFn: async () => {
      if (!alchemists) throw new Error("Alchemists not loaded");

      const tokensAddresses = alchemists.flatMap((alchemist) => [
        alchemist.debtToken,
        ...alchemist.underlyingTokens,
        ...alchemist.yieldTokens,
      ]);

      const vaultOverrides = Object.values(VAULTS[chain.id] || {})
        .flatMap((vault) => vault.yieldTokenOverride)
        .filter(Boolean);

      tokensAddresses.push(...vaultOverrides);

      if (chain.id === 1) {
        tokensAddresses.push(ALCX_MAINNET_ADDRESS, G_ALCX_MAINNET_ADDRESS);
      }
      if (chain.id === 42161) {
        tokensAddresses.push(ALCX_ARBITRUM_ADDRESS);
      }
      if (chain.id === 10) {
        tokensAddresses.push(ALCX_OPTIMISM_ADDRESS);
      }

      const calls = tokensAddresses.flatMap((address) => [
        { address, abi: erc20Abi, functionName: "decimals" },
        { address, abi: erc20Abi, functionName: "symbol" },
        { address, abi: erc20Abi, functionName: "name" },
      ]);

      const results = await publicClient.multicall({ allowFailure: false, contracts: calls });

      const tokens = tokensAddresses.map((address, i) => {
        const [decimals, symbol, name] = results.slice(i * 3, i * 3 + 3);
        return { address, decimals, symbol, name };
      });

      tokens.push({
        address: GAS_ADDRESS,
        decimals: 18,
        symbol: chain.nativeCurrency.symbol,
        name: chain.nativeCurrency.name,
      });

      lsService.setItem(chain.id, "tokenListCache", { tokens, timestamp: Date.now() });
      return tokens;
    },
    placeholderData: lsService.getItem(chain.id, "tokenListCache")?.tokens,
    staleTime: ONE_DAY_IN_MS,
    enabled: !!alchemists,
  });
};
