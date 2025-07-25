import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoryRefs = useRef([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "CSS/SCSS",
        "Tailwind CSS",
        "Vue.js",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Figma", "Webpack", "Jest"],
    },
  ];

  const otherTechnologies = [
    "GraphQL",
    "Redux",
    "Next.js",
    "Nuxt.js",
    "Socket.io",
    "Firebase",
    "Stripe",
    "Prisma",
    "Vercel",
  ];

  // Carousel navigation
  const goToPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? skillCategories.length - 1 : prev - 1
    );
  const goToNext = () =>
    setCurrentIndex((prev) =>
      prev === skillCategories.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    // Animate the current category in
    if (categoryRefs.current[currentIndex]) {
      gsap.fromTo(
        categoryRefs.current[currentIndex],
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [currentIndex]);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            My <span className="text-sky-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I focus on mastering core technologies and tools to deliver clean,
            efficient solutions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center max-w-xl mx-auto mb-12">
          <button
            aria-label="Previous"
            onClick={goToPrev}
            className="absolute left-0 z-10 p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition disabled:opacity-40"
            disabled={skillCategories.length <= 1}
          >
            <span className="text-2xl">&#8592;</span>
          </button>
          <div className="w-full px-8">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                ref={(el) => (categoryRefs.current[idx] = el)}
                className={`transition-opacity duration-500 ${
                  idx === currentIndex ? "block" : "hidden"
                }`}
              >
                <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-center">
                  {category.skills.map((skill, i) => (
                    <li
                      key={skill}
                      className="text-lg text-gray-700 tracking-wide fade-in-up"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={goToNext}
            className="absolute right-0 z-10 p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition disabled:opacity-40"
            disabled={skillCategories.length <= 1}
          >
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mb-10">
          {skillCategories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full border border-sky-500 transition ${
                currentIndex === idx ? "bg-sky-500" : "bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Redesigned Other Technologies Badges */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold mb-6 text-gray-800">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {otherTechnologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 border border-gray-400 text-gray-700 rounded-full text-sm font-medium bg-white hover:bg-gray-100 transition cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
