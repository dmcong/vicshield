import { Row, Col } from 'antd'

import BannerHero from './bannerHero/bannerHero'
import CharacteristicsBanner from './characteristicsBanner/characteristicsBanner'
import SolutionBanner from './solutionBanner/solutionBanner'
import FeatureBanner from './featureBanner/featureBanner'
import Pricing from './pricing'
import RoadMap from './roadMap/roadMap'
import ScrollSpy from 'react-ui-scrollspy'
import { useScrollSpyStore } from 'stores/useScrollSpy.store'
import { useEffect } from 'react'

const Home = () => {
  const { setActiveSection } = useScrollSpyStore()

  useEffect(() => {
    return () => setActiveSection('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
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
        <ScrollSpy
          scrollThrottle={100}
          onUpdateCallback={(id) => {
            setActiveSection(id)
          }}
        >
          <Col span={24} style={{ marginTop: 64 }} id="solution-section">
            <SolutionBanner />
          </Col>

          <Col span={24} style={{ marginTop: 64 }} id="feature-section">
            <FeatureBanner />
          </Col>

          <Col span={24} style={{ marginTop: 64 }} id="roadmap-section">
            <RoadMap />
          </Col>
          <Col span={24} style={{ marginTop: 64 }} id="pricing-section">
            <Pricing />
          </Col>
        </ScrollSpy>
      </Col>
    </Row>
  )
}

export default Home
