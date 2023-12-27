import { Fragment, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Typography,
} from 'antd'
import Icon from '@ant-design/icons'

import SpaceVertical from 'components/system/space-vervical/SpaceVertical'
import { CheckedIcon, CloseIcon } from 'static/images/icon'

import useIsMobile from 'hooks/system/useIsMobile'

import { PRICE_PACKAGES } from './price'

import './index.less'

function Pricing() {
  const [openPriceModal, setOpenPriceModal] = useState(false)
  const isMobile = useIsMobile()

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  return (
    <Fragment>
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

        <Col span={24} style={{ padding: !isMobile ? ' 0 60px' : '0 40px' }}>
          <Row gutter={!isMobile ? 16 : [0, 16]}>
            {PRICE_PACKAGES.map(({ id, title, features, pricing }) => {
              return (
                <Col key={id} span={!isMobile ? 8 : 24}>
                  <Card style={{ height: 460 }}>
                    <Row
                      style={{ flexDirection: 'column', height: '100%' }}
                      justify="space-between"
                    >
                      <SpaceVertical
                        size={10}
                        style={{ padding: '16px 16px 0' }}
                      >
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

                      <SpaceVertical size={12}>
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
                          onClick={() => setOpenPriceModal(true)}
                        >
                          Contact Us
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

      <Modal
        open={openPriceModal}
        onCancel={() => setOpenPriceModal(false)}
        footer={null}
      >
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Typography.Title level={3} className="text-center">
              Sign up how to start free sales trial.
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Text
              type="secondary"
              className="text-center"
              style={{ display: 'block' }}
            >
              Complete the form to start free trial. Our team will be in touch
              to help you make the most of your trial.
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Form name="basic" requiredMark={false} layout="vertical">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="First name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                      },
                    ]}
                  >
                    <Input placeholder="First name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your last name!',
                      },
                    ]}
                  >
                    <Input placeholder="Last name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Work email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your work email!',
                      },
                    ]}
                  >
                    <Input placeholder="Work email" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Job title"
                    name="jobTitle"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your job title!',
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select one"
                      options={[
                        {
                          value: 'manager',
                          label: 'Manager',
                        },
                        {
                          value: 'hrDirector',
                          label: 'HR Director',
                        },
                        {
                          value: 'projectManager',
                          label: 'Project Manager',
                        },
                        {
                          value: 'developer',
                          label: 'Developer',
                        },
                        {
                          value: 'other',
                          label: 'Other',
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Company"
                    name="company"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your company!',
                      },
                    ]}
                  >
                    <Input placeholder="Company" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Employees"
                    name="employees"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your employees!',
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select one"
                      options={[
                        {
                          value: 'manager',
                          label: 'Manager',
                        },
                        {
                          value: 'hrDirector',
                          label: 'HR Director',
                        },
                        {
                          value: 'projectManager',
                          label: 'Project Manager',
                        },
                        {
                          value: 'developer',
                          label: 'Developer',
                        },
                        {
                          value: 'other',
                          label: 'Other',
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone!',
                      },
                    ]}
                  >
                    <Input placeholder="Phone" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Contry/Region"
                    name="contry"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone!',
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select one"
                      options={[
                        {
                          value: 'vietnam',
                          label: 'Viet Nam',
                        },
                        {
                          value: 'usa',
                          label: 'USA',
                        },
                        {
                          value: 'japan',
                          label: 'Japan',
                        },
                        {
                          value: 'china',
                          label: 'China',
                        },
                        {
                          value: 'singapore',
                          label: 'Singapore',
                        },
                        {
                          value: 'other',
                          label: 'Other',
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Button
                    type="primary"
                    block
                    style={{ height: 42 }}
                    onClick={() => setOpenPriceModal(false)}
                  >
                    START MY FREE TRIAL
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default Pricing
