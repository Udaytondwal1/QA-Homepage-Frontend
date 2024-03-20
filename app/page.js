import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import CDPInfo from './components/CDPInfo'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import HamburgerMenu from './components/HamburgerMenu'

function page() {
  return (
    <>
    <Navbar />
    <Homepage />
    <About />
    <CDPInfo />
    <Newsletter />
    <Footer />
    </>
  )
}

export default page