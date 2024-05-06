import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './componetns/Footer/Footer'
import Navbar from './componetns/Navbar/Navbar';
import LoginPopup from './componetns/LoginPopup/LoginPopup';



const App = () => {
  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
     </div>
     <Footer />  
    </>

  )
}

export default App