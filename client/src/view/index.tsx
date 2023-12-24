import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Col, Divider, Layout, Row } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import Home from './home'
import UILoader from 'uiloader'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TopMenu from '../components/topMenu'
import BannerHero from './bannerHero/bannerHero'
import CharacteristicsBanner from './characteristicsBanner/characteristicsBanner'
import { useAppDispatch } from '../store/rootStore'
import { setIsMobile } from '../store/common/common.slice'
import SolutionBanner from './solutionBanner/solutionBanner'
import FeatureBanner from './featureBanner/featureBanner'

const App: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>()
  const dispatch = useAppDispatch()
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 900) {
      dispatch(setIsMobile(true))
    } else {
      dispatch(setIsMobile(false))
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  useEffect(function () {
    Aos.init({ duration: 1000 })
  }, [])

  // const loadData = useCallback(async () => {
  //   if (!loading) return
  //   await dispatch(initUsers())
  //
  //   setLoading(false)
  // }, [dispatch, loading])
  //
  // useEffect(() => {
  //   loadData()
  // }, [loadData])

  return (
    <UILoader>
      <Layout style={{ padding: '0 20px' }}>
        <Divider style={{ borderWidth: 0 }} />
        <Row justify={'center'}>
          <TopMenu />
        </Row>
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
            <Divider style={{ borderWidth: 0 }} />
            <Divider style={{ borderWidth: 0 }} />
            <Col span={24}>
              <CharacteristicsBanner />
            </Col>

            <Divider style={{ borderWidth: 0 }} />
            <Divider style={{ borderWidth: 0 }} />

            <Col span={24}>
              <SolutionBanner />
            </Col>

            <Divider style={{ borderWidth: 0 }} />
            <Divider style={{ borderWidth: 0 }} />
            <Col span={24}>
              <FeatureBanner />
            </Col>
            <Col span={24} style={{ minHeight: 350 }}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contract/:hash" element={<>/contract/:hash</>} />
                <Route path="/management" element={<>management</>} />
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
