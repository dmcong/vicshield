import { apiContracts, useContractData } from 'providers/contract.provider'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import { Button, Col, Row, Space, Tag, Typography } from 'antd'
import { shortenAddress } from 'utils'
import SpaceVertical from 'components/system/space-vervical/SpaceVertical'
import { PropsWithChildren, useMemo, useState } from 'react'
import moment from 'moment'
import PdfViewer from 'components/pdf/pdfViewer'
import PdfReviewer from 'components/pdf/pdfReviewer'
import { FilePdfFilled as PdfIcon } from '@ant-design/icons'
import useIsMobile from 'hooks/system/useIsMobile'
import { useAccount } from 'wagmi'
import { SignStatus } from 'providers/contract.type'

function ContractDetailField({
  title,
  children,
}: PropsWithChildren & { title: string }) {
  return (
    <SpaceVertical
      style={{
        background: '#111827',
        borderColor: '#262626',
        borderRadius: 16,
        padding: 24,
        fontSize: 16,
        minHeight: 120,
      }}
      size={16}
    >
      <Typography.Text style={{ color: '#98989A' }}>{title}</Typography.Text>
      <div>{children}</div>
    </SpaceVertical>
  )
}

function ContractDetail() {
  const id = useParams().id

  const data = useContractData(id ?? '')
  const isMobile = useIsMobile()

  const { address } = useAccount()

  const signContract = async () => {
    await apiContracts.post(`/contract/${data._id}/sign`)
  }

  const rejectContract = async () => {
    await apiContracts.post(`/contract/${data._id}/reject`)
  }

  const signStatus = useMemo(() => {
    if (!data) return
    return data.signatories?.find((signatory) => signatory.wallet === address)
      ?.status
  }, [data])

  const signGreen = useMemo(() => {
    switch (signStatus) {
      case SignStatus.Pending:
        return 'gray'
      case SignStatus.Rejected:
        return 'red'
      case SignStatus.Signed:
        return 'green'
    }
  }, [signStatus])

  if (!data) return null

  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <Typography.Title className="text-center">
          Contract Detail
        </Typography.Title>
      </Col>

      <Col span={24}>
        <Row
          gutter={[16, 16]}
          style={{
            padding: '16px 8px',
            background: '#252533',
            borderRadius: 32,
          }}
        >
          <Col span={24}>
            <SpaceVertical size={16}>
              <Typography.Title
                level={3}
                className="text-center"
                // style={{ marginBottom: 16 }}
              >
                Signatories
              </Typography.Title>
              {data?.signatories.map((signatory, index) => {
                return (
                  <Typography.Title
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#6990C7',
                    }}
                    copyable
                    key={index}
                    className="text-center"
                  >
                    {shortenAddress(signatory.wallet)}
                  </Typography.Title>
                )
              })}
            </SpaceVertical>
          </Col>

          <Col span={!isMobile ? 12 : 24}>
            <ContractDetailField title="Title">
              <Typography.Text>{data.title}</Typography.Text>
            </ContractDetailField>
          </Col>

          <Col span={!isMobile ? 12 : 24}>
            <ContractDetailField title="Contract File">
              <Space style={{ color: '#0A8FDC' }}>
                <PdfIcon />
                <Typography.Text style={{ color: '#0A8FDC' }}>
                  {data.title}.pdf
                </Typography.Text>
              </Space>
            </ContractDetailField>
          </Col>

          <Col span={!isMobile ? 6 : 12}>
            <ContractDetailField title="Owner Contract">
              <Typography.Text>{shortenAddress(data.owner)}</Typography.Text>
            </ContractDetailField>
          </Col>

          <Col span={!isMobile ? 6 : 12}>
            <ContractDetailField title="Category">
              <Typography.Text>{data.categoryId ?? 'Category'}</Typography.Text>
            </ContractDetailField>
          </Col>

          <Col span={!isMobile ? 6 : 12}>
            <ContractDetailField title="Create At">
              <Typography.Text>
                {moment(data.createdAt).format('YYYY-MM-DD HH:mm')}
              </Typography.Text>
            </ContractDetailField>
          </Col>

          <Col span={!isMobile ? 6 : 12}>
            <ContractDetailField title="Status">
              <Tag color={signGreen} style={{ padding: '4px 8px' }}>
                {signStatus}
              </Tag>
            </ContractDetailField>
          </Col>

          <Col span={24}>
            <ContractDetailField title="Description">
              <Typography.Paragraph>{data.description}</Typography.Paragraph>
            </ContractDetailField>
          </Col>

          <Col span={24}>
            <ContractDetailField title="Preview Contract">
              <Row justify="center" gutter={[0, 16]}>
                <Col span={24}>
                  <PdfReviewer
                    base64Str={data.content}
                    style={{ height: 400, width: '100%' }}
                  />
                </Col>
                <Col
                  span={24}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <PdfViewer base64Str={data.content} title={data.title} />
                  {data?.signatories.some(
                    (signatory) =>
                      signatory.wallet === address &&
                      signatory.status === SignStatus.Pending,
                  ) && (
                    <Space size={16}>
                      <Button
                        type="primary"
                        style={{ height: 48 }}
                        onClick={signContract}
                      >
                        Sign Contract
                      </Button>
                      <Button
                        type="ghost"
                        style={{ background: 'red', height: 48 }}
                        onClick={rejectContract}
                      >
                        Reject Contract
                      </Button>
                    </Space>
                  )}
                </Col>
              </Row>
            </ContractDetailField>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ContractDetail
