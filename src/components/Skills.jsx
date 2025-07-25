import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {
  const sectionRef = useRef(null)
  const skillsRef = useRef([])
  const progressRef = useRef([])

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "CSS/SCSS", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
        { name: "Vue.js", level: 80, icon: "💚" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Express.js", level: 90, icon: "🚀" },
        { name: "PostgreSQL", level: 82, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "REST APIs", level: 92, icon: "🔗" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Figma", level: 85, icon: "🎭" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "Jest", level: 85, icon: "🧪" }
      ]
    }
  ]

  useEffect(() => {
    const skills = skillsRef.current
    const progressBars = progressRef.current

    // Animate skill cards
    gsap.fromTo(skills, 
      { 
        y: 60, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate progress bars
    progressBars.forEach((bar, index) => {
      if (bar) {
        const skillLevel = bar.dataset.level
        gsap.fromTo(bar, 
          { 
            width: '0%' 
          },
          {
            width: `${skillLevel}%`,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    })

  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gradient-to-br from-mint-50/30 to-sky-50/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm passionate about learning new technologies and constantly improving my skills 
            to deliver the best solutions for every project.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 6 + skillIndex
                  return (
                    <div
                      key={skillIndex}
                      ref={el => skillsRef.current[globalIndex] = el}
                      className="card group hover:shadow-soft-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-gray-800">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-sky-600">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          ref={el => progressRef.current[globalIndex] = el}
                          data-level={skill.level}
                          className="h-2 bg-gradient-to-r from-sky-400 to-mint-400 rounded-full transition-all duration-300"
                          style={{ width: '0%' }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-gray-800">
            Other Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "GraphQL", "Redux", "Next.js", "Nuxt.js", "Socket.io", 
              "Firebase", "Stripe", "Prisma", "Vercel", "Netlify",
              "GitHub Actions", "Jenkins", "Linux", "Nginx"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
