'use client';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#F1F5F9]">

      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-[#334155]">
        <div className="flex items-center gap-4">
          <FiLinkedin className="text-xl cursor-pointer hover:text-[#38BDF8] transition duration-300" />
          <FiGithub className="text-xl cursor-pointer hover:text-[#38BDF8] transition duration-300" />
          <FiInstagram className="text-xl cursor-pointer hover:text-[#38BDF8] transition duration-300" />
        </div>
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "'Great Vibes', cursive", color: '#FB7185' }}
        >
          Divyanshi Pal
        </h1>
        <div className="flex items-center gap-4">{/* Optional CTA */}</div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 md:gap-10 py-4 font-semibold text-sm md:text-base">
        {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
          <a
            key={label}
            href="#"
            className="hover:text-[#38BDF8] transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-20 px-6 md:px-20 py-16">
        {/* Left Text */}
        <div className="flex-1 flex items-center justify-center md:justify-end animate-fade-in">
          <div className="text-center md:text-left max-w-sm transition-opacity duration-1000 delay-200">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
              Divyanshi<br /> Pal
            </h2>
            <p className="text-sm md:text-base text-[#94A3B8]">
              FullStack Developer. <br /> Application Developer.
            </p>
          </div>
        </div>

        {/* Center Image with blurred blob */}
        <div className="flex-1 flex items-center justify-center animate-scale-in">
          <div className="relative w-[180px] md:w-[200px] lg:w-[340px] shadow-lg transition-transform duration-500 hover:scale-105">
            {/* Blurred Blob Behind Image */}
            <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full bg-[#38BDF8] opacity-30 blur-3xl -z-10 animate-pulse"></div>

            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/female-coder-is-coding-illustration-download-in-svg-png-gif-file-formats--html-logo-web-developer-programmer-development-pack-seo-illustrations-8227139.png"
              alt="Divyanshi illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Right Text + CTA */}
        <div className="flex-1 flex items-center justify-center md:justify-start animate-fade-in delay-300">
          <div className="max-w-sm text-[#94A3B8] text-center md:text-left">
            <div className="w-10 h-1 bg-[#FB7185] mx-auto md:mx-0 mb-4"></div>
            <p>
              I build clean, scalable web applications using the MERN stack,
              focusing on intuitive UI and real-world functionality.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-2 bg-[#38BDF8] text-[#0F172A] font-semibold rounded hover:bg-[#0ea5e9] transition"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Down Indicator */}
      <div className="mt-10 animate-bounce text-[#38BDF8] text-center text-xl">
        ↓ Scroll Down
      </div>
    
    </main>
  );
}



