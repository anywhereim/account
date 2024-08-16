import { Swiper, SwiperSlide } from 'swiper/react'
import withSusepnse from '../shared/hocs/withSuspense'
import { useEventBanners } from './hooks/useEventBanners'
import Link from 'next/link'
import Flex from '../shared/Flex'
import Text from '../shared/Text'
import { css } from '@emotion/react'
import Skeleton from '../shared/Skeleton'
import Image from 'next/image'

//이벤트 베너들을 그려냄
function EventBanners() {
  const { data } = useEventBanners()
  console.log(data)
  return (
    <div>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Link href={banner.link}>
                <Flex
                  style={{ backgroundColor: banner.backgroundColor }}
                  justify="space-between"
                  css={bannerStyles}
                >
                  <Flex direction="column">
                    <Text bold={true}>{banner.title}</Text>
                    <Text typography="t6">{banner.subTitle}</Text>
                  </Flex>
                  <Image src={banner.iconUrl} width={40} height={40} alt="" />
                </Flex>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

const bannerStyles = css`
  padding: 24px;
  border-radius: 8px;
`

export default withSusepnse(EventBanners, {
  fallback: <Skeleton width="100%" height={100} style={{ borderRadius: 8 }} />,
})
