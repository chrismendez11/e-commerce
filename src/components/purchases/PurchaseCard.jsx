import React from 'react'
import '../../styles/PurchaseCard.css'

const PurchaseCard = ({purchase}) => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const date = new Date(purchase.createdAt)

  return (
    <article className='purchase-cont'>
        <div className='purchase-date-cont'>
          <h3>{`${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`}</h3>
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