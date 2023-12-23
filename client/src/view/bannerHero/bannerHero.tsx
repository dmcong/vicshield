import { Row, Col, Typography, Button, Image, Divider } from 'antd'
import { COLORS } from '../../themes/colors'
import React from 'react'
import images from '../../assets/images'
import { Styles } from '../../type/styles.type'

type TBanner = {
  title: string
  content: string
}

const BannerHero = (props: TBanner) => {
  const { title, content } = props

  return (
    <Row justify="center" style={styles.container}>
      <Col span={16}>
        <Col>
          <Typography.Title style={styles.title}>{title}</Typography.Title>
        </Col>
        <Divider className={'borderNone'} />
        <Col>
          <Typography.Text style={styles.content}>{content}</Typography.Text>
        </Col>
        <Divider className={'borderNone'} />
        <Col>
          <Button style={styles.button}>
            <Typography.Text style={styles.buttonText}>
              Launch now
            </Typography.Text>
          </Button>
        </Col>
      </Col>
      <Col span={8}>
        <Image preview={false} src={images['hero']} />
      </Col>
    </Row>
  )
}

const styles: Styles = {
  container: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '8px 100px',
  },
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
