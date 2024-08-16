import { collection, getDocs, query, where } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/banner'
import { EventBanner } from '@/models/banner'

interface GetEventBannerProps {
  hasAccount: boolean
}

export async function getEventBanners({ hasAccount }: GetEventBannerProps) {
  //hasAccount이 false 인지 ture인지 구분해주는 query
  const eventBannerQuery = query(
    collection(store, COLLECTIONS.EVENT_BANNER),
    where('hasAccount', '==', hasAccount),
  )
  const snapshot = await getDocs(eventBannerQuery)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as EventBanner),
  }))
}
