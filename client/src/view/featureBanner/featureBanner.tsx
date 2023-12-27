import React from 'react'
import { Col, Divider, Image, Row, Typography } from 'antd'
import { Styles } from '../../type/styles.type'
import { COLORS } from '../../themes/colors'
import images from '../../static/images'
import useIsMobile from 'hooks/system/useIsMobile'
import FlipCard from 'components/system/flip-card'
import Icon from '@ant-design/icons'
import {
  ActivitiesIcon,
  CircleCheckIcon,
  ShieldCheckIcon,
} from 'static/images/icon'

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
            With OneID - Your Unified Multichain Identity across 80+ networks to
            unlock the infinite digital world by Nighty Eight, you can now
            conduct seamless transactions using personalized names, eliminating
            the complexities associated with cryptographic addresses.
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
            <Col>
              <li style={styles.cardContent}>Interactive In-app Chatting </li>
              <li style={styles.cardContent}>Flexible Contract Upload </li>
              <li style={styles.cardContent}>Real-time Notifications</li>
              <li style={styles.cardContent}>Instant Status Updates </li>
              <li style={styles.cardContent}>Integrated Tracking</li>
            </Col>
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
                Upload contract
              </Typography.Title>
            </Col>
            <Typography.Text style={styles.cardContent}>
              Within the Web3 ecosystem, signatures evolve to create digital
              contracts that are not only transparent and secure but also
              immutable. This transformative approach ensures trust, efficiency,
              and seamless interactions across decentralized platforms
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
            Stay seamlessly informed throughout the entire contract signing
            process, our robust notification system ensures that no crucial
            information goes unnoticed. Receive real-time updates on any actions
            taken within the signing progress,empowering you with instant
            insights into the status of your contracts.
          </Typography.Text>
        </Col>
      </Col>
    )
  }

  const renderStatusUpdate = () => {
    return (
      <FlipCard
        title="Status Update"
        icon=""
        iconFront={<Icon component={() => <ActivitiesIcon />} />}
        desc="Receive instant alerts on the progress of your documents from initiation to completion.
With real-time status updates, you'll always be in the loop, ensuring that you never miss a crucial milestone in your digital signing journey."
      />
    )
  }

  const renderSubSignature = () => {
    return (
      <FlipCard
        title="Sub-signature"
        icon=""
        iconFront={<Icon component={() => <ShieldCheckIcon />} />}
        desc="An innovative feature by VicShield that revolutionizes complex signing workflows. Empower multiple signatories within a single document to individually endorse specific sections, ensuring a streamlined and efficient signing process."
      />
    )
  }

  const renderTracking = () => {
    return (
      <FlipCard
        title="Tracking"
        icon=""
        iconFront={<Icon component={() => <CircleCheckIcon />} />}
        desc="Elevate your transactional experience with unparalleled transparency – discover the power of our Tracking feature. Now, tracking the time and signer details throughout the entire signature process is effortlessly at your fingertips, empowering you with the ability to monitor and manage every aspect of the signing timeline."
      />
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
