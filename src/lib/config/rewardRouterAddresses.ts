import { arbitrum, mainnet, optimism } from "viem/chains";

export const GANACHE_CHAIN_ID = 1337;

export const REWARD_ROUTER_ADDRESSES = {
  [optimism.id]: "0x343910697C03477E5Cc0D386FfA5133d1A827Ad7",
  [arbitrum.id]: "0xaBad1aDaB8A51a00665A3B76DA0E32b2D2F1a6db",
  [mainnet.id]: "0x665f58d975963cdE0C843800DF6178FACBfdADE1",
  [GANACHE_CHAIN_ID]: "0x665f58d975963cdE0C843800DF6178FACBfdADE1",
} as const;

export const REWARD_TOKENS = {
  [optimism.id]: {
    rewardTokenAddress: "0x4200000000000000000000000000000000000042",
    rewardTokenSymbol: "OP",
  },
  [arbitrum.id]: {
    rewardTokenAddress: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    rewardTokenSymbol: "ARB",
  },
  [GANACHE_CHAIN_ID]: {
    rewardTokenAddress: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    rewardTokenSymbol: "ARB",
  },
} as const;

export const BONUS_REWARDS_END_TIMESTAMPS = {
  // December 13th
  [optimism.id]: 1734048000,
  // September 28th
  [arbitrum.id]: 1727488278,
  [GANACHE_CHAIN_ID]: 1727488278,
};
