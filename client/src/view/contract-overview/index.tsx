import React from 'react'
import { Button, Card, Col, Image, Row, Typography } from 'antd'
import useIsMobile from 'hooks/system/useIsMobile'

import contract1 from 'static/images/contract/contract-1.png'
import contract2 from 'static/images/contract/contract-2.png'
import contract3 from 'static/images/contract/contract-3.png'

import './index.less'
import SpaceVertical from 'components/system/space-vervical/SpaceVertical'
import { useNavigate } from 'react-router-dom'

function ContractOverview() {
  const isMobile = useIsMobile()
  const navigate = useNavigate()

  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <Typography.Title className="text-center">
          Contract Board
        </Typography.Title>
      </Col>

      <Col span={24}>
        <Row gutter={!isMobile ? 24 : [0, 24]}>
          <Col span={!isMobile ? 8 : 24}>
            <Card className="card-contract-board">
              <div
                style={{
                  aspectRatio: '1 / 1',
                  background: '#B9E2FE',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src={contract1} width="50%" preview={false} />
              </div>
              <SpaceVertical style={{ padding: 16 }}>
                <Typography.Title level={5}>
                  Contract Management
                </Typography.Title>
                <Typography.Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography.Paragraph>

                <Button
                  type="primary"
                  block
                  onClick={() => navigate('/management')}
                  style={{ height: 42 }}
                >
                  Manage Now
                </Button>
              </SpaceVertical>
            </Card>
          </Col>

          <Col span={!isMobile ? 8 : 24}>
            <Card className="card-contract-board">
              <div
                style={{
                  aspectRatio: '1 / 1',
                  background: '#B9E2FE',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src={contract2} width="50%" preview={false} />
              </div>
              <SpaceVertical style={{ padding: 16 }}>
                <Typography.Title level={5}>Upload Contract</Typography.Title>
                <Typography.Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography.Paragraph>

                <Button
                  type="primary"
                  block
                  onClick={() => navigate('/create-contract')}
                  style={{ height: 42 }}
                >
                  Launch Now
                </Button>
              </SpaceVertical>
            </Card>
          </Col>

          <Col span={!isMobile ? 8 : 24}>
            <Card className="card-contract-board">
              <div
                style={{
                  aspectRatio: '1 / 1',
                  background: '#B9E2FE',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src={contract3} width="50%" preview={false} />
              </div>
              <SpaceVertical style={{ padding: 16 }}>
                <Typography.Title level={5}>Upload Contract</Typography.Title>
                <Typography.Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography.Paragraph>

                <Button
                  type="primary"
                  block
                  onClick={() => navigate('/create-contract')}
                  style={{ height: 42 }}
                >
                  Create Now
                </Button>
              </SpaceVertical>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ContractOverview
