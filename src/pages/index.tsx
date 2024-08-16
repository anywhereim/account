import dynamic from 'next/dynamic'
import Account from '@/components/home/Account'
import BannerSkeleton from '@/components/home/BannerSkeleton'
import Skeleton from '@/components/shared/Skeleton'

const EventBanners = dynamic(() => import('@/components/home/EventBanners'), {
  loading: () => <BannerSkeleton />,
  ssr: false,
})

export default function Home() {
  return (
    <>
      <EventBanners />
      <Account />
    </>
  )
}
