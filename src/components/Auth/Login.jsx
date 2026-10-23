import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email, password)
    setEmail((""))
    setPassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required className='border-2 border-emerald-600 py-2 px-6 rounded-full text-white outline-none bg-transparent placeholder:text-gray-400 font-medium text-lg' type="email" placeholder='Enter your Email' />
          <input
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
            required className='border-2 border-emerald-600 py-3 px-5 rounded-full text-white outline-none bg-transparent mt-3 placeholder:text-gray-400 font-medium text-lg' type="password" placeholder='Enter your password' />
          <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
