import CreditScoreChart from '@components/shared/CreditScoreChart'
import Flex from '../shared/Flex'
import Text from '../shared/Text'
import Button from '../shared/Button'
import Spacing from '../shared/Spacing'

export default function CreditScore() {
  return (
    <div style={{ padding: 24 }}>
      <Flex justify="space-between" align="center">
        <Flex direction="column">
          <Text bold={true}>
            나의 신용도를 증명하고 <br /> 점수를 올리세요
          </Text>
          <Spacing size={8} />
          <Button>내 신용점수 보러가기</Button>
        </Flex>
        <CreditScoreChart score={500} width={80} height={80} />
      </Flex>
    </div>
  )
}
