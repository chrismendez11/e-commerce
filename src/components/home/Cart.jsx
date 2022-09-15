import React from 'react'
import { useEffect, useState } from 'react'
import ProductCartInfo from '../cart/ProductCartInfo'
import axios from 'axios'
import '../../styles/Cart.css'
import getConfig from '../../utils/getConfig'
import { useSelector } from 'react-redux'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()  // array that includes all products in cart
  const [totalPrice, setTotalPrice] = useState(0) // total price of all products in cart

  const productToCart = useSelector(state => state.productToCart) // state to render cart every time a product is added to cart

  const getAllProductsCart = () => {
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
    .then(res => {
      setCartProducts(res.data.data.cart.products)
    })
    .catch(err => setCartProducts())
  }

  // useEffect in order to upload the product on the cart
  useEffect(() => {
      getAllProductsCart()
  }, [productToCart])

  // useEffect in order to add totalprice when info from cartProducts is uploaded
  useEffect(() => {
    if (cartProducts) {
      handleTotalPrice()
    }
  }, [cartProducts])

  const handleCheckout = () => {
    setTotalPrice(0)
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', obj, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
      })
      .catch(err => console.log(err.response.data.message))
  }

  const handleTotalPrice = () => { 
    let total = 0
    cartProducts?.map(product => {
      total += product.price * product.productsInCart.quantity
    })
    setTotalPrice(total)
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
          <p className='cart__total-global-value'>${totalPrice}</p>
        </div>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
      </footer>
    </article>
  )
}

export default Cart