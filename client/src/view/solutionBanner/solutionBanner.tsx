import { Row, Col, Typography, Button, Image, Divider, Carousel } from 'antd'
import { COLORS } from '../../themes/colors'
import React from 'react'
import images from '../../static/images'
import { Styles } from '../../type/styles.type'
import useIsMobile from 'hooks/system/useIsMobile'

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
    gap: 20,
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
  rowContent: {},
  colTitleContent: {
    padding: '0 250px',
  },
}

const items = [
  {
    image1: 'solution1',
    image2: '',
    image3: '',
    title1: 'vicshield',
    content1: '',
    button1: null,
    title2: 'shield as service',
    content2: '',
    button2: null,
    title3: 'vicshield network',
    content3:
      'Over 1.8 billion dollars are locked in unscalable, outdated multisig infrastructure.',
    button3: (
      <Col>
        <Button style={styles.button}>
          <Typography.Text style={styles.buttonText}>
            Learn more
          </Typography.Text>
        </Button>
      </Col>
    ),
  },
  {
    image1: '',
    image2: 'solution2',
    image3: '',
    title1: 'vicshield',
    content1: '',
    button1: null,
    title2: 'shield as service',
    content2:
      'Over 1.8 billion dollars are locked in unscalable, outdated multisig infrastructure.',
    button2: (
      <Col>
        <Button style={styles.button}>
          <Typography.Text style={styles.buttonText}>
            Learn more
          </Typography.Text>
        </Button>
      </Col>
    ),
    title3: 'vicshield network',
    content3: '',
    button3: null,
  },
  {
    image1: '',
    image2: '',
    image3: 'solution3',
    title1: 'vicshield',
    content1:
      'Over 1.8 billion dollars are locked in unscalable, outdated multisig infrastructure.',
    button1: (
      <Col>
        <Button style={styles.button}>
          <Typography.Text style={styles.buttonText}>
            Learn more
          </Typography.Text>
        </Button>
      </Col>
    ),
    title2: 'shield as service',
    content2: '',
    button2: null,
    title3: 'vicshield network',
    content3: '',
    button3: null,
  },
]
const SolutionBanner = () => {
  const isMobile = useIsMobile()

  const renderImage = (image: string) => {
    return (
      <div>
        <Image preview={false} src={images[image as keyof typeof images]} />
      </div>
    )
  }

  const renderContentResponsive = () => {
    if (!isMobile) {
      const itemRow = items.map((item, index) => {
        return (
          <Col key={index}>
            <Row justify={'center'} style={styles.rowContent}>
              <Col span={11} style={styles.flexImage}>
                {renderImage(
                  (item.image1 ||
                    item.image2 ||
                    item.image3) as keyof typeof images,
                )}
              </Col>
              <Col span={2} />
              <Col flex={1} span={11} style={styles.flexContainer}>
                <Col flex={1} style={styles.flexVicShield}>
                  {item.title1 && (
                    <Typography.Title style={styles.vicShield}>
                      {item.title1}
                    </Typography.Title>
                  )}

                  {item.content1 && (
                    <Typography.Text style={styles.vicShieldContent}>
                      {item.content1}
                    </Typography.Text>
                  )}
                  {item.button1 && item.button1}
                </Col>
                <Divider />
                <Col flex={1} style={styles.flexVicShield}>
                  {item.title2 && (
                    <Typography.Title style={styles.vicShield}>
                      {item.title2}
                    </Typography.Title>
                  )}

                  {item.content2 && (
                    <Typography.Text style={styles.vicShieldContent}>
                      {item.content2}
                    </Typography.Text>
                  )}
                  {item.button2 && item.button2}
                </Col>
                <Divider />
                <Col flex={1} style={styles.flexVicShield}>
                  {item.title3 && (
                    <Typography.Title style={styles.vicShield}>
                      {item.title3}
                    </Typography.Title>
                  )}

                  {item.content3 && (
                    <Typography.Text style={styles.vicShieldContent}>
                      {item.content3}
                    </Typography.Text>
                  )}
                  {item.button3 && item.button3}
                </Col>
              </Col>
            </Row>
          </Col>
        )
      })
      return (
        <Carousel draggable={true} autoplay dots={false}>
          {itemRow}
        </Carousel>
      )
    }
    const itemRow = items.map((item, index) => {
      return (
        <Col key={index}>
          <Col flex={1} span={24} style={styles.flexContainer}>
            <Col flex={1} style={styles.flexVicShield}>
              {item.title1 && (
                <Typography.Title style={styles.vicShield}>
                  {item.title1}
                </Typography.Title>
              )}
              {item.image1 && (
                <Col style={styles.flexImage}>{renderImage(item.image1)}</Col>
              )}
              {item.content1 && (
                <Typography.Text style={styles.vicShieldContent}>
                  {item.content1}
                </Typography.Text>
              )}
              {item.button1 && item.button1}
              <Divider />

              <Col flex={1} style={styles.flexVicShield}>
                {item.title2 && (
                  <Typography.Title style={styles.vicShield}>
                    {item.title2}
                  </Typography.Title>
                )}
                {item.image2 && (
                  <Col style={styles.flexImage}>{renderImage(item.image2)}</Col>
                )}
                {item.content2 && (
                  <Typography.Text style={styles.vicShieldContent}>
                    {item.content2}
                  </Typography.Text>
                )}

                {item.button2 && item.button2}
              </Col>
              <Divider />

              <Col flex={1} style={styles.flexVicShield}>
                {item.title3 && (
                  <Typography.Title style={styles.vicShield}>
                    {item.title3}
                  </Typography.Title>
                )}
                {item.image3 && (
                  <Col style={styles.flexImage}>{renderImage(item.image3)}</Col>
                )}
                {item.content3 && (
                  <Typography.Text style={styles.vicShieldContent}>
                    {item.content3}
                  </Typography.Text>
                )}
                {item.button3 && item.button3}
              </Col>
            </Col>
          </Col>
        </Col>
      )
    })
    return (
      <Carousel autoplay dots={false}>
        {itemRow}
      </Carousel>
    )
  }
  return (
    <Row style={styles.container}>
      <Col span={24} style={isMobile ? undefined : styles.colTitleContent}>
        <Col>
          <Typography.Title style={styles.title}>Solutions</Typography.Title>
        </Col>
        <Col>
          <p style={styles.content}>
            Our platform strives to revolutionize digital signature security by
            eradicating the vulnerabilities inherent in traditional single-key
            custody models.
          </p>
        </Col>
        <Divider className={'borderNone'} />
      </Col>
      <Row align={'middle'} justify={'center'}>
        <Col span={24}>{renderContentResponsive()}</Col>
      </Row>
    </Row>
  )
}

export default SolutionBanner
