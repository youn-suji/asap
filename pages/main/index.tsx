import React from 'react'
import { signOut, useSession } from "next-auth/react"

function Main() {
  const { data: session } = useSession()

  return (
    <>
      <div>{session && session.user && session.user.name}</div> 
      <button 
        onClick={(e) => {
          e.preventDefault()
          signOut()
        }}
      >signOut</button>
    </>
  );
}

export default Main;