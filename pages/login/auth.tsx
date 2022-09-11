import React from 'react'
import { useSession } from 'next-auth/react'
import Login from '.'
import Privacy from './privacy'
import useUserInfoQuery from '@/hooks/query/user/useUserInfoQuery'
import NickName from './nickName'

interface IAuthProps {
  children: any
}

function Auth({ children } : IAuthProps) {
  const { data: session, status } = useSession()
  const { data: userInfo } = useUserInfoQuery()
  const isUser = !!session?.user

  React.useEffect(() => {
    
  }, [isUser, status, children])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!isUser) {
    return <Login />
  }

  if (!userInfo.privacy) {
    return <Privacy />
  }

  if (!userInfo.nickName || userInfo.nickName === '') {
    return <NickName />
  }
  
  return children
}

export default Auth