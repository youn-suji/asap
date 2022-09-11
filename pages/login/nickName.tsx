import React from 'react'
import style from '@/styles/login.module.css'

function NickName() {
  return (
    <>
      <div className={style.privacy}>
        필수 개인 정보를 입력하세요.
      </div>
    </>
  );
}

export default NickName