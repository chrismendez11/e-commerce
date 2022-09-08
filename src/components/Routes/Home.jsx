import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, setProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'
import '../../styles/Home.css'
import SearchBar from '../home/SearchBar'
import Cart from '../home/Cart'

const Home = ({activeCart}) => {

  const [search, setSearch] = useState()

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  //  SEARCH BAR

  useEffect(() => {
    if (search) {
      let array = []
      products.map(product => {
        if (product.title.toLowerCase().includes(search)) {
          array.push(product)
        }
      })
      dispatch(setProducts(array))
    } else {
      dispatch(getAllProducts())
    }
  }, [search])

  // done

  return (
      <section className='home'>
        <SearchBar search={search} setSearch={setSearch}/>
        <div className='products-cards-container'>
        {
          products?.map(product => (
            <CardHome 
              key={product.id}
              product={product}
            />
          ))
        }
        {
          activeCart ? <Cart /> : ''
        }
        </div>
      </section>
  )
}

export default Home