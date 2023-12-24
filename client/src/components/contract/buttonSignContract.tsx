import { useState } from 'react'

import { Button } from 'antd'
import { CheckCircleOutlined, HighlightOutlined } from '@ant-design/icons'

const ButtonSignContract = ({
  contractAddress,
}: {
  contractAddress: string
}) => {
  const [loading, setLoading] = useState(false)

  const handleSign = async () => {
    try {
      setLoading(true)

      window.notify({
        type: 'success',
        description: 'Sign contract successfully!',
      })
    } catch (error: any) {
      window.notify({
        type: 'error',
        description: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  // if (!contractSigner) return null
  //
  // if (!!signerData.state['singed'])
  //   return (
  //     <Button
  //       type="text"
  //       disabled
  //       icon={<CheckCircleOutlined />}
  //       style={{ color: '#2eb835' }}
  //     >
  //       Signed
  //     </Button>
  //   )
  return (
    <Button
      type="primary"
      onClick={handleSign}
      loading={loading}
      icon={<HighlightOutlined />}
    >
      Sign
    </Button>
  )
}

export default ButtonSignContract
