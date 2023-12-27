import { Button, Col, Row, Space, Typography } from 'antd'
import { Upload } from 'antd/es'
import { RcFile } from 'antd/lib/upload'
import PdfViewer from 'components/pdf/pdfViewer'
import { useState } from 'react'
import { asyncWait } from 'utils'

type Props = {
  onChange: (val: string) => void
  value: string
}
const UploadFile = ({ onChange, value }: Props) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePdfFileChange = (selectedFile: RcFile) => {
    if (selectedFile) {
      setSuccess(false)

      let reader = new FileReader()
      reader.readAsDataURL(selectedFile)
      reader.onloadend = async (e: any) => {
        onChange(e.target.result)
        setSuccess(true)
      }
    }
  }

  return (
    <Upload.Dragger
      name="file"
      multiple={false}
      accept={'application/pdf'}
      //   maxCount={1}
      beforeUpload={async (file) => {
        setLoading(true)
        await asyncWait(500)
        try {
          if (file.type !== 'application/pdf') return // Throw error
          handlePdfFileChange(file)
          return false
        } catch (error) {
        } finally {
          setLoading(false)
        }
      }}
      style={{ border: 'none', background: 'transparent' }}
    >
      <Row className="inner-container">
        <Col span={24} className="inner-border">
          {success ? (
            <Space direction="vertical" size={15} align="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#4caf50"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                />
                <path
                  fill="#ccff90"
                  d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"
                />
              </svg>
              <Typography.Text>Upload file successfully</Typography.Text>
              <PdfViewer base64Str={value} title="" />
            </Space>
          ) : (
            <Space direction="vertical" size={18} align="center">
              <div className="icon-upload">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <path
                    d="M6.33347 22.4685C5.24998 21.3299 4.43263 19.9526 3.94331 18.4409C3.45399 16.9293 3.30554 15.3229 3.5092 13.7435C3.71286 12.1641 4.2633 10.653 5.11881 9.32483C5.97433 7.99663 7.11248 6.8861 8.44708 6.07735C9.78167 5.26861 11.2777 4.78286 12.8218 4.65689C14.366 4.53093 15.9177 4.76806 17.3596 5.35031C18.8014 5.93257 20.0955 6.84469 21.1439 8.01758C22.1923 9.19047 22.9674 10.5934 23.4105 12.12H26.021C27.429 12.1199 28.7998 12.5855 29.9307 13.4482C31.0617 14.3109 31.893 15.5248 32.3017 16.9107C32.7104 18.2966 32.6749 19.781 32.2004 21.1446C31.7259 22.5082 30.8377 23.6786 29.6668 24.483M18 18.12V31.62M18 18.12L23.8333 24.12M18 18.12L12.1667 24.12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Typography.Text>
                Drag and Drop your contract file here
              </Typography.Text>
              <Button type="primary" className="btn-upload">
                <Space>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_448_8242)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.9045 3.95018L14.4143 1.41465C13.8267 0.81637 13.0002 0.473389 12.1461 0.473389H4.16467C3.10231 0.473389 2.23821 1.30748 2.23821 2.33296V6.06752H1.92646C0.864096 6.06752 0 6.90162 0 7.92709V14.8715C0 15.897 0.864096 16.7311 1.92646 16.7311H2.23821V18.6138C2.23821 19.6393 3.10231 20.4734 4.16467 20.4734H15.8353C16.8977 20.4734 17.7618 19.6393 17.7618 18.6138V16.7311H18.0735C19.1359 16.7311 20 15.897 20 14.8715V7.92709C20 6.90162 19.1359 6.06752 18.0735 6.06752H17.7618V6.0259C17.7618 5.25039 17.4572 4.513 16.9045 3.95018ZM3.69304 2.33296C3.69304 2.08204 3.90473 1.87771 4.16467 1.87771H12.1461C12.6024 1.87771 13.0446 2.0612 13.3585 2.38086L15.8487 4.91639C16.1443 5.21737 16.307 5.61116 16.307 6.0259V6.06752H3.69304V2.33296ZM18.5452 14.8715C18.5452 15.1225 18.3335 15.3268 18.0735 15.3268H1.92646C1.66652 15.3268 1.45484 15.1225 1.45484 14.8715V7.92709C1.45484 7.67618 1.66652 7.47184 1.92646 7.47184H18.0735C18.3335 7.47184 18.5452 7.67618 18.5452 7.92709V14.8715ZM16.307 18.6138C16.307 18.8647 16.0953 19.0691 15.8353 19.0691H4.16467C3.90473 19.0691 3.69304 18.8647 3.69304 18.6138V16.7311H16.307V18.6138Z"
                        fill="#F4F6FB"
                      />
                      <path
                        d="M5.42958 9.01318H4.28901C4.14578 9.01318 4.0084 9.06785 3.90725 9.16509C3.8061 9.26234 3.74954 9.3942 3.75 9.53154L3.75794 13.4566C3.75794 13.7419 3.99927 13.9733 4.29695 13.9733C4.59462 13.9733 4.83595 13.7419 4.83595 13.4566V12.2648C5.05633 12.2638 5.29177 12.2628 5.42958 12.2628C6.37664 12.2628 7.14717 11.5339 7.14717 10.638C7.14717 9.74208 6.37664 9.01318 5.42958 9.01318ZM5.42958 11.2294C5.29055 11.2294 5.05425 11.2304 4.83301 11.2315C4.83186 11.0115 4.83085 10.7746 4.83085 10.638C4.83085 10.5211 4.83024 10.2765 4.82959 10.0466H5.42954C5.77623 10.0466 6.06912 10.3174 6.06912 10.638C6.06912 10.9586 5.77626 11.2294 5.42958 11.2294Z"
                        fill="#F4F6FB"
                      />
                      <path
                        d="M10.0143 9.01318H8.88853C8.7454 9.01318 8.60814 9.06775 8.50702 9.16485C8.4059 9.26196 8.34924 9.39365 8.34952 9.53085C8.34952 9.53089 8.35754 13.3285 8.35757 13.3423C8.35811 13.4793 8.41539 13.6106 8.51687 13.7071C8.61787 13.8032 8.75435 13.8571 8.89658 13.8571H8.89862C8.93265 13.857 9.73566 13.854 10.0567 13.8487C11.2746 13.8283 12.1586 12.8132 12.1586 11.4351C12.1586 9.98651 11.2969 9.01318 10.0143 9.01318ZM10.0379 12.8154C9.89826 12.8178 9.65808 12.8197 9.43378 12.821C9.43227 12.3722 9.42933 10.513 9.4285 10.0466H10.0143C11.0037 10.0466 11.0806 11.1094 11.0806 11.4352C11.0806 12.1135 10.7582 12.8034 10.0379 12.8154Z"
                        fill="#F4F6FB"
                      />
                      <path
                        d="M15.711 10.0068C16.0087 10.0068 16.25 9.77545 16.25 9.49009C16.25 9.20473 16.0087 8.97339 15.711 8.97339H14.063C13.7653 8.97339 13.524 9.20473 13.524 9.49009V13.388C13.524 13.6734 13.7653 13.9047 14.063 13.9047C14.3606 13.9047 14.602 13.6734 14.602 13.388V11.9189H15.5801C15.8778 11.9189 16.1191 11.6875 16.1191 11.4022C16.1191 11.1168 15.8778 10.8855 15.5801 10.8855H14.602V10.0068H15.711Z"
                        fill="#F4F6FB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_448_8242">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.473389)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <Typography.Text>Select PDF File</Typography.Text>
                </Space>
              </Button>
            </Space>
          )}
        </Col>
      </Row>
    </Upload.Dragger>
  )
}

export default UploadFile
