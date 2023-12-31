import { Button, Col, Row, Typography } from 'antd'

import useIsMobile from 'hooks/system/useIsMobile'
import Brand from 'components/system/brand'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SpaceVertical from 'components/system/space-vervical/SpaceVertical'

import './index.less'
import { useOpenSubscription } from 'stores/useOpenSubscription'

const LIST_FEATURE = [
  'One ID',
  'In App Chatting',
  'Upload Docs',
  'Notifications',
  'Status Update',
  'Sub-Signatures',
  'Tracking',
]

function FooterSubscription() {
  const isMobile = useIsMobile()

  const { setOpen } = useOpenSubscription()

  return (
    <Row gutter={[0, 55]}>
      <Col span={24} style={{ padding: !isMobile ? '0 120px' : '0 16px' }}>
        <Brand />
        <Row
          justify={!isMobile ? 'space-between' : 'start'}
          wrap={isMobile}
          style={{ marginTop: 16 }}
          gutter={[16, 16]}
        >
          <Col style={{ fontSize: 21 }}>
            <Typography.Text style={{ display: 'block' }}>
              Built for the future.
            </Typography.Text>
            <Typography.Text style={{ display: 'block' }}>
              Available today.
            </Typography.Text>
          </Col>
          <Col span={!isMobile ? undefined : 24}>
            <Button
              type="primary"
              style={{ height: 46, padding: '0 16px' }}
              onClick={() => setOpen(true)}
            >
              <Typography.Text>Get Early Access</Typography.Text>
            </Button>
          </Col>
        </Row>
      </Col>

      <Col className="swiper-wrapper-root">
        <SpaceVertical size={24}>
          <Swiper
            loop
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            }}
            speed={6000}
            spaceBetween={20}
            slidesPerView={isMobile ? 3 : 5}
            modules={[Autoplay]}
          >
            {LIST_FEATURE.concat(LIST_FEATURE).map((feature, index) => (
              <SwiperSlide key={index}>
                <Button
                  style={{
                    borderRadius: 50,
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '4px 20px',
                    fontSize: 20,
                    height: 42,
                  }}
                >
                  <Typography.Text>{feature}</Typography.Text>
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            loop
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              stopOnLastSlide: false,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            speed={6000}
            spaceBetween={20}
            slidesPerView={isMobile ? 3 : 5}
            modules={[Autoplay]}
          >
            {LIST_FEATURE.concat(LIST_FEATURE)
              .reverse()
              .map((feature, index) => (
                <SwiperSlide key={index}>
                  <Button
                    style={{
                      borderRadius: 50,
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '4px 20px',
                      fontSize: 20,
                      height: 42,
                    }}
                  >
                    <Typography.Text>{feature}</Typography.Text>
                  </Button>
                </SwiperSlide>
              ))}
          </Swiper>
        </SpaceVertical>
      </Col>
    </Row>
  )
}

export default FooterSubscription
