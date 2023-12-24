import React from 'react'
import { useAppSelector } from '../../store/rootStore'
import { selectIsMobile } from '../../store/common/common.slice'
import { Col, Divider, Image, Row, Typography } from 'antd'
import { Styles } from '../../type/styles.type'
import { COLORS } from '../../themes/colors'
import images from '../../static/images'

const FeatureBanner = () => {
  const isMobile = useAppSelector(selectIsMobile)
  const renderTitle = () => {
    return (
      <Col span={24} style={isMobile ? undefined : styles.colTitleContent}>
        <Col>
          <Typography.Title style={styles.title}>Feature</Typography.Title>
        </Col>
        <Divider className={'borderNone'} />
        <Col>
          <p style={styles.content}>
            We have built our exchange from the ground up.
          </p>
        </Col>
        <Divider className={'borderNone'} />
      </Col>
    )
  }

  const renderOneId = () => {
    return (
      <Col style={styles.card}>
        <Col style={styles.flexStart}>
          <div>
            <Image preview={false} src={images['oneId']} />
          </div>
        </Col>
        <Col>
          <Typography.Text style={styles.cardContent}>
            Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
            dodol eiusmod tempor incididunt.
          </Typography.Text>
        </Col>
      </Col>
    )
  }

  const renderInAppChatting = () => {
    return (
      <Col style={styles.card}>
        <Row>
          <Col span={14} style={styles.cardContentContainer}>
            <Col>
              <Typography.Title style={styles.inAppChatting}>
                Chatting In-app
              </Typography.Title>
            </Col>
            <Typography.Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </Typography.Text>
          </Col>
          <Col span={10} style={styles.imageCardContainer}>
            <div>
              <Image preview={false} src={images['inAppChatting']} />
            </div>
          </Col>
        </Row>
      </Col>
    )
  }

  const renderUploadDoc = () => {
    return (
      <Col style={styles.card}>
        <Row>
          <Col span={14} style={styles.cardContentContainer}>
            <Col>
              <Typography.Title style={styles.inAppChatting}>
                Upload docs
              </Typography.Title>
            </Col>
            <Typography.Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </Typography.Text>
          </Col>
          <Col span={10} style={styles.imageCardContainer}>
            <div>
              <Image preview={false} src={images['uploadDoc']} />
            </div>
          </Col>
        </Row>
      </Col>
    )
  }

  return (
    <Row justify={'center'} style={styles.container}>
      {renderTitle()}
      <Col span={24}>
        <Row justify={'space-between'}>
          <Col span={8}>{renderOneId()}</Col>
          <Col span={15}>{renderInAppChatting()}</Col>
        </Row>
        <Divider className={'borderNone'} />
        <Row justify={'space-between'}>
          <Col span={15}>{renderUploadDoc()}</Col>
          <Col span={8}>{renderOneId()}</Col>
        </Row>
      </Col>
    </Row>
  )
}

const styles: Styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
  content: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  colTitleContent: {
    padding: '0 250px',
  },
  title: {
    fontSize: 54,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  inAppChatting: {
    fontSize: 54,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  cardContent: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.WHITE,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 360.2,
    padding: 40,
    backgroundColor: COLORS.CARD,
    borderRadius: 32,
    borderColor: COLORS.BORDER_CARD,
  },
  flexStart: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export default FeatureBanner
