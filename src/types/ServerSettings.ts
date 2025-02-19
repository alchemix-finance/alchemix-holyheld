export type ServerExternalSettings = {
  external: {
    isTopupEnabled: boolean;
    isOnRampEnabled: boolean;
    maxTopUpAmountInEUR: string;
    minTopUpAmountInEUR: string;
    maxOnRampAmountInEUR: string;
    minOnRampAmountInEUR: string;
  };
  common: {
    topUpFeePercent: string;
  };
};
