import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import MobileStock from './pages/MobileStock'

const App = () => {
  return (
    <div>
      <div className='sm:flex hidden'>
      <Navbar />
      </div>
      <Hero />
      <MobileStock />
    </div>
  )
}

export default App

