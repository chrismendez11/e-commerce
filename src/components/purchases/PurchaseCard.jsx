import React from 'react'
import '../../styles/PurchaseCard.css'

const PurchaseCard = ({purchase}) => {

  console.log(purchase)
  return (
    <article className='purchase-cont'>
        <div className='purchase-date-cont'>
          <h3>{purchase.createdAt}</h3>
        </div>
          {
            purchase.cart.products.map(product => (
                <div className='purchases-products__details'>
                <h4>{product.title}</h4>
                <span>{product.productsInCart.quantity}</span>
                <span>${product.price}</span>
                </div>
            ))
          }
      </article>
  )
}

export default PurchaseCard