import { Row, Col, Typography, Divider, Carousel, Card, Layout } from 'antd'
import { COLORS } from '../../themes/colors'
import React from 'react'
import { Styles } from '../../type/styles.type'
import { Content } from 'antd/lib/layout/layout'

interface ItemCharacteristics {
  key: number
  image: string
  content: string
}

const items: ItemCharacteristics[] = [
  {
    key: 1,
    image: '',
    content: 'Gasless Approval Thanks to VRC25',
  },
  {
    key: 2,
    image: '',
    content: 'Gasless Approval Thanks to VRC25',
  },
  {
    key: 3,
    image: '',
    content: 'Gasless Approval Thanks to VRC25',
  },
  {
    key: 4,
    image: '',
    content: 'Gasless Approval Thanks to VRC25',
  },
  {
    key: 5,
    image: '',
    content: 'Gasless Approval Thanks to VRC25',
  },
  {
    key: 6,
    image: '',
    content: 'Gasless Approval Thanks to VRC25',
  },
]

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
const CharacteristicsBanner = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  const renderItems = () => {
    return items.map((item: ItemCharacteristics, index) => {
      return (
        <Card style={{ width: 300, backgroundColor: 'rgba(74, 146, 254, 1)' }}>
          <p>{item.content}</p>
        </Card>
      )
    })
  }
  return (
    <Col span={24}>
      <Row justify={'center'}>
        <Col span={16}>
          <Col>
            <Typography.Title style={styles.title}>
              Characteristics
            </Typography.Title>
          </Col>
          <Col>
            <p style={styles.content}>
              Seamless integrations across EVM and non-EVM chains, fortified by
              cutting-edge MPC-TSS and ZK innovations.
            </p>
          </Col>
        </Col>
        <Row>
          <Card style={{ backgroundColor: 'rgba(74, 146, 254, 1)' }}>
            <p>Gasless Approval Thanks to VRC25</p>
          </Card>
          <Card style={{ backgroundColor: 'rgba(74, 146, 254, 1)' }}>
            <p>Gasless Approval Thanks to VRC25</p>
          </Card>
          <Card style={{ backgroundColor: 'rgba(74, 146, 254, 1)' }}>
            <p>Gasless Approval Thanks to VRC25</p>
          </Card>
          <Card style={{ backgroundColor: 'rgba(74, 146, 254, 1)' }}>
            <p>Gasless Approval Thanks to VRC25</p>
          </Card>
        </Row>
      </Row>
    </Col>
  )
}

const styles: Styles = {
  container: {
    backgroundSize: 'cover',
    padding: '8px 100px',
  },
  content: {
    fontSize: 18,
    color: COLORS.WHITE,
    textAlign: 'center',
    marginTop: 10,
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
