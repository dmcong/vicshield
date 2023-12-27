import { Row, Col } from 'antd'

import BannerHero from './bannerHero/bannerHero'
import CharacteristicsBanner from './characteristicsBanner/characteristicsBanner'
import SolutionBanner from './solutionBanner/solutionBanner'
import FeatureBanner from './featureBanner/featureBanner'
import Pricing from './pricing'
import RoadMap from './roadMap/roadMap'

const Home = () => {
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
        <SolutionBanner />
      </Col>

      <Col span={24}>
        <FeatureBanner />
      </Col>

      <Col span={24}>
        <RoadMap />
      </Col>
      <Col span={24}>
        <Pricing />
      </Col>
    </Row>
  )
}

export default Home
