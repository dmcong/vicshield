import React, { useCallback, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Col, Divider, Layout, Row } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import Management from './management'
import Home from './home'
import ContractDetail from './contractDetail'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store'
import { initUsers } from 'store/users.controller'
import UILoader from 'uiloader'
import { Security } from './securiry'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TopMenu from '../components/topMenu'
import BannerHero from './bannerHero/bannerHero'
import CharacteristicsBanner from './characteristicsBanner/characteristicsBanner'

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    Aos.init({ duration: 1000 })
  }, [])

  const loadData = useCallback(async () => {
    if (!loading) return
    await dispatch(initUsers())

    setLoading(false)
  }, [dispatch, loading])

  useEffect(() => {
    loadData()
  }, [loadData])
  return (
    <UILoader>
      <Layout>
        <TopMenu />
        <Divider style={{ borderWidth: 0 }} />
        <Content>
          <Row justify="center">
            <Col span={24}>
              <BannerHero
                title={'Sign with Confidence, Transact with Transparency'}
                content={
                  'VicShield - A next-gen digital signature and contract protection program.\n' +
                  'Digitize traditional contracts but still ensure safety and security.'
                }
              />
            </Col>

            <Col span={24}>
              <CharacteristicsBanner />
            </Col>

            <Col span={24} style={{ minHeight: 350 }}>
              <Routes>
                <Route path="/home" element={<Home />} />

                <Route
                  path="/contract/:hash"
                  element={
                    <Security>
                      <ContractDetail />
                    </Security>
                  }
                />
                <Route
                  path="/management"
                  element={
                    <Security>
                      <Management />
                    </Security>
                  }
                />

                <Route path="/*" element={<Home />} />
              </Routes>
            </Col>

            <Col span={24}>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Col>
          </Row>
        </Content>
      </Layout>
    </UILoader>
  )
}

export default App
