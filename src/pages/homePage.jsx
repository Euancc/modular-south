import React from 'react'
import Navbar from '../components/jsx/Navbar'
import Hero from '../components/jsx/Hero'
import About from '../components/jsx/About'
import PriceCards from '../components/jsx/PriceCards'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PriceCards />
    </>
  )
}

export default Home
