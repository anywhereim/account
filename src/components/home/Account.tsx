import Image from 'next/image'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'
import { tree } from 'next/dist/build/templates/app-page'

export default function Account() {
  const hasAccount = false

  //계좌를 보유 중 인 경우
  if (hasAccount) {
    return (
      <div style={{ padding: 24 }}>
        <Flex justify="space-between" align="center">
          <Flex direction="column">
            <Text typography="t6" color="gray600">
              윤미주 회원님의 자산
            </Text>
            <Spacing size={2} />
            <Text typography="t3">100원</Text>
          </Flex>
          <Button>분석</Button>
        </Flex>
      </div>
    )
  }

  /* 
	1. 계좌를 보유중이지 않은 경우
	2. 계좌를 개설중(개설되지 않음.)
	*/

  //READY | DONE
  const status = 'READY'
  const title =
    status === 'READY'
      ? '개설중인 계좌가 있으시군요'
      : '계좌 개설이 더 쉽고 빨라졌어요'

  const buttonLabel = status === 'READY' ? '이어만들기' : '3분만에 개설하기'

  return (
    <div style={{ padding: 24 }}>
      <Flex justify="space-between" align="center">
        <Flex direction="column">
          <Text bold={true} style={{ whiteSpace: 'pre-wrap' }}>
            {title}
          </Text>
          <Spacing size={8} />
          <Button>{buttonLabel}</Button>
        </Flex>
        <Image
          width={80}
          height={80}
          alt=""
          src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/money_dollars-256.png"
        />
      </Flex>
    </div>
  )
}
