import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button, Col, Drawer, Menu, Row } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import HeaderMain from 'components/header/HeaderMain'
import Brand from 'components/system/brand'

import useIsMobile from 'hooks/system/useIsMobile'

import { COLORS } from 'themes/colors'

import { Styles } from 'type/styles.type'
import type { MenuProps } from 'antd'

import './index.less'

const items: MenuProps['items'] = [
  {
    label: 'Solution',
    key: '1',
  },
  {
    label: 'Feature',
    key: '2',
  },
  {
    label: 'Roadmap',
    key: '3',
  },
  {
    label: 'Pricing',
    key: '4',
  },
]

const styles: Styles = {
  container: {
    backgroundColor: COLORS.MENU_BACKGROUND,
    width: '100%',
    borderRadius: 99,
    paddingLeft: 10,
    paddingRight: 10,
    margin: '0 auto',
  },
  menu: {
    borderWidth: 0,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 50,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'flex-end',
  },
  vicShield: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
}
const TopMenu = () => {
  const router = useLocation()

  const navigate = useNavigate()

  const isLandingPage = useMemo(
    () => router.pathname === '/home',
    [router.pathname],
  )
  const [current, setCurrent] = useState('mail')
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  const renderHamburger = () => {
    return (
      <Row
        className={'hamburgerMenu'}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
        }}
      >
        <Row align={'middle'} style={{ flex: 1 }}>
          <Col flex={5}>
            <Brand />
          </Col>
          <Col flex={0.5}>
            <Button
              type="primary"
              style={styles.button}
              onClick={() => navigate('/contract')}
            >
              Use VicShield
            </Button>
          </Col>
          <Col flex={0.5}>
            <MenuOutlined
              style={{ height: 32, width: 32, fontSize: 20 }}
              onClick={showDrawer}
            />
            <Drawer width={250} closable={false} onClose={onClose} open={open}>
              <Menu
                onClick={onClick}
                style={styles.menu}
                selectedKeys={[current]}
                mode={'inline'}
                items={items}
              />
            </Drawer>
          </Col>
        </Row>
      </Row>
    )
  }

  if (!isLandingPage) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          padding: '32px 40px 0',
          width: '100%',
          zIndex: 999,
          backdropFilter: 'blur(10px)',
          maxWidth: 1160,
        }}
      >
        <HeaderMain />
      </div>
    )
  }

  return (
    <>
      {!isMobile ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            padding: '32px 40px 0',
            width: '100%',
            zIndex: 999,
            backdropFilter: 'blur(10px)',
            maxWidth: 1160,
          }}
        >
          <Row className={'menu'} style={styles.container}>
            <Row
              justify={'space-between'}
              align={'middle'}
              style={{ flex: 1 }}
              wrap={false}
            >
              <Brand />
              <Menu
                onClick={onClick}
                style={styles.menu}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                className="menu-header"
              />
              <Button
                type="primary"
                style={styles.button}
                onClick={() => navigate('/contract')}
              >
                Use VicShield
              </Button>
            </Row>
          </Row>
        </div>
      ) : (
        renderHamburger()
      )}
    </>
  )
}

export default TopMenu
