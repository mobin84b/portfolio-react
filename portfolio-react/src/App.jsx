import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/Navbar/About/About'
import Service from './Components/Services/Service'
import Contact from './Components/contact/contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App