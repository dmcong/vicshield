import React from 'react'
import { Col, Image, Row, Typography } from 'antd'
import images from './static/images'
import { Styles } from './type/styles.type'
import { useNavigate } from 'react-router-dom'

const styles: Styles = {
  layout: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  vicShield: {
    fontWeight: 'bold',
  },
}
const VictionIcon = () => {
  const navigate = useNavigate()
  const handleNavigateHome = () => {
    navigate('/')
  }
  return (
    <Row
      onClick={handleNavigateHome}
      style={{ cursor: 'pointer' }}
      align={'middle'}
    >
      <Col>
        <Image width={51.94} src={images['viction']} preview={false} />
      </Col>
      <Col>
        <Typography.Text style={styles.vicShield}>VicShield</Typography.Text>
      </Col>
    </Row>
  )
}

export default VictionIcon
