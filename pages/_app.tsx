import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import style from '@/styles/Home.module.css'
import { SessionProvider } from "next-auth/react"
import Auth from './login/auth'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <div className={style.container}>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </div>
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default MyApp
