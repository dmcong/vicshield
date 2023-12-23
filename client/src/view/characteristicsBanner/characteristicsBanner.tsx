import { Row, Col, Typography } from 'antd'
import { COLORS } from '../../themes/colors'
import React from 'react'
import { Styles } from '../../type/styles.type'

const CharacteristicsBanner = () => {
  return (
    <Row>
      <Col span={16}>
        <Col>
          <Typography.Title style={styles.title}>
            Characteristics
          </Typography.Title>
        </Col>
        <Col>
          <Typography.Title level={5} style={styles.content}>
            Seamless integrations across EVM and non-EVM chains, fortified by
            cutting-edge MPC-TSS and ZK innovations.
          </Typography.Title>
        </Col>
      </Col>
    </Row>
  )
}

const styles: Styles = {
  container: {
    backgroundSize: 'cover',
    padding: '8px 100px',
  },
  content: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  title: {
    fontSize: 54,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  button: {
    height: 46,
    borderRadius: 10,
    padding: '0 40px 0',
    backgroundColor: COLORS.PRIMARY,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
}

export default CharacteristicsBanner
