import { Divider, Layout } from 'antd'
import FooterSubscription from './FooterSubscription'
import FooterContact from 'components/footer/FooterContact'

import './index.less'
import useIsMobile from 'hooks/system/useIsMobile'

function Footer() {
  const isMobile = useIsMobile()

  return (
    <Layout.Footer
      style={{
        background: '#111827',
        borderRadius: 16,
        padding: isMobile ? '32px 0' : '64px 0',
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
