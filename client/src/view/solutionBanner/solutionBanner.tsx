import {
  Row,
  Col,
  Typography,
  Button,
  Image,
  Divider,
  Carousel,
  Collapse,
} from 'antd'
import { COLORS } from '../../themes/colors'
import React, { useEffect, useState } from 'react'
import images from '../../static/images'
import { Styles } from '../../type/styles.type'
import useIsMobile from 'hooks/system/useIsMobile'

// const styles: Styles = {
//   container: {
//     display: 'flex',
//     flex: 1,
//   },
//   content: {
//     fontSize: 18,
//     fontWeight: '400',
//     color: COLORS.WHITE,
//     textAlign: 'center',
//     maxWidth: 750,
//     margin: '0 auto',
//   },
//   title: {
//     fontSize: 54,
//     fontWeight: 'bold',
//     color: COLORS.WHITE,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   button: {
//     height: 46,
//     borderRadius: 10,
//     padding: '0 40px 0',
//     width: 'auto',
//     backgroundColor: COLORS.PRIMARY,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: COLORS.WHITE,
//   },
//   vicShield: {
//     fontSize: 28,
//     fontWeight: '600',
//     color: COLORS.WHITE,
//     textTransform: 'uppercase',
//   },
//   vicShieldContent: {
//     fontSize: 18,
//     fontWeight: '400',
//     color: COLORS.WHITE,
//   },
//   flexElement: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   flexVicShield: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     gap: 20,
//   },
//   flexContainer: {
//     display: 'flex',
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   flexImage: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   rowContent: {},
//   colTitleContent: {
//     padding: '0 250px',
//   },
// }

const solutions = [
  {
    id: '1',
    title: 'VICSHIELD',
    description:
      'Provide comprehensive digital signature and contract management solution with non-fungible data and transparent processes for individuals and businesses based on subscription model billed monthly and annually.',
    image: images['solution1'],
  },
  {
    id: '2',
    title: 'SHIELD AS SERVICE',
    description:
      'Over 1.8 billion dollars are locked in unscalable, outdated multisig infrastructure.',
    image: images['solution2'],
  },
  {
    id: '3',
    title: 'Scalability',
    description:
      'Over 1.8 billion dollars are locked in unscalable, outdated multisig infrastructure.',
    image: images['solution3'],
  },
]
const SolutionBanner = () => {
  const isMobile = useIsMobile()

  const [selectedKey, setSelectedKey] = useState<string | string[]>(['1'])

  const [src, setSrc] = useState<string>(solutions[0].image)

  useEffect(() => {
    const imgSrc = solutions.find((e) => e.id === selectedKey[0])?.image
    if (imgSrc) {
      setSrc(imgSrc)
    }
  }, [selectedKey])

  return (
    <Row align="middle">
      <Col span={24}>
        <Typography.Title
          style={{ fontSize: !isMobile ? 54 : 28, textAlign: 'center' }}
        >
          Solutions
        </Typography.Title>
      </Col>

      <Col span={24}>
        <Typography.Paragraph
          style={{
            fontSize: 18,
            maxWidth: 750,
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          Our platform strives to revolutionize digital signature security by
          eradicating the vulnerabilities inherent in traditional single-key
          custody models.
        </Typography.Paragraph>
      </Col>

      {!isMobile && (
        <Col span={12}>
          <Row justify="center" align="middle">
            <Image src={src} preview={false} />
          </Row>
        </Col>
      )}

      <Col span={!isMobile ? 12 : 24} style={{ marginTop: !isMobile ? 0 : 32 }}>
        <Collapse
          bordered={false}
          ghost
          activeKey={selectedKey}
          onChange={(key) => key?.length && setSelectedKey(key)}
          accordion
          expandIcon={() => {
            return null
          }}
        >
          {solutions.map((item, index) => {
            return (
              <>
                <Collapse.Panel
                  key={item.id}
                  header={
                    <Typography.Title
                      style={{
                        fontSize: !isMobile ? 28 : 20,
                      }}
                      level={5}
                    >
                      {item.title.toUpperCase()}
                    </Typography.Title>
                  }
                >
                  {isMobile && <Image src={item.image} preview={false} />}
                  <Typography.Paragraph style={{ fontSize: 18 }}>
                    {item.description}
                  </Typography.Paragraph>
                </Collapse.Panel>
                {index !== solutions.length - 1 && <Divider />}
              </>
            )
          })}
        </Collapse>
      </Col>
    </Row>
  )
}

export default SolutionBanner
