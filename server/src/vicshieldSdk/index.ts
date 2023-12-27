import {
  Interface,
  JsonRpcProvider,
  Transaction,
  getBytes,
  toBeHex,
} from 'ethers'

import { VIC_SHIELD_ABI } from './VicContractFactory'
import * as web3 from 'web3'
import * as ethUtil from 'ethereumjs-util'
import { Chain, VictionMainnet, VictionTestnet } from '@desig/supported-chains'
import { encode } from 'bs58'

const VICTION_RPCS = {
  mainnet: 'https://rpc.tomochain.com',
  testnet: 'https://rpc.testnet.tomochain.com',
}

const CONTRACT_ADDR = '0xe3bc009559CCC80c009a8Ed0E150b8F3ACb8dfb5'

export default class VicShieldSdk {
  readonly rpc: string
  readonly chain: Chain
  constructor(net: 'mainnet' | 'testnet') {
    this.rpc = VICTION_RPCS[net]
    if (net === 'mainnet') this.chain = new VictionMainnet()
    else this.chain = new VictionTestnet()
  }

  get provider() {
    return new JsonRpcProvider(this.rpc)
  }

  async generateCreateContractTx(payload: {
    owner: string
    base64Content: string
    signatories: string[]
    expirationDate: number
    value: string
    recipient: string
  }) {
    const {
      owner,
      base64Content,
      signatories,
      expirationDate,
      value,
      recipient,
    } = payload

    const itf = Interface.from(VIC_SHIELD_ABI)
    const message = web3.utils.soliditySha3(base64Content)

    const data = itf.encodeFunctionData('createContract', [
      ethUtil.toBuffer(message),
      signatories,
      expirationDate || '0',
      value || '0',
      recipient || '0x0000000000000000000000000000000000000000',
    ])

    const params = { to: CONTRACT_ADDR, data }
    const nonce = await this.provider.getTransactionCount(owner)
    const { gasPrice } = await this.provider.getFeeData()
    // const gasLimit = await this.provider.estimateGas({
    //   from: owner,
    //   ...params,
    // })
    // Validate
    if (!gasPrice) throw new Error('Invalid gas price')

    const tx = Transaction.from({
      chainId: this.chain.chainId,
      nonce,
      gasLimit: 4000000,
      gasPrice: toBeHex(gasPrice),
      type: 0,
      ...params,
    })

    return {
      raw: encode(getBytes(tx.unsignedSerialized)),
      msg: encode(getBytes(tx.unsignedHash)),
    }
  }
}
