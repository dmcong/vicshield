import { ethers } from 'hardhat'
import { VicContractFactory } from '../typechain-types'
import * as web3 from 'web3'
import * as ethUtil from 'ethereumjs-util'

describe('VicContract', function () {
  let vicContractFactory: VicContractFactory

  async function getRequestOptions() {
    const [signer] = await ethers.getSigners()
    return {
      gasLimit: 4000000,
      signer,
      nonce: await signer.getNonce(),
    }
  }

  it('Deploy contract AMM', async function () {
    const contractFactory = await ethers.deployContract(
      'VicContractFactory',
      [],
      await getRequestOptions(),
    )
    await contractFactory.waitForDeployment()
    vicContractFactory = await ethers.getContractAt(
      'VicContractFactory',
      contractFactory.target,
    )
    console.log('contractFactory address', contractFactory.target)
  })

  it('create vic contract', async function () {
    const contractFactory = await ethers.getContractAt(
      'VicContractFactory',
      vicContractFactory.target,
    )
    const [signer] = await ethers.getSigners()
    const expirationDate = Date.now().valueOf()

    const message = web3.utils.soliditySha3('contractData')

    const tx = await contractFactory.createContract(
      ethUtil.toBuffer(message),
      [signer.address],
      expirationDate,
      1,
      signer.address,
      await getRequestOptions(),
    )
    await tx.wait()
  })

  it('get contracts', async function () {
    const contractFactory = await ethers.getContractAt(
      'VicContractFactory',
      vicContractFactory.target,
    )
    const data = await contractFactory.contracts(0, await getRequestOptions())
    console.log(data)
  })

  it('sign contracts', async function () {
    const contractFactory = await ethers.getContractAt(
      'VicContractFactory',
      vicContractFactory.target,
    )
    const tx = await contractFactory.signContract(0, await getRequestOptions())
    await tx.wait()
  })

  it('get signed contracts', async function () {
    const contractFactory = await ethers.getContractAt(
      'VicContractFactory',
      vicContractFactory.target,
    )
    const data = await contractFactory.contracts(0, await getRequestOptions())
    console.log(data)
  })
})
