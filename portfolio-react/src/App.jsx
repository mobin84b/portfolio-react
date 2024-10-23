import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/Navbar/About/About'
import Service from './Components/Services/Service'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
    </div>
  )
}

export default App