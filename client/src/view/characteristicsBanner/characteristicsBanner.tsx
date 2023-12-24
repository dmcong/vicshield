import { Row, Col, Typography, Divider, Card } from 'antd'
import { COLORS } from '../../themes/colors'
import React from 'react'
import { Styles } from '../../type/styles.type'
import { Image } from 'antd/es'
import images from '../../static/images'

interface ItemCharacteristics {
  key: number
  image: string
  content: string
}

const items: ItemCharacteristics[] = [
  {
    key: 1,
    image: images['rubic1'],
    content: 'Gasless Approval Thanks to VRC25',
  },
  {
    key: 2,
    image: images['rubic2'],
    content: 'Streamline OperationManagement',
  },
  {
    key: 3,
    image: images['rubic3'],
    content: 'Non-OperationManagement',
  },
  {
    key: 4,
    image: images['rubic4'],
    content: 'Data Availability for insightful decision-making',
  },
]

const CharacteristicsBanner = () => {
  const renderItems = () => {
    return items.map((item: ItemCharacteristics, index) => {
      return (
        <Col span={5} key={index}>
          <Card
            style={{
              height: 272,
              backgroundColor: COLORS.CARD,
              borderRadius: 32,
              borderColor: COLORS.BORDER_CARD,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <div>
                <Image src={item.image} preview={false} />
              </div>
            </div>
            <p style={styles.cardText}>{item.content}</p>
          </Card>
        </Col>
      )
    })
  }
  return (
    <>
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
                Seamless integrations across EVM and non-EVM chains, fortified
                by cutting-edge MPC-TSS and ZK innovations.
              </p>
            </Col>
          </Col>
        </Row>
        <Divider style={{ borderWidth: 0 }} />
        <Row justify={'center'} style={{ gap: 20 }}>
          {renderItems()}
        </Row>
      </Col>
    </>
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
  cardText: {
    textAlign: 'center',
  },
}

export default CharacteristicsBanner
