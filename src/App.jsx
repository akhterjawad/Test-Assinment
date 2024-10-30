import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import MobileStock from './pages/MobileStock'

const App = () => {
  return (
    <React.Fragment>
      <div className='sm:flex hidden'>
      <Navbar />
      </div>
      <Hero />
      <MobileStock />
    </React.Fragment>
  )
}

export default App

