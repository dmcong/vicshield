import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  notification,
  Row,
  Select,
  Typography,
} from 'antd'
import { apiContracts } from 'providers/contract.provider'
import { useOpenSubscription } from 'stores/useOpenSubscription'
import Icon from '@ant-design/icons'
import { CloseIcon } from 'static/images/icon'

function ModalSubscription() {
  const { open: openPriceModal, setOpen: setOpenPriceModal } =
    useOpenSubscription()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return () => form.resetFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal
      open={openPriceModal}
      onCancel={() => setOpenPriceModal(false)}
      footer={null}
      closeIcon={<Icon component={() => <CloseIcon color="#0A8FDC" />} />}
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
            Complete the form to start free trial. Our team will be in touch to
            help you make the most of your trial.
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Form
            name="basic"
            requiredMark={false}
            layout="vertical"
            onFinish={async (values) => {
              try {
                await apiContracts.post('/trial', values)
                setOpenPriceModal(false)
                notification.success({ message: 'Subscribe successfully!!' })
              } catch (e) {
              } finally {
                setOpenPriceModal(false)
              }
            }}
          >
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
                  htmlType="submit"
                  loading={loading}
                  onClick={() => setLoading(true)}
                >
                  START MY FREE TRIAL
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal>
  )
}

export default ModalSubscription
