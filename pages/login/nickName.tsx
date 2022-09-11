import React, { useState } from 'react'
import style from '@/styles/login.module.css'
import { useSession } from 'next-auth/react';
import { saveNickname } from '@/apis/sample.api';

function NickName() {
  const { data: session } = useSession()
  
  const [nickName, setNickName] = useState(session && session.user && session.user.name)

  const onChange = (e) => {
    setNickName(e.target.value);
  }

  const saveNickName = () => {
    console.log(nickName)
    saveNickname()
  }

  return (
    <>
      <div className={style.privacy}>
        필수 개인 정보를 입력하세요.
        <div>
          닉네임: <input onChange={onChange} value={nickName} />
          <button onClick={saveNickName}>저장</button>
        </div>
      </div>
    </>
  );
}

export default NickName