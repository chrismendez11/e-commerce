import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/SearchBar.css'

const SearchBar = ({search, setSearch}) => {

  const products = useSelector(state => state.products)

  const searchProducts = (e) => {
    e.preventDefault()
    setSearch(e.target.searchProduct.value.toLowerCase())
  }

  return (
    <form onSubmit={searchProducts} className='search-container'>
        <input type="text" placeholder='¿What are you looking for?' id='searchProduct'/>
        <button><i class='bx bx-search'></i></button>
    </form>
  )
}

export default SearchBar