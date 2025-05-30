import { AprFn } from "@/lib/config/metadataTypes";


// Configuration du proxy depuis les variables d'environnement Vite


export const getYearnApy: AprFn = async ({
  chainId,
  underlyingToken,
}) => {
  try {
    const corsProxy = "https://api.codetabs.com/v1/proxy?quest=";
    const targetUrl = encodeURIComponent(`https://api.yearn.finance/v1/chains/${chainId}/vaults`);
    const url = `${corsProxy}${targetUrl}`;

    console.log('Fetching from:', url);

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const vaults = await response.json();

    const vault = vaults.find((v: any) =>
      v.token?.address?.toLowerCase() === underlyingToken.toLowerCase()
    );

    if (!vault?.apy?.net_apy) {
      return 0;
    }

    let apr = vault.apy.net_apy;
    if (chainId === 10 && vault.apy?.extra?.stakingRewardsAPR) {
      apr += vault.apy.extra.stakingRewardsAPR;
    }

    return Number((apr * 100).toFixed(2));

  } catch (error) {
    console.error('Error fetching Yearn APR:', error);
    return 0;
  }
};