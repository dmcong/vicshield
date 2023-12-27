import { ConnectButton } from '@rainbow-me/rainbowkit'

import './index.less'

function BtnConnectWallet() {
  return (
    <div className="btn-connect-wallet">
      <ConnectButton
        label="Connect Wallet"
        accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
        chainStatus={{ smallScreen: 'icon', largeScreen: 'full' }}
      />
    </div>
  )
}

export default BtnConnectWallet
