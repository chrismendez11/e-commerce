import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'
import '.././../styles/ProductDetail.css'

const ProductDetail = () => {

  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='product-detail'>
      <ProductDescription productInfo={productInfo}/>
    </section>
  )
}

export default ProductDetail