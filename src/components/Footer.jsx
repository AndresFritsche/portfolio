import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-mint-50/30 border-t border-gray-200/50">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-3">
              Portfolio
            </div>
            <p className="text-gray-600 text-sm">
              Creating beautiful digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const section = document.getElementById(link.toLowerCase())
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {[
              { name: 'GitHub', icon: '🐙', url: '#' },
              { name: 'LinkedIn', icon: '💼', url: '#' },
              { name: 'Twitter', icon: '🐦', url: '#' },
              { name: 'Email', icon: '📧', url: 'mailto:hello@alexportfolio.com' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-soft hover:shadow-soft-lg hover:scale-110 transition-all duration-300 text-lg"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200/50 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Andres Fritsche. Built with React, TailwindCSS & GSAP.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
