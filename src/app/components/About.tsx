// "use client";
// import { FiArrowRight } from "react-icons/fi";
// import Image from "next/image";

// const techStack = [
//   { name: "React", icon: "/react.png" },
//   { name: "Node.js", icon: "/node.png" },
//   { name: "MongoDB", icon: "/mdb.png" },
//   { name: "Next.js", icon: "/next.png" },
//   { name: "Tailwind CSS", icon: "/css.png" },
//   { name: "TypeScript", icon: "/ts.png" },
//   { name: "JavaScript", icon: "/js.png" },
//   { name: "Git", icon: "/git.png" },
// ];

// export default function About() {
//   return (
//     <main className="min-h-screen bg-[#0F172A] text-white px-6 md:px-16 py-16">
//       {/* Title */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl text-[#fad4da] font-bold mb-2">About Me</h1>
//         <p className="text-gray-400 max-w-xl mx-auto">
//           Discover my journey, expertise, and passion for crafting exceptional digital experiences
//         </p>
//       </div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Tech Stack */}
//         <div className="bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
//           <h2 className="text-xl text-[#1E293B] font-semibold mb-4">Tech Stack</h2>
//           <p className="text-[#334155] text-sm mb-4">
//             Constantly shaping ideas into scalable, maintainable digital solutions.
//           </p>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             {techStack.map((tech, i) => (
//               <div
//                 key={i}
//                 className="bg-[#334155] rounded-lg p-3 text-center text-sm flex flex-col items-center justify-center"
//               >
//                 <Image
//                   src={tech.icon}
//                   alt={tech.name}
//                   width={32}
//                   height={32}
//                   className="mb-2"
//                 />
//                 <span>{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Experience Highlights */}
//         <div className="bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
//           <h2 className="text-xl text-[#1E293B] font-semibold mb-4">Experience Highlights</h2>
//           <p className="text-[#334155] text-sm mb-6">
//             Numbers that define my professional journey
//           </p>
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl text-center">
//               <div className="bg-[#334155] rounded-xl p-6">
//                 <p className="text-4xl font-bold text-[#FF6B81]">2+</p>
//                 <p className="text-lg">Years of Experience</p>
//                 <p className="text-sm text-gray-400">Building scalable applications</p>
//               </div>
//               <div className="bg-[#334155] rounded-xl p-6">
//                 <p className="text-4xl font-bold text-[#FF6B81]">20+</p>
//                 <p className="text-lg">Projects Completed</p>
//                 <p className="text-sm text-gray-400">From concept to deployment</p>
//               </div>
//               {/* <div className="bg-[#1E293B] rounded-xl p-6"> */}
//               <div className="bg-[#334155] rounded-xl p-6">
//                 <p className="text-4xl font-bold text-[#FF6B81]">100%</p>
//                 <p className="text-lg">Client Satisfaction</p>
//                 <p className="text-sm text-gray-400">Written with passion</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Global Collaboration */}
//         <div className="bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
//           <div>
//             <h2 className="text-xl text-[#1E293B] font-semibold mb-4">Global Collaboration</h2>
//             <p className="text-[#334155] text-sm">
//               Based in India, I regularly collaborate with teams across several time zones and cultures to build better software.
//             </p>
//           </div>
//           <a
//             href="#contact"
//             className="mt-6 inline-flex items-center gap-2 text-[#e55a6d] font-medium border border-[#e55a6d] rounded-lg px-4 py-2 hover:bg-[#e55a6d] hover:text-[#0F172A] transition"
//           >
//             Let&apos;s Connect <FiArrowRight />
//           </a>
//         </div>

//         {/* Passion for Innovation */}
//         <div className="bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
//           <h2 className="text-xl text-[#1E293B] font-semibold mb-4">Passion for Innovation</h2>
//           <p className="text-[#334155] text-sm">
//             Creativity lights every problem. I believe in solving complex problems by simplifying logic, embracing feedback, and iterating into delightful digital results.
//           </p>
//         </div>

//         {/* Personal Introduction */}
//         <div className="md:col-span-2 bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center gap-6 mt-4">
//           <Image
//             src="/profile.png"
//             alt="Divyanshi Pal"
//             width={80}
//             height={80}
//             className="rounded-full object-cover border border-[#e55a6d]"
//           />
//           <div>
//             <h3 className="text-lg text-[#1E293B] font-semibold">Hi, I&apos;m Divyanshi Pal</h3>
//             <p className="text-sm text-[#334155] mt-2">
//               I&apos;m a passionate full-stack developer with 2+ years of experience crafting responsive web applications. I specialize in React, Node.js, and intuitive UI/UX design. Let&apos;s bring ideas to life with clean code and exceptional digital experiences.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

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
    const cards = gsap.utils.toArray(".about-card");

    cards.forEach((card: any, i: number) => {
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
    <main
      ref={sectionRef}
      className="min-h-screen bg-[#0F172A] text-white px-6 md:px-16 py-16"
    >
      {/* Title */}
      <div className="text-center mb-16 about-card">
        <h1 className="text-4xl text-[#fad4da] font-bold mb-2">About Me</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Discover my journey, expertise, and passion for crafting exceptional digital experiences
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tech Stack */}
        <div className="about-card bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl text-[#1E293B] font-semibold mb-4">Tech Stack</h2>
          <p className="text-[#334155] text-sm mb-4">
            Constantly shaping ideas into scalable, maintainable digital solutions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-[#334155] rounded-lg p-3 text-center text-sm flex flex-col items-center justify-center"
              >
                <Image src={tech.icon} alt={tech.name} width={32} height={32} className="mb-2" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="about-card bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl text-[#1E293B] font-semibold mb-4">Experience Highlights</h2>
          <p className="text-[#334155] text-sm mb-6">
            Numbers that define my professional journey
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl text-center">
              {[
                { value: "2+", label: "Years of Experience", sub: "Building scalable applications" },
                { value: "20+", label: "Projects Completed", sub: "From concept to deployment" },
                { value: "100%", label: "Client Satisfaction", sub: "Written with passion" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#334155] rounded-xl p-6">
                  <p className="text-4xl font-bold text-[#FF6B81]">{stat.value}</p>
                  <p className="text-lg">{stat.label}</p>
                  <p className="text-sm text-gray-400">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Collaboration */}
        <div className="about-card bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
          <div>
            <h2 className="text-xl text-[#1E293B] font-semibold mb-4">Global Collaboration</h2>
            <p className="text-[#334155] text-sm">
              Based in India, I regularly collaborate with teams across several time zones and cultures to build better software.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-[#e55a6d] font-medium border border-[#e55a6d] rounded-lg px-4 py-2 hover:bg-[#e55a6d] hover:text-[#0F172A] transition"
          >
            Let&apos;s Connect <FiArrowRight />
          </a>
        </div>

        {/* Passion for Innovation */}
        <div className="about-card bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl text-[#1E293B] font-semibold mb-4">Passion for Innovation</h2>
          <p className="text-[#334155] text-sm">
            Creativity lights every problem. I believe in solving complex problems by simplifying logic, embracing feedback, and iterating into delightful digital results.
          </p>
        </div>

        {/* Personal Intro */}
        <div className="about-card md:col-span-2 bg-[#fad4da] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center gap-6 mt-4">
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
              I&apos;m a passionate full-stack developer with 2+ years of experience crafting responsive web applications. I specialize in React, Node.js, and intuitive UI/UX design. Let&apos;s bring ideas to life with clean code and exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
