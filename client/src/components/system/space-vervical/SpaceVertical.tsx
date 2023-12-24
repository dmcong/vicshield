import { CSSProperties, ReactNode } from 'react'

import { Space, SpaceProps } from 'antd'

import './index.less'

type SpaceVerticalProps = {
  children?: ReactNode
  style?: CSSProperties
  direction?: SpaceProps['direction']
  size?: SpaceProps['size']
  align?: SpaceProps['align']
  block?: boolean
  className?: string
}

const SpaceVertical = ({
  children,
  style,
  direction = 'vertical',
  size = 8,
  align = 'start',
  block = true,
  className,
}: SpaceVerticalProps) => {
  const cln = block ? 'space-vertical-wrapper' : ''

  return (
    <Space
      style={{ width: '100%', ...style }}
      size={size}
      direction={direction}
      align={align}
      className={cln + ` ${className}`}
    >
      {children}
    </Space>
  )
}

export default SpaceVertical
