import {
  Button,
  Col,
  Input,
  Row,
  Typography,
  message,
  Form,
  Space,
  Select,
  DatePicker,
} from 'antd'
import ButtonUploadFile from 'view/createContract/buttonUpload'
import { Transaction, hexlify } from 'ethers'

import { Fragment, useState } from 'react'
import { useContractMutation } from 'providers/contract.provider'
import UserInput from './userInput'
import { useSendTransaction } from 'wagmi'
import { decode } from 'bs58'
import { CreateContractDto } from 'type/contract.type'
import UploadFile from './uploadFile'

import './index.less'
import TextArea from 'antd/lib/input/TextArea'

const CREATE_CONTRACT_INIT_DATA: CreateContractDto = {
  title: '',
  content: '',
  signatories: [],
  value: '',
  recipient: '',
}

const CATEGORIES = [
  {
    value: 'HD 1',
    label: 'HD 1',
  },
  {
    value: 'HD 2',
    label: 'HD 2',
  },
  {
    value: 'HD 3',
    label: 'HD 3',
  },
]

const CreateContract = () => {
  const [form] = Form.useForm<CreateContractDto>()

  const { onCreateContract, from } = useContractMutation()
  const [loading, setLoading] = useState(false)
  const [contractData, setContractData] = useState<CreateContractDto>(
    CREATE_CONTRACT_INIT_DATA,
  )

  const handleChangeCategory = (val: string) => {
    form.setFieldValue('category', val)
  }

  // const { config } = usePrepareSendTransaction({
  //   to: debouncedTo,
  //   value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  // })

  const handleCreateContract = async () => {
    try {
      setLoading(true)
      const { data } = (await onCreateContract(contractData)) as any

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
    setContractData((prev) => ({
      ...prev,
      signatories: [...prev.signatories, value],
    }))
  }

  return (
    <Fragment>
      <Form
        form={form}
        initialValues={CREATE_CONTRACT_INIT_DATA}
        className="create-contract"
      >
        <Col span={24}>
          <Typography.Title>Create contract</Typography.Title>
        </Col>
        <Form.Item>
          <UploadFile
            onChange={(val) =>
              setContractData((prev) => ({ ...prev, content: val }))
            }
          />
        </Form.Item>
        <Form.Item name="title">
          <Input placeholder="Contract name" />
        </Form.Item>

        <Form.Item name="description">
          <TextArea placeholder="Description" rows={5} />
        </Form.Item>

        <Form.Item name="signer">
          <div style={{ display: 'flex', gap: 10 }}>
            <Input placeholder="Signer address" style={{ flex: 1 }} />
            <Button type="primary" style={{ width: 180 }}>
              Add Signer
            </Button>
          </div>

          {contractData.signatories.map((signer) => (
            <Col span={24}>{signer}</Col>
          ))}
        </Form.Item>

        <Form.Item name="reviewer">
          <div style={{ display: 'flex', gap: 10 }}>
            <Input placeholder="Reviewer address" style={{ flex: 1 }} />
            <Button type="primary" style={{ width: 180 }}>
              Add Reviewers
            </Button>
          </div>
        </Form.Item>

        <Form.Item name="category">
          <Select onChange={handleChangeCategory} options={CATEGORIES} />
        </Form.Item>

        <Row>
          <Col span={12}>
            <Form.Item name="signDeadline">
              <DatePicker />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="expirationDate"
              style={{ display: 'inline-block' }}
            >
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>

        <Col span={24}>
          <UserInput onOk={handleChangeSigners} />
        </Col>

        <Col span={24}>
          <Button onClick={handleCreateContract} block loading={loading}>
            Create
          </Button>
        </Col>
      </Form>
    </Fragment>
  )
}

export default CreateContract
