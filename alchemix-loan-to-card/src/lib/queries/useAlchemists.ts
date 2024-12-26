import { useQuery } from "@tanstack/react-query";
import { useChain } from "../../hooks/useChain";
import { useAccount, usePublicClient } from "wagmi";
import { Address, zeroAddress } from "viem";
import { ALCHEMISTS_METADATA, SYNTH_ASSETS } from "../../lib/config/alchemists";
import { alchemistV2Abi } from "../../abi/alchemistV2";
import { QueryKeys } from "./queriesSchema";
import { ONE_MINUTE_IN_MS } from "../../lib/constants";

type SupportedChainId = keyof typeof ALCHEMISTS_METADATA;

const isSupportedChain = (chainId: number): chainId is SupportedChainId => {
  return chainId in ALCHEMISTS_METADATA;
};

interface AlchemistData {
  address: Address;
  synthType: string;
  debtToken: Address;
  transmuter: Address;
  position: {
    debt: bigint;
    depositedTokens: Address[];
  };
  totalValue: bigint;
  yieldTokens: Address[];
  underlyingTokens: Address[];
  minimumCollateralization: bigint;
}

export const useAlchemists = () => {
  const chain = useChain();
  const { address = zeroAddress } = useAccount();
  const publicClient = usePublicClient();

  return useQuery<AlchemistData[]>({
    queryKey: [QueryKeys.Alchemists, chain.id, address],
    queryFn: async () => {
      if (!publicClient) {
        throw new Error("Public client is not available");
      }

      if (!isSupportedChain(chain.id)) {
        throw new Error(`Chain ${chain.id} is not supported`);
      }

      const alchemistsMetadata = ALCHEMISTS_METADATA[chain.id];
      const alchemistAddresses = [alchemistsMetadata.alETH, alchemistsMetadata.alUSD].filter(
        (addr) => addr !== zeroAddress
      );

      const calls = alchemistAddresses.flatMap((address) => [
        { abi: alchemistV2Abi, address, functionName: "transmuter" },
        { abi: alchemistV2Abi, address, functionName: "debtToken" },
        { abi: alchemistV2Abi, address, functionName: "minimumCollateralization" },
        { abi: alchemistV2Abi, address, functionName: "accounts", args: [address] },
        { abi: alchemistV2Abi, address, functionName: "totalValue", args: [address] },
        { abi: alchemistV2Abi, address, functionName: "getSupportedYieldTokens" },
        { abi: alchemistV2Abi, address, functionName: "getSupportedUnderlyingTokens" },
      ]);

      // Suppression explicite des types complexes pour le multicall
      const results = await (publicClient as any).multicall({
        allowFailure: false,
        contracts: calls,
      });

      // Validation de la longueur des résultats
      if (results.length !== alchemistAddresses.length * 7) {
        throw new Error("Unexpected multicall results length");
      }

      return alchemistAddresses.map((address, index) => {
        const [
          transmuter,
          debtToken,
          minimumCollateralization,
          [debt, depositedTokens],
          totalValue,
          yieldTokens,
          underlyingTokens,
        ] = results.slice(index * 7, index * 7 + 7);

        return {
          address,
          synthType: address === alchemistsMetadata.alETH ? SYNTH_ASSETS.ALETH : SYNTH_ASSETS.ALUSD,
          debtToken,
          transmuter,
          position: { debt, depositedTokens },
          totalValue,
          yieldTokens,
          underlyingTokens,
          minimumCollateralization,
        };
      });
    },
    staleTime: ONE_MINUTE_IN_MS,
  });
};