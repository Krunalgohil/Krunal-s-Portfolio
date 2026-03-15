import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
// import Work from './Components/Work'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    {/* <Work/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App