import {signIn} from "next-auth/react";
import style from '@/styles/login.module.css'
import { oauth2 } from "@/apis/sample.api";

interface ILoginButtonProps {
    provider: string;
    name: string
}

export default function LoginButton ({ provider, name } : ILoginButtonProps) {

    return (
        <div 
            className={style.frame}
            onClick={(e) => {
                e.preventDefault()
                signIn(provider)
            }}
        >
            <div className={style.text}>
                {name} 로그인
            </div>
        </div>
    )
}
