'use client'
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white px-6 md:px-16 py-16">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Discover my journey, expertise, and passion for crafting exceptional digital experiences
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tech Stack */}
        <div className="bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-sm mb-4">
            Constantly shaping ideas into scalable, maintainable digital solutions.
          </p>
          <div className="grid grid-cols-4 gap-4">
            {['React', 'Node.js', 'MongoDB', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Django', 'MySQL'].map((tech, i) => (
              <div key={i} className="bg-[#334155] rounded-lg p-2 text-center text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Experience Highlights</h2>
          <p className="text-gray-400 text-sm mb-6">
            Numbers that define my professional journey
          </p>
          <div className="flex flex-col gap-4">
            <div className="text-lg font-bold">4+ <span className="text-sm font-normal text-gray-400">Years of Experience</span></div>
            <div className="text-lg font-bold">20+ <span className="text-sm font-normal text-gray-400">Projects Completed</span></div>
            <div className="text-lg font-bold">100% <span className="text-sm font-normal text-gray-400">Client Satisfaction</span></div>
          </div>
        </div>

        {/* Global Collaboration */}
        <div className="bg-[#1E293B] rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">Global Collaboration</h2>
            <p className="text-gray-400 text-sm">
              Based in India, I regularly collaborate with teams across several time zones and cultures to build better software.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-[#38BDF8] font-medium border border-[#38BDF8] rounded-lg px-4 py-2 hover:bg-[#38BDF8] hover:text-[#0F172A] transition"
          >
            Let&#39;s Connect <FiArrowRight />
          </a>
        </div>

        {/* Passion for Innovation */}
        <div className="bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Passion for Innovation</h2>
          <p className="text-gray-400 text-sm">
            Creativity lights every problem. I believe in solving complex problems by simplifying logic, embracing feedback, and iterating into delightful digital results.
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="md:col-span-2 bg-[#1E293B] rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 mt-4">
          <Image
            src="/profile.jpg" // replace with your image in /public folder
            alt="Divyanshi Pal"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">Hi, I&#39;m Divyanshi Pal</h3>
            <p className="text-sm text-gray-400 mt-2">
              I&#39;m a passionate full-stack developer with 2+ years of experience crafting responsive web applications. I specialize in React, Node.js, and intuitive UI/UX design. Let&#39;s bring ideas to life with clean code and exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
