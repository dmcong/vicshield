import type { Chain } from 'wagmi'

export const vicMainnet: Chain = {
  id: 88,
  name: 'Viction',
  network: 'viction',
  nativeCurrency: {
    decimals: 18,
    name: 'Viction',
    symbol: 'VIC',
  },
  rpcUrls: {
    public: { http: ['https://rpc.tomochain.com'] },
    default: { http: ['https://rpc.tomochain.com'] },
  },
  blockExplorers: {
    default: { name: 'Tomoscan', url: 'https://tomoscan.io' },
  },
}

export const vicTestnet: Chain = {
  id: 89,
  name: 'Testnet',
  network: 'viction-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Viction',
    symbol: 'VIC',
  },
  rpcUrls: {
    public: { http: ['https://rpc.testnet.tomochain.com'] },
    default: { http: ['https://rpc.testnet.tomochain.com'] },
  },
  blockExplorers: {
    default: { name: 'Tomoscan', url: 'https://testnet.tomoscan.io' },
  },
  testnet: true,
}
