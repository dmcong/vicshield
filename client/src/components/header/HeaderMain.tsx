import React from 'react'
import { Col, Row, Space } from 'antd'
import { MessageOutlined, BellOutlined } from '@ant-design/icons'
import Brand from 'components/system/brand'
import BtnConnectWallet from 'components/base-btn/BtnConnectWallet'

function HeaderMain() {
  return (
    <Row justify="space-between" wrap={false}>
      <Col>
        <Space>
          <Brand />
        </Space>
      </Col>

      <Col>
        <Space>
          <MessageOutlined />
          <BellOutlined />
          <BtnConnectWallet />
        </Space>
      </Col>
    </Row>
  )
}

export default HeaderMain
