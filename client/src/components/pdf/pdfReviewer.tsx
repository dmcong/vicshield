import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Viewer, Worker } from '@react-pdf-viewer/core'

import { Row, Col } from 'antd'
import { CSSProperties, memo } from 'react'

function PdfReviewer({
  base64Str,
  style = {},
}: {
  base64Str: string
  style?: CSSProperties
}) {
  const pdfContentType = 'application/pdf'

  const base64toBlob = (data: string) => {
    const base64WithoutPrefix = data.substr(
      `data:${pdfContentType};base64,`.length,
    )

    const bytes = atob(base64WithoutPrefix)
    let length = bytes.length
    let out = new Uint8Array(length)
    while (length--) {
      out[length] = bytes.charCodeAt(length)
    }

    return new Blob([out], { type: pdfContentType })
  }
  const blob = base64toBlob(base64Str)
  const url = URL.createObjectURL(blob)

  return (
    <Row justify="center">
      <Col span={24}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <div
            style={{
              border: '1px solid rgba(0, 0, 0, 0.3)',
              height: '300px',
              ...style,
            }}
          >
            <Viewer fileUrl={url} theme="dark" />
          </div>
        </Worker>
      </Col>
    </Row>
  )
}

export default memo(PdfReviewer)
