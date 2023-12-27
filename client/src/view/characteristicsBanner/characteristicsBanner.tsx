import { Row, Col, Typography, Divider, Card } from 'antd'
import { COLORS } from '../../themes/colors'
import React, { useCallback } from 'react'
import { Styles } from '../../type/styles.type'
import { Image } from 'antd/es'
import images from '../../static/images'
import useIsMobile from '../../hooks/system/useIsMobile'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ItemCharacteristics {
  key: number
  image: string
  title: string

  content: string

  subContent: string
}

const items: ItemCharacteristics[] = [
  {
    key: 1,
    image: images['chart1'],
    title: 'Data Privacy & Security',
    subContent: 'Signature timestamp on with fully transparent action history',
    content: 'No manipulation from centralized authority',
  },
  {
    key: 2,
    image: images['chart2'],
    title: 'Zero Gas Transaction',
    subContent: 'Thanks to VRC25 Token Standard',
    content: '',
  },
  {
    key: 3,
    image: images['chart3'],
    title: 'Operation Management Streamline',
    subContent: 'Simplify organizational & administrative process',
    content: '100% compliant',
  },
  {
    key: 4,
    image: images['chart4'],
    title: 'Data Availability & Preservation',
    subContent: 'Through decentralized storage',
    content: '',
  },
]

const CharacteristicsBanner = () => {
  const isMobile = useIsMobile()

  const renderItemsMobile = () => {
    return items.map((item: ItemCharacteristics, index) => {
      return <SwiperSlide key={index}>{renderCardImage(item)}</SwiperSlide>
    })
  }

  const renderItemDesktop = () => {
    return (
      <Row gutter={[16, 16]}>
        <Col span={24}>{renderCardImage(items[0])}</Col>
        <Col span={8}>{renderCardImage(items[1])}</Col>
        <Col span={8}>{renderCardImage(items[2])}</Col>
        <Col span={8}>{renderCardImage(items[3])}</Col>
      </Row>
    )
  }

  const renderCardImage = useCallback(
    (item: ItemCharacteristics) => {
      return (
        <Card
          style={{
            padding: '32px 0px',
            backgroundColor: COLORS.CARD,
            borderRadius: 32,
            borderColor: COLORS.BORDER_CARD,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
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
          <div
            style={{
              height: isMobile ? 200 : 100,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {isMobile ? (
              <>
                <p style={styles.cardTitle}>{item.title}</p>
                <li style={styles.cardText}>{item.subContent}</li>
                <li style={styles.cardText}>{item.content}</li>
              </>
            ) : (
              <>
                <p style={styles.cardTitle}>{item.title}</p>
                <p style={styles.cardText}>{item.subContent}</p>
                <p style={styles.cardText}>{item.content}</p>
              </>
            )}
          </div>
        </Card>
      )
    },
    [isMobile],
  )

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
      </Col>
      {isMobile ? (
        <Swiper draggable={isMobile} spaceBetween={20} slidesPerView={1.5}>
          {renderItemsMobile()}
        </Swiper>
      ) : (
        renderItemDesktop()
      )}
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
    fontWeight: '400',
    textAlign: 'center',
    color: COLORS.WHITE,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
}

export default CharacteristicsBanner
