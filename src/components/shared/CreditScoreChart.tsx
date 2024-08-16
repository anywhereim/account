import { colors } from '@/styles/colorPalette'
import { useEffect, useRef, useState } from 'react'

const creditScoreMax = 1_000

//유저의 신용점수
interface CreditScoreChartProps {
  width?: number
  height?: number
  score: number
}

export default function CreditScoreChart({
  score,
  width,
  height,
}: CreditScoreChartProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const [totalLength, setTotalLength] = useState(0)

  useEffect(() => {
    if (pathRef.current) {
      setTotalLength(pathRef.current.getTotalLength())
    }
  }, [])

  //그려줄 선의 길이
  const dashoffset = totalLength - (score / creditScoreMax) * totalLength

  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 223 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 회색 배경 경로 */}
        <path
          ref={pathRef}
          d="M18.421 154C12.3741 140.971 9 126.458 9 111.159C9 54.7382 54.8908 9 111.5 9C168.109 9 214 54.7382 214 111.159C214 126.458 210.626 140.971 204.579 154"
          stroke={colors.gray100}
          strokeWidth="18"
          strokeLinecap="round"
        ></path>
        {/* 파란색 경로 */}
        <path
          d="M18.421 154C12.3741 140.971 9 126.458 9 111.159C9 54.7382 54.8908 9 111.5 9C168.109 9 214 54.7382 214 111.159C214 126.458 210.626 140.971 204.579 154"
          stroke={colors.blue980}
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={totalLength}
          strokeDashoffset={dashoffset}
        ></path>
      </svg>
    </div>
  )
}
