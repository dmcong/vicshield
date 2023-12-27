import React, { Fragment, useState } from 'react'
import { Col, Drawer, Menu, Row, Space } from 'antd'
import {
  MessageFilled as MsgIcon,
  BellFilled as NotiIcon,
  MenuOutlined,
} from '@ant-design/icons'
import Brand from 'components/system/brand'
import BtnConnectWallet from 'components/base-btn/BtnConnectWallet'
import useIsMobile from 'hooks/system/useIsMobile'
import SpaceVertical from 'components/system/space-vervical/SpaceVertical'

function HeaderMain() {
  const isMobile = useIsMobile()

  const [showDrawer, setShowDrawer] = useState(false)

  if (isMobile)
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          padding: 0,
          width: '100%',
          zIndex: 999,
          background: '#262D34',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          wrap={false}
          style={{ maxWidth: 1160, margin: '0 auto', height: 90 }}
        >
          <Col>
            <Space>
              <Brand />
            </Space>
          </Col>

          <Col>
            <Space>
              <BtnConnectWallet />

              <MenuOutlined
                style={{ height: 32, width: 32, fontSize: 20 }}
                onClick={() => setShowDrawer(true)}
              />
            </Space>
          </Col>
        </Row>

        <Drawer
          width={250}
          closable={false}
          onClose={() => setShowDrawer(false)}
          open={showDrawer}
        >
          <SpaceVertical>
            <MsgIcon
              style={{
                fontSize: 24,
                background: '#2C353D',
                padding: 8,
                borderRadius: 8,
              }}
            />

            <NotiIcon
              style={{
                fontSize: 24,
                background: '#2C353D',
                padding: 8,
                borderRadius: 8,
              }}
            />
          </SpaceVertical>
        </Drawer>
      </div>
    )

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        padding: '0 40px',
        width: '100%',
        zIndex: 999,
        background: '#262D34',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        wrap={false}
        style={{ maxWidth: 1160, margin: '0 auto', height: 90 }}
      >
        <Col>
          <Space>
            <Brand />
          </Space>
        </Col>

        <Col>
          <Space>
            <MsgIcon
              style={{
                fontSize: 24,
                background: '#2C353D',
                padding: 8,
                borderRadius: 8,
              }}
            />
            <NotiIcon
              style={{
                fontSize: 24,
                background: '#2C353D',
                padding: 8,
                borderRadius: 8,
              }}
            />
            <BtnConnectWallet />
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default HeaderMain
