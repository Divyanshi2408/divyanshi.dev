'use client';

import { useEffect, useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });
  }, []);

  const experienceData = [
    {
      role: "Application Developer",
      company: "Ninepages Techsolutions",
      date: "Sep 2024 – Present",
      desc: "Developing and deploying scalable MERN stack applications with user-friendly interfaces. Implementing RESTful APIs, building reusable and optimized React components, and enhancing performance and maintainability across projects.",
    },
    {
      role: "SDE Trainee",
      company: "DRDO (ADRDE)",
      date: "Jun 2023 – Aug 2023",
      desc: "Contributed to full-stack development of internal web applications. Implemented secure APIs using Node.js and Express, developed dynamic interfaces with React, and handled MongoDB-based data operations and system documentation.",
    },
  ];


  return (
    <section id="experience" className="bg-[#0F172A] py-12 px-6 pt-10 md:px-20 text-[#F1F5F9]">
     <h2 className="text-3xl font-bold text-[#fad4da] mb-2 text-center">Experience</h2>
        <p className="text-center text-[#AAB1C2] text-sm md:text-base mb-10 max-w-2xl mx-auto">
        Explore my hands-on journey through impactful roles, real-world projects, and continuous growth in the tech landscape.
        </p>


      <div className="flex justify-center">
        <div className="relative border-l-2 border-[#FF6B81] pl-6">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="mb-10 ml-6 relative"
              ref={(el) => {
              cardRefs.current[idx] = el;
            }}

            >
              {/* Icon */}
              <div className="absolute -left-[4rem] top-1 w-8 h-8 bg-[#FF6B81] rounded-full flex items-center justify-center shadow-md border-2 border-[#0F172A]">
                <FaBriefcase className="text-white text-xs" />
              </div>

              {/* Timeline Card */}
              <div className="bg-[#fad4da] rounded-lg p-6 shadow-md  hover:shadow-[0_0_15px_#e55a6d] transition-all duration-300transition-shadow">
                <p className="text-sm text-[#6b7280]">{item.date}</p> 
                <h3 className="text-xl font-semibold text-[#1E293B]">
                  {item.role} @ <span className="text-[#FF6B81]">{item.company}</span>
                </h3>
                <p className="text-[#334155] text-sm mt-2 max-w-xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
