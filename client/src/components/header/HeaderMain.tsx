import React from 'react'
import { Col, Input, Layout, Row, Space } from 'antd'
import Brand from 'components/system/brand'

function HeaderMain() {
  return (
    <div>
      <Layout.Header>
        <Row>
          <Col>
            <Space>
              <Brand />

              <Input.Search />
            </Space>
          </Col>

          <Col></Col>
        </Row>
      </Layout.Header>
    </div>
  )
}

export default HeaderMain
