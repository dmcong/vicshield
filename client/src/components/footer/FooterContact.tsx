import { Col, Row, Space, Typography } from 'antd'
import Icon, {
  GithubOutlined as GithubIcon,
  TwitterOutlined as TwitterIcon,
  YoutubeFilled as YoutubeIcon,
  RedditCircleFilled as RedditIcon,
  LinkedinFilled as LinkedinIcon,
} from '@ant-design/icons'

import { DiscordIcon } from 'static/images/icon'

import useIsMobile from 'hooks/system/useIsMobile'

function FooterContact() {
  const isMobile = useIsMobile()

  return (
    <Row
      style={{ padding: !isMobile ? '0 120px' : '0 16px' }}
      gutter={!isMobile ? undefined : [0, 32]}
    >
      <Col span={!isMobile ? 14 : 24}>
        <Row>
          <Col span={12}>
            <Row gutter={[0, 10]}>
              <Col span={24}>
                <Typography.Text type="secondary">Product</Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>
                  Notifications
                  <Typography.Text style={{ marginLeft: 16 }} type="secondary">
                    v1
                  </Typography.Text>
                </Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>
                  One ID
                  <Typography.Text style={{ marginLeft: 16 }} type="secondary">
                    v1
                  </Typography.Text>
                </Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>
                  Tracking
                  <Typography.Text style={{ marginLeft: 16 }} type="secondary">
                    v1
                  </Typography.Text>
                </Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>Status update</Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>Sub-Signatures</Typography.Text>
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Row gutter={[0, 10]}>
              <Col span={24}>
                <Typography.Text type="secondary">More</Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>Blog</Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>Documentation</Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>Help Center</Typography.Text>
              </Col>

              <Col span={24}>
                <Typography.Text>FAQ</Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col
        span={!isMobile ? 10 : 24}
        style={
          !isMobile
            ? {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }
            : { display: 'flex', justifyContent: 'center' }
        }
      >
        {!isMobile && <span />}

        <Space
          size={20}
          style={{
            fontSize: 29,
            color: '#96989B',
            background: '#2B3137',
            borderRadius: 50,
            padding: '8px 20px',
          }}
        >
          <GithubIcon size={29} />

          <Icon component={() => <DiscordIcon />} />

          <TwitterIcon />

          <YoutubeIcon />

          <RedditIcon />

          <LinkedinIcon />
        </Space>
      </Col>
    </Row>
  )
}

export default FooterContact
