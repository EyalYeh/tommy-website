import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Recognition from './components/Recognition';
import Contact from './components/Contact';

function App() {
  return(
    <>
    
      <NavBar />
      <Hero />
      <About />
      <Projects />
   
    
    </>
  )

}

export default App
