import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Col, Drawer, Layout, Menu, Row } from 'antd'
import { COLORS } from '../themes/colors'
import VictionIcon from '../victionIcon'
import { MenuOutlined } from '@ant-design/icons'
import { Styles } from '../type/styles.type'
import BtnConnectWallet from 'components/base-btn/BtnConnectWallet'

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
  {
    label: 'Pricing',
    key: '5',
  },
]

const styles: Styles = {
  container: {
    backgroundColor: COLORS.MENU_BACKGROUND,
    width: '90%',
    borderRadius: 99,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
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
  const [current, setCurrent] = useState('mail')
  const [open, setOpen] = useState(false)
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
      <Layout
        className={'hamburgerMenu'}
        style={{
          paddingLeft: 20,
          width: 100,
          height: 100,
        }}
      >
        <MenuOutlined
          style={{ height: 100, width: 100, fontSize: 20 }}
          onClick={showDrawer}
        />
        <Drawer width={250} closable={false} onClose={onClose} open={open}>
          <VictionIcon />
          <Menu
            onClick={onClick}
            style={styles.menu}
            selectedKeys={[current]}
            mode={'inline'}
            items={items}
          />
          <BtnConnectWallet />
        </Drawer>
      </Layout>
    )
  }

  return (
    <>
      <Layout className={'menu'} style={styles.container}>
        <Row align={'middle'}>
          <Col flex={1}>
            <VictionIcon />
          </Col>
          <Col flex={5}>
            <Menu
              onClick={onClick}
              style={styles.menu}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Col>
          <Col flex={0}>
            <BtnConnectWallet />
          </Col>
        </Row>
      </Layout>
      {renderHamburger()}
    </>
  )
}

export default TopMenu
