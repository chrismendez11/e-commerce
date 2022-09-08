import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../purchases/PurchaseCard'
import '../../styles/Purchases.css'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

    useEffect(() => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
            .then(res => setPurchases(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])

  return (
    <section className='purchases-section'>
      <div className='purchases__title'>
        <span>Home</span>
        <i class='bx bx-dots-vertical-rounded'></i>
        <span>Purchases</span>
      </div>
      <h2>My purchases</h2>
      <div className='purchases-card__cont'>   
      {
        purchases?.map(purchase => (
          <PurchaseCard key={purchase.id} purchase={purchase}/>
        ))
      }
      </div>  
    </section>
  )
}

export default Purchases