import React, { ReactNode } from 'react'
import { Card, Col, Image, Row, Typography } from 'antd'
import useIsMobile from 'hooks/system/useIsMobile'

import './index.less'
import Icon from '@ant-design/icons'
import { CloseIcon } from 'static/images/icon'

function FlipCard({
  title,
  icon,
  iconFront,
  maxWidth = 'unset',
  desc,
}: {
  title: string
  icon: any
  iconFront?: ReactNode | any
  maxWidth?: number | string
  desc: string
}) {
  const isMobile = useIsMobile()

  return (
    <div className="flip-card">
      {/* Back */}
      <Card
        bodyStyle={{ height: '100%' }}
        className="flip-card-back card-transparent flexible-radius"
      >
        <Row gutter={[16, 16]} style={{ position: 'relative' }}>
          {/*<Icon*/}
          {/*  component={() => <CloseIcon color="#0A8FDC" />}*/}
          {/*  style={{ position: 'absolute', right: 0, top: 0 }}*/}
          {/*/>*/}

          <Col span={24}>
            <Typography.Title level={4}>{title}</Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Text className={isMobile ? 'caption' : ''}>
              {desc}
            </Typography.Text>
          </Col>
        </Row>
      </Card>

      {/* Front */}
      <Card
        style={{ height: '100%' }}
        bodyStyle={{ height: '100%' }}
        className="ant-card flip-card-front"
      >
        <Row gutter={[16, 16]} align="stretch" style={{ height: '100%' }}>
          <Col span={24} className="icon-feature">
            {iconFront}
          </Col>
          <Col
            span={isMobile ? 24 : undefined}
            flex={isMobile ? 'none' : 'auto'}
          >
            <Typography.Title style={{ fontSize: 54 }}>
              {title}
            </Typography.Title>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default FlipCard
