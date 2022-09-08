import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/CardHome.css'
import getConfig from '../../utils/getConfig'

const CardHome = ({ product }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddProduct = (e) => {
        e.stopPropagation()
        const obj = {
            id: product.id,
            quantity: 1
        }

        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.message))
    }


    return (
        <article onClick={handleClick} className='card-home'>
            <header className='card-home__header'>
                <img src={product.productImgs[0]} alt="" />
            </header>
            <div className='card-home__body'>
                <h3 className='card-home__name'>{product.title}</h3>
                <section className='card-home__price'>
                    <div className='card-home__price-text'>
                        <h4 className='card-home__price-label'>Price</h4>
                        <span className='card-home__price-value'>${product.price}</span>
                    </div>
                    <button onClick={handleAddProduct} className='card-home__btn'>
                        <i className='bx bx-cart-add'></i>
                    </button>
                </section>
            </div>
        </article>
    )
}

export default CardHome