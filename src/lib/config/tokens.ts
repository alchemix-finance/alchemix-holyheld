import { Token } from '../types';
import { arbitrum, mainnet, optimism } from 'viem/chains';

export const TOKENS: Record<number, Record<string, Token>> = {
  [mainnet.id]: {
    DAI: {
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      symbol: 'DAI',
      name: 'Dai Stablecoin',
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/9956/standard/4e75_200.png'
    },
    USDC: {
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      logoURI: 'https://assets.coingecko.com/coins/images/6319/standard/usdc.png'
    },
    USDT: {
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      symbol: 'USDT',
      name: 'Tether USD',
      decimals: 6,
      logoURI: 'https://assets.coingecko.com/coins/images/325/standard/tether.png'
    },
    WETH: {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      symbol: 'WETH',
      name: 'Wrapped Ether',
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/2518/standard/weth.png'
    }
  },
  [optimism.id]: {
    DAI: {
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      symbol: 'DAI',
      name: 'Dai Stablecoin',
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/9956/standard/4e75_200.png'
    },
    USDC: {
      address: '0x7F5c764cBc14f9669B88837ca1490cca17c31607',
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      logoURI: 'https://assets.coingecko.com/coins/images/6319/standard/usdc.png'
    },
    USDT: {
      address: '0x94b008aA00579d1307B0ef87300a02b9B96e59f3',
      symbol: 'USDT',
      name: 'Tether USD',
      decimals: 6,
      logoURI: 'https://assets.coingecko.com/coins/images/325/standard/tether.png'
    },
    WETH: {
      address: '0x4200000000000000000000000000000000000006',
      symbol: 'WETH',
      name: 'Wrapped Ether',
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/2518/standard/weth.png'
    }
  },
  [arbitrum.id]: {
    DAI: {
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      symbol: 'DAI',
      name: 'Dai Stablecoin',
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/9956/standard/4e75_200.png'
    },
    USDC: {
      address: '0xaf88d065e77c8cC2d43b5E380A5D04Ef2C539CCC',
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      logoURI: 'https://assets.coingecko.com/coins/images/6319/standard/usdc.png'
    },
    USDT: {
      address: '0xFd086bC7CD5C3C8b84411b2f120c3A20B9f8eB7F',
      symbol: 'USDT',
      name: 'Tether USD',
      decimals: 6,
      logoURI: 'https://assets.coingecko.com/coins/images/325/standard/tether.png'
    },
    WETH: {
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      symbol: 'WETH',
      name: 'Wrapped Ether',
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/2518/standard/weth.png'
    }
  }
};

// Fonction utilitaire pour obtenir un token par son symbole et son chainId
export const getTokenBySymbol = (chainId: number, symbol: string) => {
  return TOKENS[chainId]?.[symbol];
};
