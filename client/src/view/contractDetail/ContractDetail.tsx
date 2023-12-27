import { useContractData } from 'providers/contract.provider'
import { useParams } from 'react-router-dom'
import { Col, Row, Space, Tag, Typography } from 'antd'
import { shortenAddress } from 'utils'
import SpaceVertical from 'components/system/space-vervical/SpaceVertical'
import { PropsWithChildren } from 'react'
import moment from 'moment'
import PdfViewer from 'components/pdf/pdfViewer'
import PdfReviewer from 'components/pdf/pdfReviewer'
import { FilePdfFilled as PdfIcon } from '@ant-design/icons'
import useIsMobile from 'hooks/system/useIsMobile'

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

  console.log({ data })
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
              <Tag color="green" style={{ padding: '4px 8px' }}>
                Signed
              </Tag>
            </ContractDetailField>
          </Col>

          <Col span={24}>
            <ContractDetailField title="Description">
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem
                ipsum dolor sit ametLorem ipsum dolor sit amet
              </Typography.Paragraph>
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
                <Col>
                  <PdfViewer base64Str={data.content} title={data.title} />
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
