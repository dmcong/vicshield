import { PropsWithChildren } from 'react'
import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import {
  trustWallet,
  ledgerWallet,
  coin98Wallet,
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import walletConfig from 'configs/wallet.config'
import { vicMainnet, vicTestnet } from 'configs/viction.config'

import '@rainbow-me/rainbowkit/styles.css'

// Register your own project id here: https://cloud.walletconnect.com/app
const projectId = walletConfig.walletConnectId

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [vicMainnet, vicTestnet],
  [publicProvider()],
)

const connectors = connectorsForWallets([
  {
    groupName: 'Recommends',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      coin98Wallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
  {
    groupName: 'Others',
    wallets: [
      trustWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

/**
 * Provider
 */

export default function WalletProvider({ children }: PropsWithChildren) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
