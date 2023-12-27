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
import { Transaction, hexlify } from 'ethers'

import { Fragment, useCallback, useState } from 'react'
import { apiContracts, useContractMutation } from 'providers/contract.provider'

import { decode } from 'bs58'
import { CreateContractDto } from 'type/contract.type'
import UploadFile from './uploadFile'

import './index.less'
import TextArea from 'antd/lib/input/TextArea'
import FormTitle from './formTitle'
import { useDebounce } from 'react-use'
import { useNavigate } from 'react-router-dom'

const CREATE_CONTRACT_INIT_DATA: CreateContractDto = {
  title: '',
  content: '',
  signatories: [],
  value: '',
  recipient: '',
  signDeadline: '',
  expirationDate: '',
  category: '',
  reviewers: [],
  description: '',
}

const CATEGORIES = [
  {
    value: 'Hợp đồng thuê',
    label: 'Hợp đồng thuê',
  },
  {
    value: 'Hợp đồng lao động',
    label: 'Hợp đồng lao động',
  },
  {
    value: 'Sa thải nhân viên',
    label: 'Sa thải nhân viên',
  },
]

const CreateContract = () => {
  const [form] = Form.useForm<CreateContractDto>()

  const signatories = Form.useWatch('signatories', form)
  const reviewers = Form.useWatch('reviewers', form)
  const content = Form.useWatch('content', form)

  const [signer, setSigner] = useState('')
  const [reviewer, setReviewer] = useState('')
  const { onCreateContract, from } = useContractMutation()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleChangeCategory = (val: string) => {
    form.setFieldValue('category', val)
  }

  // const { config } = usePrepareSendTransaction({
  //   to: debouncedTo,
  //   value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  // })

  const handleCreateContract = async () => {
    const contractData = await form.validateFields()

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

      navigate('/management')
    } catch (error: any) {
      message.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const addSigner = async (value: string) => {
    const { data } = await apiContracts.get<any>(`/oneid/${value}`)
    const elm = data.find((d: any) => d.name === value)

    const signatories = form.getFieldValue('signatories') || []
    if (elm?.contractAddress) {
      signatories.push(elm.contractAddress)
    } else {
      signatories.push(value)
    }
    form.setFieldValue('signatories', signatories)
    setSigner('')
  }

  const addReviewer = async (value: string) => {
    const { data } = await apiContracts.get<any>(`/oneid/${value}`)
    const elm = data.find((d: any) => d.name === value)

    const reviewers = form.getFieldValue('reviewers') || []
    if (elm?.contractAddress) {
      reviewers.push(elm.contractAddress)
    } else {
      reviewers.push(value)
    }
    form.setFieldValue('reviewers', reviewers)
    setReviewer('')
  }

  return (
    <Fragment>
      <Col span={24}>
        <Typography.Title style={{ textAlign: 'center', marginBottom: 10 }}>
          Create contract
        </Typography.Title>
      </Col>
      <Form
        form={form}
        initialValues={CREATE_CONTRACT_INIT_DATA}
        className="create-contract"
        layout="vertical"
        style={{ background: '#252533', padding: 16 }}
      >
        <Form.Item name="content" valuePropName="dummy">
          <UploadFile
            onChange={(val) => form.setFieldValue('content', val)}
            value={content || ''}
          />
        </Form.Item>
        <Form.Item name="title" label={<FormTitle text="Contract name" />}>
          <Input placeholder="Contract name" />
        </Form.Item>

        <Form.Item name="description" label={<FormTitle text="Description" />}>
          <TextArea placeholder="Description" rows={5} />
        </Form.Item>

        <Form.Item name="signatories" label={<FormTitle text="Signers" />}>
          <Fragment>
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <Input
                placeholder="Signer address"
                style={{ flex: 1 }}
                onChange={(e) => setSigner(e.target.value)}
                value={signer}
              />
              <Button
                type="primary"
                style={{ width: 180, height: 46 }}
                className="btn-add-user"
                onClick={() => addSigner(signer)}
              >
                <Space align="center">
                  <Typography.Text>Add Signer</Typography.Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M5.5 12.4058H19.5M12.5 5.40576V19.4058"
                      stroke="#FCFDFD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Space>
              </Button>
            </div>

            <Row gutter={[0, 10]}>
              {signatories?.map((signer: string) => (
                <Col key={signer} span={24}>
                  {signer}
                </Col>
              ))}
            </Row>
          </Fragment>
        </Form.Item>

        <Form.Item name="reviewers" label={<FormTitle text="Reviewers" />}>
          <Fragment>
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <Input
                placeholder="Reviewer address"
                style={{ flex: 1 }}
                onChange={(e) => setReviewer(e.target.value)}
                value={reviewer}
              />
              <Button
                type="primary"
                style={{ width: 180, height: 46 }}
                className="btn-add-user"
                onClick={() => addReviewer(reviewer)}
              >
                <Space align="center">
                  <Typography.Text>Add Reviewers</Typography.Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M5.5 12.4058H19.5M12.5 5.40576V19.4058"
                      stroke="#FCFDFD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Space>
              </Button>
            </div>
            <Row gutter={[0, 10]}>
              {reviewers?.map((signer: string) => (
                <Col key={signer} span={24}>
                  {signer}
                </Col>
              ))}
            </Row>
          </Fragment>
        </Form.Item>

        <Form.Item name="category" label={<FormTitle text="Category" />}>
          <Select
            onChange={handleChangeCategory}
            options={CATEGORIES}
            size="large"
          />
        </Form.Item>

        <Row gutter={32}>
          <Col span={12}>
            <Form.Item
              label={<FormTitle text="Date to sign" />}
              name="signDeadline"
              valuePropName="dummy"
            >
              <DatePicker
                onChange={(e) =>
                  form.setFieldValue('signDeadline', e?.toISOString())
                }
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label={<FormTitle text="Date of expiry" />}
              name="expirationDate"
              valuePropName="dummy"
            >
              <DatePicker
                onChange={(e) =>
                  form.setFieldValue('expirationDate', e?.toISOString())
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={handleCreateContract}
            loading={loading}
            type="primary"
            style={{ height: 46 }}
          >
            <Space size={16}>
              <Typography.Text>Create Contract</Typography.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14.5 22.4976H18C18.5304 22.4976 19.0391 22.2868 19.4142 21.9118C19.7893 21.5367 20 21.028 20 20.4976V7.99756L14.5 2.49756H6C5.46957 2.49756 4.96086 2.70827 4.58579 3.08334C4.21071 3.45842 4 3.96713 4 4.49756V8.49756M14 2.49756V8.49756H20M7.00001 17.4975L2.26001 14.6475M7.00001 17.4975L11.74 14.6475M7.00001 17.4975L7 22.4976M2.97 13.6175C2.37 13.9775 2 14.6375 2 15.3575V18.6375C2 19.3575 2.37 20.0175 2.97 20.3775L5.97 22.2075C6.6 22.5975 7.4 22.5975 8.03 22.2075L11.03 20.3775C11.63 20.0175 12 19.3575 12 18.6375V15.3575C12 14.6375 11.63 13.9775 11.03 13.6175L8.03 11.7875C7.72007 11.5974 7.36358 11.4968 7 11.4968C6.63642 11.4968 6.27993 11.5974 5.97 11.7875L2.97 13.6175Z"
                  stroke="#FCFDFD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Space>
          </Button>
        </Col>
      </Form>
    </Fragment>
  )
}

export default CreateContract
