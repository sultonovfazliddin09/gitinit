import React from 'react'
import Navbar from './components/shared/navbar'
import Hero from './components/hero/hero'
import Contact from './components/contact/contact'
import About from './components/about/about'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Contact/>
      <About/>
    </div>
  )
}

export default App
