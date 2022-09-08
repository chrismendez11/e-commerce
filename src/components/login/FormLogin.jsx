import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import '../../styles/FormLogin.css'

const FormLogin = () => {

    const {register, handleSubmit, reset } = useForm()

    const submit = data => {
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.data.token)
            })
            .catch(err => console.log(err))
        // reset({
        //     email: '',
        //     password: ''
        // })
    }

  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
        <h2>Welcome! Enter your email and password to continue</h2>
        <div className='login-cont login__email'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" />
        </div>
        <div className='login-cont login__password'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password" />
        </div>
        <button className='login__btn'>Login</button>
    </form>
  )
}

export default FormLogin