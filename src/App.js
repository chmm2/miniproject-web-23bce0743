import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Shop from './components/Shop'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Cart from './components/Cart'
import './App.css'

const Home = () => (
  <>
    <Main />
  </>
)

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
