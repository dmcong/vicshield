import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Col, Layout, Row } from 'antd'
import Home from './home'
import UILoader from 'uiloader'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TopMenu from 'components/header/topMenu'
import Footer from 'components/footer'

import CreateContract from './createContract'
import ContractsProvider from 'providers/contract.provider'
import ContractManagement from './contractManagement/contractManagement'
import ContractDetail from 'view/contractDetail/ContractDetail'
import ContractOverview from 'view/contract-overview'
import ModalSubscription from 'components/modal/ModalSubscription'

import './index.less'

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
                    <Route path="/contract" element={<ContractOverview />} />

                    <Route
                      path="/contract/:id"
                      element={
                        <ContractsProvider>
                          <ContractDetail />
                        </ContractsProvider>
                      }
                    />
                    <Route
                      path="/management"
                      element={
                        <ContractsProvider>
                          <ContractManagement />
                        </ContractsProvider>
                      }
                    />
                    <Route path="/*" element={<Navigate to="/home" />} />
                  </Routes>
                </Col>

                <Col span={24}>
                  <Footer />
                </Col>
              </Row>

              <ModalSubscription />
            </Layout.Content>
          </Col>
        </Row>
      </Layout>
    </UILoader>
  )
}

export default App
