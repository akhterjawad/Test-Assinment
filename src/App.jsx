import React from 'react'
import MobileStock from './pages/MobileStock'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <React.Fragment>
      <div className='hidden sm:flex'>
      <Navbar />
      </div>
      <Hero />
      <MobileStock />
    </React.Fragment>
  )
}

export default App

