import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartContext from './Context'
import Home from './home/Home'
import About from './about/About'
import Cart from './cart/Cart'
import Account from './account/Account'
import NavBar from './navbar/NavBar'
import Product from './home/Product'
import Users from './account/Users'
import { useState } from 'react'
import type { IProductCart } from './Interface'
import './App.css'

function App() {
  let [shoppingCart , setShoppingCart ] = useState<IProductCart[]>([])

  return (
    <div className='app'>
      <div className='nav'>
        <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
        <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/users/:email' element={<Users/>}/>
          </Routes> 
        </Router>
        </CartContext.Provider>
      </div>
    </div>
  )
}

export default App ;