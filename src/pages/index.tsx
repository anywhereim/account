import dynamic from 'next/dynamic'
import Account from '@/components/home/Account'
import BannerSkeleton from '@/components/home/BannerSkeleton'
import CreditScoreSkeleton from '@/components/home/CreditScoreSkeleton'
import Spacing from '@/components/shared/Spacing'

const EventBanners = dynamic(() => import('@/components/home/EventBanners'), {
  loading: () => <BannerSkeleton />,
  ssr: false,
})

const CreditScore = dynamic(() => import('@/components/home/CreditScore'), {
  loading: () => <CreditScoreSkeleton />,
  ssr: false,
})

export default function Home() {
  return (
    <>
      <EventBanners />
      <Account />
      <Spacing size={8} backgroundColor="gray100" />
      <CreditScore />
    </>
  )
}
