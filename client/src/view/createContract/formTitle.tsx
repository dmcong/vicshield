import { Typography } from 'antd'
import React from 'react'

type Props = {
  text: string
}

const FormTitle = ({ text }: Props) => {
  return <Typography.Text className="form-title">{text}</Typography.Text>
}

export default FormTitle
