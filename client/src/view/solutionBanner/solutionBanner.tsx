import { Row, Col, Typography, Button, Image, Divider } from 'antd'
import { COLORS } from '../../themes/colors'
import React from 'react'
import images from '../../static/images'
import { Styles } from '../../type/styles.type'
import { useAppSelector } from '../../store/rootStore'
import { selectIsMobile } from '../../store/common/common.slice'

const SolutionBanner = () => {
  const isMobile = useAppSelector(selectIsMobile)

  const renderImage = () => {
    return (
      <div>
        <Image preview={false} src={images['solution']} />
      </div>
    )
  }

  const renderContentResponsive = () => {
    if (!isMobile) {
      return (
        <Row style={styles.rowContent}>
          <Col span={11} style={styles.flexImage}>
            {renderImage()}
          </Col>
          <Col span={2} />
          <Col flex={1} span={11} style={styles.flexContainer}>
            <Col flex={4} style={styles.flexVicShield}>
              <Typography.Title style={styles.vicShield}>
                vicshield
              </Typography.Title>
              <Typography.Text style={styles.vicShieldContent}>
                Over 1.8 billion dollars are locked in unscalable, outdated
                multisig infrastructure.
              </Typography.Text>
              <Col>
                <Button style={styles.button}>
                  <Typography.Text style={styles.buttonText}>
                    Learn more
                  </Typography.Text>
                </Button>
              </Col>
            </Col>
            <Divider />
            <Col flex={1} style={styles.flexElement}>
              <Typography.Title style={styles.vicShield}>
                shield as service
              </Typography.Title>
            </Col>
            <Divider />
            <Col flex={1} style={styles.flexElement}>
              <Typography.Title style={styles.vicShield}>
                scalability
              </Typography.Title>
            </Col>
          </Col>
        </Row>
      )
    }
    return (
      <Col flex={1} span={24} style={styles.flexContainer}>
        <Col
          flex={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <Typography.Title style={styles.vicShield}>
            vicshield
          </Typography.Title>
          <Col style={styles.flexImage}>{renderImage()}</Col>
          <Typography.Text style={styles.vicShieldContent}>
            Over 1.8 billion dollars are locked in unscalable, outdated multisig
            infrastructure.
          </Typography.Text>
          <Col>
            <Button style={styles.button}>
              <Typography.Text style={styles.buttonText}>
                Learn more
              </Typography.Text>
            </Button>
          </Col>
        </Col>
        <Divider />
        <Col flex={1} style={styles.flexElement}>
          <Typography.Title style={styles.vicShield}>
            shield as service
          </Typography.Title>
        </Col>
        <Divider />
        <Col flex={1} style={styles.flexElement}>
          <Typography.Title style={styles.vicShield}>
            scalability
          </Typography.Title>
        </Col>
      </Col>
    )
  }
  return (
    <Row style={styles.container}>
      <Col span={24} style={isMobile ? undefined : styles.colTitleContent}>
        <Col>
          <Typography.Title style={styles.title}>Solutions</Typography.Title>
        </Col>
        <Divider className={'borderNone'} />
        <Col>
          <p style={styles.content}>
            Our platform strives to revolutionize digital signature security by
            eradicating the vulnerabilities inherent in traditional single-key
            custody models.
          </p>
        </Col>
        <Divider className={'borderNone'} />
      </Col>
      {renderContentResponsive()}
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
    width: 'auto',
    backgroundColor: COLORS.PRIMARY,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  vicShield: {
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.WHITE,
    textTransform: 'uppercase',
  },
  vicShieldContent: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.WHITE,
  },
  flexElement: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flexVicShield: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flexImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  rowContent: {
    width: '100%',
  },
  colTitleContent: {
    padding: '0 250px',
  },
}

export default SolutionBanner
