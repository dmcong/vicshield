import { ConnectButton } from '@rainbow-me/rainbowkit'

import './index.less'

function BtnConnectWallet() {
  return (
    <div className="btn-connect-wallet">
      <ConnectButton
        label="Use VicShield"
        accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
      />
    </div>
  )
}

export default BtnConnectWallet
