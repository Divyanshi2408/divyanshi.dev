"use client";

import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "React", icon: "/react.png" },
  { name: "Node.js", icon: "/node.png" },
  { name: "MongoDB", icon: "/mdb.png" },
  { name: "Next.js", icon: "/next.png" },
  { name: "Tailwind CSS", icon: "/css.png" },
  { name: "TypeScript", icon: "/ts.png" },
  { name: "JavaScript", icon: "/js.png" },
  { name: "Git", icon: "/git.png" },
];

export default function About() {
  const sectionRef = useRef(null);

 useEffect(() => {
  const cards = gsap.utils.toArray(".about-card") as HTMLElement[];

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.15,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}, []);


  return (
   
      <section id="about" 
      ref={sectionRef}
      className="bg-[#0F172A] text-white px-6 md:px-16 pt-10 md:pt-14 pb-16">
      {/* Title */}
      <div className="text-center mb-16 about-card">
       <div className="text-center mb-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#fad4da] to-[#e55a6d] text-transparent bg-clip-text drop-shadow-[0_1px_4px_rgba(234,90,109,0.4)]">
        About Me
      </h1>
      <div className="h-1 w-16 bg-[#e55a6d] mx-auto mt-2 rounded"></div>
    </div>

        <p className="text-gray-400 max-w-xl mx-auto ">
          Discover my journey, expertise, and passion for crafting exceptional digital experiences
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tech Stack */}
       <div className="relative rounded-xl p-[2px] bg-[#fad4da]  hover:shadow-[0_0_15px_#e55a6d] transition-all duration-300">
        <div className="bg-[#fad4da] rounded-[0.75rem] p-6">
      <h2 className="text-xl text-[#1E293B] font-semibold mb-4 hover:text-[#e55a6d] transition-colors duration-200">
        Tech Stack
      </h2>

          <p className="text-[#334155] text-sm mb-4">
            Constantly shaping ideas into scalable, maintainable digital solutions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-[#334155] rounded-lg p-3 text-center text-sm flex flex-col items-center justify-center hover:bg-[#475569] transition duration-300 cursor-pointer"
              >
                <Image src={tech.icon} alt={tech.name} width={32} height={32} className="mb-2" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


        {/* Experience Highlights */}
        <div className="about-card bg-[#fad4da] rounded-xl p-6 shadow-md  hover:shadow-[0_0_15px_#e55a6d] transition-all duration-300">
          <h2 className="text-xl text-[#1E293B] font-semibold mb-4 hover:text-[#e55a6d] transition-colors duration-200">Experience Highlights</h2>
          <p className="text-[#334155] text-sm mb-6">
            Numbers that define my professional journey
          </p>
        <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl text-center">

              {[
                { value: "2+", label: "Years of Experience", sub: "Building scalable applications" },
                { value: "20+", label: "Projects Completed", sub: "From concept to deployment" },
                { value: "100%", label: "Client Satisfaction", sub: "Written with passion" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#334155] rounded-xl p-4 sm:p-6 break-words hover:bg-[#475569] transition duration-300 cursor-pointer">
                  <p className="text-4xl font-bold text-[#FF6B81]">{stat.value}</p>
                  <p className="text-lg">{stat.label}</p>
                  <p className="text-sm text-gray-400">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       {/* Global Collaboration */}
      <div className="about-card bg-[#fad4da] rounded-xl p-6 shadow-md  hover:shadow-[0_0_15px_#e55a6d] transition-all duration-300 transition-shadow flex flex-col justify-between">
        <div>
          <h2 className="text-xl text-[#1E293B] font-semibold mb-4 hover:text-[#e55a6d] transition-colors duration-200">Global Collaboration</h2>
          <p className="text-[#334155] text-sm">
            Based in India, I work seamlessly with global teams across time zones, delivering scalable full-stack solutions with clear communication and mutual respect.
          </p>
        </div>
       <a
        href="#contact"
        className="mt-6 inline-flex items-center text-center justify-center gap-2 text-[#e55a6d] font-medium border border-[#e55a6d] rounded-lg px-4 py-2 hover:bg-[#e55a6d] hover:text-white transition shadow-sm"
      >

          Let&apos;s Connect <FiArrowRight />
        </a>
      </div>

      {/* Passion for Innovation */}
      <div className="about-card bg-[#fad4da] rounded-xl p-6 shadow-md  hover:shadow-[0_0_15px_#e55a6d] transition-all duration-300 transition-shadow">
      <h2 className="text-xl text-[#1E293B] font-semibold mb-4 hover:text-[#e55a6d] transition-colors duration-200">Driven by Innovation</h2>
      <p className="text-[#334155] text-sm">
        I&apos;m passionate about turning ideas into intuitive, high-impact web experiences. Whether designing pixel-perfect interfaces or building backend APIs, I focus on writing clean, modular, and maintainable code. I believe true innovation lies in simplifying complexity, embracing iteration, and building with empathy. Every project is an opportunity to learn, push boundaries, and create solutions that make a real difference.
      </p>

      </div>

{/* Personal Intro */}
<div className="about-card md:col-span-2 bg-[#fad4da] rounded-xl p-6 shadow-md  hover:shadow-[0_0_15px_#e55a6d] transition-all duration-300 transition-shadow flex flex-col md:flex-row items-center gap-6 mt-4">
  <Image
    src="/profile.png"
    alt="Divyanshi Pal"
    width={80}
    height={80}
    className="rounded-full object-cover border border-[#e55a6d]"
  />
  <div>
    <h3 className="text-lg text-[#1E293B] font-semibold">Hi, I&apos;m Divyanshi Pal</h3>
    <p className="text-sm text-[#334155] mt-2">
      I&apos;m a passionate full-stack web developer with 2+ years of hands-on experience using the MERN stack. I love crafting responsive, intuitive digital products that blend thoughtful design with scalable code. Always curious, always building.
    </p>
  </div>
</div>

      </div>
   </section>
  );
}
