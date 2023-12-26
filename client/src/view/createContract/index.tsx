import { Button, Col, Row, message } from 'antd'
import ButtonUploadFile from 'view/createContract/buttonUpload'
import { Transaction, hexlify } from 'ethers'

import { useState } from 'react'
import { useContractMutation } from 'providers/contract.provider'
import UserInput from './userInput'
import { useSendTransaction } from 'wagmi'
import { decode } from 'bs58'

const CreateContract = () => {
  const [content, setContent] = useState('')
  const [signers, setSigners] = useState<string[]>([])
  const { onCreateContract, from } = useContractMutation()
  const [loading, setLoading] = useState(false)

  // const { config } = usePrepareSendTransaction({
  //   to: debouncedTo,
  //   value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  // })

  const handleCreateContract = async () => {
    try {
      setLoading(true)
      const { data } = (await onCreateContract({
        content,
        signatories: signers,
      })) as any

      const tx = Transaction.from(hexlify(decode(data.tx.raw)))

      const payload = {
        to: tx.to,
        data: tx.data,
        nonce: tx.nonce,
        gasPrice: tx.gasPrice?.toString(),
        gasLimit: tx.gasLimit?.toString(),
        from: from,
      }

      // @ts-ignore
      const res = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [payload as any],
      })
    } catch (error: any) {
      message.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChangeSigners = (value: string) => {
    setSigners((prev) => [...prev, value])
  }

  return (
    <Row>
      <Col span={24}>
        <ButtonUploadFile onChange={setContent} />
      </Col>

      <Col span={24}>
        <UserInput onOk={handleChangeSigners} />
      </Col>
      {signers.map((signer) => (
        <Col span={24}>{signer}</Col>
      ))}
      <Col span={24}>
        <Button onClick={handleCreateContract} block loading={loading}>
          Create
        </Button>
      </Col>
    </Row>
  )
}

export default CreateContract
