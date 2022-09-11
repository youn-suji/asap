import React from 'react'
import { signOut } from "next-auth/react"

function Main() {
  return (
    <>
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