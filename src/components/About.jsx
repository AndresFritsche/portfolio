import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const text = textRef.current
    const stats = statsRef.current

    // Split reveal animation
    gsap.fromTo(image, 
      { 
        x: -100, 
        opacity: 0 
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(text, 
      { 
        x: 100, 
        opacity: 0 
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Stats counter animation
    gsap.fromTo(stats.children, 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stats,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-to-br from-white to-mint-50/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative z-10">
              {/* Main image placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-3xl shadow-soft-lg border border-white/50 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-sky-100 to-mint-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-mint-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Profile Photo</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-lavender-200 to-blush-200 rounded-2xl rotate-12 opacity-60 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-mint-200 to-sky-200 rounded-2xl -rotate-12 opacity-60 -z-10"></div>
          </div>

          {/* Text Side */}
          <div ref={textRef} className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate full-stack developer with over 3 years of experience 
                  creating digital solutions that combine beautiful design with robust functionality.
                </p>
                
                <p>
                  My journey in web development started with a curiosity about how things work 
                  behind the scenes. Today, I specialize in React, Node.js, and modern web 
                  technologies, always staying up-to-date with the latest trends and best practices.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or enjoying a good cup of coffee while sketching 
                  out ideas for my next project.
                </p>
              </div>
            </div>

            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center">
                <h3 className="font-semibold text-sky-600 mb-2">Frontend</h3>
                <p className="text-sm text-gray-600">React, Vue, TypeScript</p>
              </div>
              <div className="card text-center">
                <h3 className="font-semibold text-mint-600 mb-2">Backend</h3>
                <p className="text-sm text-gray-600">Node.js, Python, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">50+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">3+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">25+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">100%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
