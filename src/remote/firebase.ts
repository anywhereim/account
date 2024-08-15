//사용할 auth
import exp from 'constants'
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
//초기화
import { getFirestore } from 'firebase/firestore'

/* 
지금 초기화 된 앱이 있는지 확인 후, 
초기화가 되어있다면 현재 app을 그대로 보여주고
초기화가 되어있지 않다면 초기화 해주기
 */
const app =
  getApps().length > 0
    ? getApp()
    : initializeApp({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_AUTO_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_MESSAGEING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_API_ID,
        measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
      })

//auth 초기화 후 내보내기
export const auth = getAuth(app)

//store사용하기
export const store = getFirestore(app)
