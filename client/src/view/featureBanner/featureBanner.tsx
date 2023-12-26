import React from 'react'
import { Col, Divider, Image, Row, Typography } from 'antd'
import { Styles } from '../../type/styles.type'
import { COLORS } from '../../themes/colors'
import images from '../../static/images'
import useIsMobile from 'hooks/system/useIsMobile'

const FeatureBanner = () => {
  const isMobile = useIsMobile()
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

  const renderNotifications = () => {
    return (
      <Col style={styles.card}>
        <Col style={styles.cardContentContainer}>
          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography.Title style={styles.notificationTitle}>
              Notifications
            </Typography.Title>
            <div>
              <Image preview={false} src={images['close']} />
            </div>
          </Row>
          <Typography.Text style={styles.cardContent}>
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography.Text>
        </Col>
      </Col>
    )
  }

  const renderStatusUpdate = () => {
    return (
      <Col style={styles.card}>
        <Row>
          <Col span={24} style={styles.cardContentContainer}>
            <Col>
              <Typography.Title style={styles.inAppChatting}>
                Status Update
              </Typography.Title>
            </Col>
            <Typography.Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </Typography.Text>
          </Col>
        </Row>
      </Col>
    )
  }

  const renderSubSignature = () => {
    return (
      <Col style={styles.card}>
        <Row>
          <Col span={24} style={styles.cardContentContainer}>
            <Col>
              <Typography.Title style={styles.inAppChatting}>
                Sub-signature
              </Typography.Title>
            </Col>
            <Typography.Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </Typography.Text>
          </Col>
        </Row>
      </Col>
    )
  }

  const renderTracking = () => {
    return (
      <Col style={styles.card}>
        <Row>
          <Col span={24} style={styles.cardContentContainer}>
            <Col>
              <Typography.Title style={styles.inAppChatting}>
                Tracking
              </Typography.Title>
            </Col>
            <Typography.Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </Typography.Text>
          </Col>
        </Row>
      </Col>
    )
  }

  const renderResponsive = () => {
    if (!isMobile) {
      return (
        <Col span={24}>
          <Row justify={'space-between'}>
            <Col span={7}>{renderOneId()}</Col>
            <Col span={16}>{renderInAppChatting()}</Col>
          </Row>
          <Divider className={'borderNone'} />
          <Row justify={'space-between'}>
            <Col span={16}>{renderUploadDoc()}</Col>
            <Col span={7}>{renderNotifications()}</Col>
          </Row>
          <Divider className={'borderNone'} />
          <Row justify={'space-between'}>
            <Col span={7}>{renderStatusUpdate()}</Col>
            <Col span={7}>{renderSubSignature()}</Col>
            <Col span={7}>{renderTracking()}</Col>
          </Row>
        </Col>
      )
    }
    return (
      <Col span={24}>
        <Col span={24}>{renderOneId()}</Col>
        <Divider className={'borderNone'} />

        <Col span={24}>{renderInAppChatting()}</Col>
        <Divider className={'borderNone'} />

        <Col span={24}>{renderUploadDoc()}</Col>
        <Divider className={'borderNone'} />

        <Col span={24}>{renderNotifications()}</Col>
        <Divider className={'borderNone'} />

        <Col span={24}>{renderStatusUpdate()}</Col>
        <Divider className={'borderNone'} />

        <Col span={24}>{renderSubSignature()}</Col>
        <Divider className={'borderNone'} />

        <Col span={24}>{renderTracking()}</Col>
      </Col>
    )
  }
  return (
    <Row justify={'center'} style={styles.container}>
      {renderTitle()}
      {renderResponsive()}
    </Row>
  )
}

const styles: Styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
  content: {
    fontSize: '1.125rem',
    fontWeight: '400',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  colTitleContent: {
    padding: '0 250px',
  },
  title: {
    fontSize: '3.375rem',
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  inAppChatting: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  notificationTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  cardContent: {
    fontSize: '1rem',
    fontWeight: '400',
    color: COLORS.WHITE,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
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
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
  },
  imageCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default FeatureBanner
