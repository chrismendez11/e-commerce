import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsLogged } from '../../store/slices/isLogged.slice'

const FormLogged = () => {

    const dispatch = useDispatch()

    const handleLogOut = () => {
        localStorage.removeItem('token')
        dispatch(setIsLogged())
    }

  return (
    <form className='login__form'>
        <h2><i class='bx bxs-circle'></i>You are Logged!</h2>
        <button onClick={handleLogOut} className='login__btn'>Log out</button>
    </form>
  )
}

export default FormLogged