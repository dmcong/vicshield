import React from 'react'
import { Image, Layout, Typography } from 'antd'
import images from './assets/images'
import { Styles } from './type/styles.type'

const styles: Styles = {
  layout: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  vicShield: {
    fontWeight: 'bold',
  },
}
const VictionIcon = () => {
  return (
    <Layout style={styles.layout}>
      <Image width={51.94} src={images['viction']} preview={false} />
      <Typography.Text style={styles.vicShield}>VicShield</Typography.Text>
    </Layout>
  )
}

export default VictionIcon
