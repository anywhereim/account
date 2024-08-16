import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const shimmer = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -60% 0;
  }
`

const Skeleton = styled.div<{
  width: string | number
  height: string | number
}>(({ width, height }) => ({
  width,
  height,
  background: `linear-gradient(90deg, #cccccc 25%, #ffffff 50%, #cccccc 75%)`,
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s ease-in-out infinite`,
  borderRadius: '8px', // 모서리 둥글게 처리
}))

export default Skeleton
