import React, {useState} from 'react'
import Navbar from './Component/Navbar/Navbar'
import Products from './Component/Products/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import SearchItems from './Component/SearchItems/SearchItems'
import Cart from'./Component/CartItems/Cart'
import { items } from './Component/Data'
const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([]);
  return (
   
    <>
      <Router>
        <Navbar  setData={setData} cart={cart}/>
        <Routes>
          <Route path='/' element={<Products items={data} cart={cart} setCart={setCart}/>} />
          <Route path='/products/:id' element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path='/search/:term' element={<SearchItems cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
