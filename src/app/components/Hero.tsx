'use client';

import { useEffect, useRef, useState } from 'react';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroCodeEditor from './HeroCodeEditor';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftTextRef = useRef(null);
  const imageRef = useRef(null);
  const rightTextRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.from(leftTextRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      delay: 0.3,
      duration: 1.2,
      ease: 'back.out(1.7)',
    });

    gsap.from(rightTextRef.current, {
      x: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(scrollRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
     <main className="bg-[#0F172A] text-[#F1F5F9] relative overflow-hidden">
      {/* Header */}
      <header className="hidden lg:flex justify-between items-center px-6 md:px-16 py-6 border-b border-[#1E293B] bg-[#0F172A] shadow-sm">
        <div className="flex items-center gap-4 text-[#AAB1C2]">
        <a
          href="https://www.linkedin.com/in/divyanshi-pal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
        </a>
        <a
          href="https://github.com/Divyanshi2408"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
        </a>
        <a
          href="https://www.instagram.com/divyanshipal2808 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
        </a>
      </div>

        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "'Great Vibes', cursive", color: '#fad4da' }}
        >
          Divyanshi Pal
        </h1>
        <div />
      </header>

{/* Mobile Header */}
<div className="lg:hidden flex justify-between items-center px-6 md:px-16 py-4 border-b border-[#1E293B] bg-[#0F172A] shadow-sm">
  <h1 className="text-xl font-bold text-[#fad4da] font-[cursive] tracking-wide">
    Divyanshi Pal
  </h1>
  <button
    className="text-[#AAB1C2] text-2xl focus:outline-none"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
    title="Toggle menu"
  >
    ☰
  </button>
</div>

{/* Mobile Navigation Menu */}
{menuOpen && (
  <div className="lg:hidden flex flex-col items-center gap-4 py-4 border-b border-[#334155] bg-[#0F172A] shadow-md">
    {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
      <a
        key={label}
        href={`#${label.toLowerCase()}`}
        onClick={() => setMenuOpen(false)}
        className="block px-4 py-2 rounded font-semibold text-sm text-[#AAB1C2] hover:bg-[#1E293B] hover:text-[#FF6B81] transition-colors duration-300"
      >
        {label}
      </a>
    ))}

    <div className="flex items-center gap-4 text-[#AAB1C2] mt-2">
      <a
        href="https://www.linkedin.com/in/divyanshi-pal/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FiLinkedin className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
      </a>
      <a
        href="https://github.com/Divyanshi2408"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FiGithub className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
      </a>
      <a
        href="https://www.instagram.com/divyanshipal2808"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <FiInstagram className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
      </a>
    </div>
  </div>
)}

{/* Desktop Navigation */}
<nav className="hidden lg:flex justify-center gap-6 md:gap-10 py-4 font-semibold text-sm md:text-base text-[#AAB1C2] tracking-wide border-b border-[#1E293B]">
  {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
    <a
      key={label}
      href={`#${label.toLowerCase()}`}
      className="hover:text-[#FF6B81] transition-colors duration-300"
    >
      {label}
    </a>
  ))}
</nav>

      {/* Hero Section */}
       <section id='home' className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center px-6 md:px-20 py-4 md:py-12 bg-[#0F172A]">

        {/* Left Text */}
        <div ref={leftTextRef} className="text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-3 text-[#fad4da]">
          Divyanshi<br /> Pal
        </h2>
          <p className="text-base text-[#f88ea1] font-medium tracking-wide mb-2">
          FullStack Developer · Application Developer
        </p>

          <p className="text-[#CBD5E1] text-sm mt-3 max-w-sm mx-auto lg:mx-0">
            Passionate about transforming ideas into interactive digital experiences.
          </p>
        </div>

        {/* Center Editor */}
        <div className="flex justify-center" ref={imageRef}>
          <HeroCodeEditor />
        </div>

        {/* Right CTA */}
        <div ref={rightTextRef} className="text-center lg:text-left text-[#CBD5E1]">
          {/* <div className="w-10 h-1 bg-[#FF6B81] mx-auto lg:mx-0 mb-4" /> */}
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#fad4da] to-[#e55a6d] rounded-full mx-auto lg:mx-0 mb-4" />
          <p className="max-w-sm mx-auto lg:mx-0">
            I build clean, scalable web applications using the MERN stack,
            focusing on intuitive UI and real-world functionality.
          </p>
         <a
          href="#contact"
          className="inline-block mt-6 px-6 py-2 bg-[#FF6B81] hover:bg-[#e55a6d] text-white font-semibold tracking-wide rounded shadow-md shadow-[#e55a6d80] transition duration-300"
        >
          Let&apos;s Talk →
        </a>

        </div>
      </section>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollRef}
        className="mt-4 md:mt-10 animate-bounce text-[#FF6B81] text-center text-xl"
      >
        ↓ Scroll Down
      </div>
    </main>
  );
}
