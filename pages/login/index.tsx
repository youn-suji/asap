import React from 'react'
import useUserInfoQuery from '@/hooks/query/user/useUserInfoQuery'
import style from '@/styles/login.module.css'
import LoginButton from 'component/login/loginButton'
import Logo from 'component/login/logo'

function Login() {
  const { data } = useUserInfoQuery()
  console.log(data)

  return (
    <div className={style.login}>
        <Logo />
        <LoginButton provider='google' name='Google' />
        <LoginButton provider='kakao' name='Kakao' />
        <LoginButton provider='naver' name='Naver' />
    </div>
  );
}

export default Login;