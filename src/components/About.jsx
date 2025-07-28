import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const profileImg = "/assets/profile-pic.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Split reveal animation
    gsap.fromTo(
      image,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      text,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );


  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            ref={imageRef}
            className="relative flex flex-col items-center justify-center py-8"
          >
            <div className="relative z-10">
              {/* Main image placeholder */}
              <div className="w-full flex flex-col items-center">
                <div className="w-84 h-84 sm:w-90 sm:h-90 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center border border-gray-200 shadow-soft-lg overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div ref={textRef} className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate full-stack developer with over 3 years of
                  experience creating digital solutions that combine beautiful
                  design with robust functionality.
                </p>

                <p>
                  My journey in web development started with a curiosity about
                  how things work behind the scenes. Today, I specialize in
                  React, Node.js, and modern web technologies, always staying
                  up-to-date with the latest trends and best practices.
                </p>

                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying a good cup of coffee while sketching out ideas for my
                  next project.
                </p>
              </div>
            </div>

            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center">
                <h3 className="font-semibold text-sky-600 mb-2">Frontend</h3>
                <p className="text-sm text-gray-600">React, Next.js, TypeScript</p>
              </div>
              <div className="card text-center">
                <h3 className="font-semibold text-mint-600 mb-2">Backend</h3>
                <p className="text-sm text-gray-600">
                  Node.js, C#, PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
