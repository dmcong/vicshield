import React from 'react'
import { Carousel, Col, Image, Row } from 'antd'
import images from '../../static/images'
import { COLORS } from '../../themes/colors'
import useIsMobile from 'hooks/system/useIsMobile'

const RoadMap = () => {
  const isMobile = useIsMobile()
  if (isMobile)
    return (
      <Row style={{ backgroundColor: COLORS.CARD }} justify={'center'}>
        <Col span={24}>
          <Image
            style={{ marginBottom: 20 }}
            src={images['theFutureMobile']}
            width="100%"
            preview={false}
          />
        </Col>

        <Col span={24}>
          <Carousel autoplay draggable style={{ width: '100%' }}>
            <Image width="100%" src={images['Q4_2023']} preview={false} />

            <Image width="100%" src={images['Q1_2024']} preview={false} />

            <Image width="100%" src={images['Q2_2024']} preview={false} />

            <Image width="100%" src={images['Q3_2024']} preview={false} />

            <Image width="100%" src={images['Q4_2024']} preview={false} />
          </Carousel>
        </Col>
      </Row>
    )

  return (
    <Row style={{ backgroundColor: COLORS.CARD }} justify={'center'}>
      <Image
        style={{ marginBottom: 20 }}
        src={images['theFuture']}
        preview={false}
      />
      <Image
        style={{ width: '100%' }}
        src={images['roadMapTotal']}
        preview={false}
      />
    </Row>
  )
}
export default RoadMap
