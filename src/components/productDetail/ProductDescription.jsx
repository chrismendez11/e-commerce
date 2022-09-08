import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
import './ProductDescription.css'

const ProductDescription = ({productInfo}) => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    const handleAddProductAndQuantity = (e) => {
        e.stopPropagation()
        const obj = {
            id: productInfo.id,
            quantity: counter
        }

        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.message))
    }

  return (
    <article className='product-info-cont'>
        <section className='product-info__child product-info__img'>
            <div className='product-info__img-cont'>
                <img src={productInfo?.productImgs[0]} alt="" />
            </div>
            <div className='product-info__moreIMGS-cont'>
                {productInfo?.productImgs.map(img => (
                    <div className='moreIMG-cont'><img src={img} alt="" /></div>
                ))}
            </div>
        </section>
        <section className='product-info__child product-info__desc'>
            <h2>{productInfo?.title}</h2>
            <p>{productInfo?.description}</p>
            <div className='product-info__price-quantity-cont'>
                <div className='price-cont'>
                    <h3>Price</h3>
                    <span>{`$${productInfo?.price}`}</span>
                </div>
                <div className='quantity-cont'>
                    <h3>Quantity</h3>
                    <div className='quantity-btns'>
                        <button onClick={handleMinus}>-</button>
                        <span>{counter}</span>
                        <button onClick={handlePlus}>+</button>
                    </div>
                </div>
            </div>
            <div className='cart-btn-cont'>
                <button onClick={handleAddProductAndQuantity}>
                    <div className='cart-btn__text'>
                        <span>Add to cart</span>
                        <i class='bx bx-cart-add'></i>
                    </div>            
                </button>
            </div>
        </section>
    </article>
  )
}

export default ProductDescription