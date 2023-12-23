import { web3 } from '@project-serum/anchor'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  PageHeader,
  Row,
  Space,
  Tag,
} from 'antd'
import { FileAddOutlined } from '@ant-design/icons'
import ListSigner from 'components/listSingers'
import PdfViewer from 'components/pdf/pdfViewer'

import { ContractMetadata, MetadataService } from 'utils'
import PdfReviewer from 'components/pdf/pdfReviewer'

const CreateContract = () => {
  const { hash } = useParams()
  const [file, setFile] = useState<string>('')
  const [inputSigner, setInputSigner] = useState('')
  const [inputReviewers, setInputReviewers] = useState('')
  const [loading, setLoading] = useState(false)

  // const [signers, setSigners] = useState<string[]>([])
  // const [title, setTitle] = useState('')
  // const [des, setDes] = useState('')
  // const [endAt, setEndAt] = useState('')

  const loadData = useCallback(async () => {
    if (!hash) return
    const file = await MetadataService.getFile(hash)
    // console.log('file', file)
    setFile(file || '')
  }, [hash])

  // form instance
  const [form] = Form.useForm()
  const signers = Form.useWatch('signers', form)
  const reviewers = Form.useWatch('reviewers', form)
  const title = Form.useWatch('title', form)

  useEffect(() => {
    loadData()
  }, [loadData])

  const onCreateContract = async ({ title, description, expiredAt }: any) => {
    try {
      setLoading(true)
      if (!hash) throw new Error('Invalid hash')

      const metadata: ContractMetadata = {
        hash,
        description,
        thumbnail: '',
        title,
      }
      await MetadataService.backupMetadata(hash, metadata)

      const hashBuff = Array.from(Buffer.from(hash, 'hex'))

      window.notify({
        type: 'success',
        description: 'Create contract successfully!',
      })
    } catch (error: any) {
      window.notify({
        type: 'error',
        description: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form form={form} layout="vertical" colon={false}>
      <Row gutter={[24, 24]}>
        <Col span={24} data-aos-delay="350">
          <PageHeader
            onBack={() => window.history.back()}
            title="Create Contract"
            className="site-page-header"
            subTitle="Information"
          >
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Form.Item label="Title" name="title">
                  <Input placeholder="Enter title" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Expired Date" name="expiredAt">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Description" name="description">
                  <Input.TextArea placeholder="input description" rows={5} />
                </Form.Item>
              </Col>
            </Row>
          </PageHeader>
        </Col>

        <Col span={24}>
          <PageHeader
            title="Signers"
            className="site-page-header"
            subTitle="Setup signers"
            tags={<Tag color="blue">{signers?.length ?? 0}</Tag>}
          >
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="signers" initialValue={[]} hidden />
                <Space style={{ width: '100%' }}>
                  <Input
                    placeholder="Signer address"
                    value={inputSigner}
                    onChange={(e) => setInputSigner(e.target.value)}
                    style={{ width: 330 }}
                  />
                  <Button
                    type="primary"
                    onClick={() => {
                      const addr =
                        inputReviewers ||
                        web3.Keypair.generate().publicKey.toBase58()
                      form.setFieldsValue({ signers: [...signers, addr] })
                      setInputSigner('')
                    }}
                  >
                    Add Signer
                  </Button>
                </Space>
              </Col>
              {!!signers?.length && (
                <Col span={24}>
                  <ListSigner signers={signers || []} />
                </Col>
              )}
            </Row>
          </PageHeader>
        </Col>

        <Col span={24}>
          <PageHeader
            title="Reviewers"
            className="site-page-header"
            subTitle="Setup reviewers"
            tags={<Tag color="blue">{signers?.length ?? 0}</Tag>}
          >
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="reviewers" initialValue={[]} hidden />
                <Space style={{ width: '100%' }}>
                  <Input
                    placeholder="Reviewer address"
                    value={inputReviewers}
                    onChange={(e) => setInputReviewers(e.target.value)}
                    style={{ width: 330 }}
                  />
                  <Button
                    type="primary"
                    onClick={() => {
                      const addr =
                        inputReviewers ||
                        web3.Keypair.generate().publicKey.toBase58()
                      form.setFieldsValue({ reviewers: [...reviewers, addr] })
                      setInputReviewers('')
                    }}
                  >
                    Add Reviewer
                  </Button>
                </Space>
              </Col>
              {!!signers?.length && (
                <Col span={24}>
                  <ListSigner signers={signers || []} />
                </Col>
              )}
            </Row>
          </PageHeader>
        </Col>

        <Col span={24}>
          <PdfReviewer key="1" base64Str={file} />
        </Col>

        <Col flex="auto"></Col>
        <Col>
          <Space>
            <PdfViewer base64Str={file} key="2" title={title} />
            <Button
              type="primary"
              icon={<FileAddOutlined />}
              disabled={!signers?.length}
              onClick={onCreateContract}
              loading={loading}
            >
              Create Contract
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  )
}

export default CreateContract
