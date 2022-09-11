import Image from 'next/image'
import style from '@/styles/login.module.css'

export default function Logo () {
    return (
        <div className={style.logo} >
            <Image 
                src = '/image/logo.png' 
                width = '183'
                height = '100'
                priority 
            />
        </div>
    )
}
