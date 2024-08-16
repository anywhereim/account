import Head from 'next/head'
import SEO from './SEO'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SEO
        title="My Account"
        description="간편하게 나의 자산 관리를 해보세요!"
        image=""
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </div>
  )
}
