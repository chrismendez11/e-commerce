import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/home/Cart'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import { useState } from 'react'

function App() {

  const [activeCart, setActiveCart] = useState(false)

  return (
    <div className='App'>
    <Header setActiveCart={setActiveCart} activeCart={activeCart}/>
    <Routes>
      <Route path='/' element={<Home activeCart={activeCart}/>}/>
      <Route path='/login' element={<Login />}/> 
      <Route path='/product/:id' element={<ProductDetail />}/>
      <Route element={<ProtectedRoutes />}>
        <Route path='/purchases' element={<Purchases />}/> 
      </Route>  
    </Routes>
    </div>
  )
}

export default App
