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
import Footer from 'components/footer'
import Pricing from 'view/pricing'

import './index.less'
import CreateContract from './createContract'
import ContractsProvider from 'providers/contract.provider'
import RoadMap from './roadMap/roadMap'

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
                <Col span={24} style={{ minHeight: 350 }}>
                  <Routes>
                    <Route path="/home" element={<Home />} />

                    <Route
                      path="/create-contract"
                      element={
                        <ContractsProvider>
                          <CreateContract />
                        </ContractsProvider>
                      }
                    />
                    <Route
                      path="/contract/:hash"
                      element={
                        <ContractsProvider>Contract details</ContractsProvider>
                      }
                    />
                    <Route
                      path="/management"
                      element={
                        <ContractsProvider>
                          Contract management
                        </ContractsProvider>
                      }
                    />
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
