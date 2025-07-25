import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Initial state - hide elements
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, imageRef.current], {
      opacity: 0,
      y: 50
    })

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3')
    .to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')

    // Floating animation for the image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })

  }, [])

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: projectsSection,
        ease: 'power2.inOut'
      })
    }
  }

  return (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 
              ref={titleRef}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">
                Andres
              </span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              A passionate{' '}
              <span className="font-semibold text-sky-600">Full-Stack Developer</span>{' '}
              creating beautiful, functional digital experiences with modern technologies.
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleScrollToProjects}
                className="btn-primary group"
              >
                View My Work
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="btn-secondary group">
                Download CV
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Illustration/Image */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={imageRef}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
            >
              {/* Decorative background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 to-mint-200/30 rounded-full blur-3xl"></div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-lavender-200 to-blush-200 rounded-2xl rotate-12 opacity-60"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-mint-200 to-sky-200 rounded-2xl -rotate-12 opacity-60"></div>
              
              {/* Main content area - placeholder for actual image */}
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl shadow-soft-lg flex items-center justify-center border border-white/50">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-mint-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-sky-400 to-mint-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
