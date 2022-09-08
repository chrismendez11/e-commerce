import axios from 'axios'
import React from 'react'
import '../../styles/ProductCartInfo.css'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product, getAllProductsCart}) => {

    const handleDeleteProduct = () => {
        axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`, getConfig())
            .then(res => {
                getAllProductsCart()
            })
            .catch(err => console.log(err))
    }

    return (
        <article className='cart__item'>
            <header className='cart__item-header'>
                <div className='cart__text-cont'>
                    <h3>{product.brand}</h3>
                    <h2>{product.title}</h2>
                </div>
                <i onClick={handleDeleteProduct} className='bx bxs-trash'></i>
            </header>
            <footer className='cart__item-footer'>
                <span className='cart__quantity'>{product.productsInCart.quantity}</span>
                <div className='cart__total-cont'>
                    <span className='cart__total-label'>Total:</span>
                    <p className='cart__total-number'>${product.price}</p>
                </div>
            </footer>
        </article>
    )
}

export default ProductCartInfo