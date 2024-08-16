import Button from '../shared/Button'
import CreditScoreChart from '../shared/CreditScoreChart'
import Flex from '../shared/Flex'
import Skeleton from '../shared/Skeleton'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'

export default function CreditScoreSkeleton() {
  return (
    <div style={{ padding: 24 }}>
      <Flex justify="space-between" align="center">
        <Flex direction="column">
          <Skeleton width={155} height={50} />
          <Spacing size={8} />
          <Skeleton width={155} height={31} />
        </Flex>
      </Flex>
    </div>
  )
}
