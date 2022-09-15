import React, { useState } from 'react'
import FormLogged from '../login/FormLogged'
import FormLogin from '../login/FormLogin'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const initialLogged = localStorage.getItem('token')

  const isLogged = useSelector(state => state.isLogged)

  return (
    <main className='login'>
      {initialLogged || isLogged ? <FormLogged /> : <FormLogin />}
    </main>
  )
}

export default Login