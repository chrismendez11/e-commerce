import React from 'react'

const Purchases = () => {
  return (
    <section className='purchases-section'>
      <div>
        <span>Home</span>
        <span>Purchases</span>
      </div>
      <h2>My purchases</h2>
      <article className='purchase-cont'>
        <div>
          <h3>September 7, 2022</h3>
        </div>
        <div>
          <h4>Samsung Galaxy S22</h4>
          <span>1</span>
          <span>$850</span>
        </div>
      </article>
    </section>
  )
}

export default Purchases