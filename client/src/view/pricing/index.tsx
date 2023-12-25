import { Button, Card, Col, Row, Space, Typography } from 'antd'
import Icon from '@ant-design/icons'

import SpaceVertical from 'components/system/space-vervical/SpaceVertical'
import { CheckedIcon, CloseIcon } from 'static/images/icon'

import useIsMobile from 'hooks/system/useIsMobile'

import { PRICE_PACKAGES } from './price'

import './index.less'

function Pricing() {
  const isMobile = useIsMobile()

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  return (
    <Row justify="center" gutter={[0, 32]} className="pricing-section">
      <Col span={24}>
        <Row justify="center" gutter={[0, 16]}>
          <Col>
            <Typography.Title
              className="text-center"
              style={{ fontSize: 52, width: !isMobile ? 763 : '100%' }}
            >
              Simple, transparent & great pricing.
            </Typography.Title>
          </Col>

          <Col>
            <Typography.Text
              className="text-center"
              style={{
                display: 'block',
                fontSize: 18,
                width: !isMobile ? 763 : '100%',
              }}
            >
              We have all kind of plans for every business that fit with your
              needs
            </Typography.Text>
          </Col>
        </Row>
      </Col>

      <Col span={24} style={{ padding: !isMobile ? ' 0 60px' : 0 }}>
        <Row gutter={!isMobile ? 16 : [0, 16]}>
          {PRICE_PACKAGES.map(({ id, title, features, pricing }) => {
            return (
              <Col key={id} span={!isMobile ? 8 : 24}>
                <Card style={{ height: 460 }}>
                  <Row
                    style={{ flexDirection: 'column', height: '100%' }}
                    justify="space-between"
                  >
                    <SpaceVertical size={10} style={{ padding: '16px 16px 0' }}>
                      <div style={{ height: 47 }}>
                        <Typography.Text
                          style={{
                            fontSize: 16,
                            fontWeight: 500,
                            wordSpacing: 3000 /*word spacing 3000 for force word break*/,
                            textTransform: 'uppercase',

                            letterSpacing: 3.2,
                          }}
                        >
                          {title}
                        </Typography.Text>
                      </div>

                      <SpaceVertical>
                        {features.map(({ id, title, checked }) => (
                          <Space key={id} style={{ width: '100%' }} size={16}>
                            <Icon
                              component={() => {
                                if (checked)
                                  return <CheckedIcon color="#11C15B" />

                                return <CloseIcon color="#FF5252" size={14} />
                              }}
                            />

                            <Typography.Text
                              style={{
                                fontSize: 14,
                                letterSpacing: 1.2,
                              }}
                            >
                              {title}
                            </Typography.Text>
                          </Space>
                        ))}
                      </SpaceVertical>
                    </SpaceVertical>

                    <SpaceVertical size={43}>
                      {!!pricing && (
                        <SpaceVertical size={6} style={{ padding: '0 16px' }}>
                          <Typography.Text
                            style={{
                              fontSize: 54,
                              fontWeight: 600,
                              lineHeight: '26px',
                            }}
                          >
                            {USDollar.format(pricing.price)}
                            <Typography.Text
                              style={{ fontSize: 18, fontWeight: 'normal' }}
                            >
                              /month
                            </Typography.Text>
                          </Typography.Text>

                          <Typography.Text>
                            {pricing.description}
                          </Typography.Text>
                        </SpaceVertical>
                      )}

                      <Button
                        block
                        className={`btn-get-started btn-get-started-${id}`}
                      >
                        {id !== 3 ? 'Get Started' : 'Contact Us'}
                      </Button>
                    </SpaceVertical>
                  </Row>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Col>
    </Row>
  )
}

export default Pricing
