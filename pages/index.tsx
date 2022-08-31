import type { NextPage } from 'next'
import { useSession } from "next-auth/react"
import Login from '../component/login'
import Main from '../component/main'
import style from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data: session, status: loading } = useSession()
  
  if (loading === 'loading') {
		return <div>loading...</div>;
	}

  return (
    <div className={style.container}>
      {!session && <Login />}
      {session && <Main />}
    </div>
  )
}

export default Home
