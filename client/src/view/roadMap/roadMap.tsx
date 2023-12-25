import React from 'react'
import { Image, Row } from 'antd'
import images from '../../static/images'
import { COLORS } from '../../themes/colors'

const RoadMap = () => {
  const renderResponsive = () => {
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
  return renderResponsive()
}
export default RoadMap
