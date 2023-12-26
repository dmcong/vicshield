import { Grid } from 'antd'

const { useBreakpoint } = Grid

const useIsMobile = () => {
  const { lg, xl, xxl } = useBreakpoint()

  if (lg === undefined || xl === undefined || xxl === undefined)
    return undefined

  return !(lg || xl || xxl)
}

export default useIsMobile
