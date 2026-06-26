import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Testim from './components/TestimonialCard'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <Features/>
   <About/>
 <Testimonials/>
 <Contact/>

    </>
  )
}

export default App
