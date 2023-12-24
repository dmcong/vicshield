import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Col, Layout, Row } from 'antd'
import Home from './home'
import UILoader from 'uiloader'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TopMenu from 'components/header/topMenu'
import BannerHero from './bannerHero/bannerHero'
import CharacteristicsBanner from './characteristicsBanner/characteristicsBanner'
import SolutionBanner from './solutionBanner/solutionBanner'
import FeatureBanner from './featureBanner/featureBanner'

import './index.less'
import Footer from 'components/footer'

const App: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>()
  //choose the screen size

  // create an event listener

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
      <Layout className="app-container">
        <Row justify="center" gutter={[0, 40]}>
          <Col span={24}>
            <Row justify="center">
              <TopMenu />
            </Row>
          </Col>

          <Col span={24}>
            <Layout.Content>
              <Row justify="center" gutter={[0, 64]}>
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

                <Col span={24}>
                  <SolutionBanner />
                </Col>

                <Col span={24}>
                  <FeatureBanner />
                </Col>
                <Col span={24} style={{ minHeight: 350 }}>
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route
                      path="/contract/:hash"
                      element={<>/contract/:hash</>}
                    />
                    <Route path="/management" element={<>management</>} />
                    <Route path="/test-page" element={<>Test</>} />
                    <Route path="/*" element={<Home />} />
                  </Routes>
                </Col>

                <Col span={24}>
                  <Footer />
                </Col>
              </Row>
            </Layout.Content>
          </Col>
        </Row>
      </Layout>
    </UILoader>
  )
}

export default App
