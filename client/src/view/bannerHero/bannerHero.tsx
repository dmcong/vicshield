import { Row, Col, Typography, Button, Image, Divider } from 'antd'
import { COLORS } from '../../themes/colors'
import React from 'react'
import images from '../../static/images'
import { Styles } from '../../type/styles.type'
import { useAppSelector } from '../../store/rootStore'
import { selectIsMobile } from '../../store/common/common.slice'

type TBanner = {
  title: string
  content: string
}

const BannerHero = (props: TBanner) => {
  const { title, content } = props
  const isMobile = useAppSelector(selectIsMobile)
  return (
    <Row justify={!isMobile ? 'center' : undefined} style={styles.container}>
      <Col span={isMobile ? 24 : 16}>
        <Col>
          <Typography.Title style={styles.title}>{title}</Typography.Title>
        </Col>
        <Divider className={'borderNone'} />
        <Col>
          <Typography.Text style={styles.content}>{content}</Typography.Text>
        </Col>
        <Divider className={'borderNone'} />
        <Col>
          <Button
            style={{ ...styles.button, width: isMobile ? '100%' : 'auto' }}
          >
            <Typography.Text style={styles.buttonText}>
              Launch now
            </Typography.Text>
          </Button>
        </Col>
      </Col>
      {!isMobile && (
        <Col span={8}>
          <Image preview={false} src={images['hero']} />
        </Col>
      )}
    </Row>
  )
}

const styles: Styles = {
  container: {},
  content: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.WHITE,
  },
  title: {
    fontSize: 54,
    fontWeight: 'bold',
    color: COLORS.WHITE,
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
}

export default BannerHero
