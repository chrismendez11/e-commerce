import React, { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import '../../styles/Header.css'
import Cart from '../home/Cart'

const Header = ({setActiveCart, activeCart}) => {

  

  const handleActiveCart = () => {
    setActiveCart(!activeCart)
  }

  return (
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/login">
            <i class='bx bx-user'></i></NavLink>
          </li>
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link': ''} to="/purchases">
            <i class='bx bx-purchase-tag'></i>
            </NavLink>
          </li>
          <li className="header__item">
            <a onClick={handleActiveCart} className="header__link"><i class='bx bx-cart' ></i></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header