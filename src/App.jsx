import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'

import Cards from './Components/Cards'
import Feature from './Components/Feature'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Footer'





const App = () => { 
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
     <Footer/>


      

    </div>
  )
}

export default App