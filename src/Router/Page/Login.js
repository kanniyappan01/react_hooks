import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigter = useNavigate()
  const ChangePage = ()=>{
    navigter("/about")
  }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={()=>ChangePage()}>go to contact page</button>
    </div>
  )
}

export default Login