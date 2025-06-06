import { arbitrum, mainnet, optimism, fantom } from "viem/chains";
import type { AlchemistsMetadata } from "../config/metadataTypes";
import { SYNTH_ASSETS } from "../config/synths";
import { zeroAddress } from "viem";

export const ALCHEMISTS_METADATA = {
  [mainnet.id]: {
    [SYNTH_ASSETS.ALUSD]: "0x5C6374a2ac4EBC38DeA0Fc1F8716e5Ea1AdD94dd" as `0x${string}`,
    [SYNTH_ASSETS.ALETH]: "0x062Bf725dC4cDF947aa79Ca2aaCCD4F385b13b5c" as `0x${string}`,
  },
  [fantom.id]: {
    [SYNTH_ASSETS.ALUSD]: "0x76b2E3c5a183970AAAD2A48cF6Ae79E3e16D3A0E" as `0x${string}`,
    [SYNTH_ASSETS.ALETH]: zeroAddress,
  },
  [optimism.id]: {
    [SYNTH_ASSETS.ALUSD]: "0x10294d57A419C8eb78C648372c5bAA27fD1484af" as `0x${string}`,
    [SYNTH_ASSETS.ALETH]: "0xe04Bb5B4de60FA2fBa69a93adE13A8B3B569d5B4" as `0x${string}`,
  },
  [arbitrum.id]: {
    [SYNTH_ASSETS.ALUSD]: "0xb46eE2E4165F629b4aBCE04B7Eb4237f951AC66F" as `0x${string}`,
    [SYNTH_ASSETS.ALETH]: "0x654e16a0b161b150F5d1C8a5ba6E7A7B7760703A" as `0x${string}`,
  },
} as const satisfies AlchemistsMetadata;

export { SYNTH_ASSETS };
