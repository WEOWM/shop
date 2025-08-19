import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Nav from './Components/Header/Nav'
import Home from './Components/Home'
import Login from './Components/Login.in/Login'
import Sing from './Components/Sing up/Sing'
import Product from './Components/Product'
import Products from './Components/Products'
import Cart from './Components/Cart'

function App() {
  return (
    <div>
      <Nav />
      <Routes>


        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />



        <Route path='/login' element={<Login />} />
        <Route path='/sing' element={<Sing />} />
      </Routes>


    </div>
  )
}

export default App