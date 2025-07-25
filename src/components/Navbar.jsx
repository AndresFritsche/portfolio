import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRefs = useRef({});

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open (you can implement this later)
      
      // Update active section
      setActiveSection(id);
      
      // Smooth scroll to the section
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
      
      // Update URL without page reload
      window.history.pushState(null, '', `#${id}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop - 100; // Match the offset from scrollTo
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    // Set up scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check for hash in URL
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && navItems.some(item => item.id === hash)) {
        const element = document.getElementById(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
          setActiveSection(hash);
        }
      }
    };
    
    // Check for hash on initial load
    handleHashChange();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-center py-4 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-sky-600 ${
                  activeSection === item.id ? "text-sky-600" : "text-gray-700"
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-mint-400 rounded-full"></div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-0">
            <button className="p-2 text-gray-700 hover:text-sky-600 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
