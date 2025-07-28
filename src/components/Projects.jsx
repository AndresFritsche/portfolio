import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Marketcito",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/assets/marketcito.PNG",
      color: "from-sky-400 to-mint-400",
    },
    {
      id: 2,
      title: "Job Tracker Pro",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      image: "/assets/jobtracker.PNG",
      color: "from-lavender-400 to-blush-400",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      image: "🌤️",
      color: "from-mint-400 to-sky-400",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics dashboard for social media metrics with data visualization and automated reporting features.",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL"],
      image: "📊",
      color: "from-blush-400 to-lavender-400",
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description:
        "A modern real estate listing platform with advanced search filters, virtual tours, and mortgage calculator integration.",
      technologies: ["Next.js", "Prisma", "Tailwind CSS"],
      image: "🏠",
      color: "from-sky-400 to-lavender-400",
    },
    {
      id: 6,
      title: "Learning Management System",
      description:
        "An educational platform with course management, progress tracking, and interactive learning modules for students and instructors.",
      technologies: ["React", "Express.js", "Socket.io"],
      image: "🎓",
      color: "from-mint-400 to-blush-400",
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    // Staggered card animations
    gsap.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover animations for cards
    cards.forEach((card) => {
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-sky-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer"
            >
              <div className="card h-full hover:shadow-soft-lg transition-all duration-300">
                {/* Project Image */}
                <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                  {typeof project.image === 'string' && project.image.length <= 3 ? (
                    // Render emoji with gradient background
                    <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
                      {project.image}
                    </div>
                  ) : (
                    // Render image
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl">
                            ${project.title.charAt(0)}
                          </div>
                        `;
                      }}
                    />
                  )}
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <button className="flex items-center text-sky-600 hover:text-sky-700 font-medium text-sm transition-colors">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Projects
            <svg
              className="w-5 h-5 ml-2 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
