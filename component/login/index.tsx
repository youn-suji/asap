import Image from 'next/image'
import {signIn, signOut, useSession} from "next-auth/react";
import style from '../../styles/login.module.css'

const Login = () => {

    return (
        <div className={style.login}>
            <div className={style.logo} >
                <Image 
                    src = '/image/logo.png' 
                    width = '183'
                    height = '100'
                    priority 
                />
            </div>
            <div 
                className={style.frame2}
                onClick={(e) => {
                    e.preventDefault();
                    signIn('google');
                }}
            >
                <div className={style.google}>
                    Google 로그인
                </div>
            </div>
            <div 
                className={style.frame}
                onClick={(e) => {
                    e.preventDefault();
                    signIn('kakao');
                }}
            >
                <div className={style.kakao}>
                    Kakao 로그인
                </div>
            </div>
            <div 
                className={style.frame}
                onClick={(e) => {
                    e.preventDefault();
                    signIn('naver');
                }}
            >
                <div className={style.naver}>
                    Naver 로그인
                </div>
            </div>
        </div>
    )
}

export default Login;