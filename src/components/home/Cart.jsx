import React from 'react'
import { useEffect, useState } from 'react'
import ProductCartInfo from '../cart/ProductCartInfo'
import axios from 'axios'
import '../../styles/Cart.css'
import getConfig from '../../utils/getConfig'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()

  const getAllProductsCart = () => {
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
    .then(res => setCartProducts(res.data.data.cart.products))
    .catch(err => setCartProducts())
  }

  useEffect(() => {
    getAllProductsCart()
  }, [])

  const handleCheckout = () => {
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', obj, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
      })
      .catch(err => console.log(err.response.data.message))
  }

  return (
    <article className='cart'>
      <h2>Cart</h2>
      <section className='productCart__cont'>
        {cartProducts?.map(product => (
          <ProductCartInfo key={product.id} product={product} getAllProductsCart={getAllProductsCart}/>
        ))}
      </section>
      <footer className='cart__footer'>
        <div className='cart__footer-text'>
          <span className='cart__total-global'>Total:</span>
          <p className='cart__total-global-value'>$1350</p>
        </div>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
      </footer>
    </article>
  )
}

export default Cart