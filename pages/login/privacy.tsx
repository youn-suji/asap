import React from 'react'
import style from '@/styles/login.module.css'

function Privacy() {

  function setPrivacy() {
    console.log('동의합니다')
  }

  return (
    <>
      <div className={style.privacy}>
        고객님의 소중한 정보를 보호하기 위해 약관 동의가 필요합니다.
        <div>
          <button id='privacy' onClick={setPrivacy}>동의</button>
        </div>
      </div>
    </>
  );
}

export default Privacy