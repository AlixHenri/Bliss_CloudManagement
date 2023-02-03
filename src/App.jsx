import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Support from './components/Support'
import AllInOne from './components/AllInOne'
import Pricing from './components/Pricing'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
    </div>
  )
}

export default App