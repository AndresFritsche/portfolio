import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo('.fade-in-up', 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in-up',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(link.getAttribute('href'))
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: target,
            ease: 'power2.inOut'
          })
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
