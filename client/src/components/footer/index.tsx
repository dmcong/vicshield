import { Divider, Layout } from 'antd'
import FooterSubscription from './FooterSubscription'
import FooterContact from 'components/footer/FooterContact'

import './index.less'

function Footer() {
  return (
    <Layout.Footer
      style={{
        background: '#111827',
        borderRadius: 16,
        padding: '64px 0',
        fontSize: 16,
      }}
    >
      <FooterSubscription />

      <Divider style={{ margin: '55px 0' }} />

      <FooterContact />
    </Layout.Footer>
  )
}

export default Footer
