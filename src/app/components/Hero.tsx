// // // // // 'use client';
// // // // // import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#F1F5F9]">

// // // // //       {/* Header */}
// // // // //       <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-[#334155]">
// // // // //         <div className="flex items-center gap-4">
// // // // //           <FiLinkedin className="text-xl cursor-pointer hover:text-[#38BDF8] transition duration-300" />
// // // // //           <FiGithub className="text-xl cursor-pointer hover:text-[#38BDF8] transition duration-300" />
// // // // //           <FiInstagram className="text-xl cursor-pointer hover:text-[#38BDF8] transition duration-300" />
// // // // //         </div>
// // // // //         <h1
// // // // //           className="text-2xl font-bold"
// // // // //           style={{ fontFamily: "'Great Vibes', cursive", color: '#FB7185' }}
// // // // //         >
// // // // //           Divyanshi Pal
// // // // //         </h1>
// // // // //         <div className="flex items-center gap-4">{/* Optional CTA */}</div>
// // // // //       </header>

// // // // //       {/* Navigation */}
// // // // //       <nav className="flex justify-center gap-6 md:gap-10 py-4 font-semibold text-sm md:text-base">
// // // // //         {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
// // // // //           <a
// // // // //             key={label}
// // // // //             href="#"
// // // // //             className="hover:text-[#38BDF8] transition-colors duration-300"
// // // // //           >
// // // // //             {label}
// // // // //           </a>
// // // // //         ))}
// // // // //       </nav>

// // // // //       {/* Hero Section */}
// // // // //       <section className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-20 px-6 md:px-20 py-16">
// // // // //         {/* Left Text */}
// // // // //         <div className="flex-1 flex items-center justify-center md:justify-end animate-fade-in">
// // // // //           <div className="text-center md:text-left max-w-sm transition-opacity duration-1000 delay-200">
// // // // //             <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
// // // // //               Divyanshi<br /> Pal
// // // // //             </h2>
// // // // //             <p className="text-sm md:text-base text-[#94A3B8]">
// // // // //               FullStack Developer. <br /> Application Developer.
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Center Image with blurred blob */}
// // // // //         <div className="flex-1 flex items-center justify-center animate-scale-in">
// // // // //           <div className="relative w-[180px] md:w-[200px] lg:w-[340px] shadow-lg transition-transform duration-500 hover:scale-105">
// // // // //             {/* Blurred Blob Behind Image */}
// // // // //             <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full bg-[#38BDF8] opacity-30 blur-3xl -z-10 animate-pulse"></div>

// // // // //             <img
// // // // //               src="https://cdni.iconscout.com/illustration/premium/thumb/female-coder-is-coding-illustration-download-in-svg-png-gif-file-formats--html-logo-web-developer-programmer-development-pack-seo-illustrations-8227139.png"
// // // // //               alt="Divyanshi illustration"
// // // // //               className="w-full h-auto rounded-lg"
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Right Text + CTA */}
// // // // //         <div className="flex-1 flex items-center justify-center md:justify-start animate-fade-in delay-300">
// // // // //           <div className="max-w-sm text-[#94A3B8] text-center md:text-left">
// // // // //             <div className="w-10 h-1 bg-[#FB7185] mx-auto md:mx-0 mb-4"></div>
// // // // //             <p>
// // // // //               I build clean, scalable web applications using the MERN stack,
// // // // //               focusing on intuitive UI and real-world functionality.
// // // // //             </p>
// // // // //             <a
// // // // //               href="#contact"
// // // // //               className="inline-block mt-6 px-6 py-2 bg-[#38BDF8] text-[#0F172A] font-semibold rounded hover:bg-[#0ea5e9] transition"
// // // // //             >
// // // // //               Let’s Talk
// // // // //             </a>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Scroll Down Indicator */}
// // // // //       <div className="mt-10 animate-bounce text-[#38BDF8] text-center text-xl">
// // // // //         ↓ Scroll Down
// // // // //       </div>
    
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // 'use client';

// // // // import { useEffect, useRef } from 'react';
// // // // import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
// // // // import gsap from 'gsap';
// // // // import ScrollTrigger from 'gsap/ScrollTrigger';

// // // // gsap.registerPlugin(ScrollTrigger);

// // // // export default function Home() {
// // // //   const leftTextRef = useRef(null);
// // // //   const imageRef = useRef(null);
// // // //   const rightTextRef = useRef(null);
// // // //   const scrollRef = useRef(null);

// // // //   useEffect(() => {
// // // //     gsap.from(leftTextRef.current, {
// // // //       x: -100,
// // // //       opacity: 0,
// // // //       duration: 1,
// // // //       ease: 'power3.out',
// // // //     });

// // // //     gsap.from(imageRef.current, {
// // // //       scale: 0.8,
// // // //       opacity: 0,
// // // //       delay: 0.3,
// // // //       duration: 1.2,
// // // //       ease: 'back.out(1.7)',
// // // //     });

// // // //     gsap.from(rightTextRef.current, {
// // // //       x: 100,
// // // //       opacity: 0,
// // // //       delay: 0.5,
// // // //       duration: 1,
// // // //       ease: 'power3.out',
// // // //     });

// // // //     gsap.from(scrollRef.current, {
// // // //       opacity: 0,
// // // //       y: 20,
// // // //       duration: 1,
// // // //       scrollTrigger: {
// // // //         trigger: scrollRef.current,
// // // //         start: 'top bottom-=100',
// // // //         toggleActions: 'play none none none',
// // // //       },
// // // //     });
// // // //   }, []);

// // // //   return (
// // // //     <main className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0D1B2A] to-[#0B1120] text-[#F8FAFC] relative overflow-hidden">

// // // //       {/* Header */}
// // // //       <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-[#1E293B]">
// // // //         <div className="flex items-center gap-4">
// // // //           <FiLinkedin className="text-xl cursor-pointer hover:text-[#3758EB] transition duration-300" />
// // // //           <FiGithub className="text-xl cursor-pointer hover:text-[#3758EB] transition duration-300" />
// // // //           <FiInstagram className="text-xl cursor-pointer hover:text-[#3758EB] transition duration-300" />
// // // //         </div>
// // // //         <h1
// // // //           className="text-2xl font-bold drop-shadow-sm"
// // // //           style={{ fontFamily: "'Great Vibes', cursive", color: '#3758EB' }}
// // // //         >
// // // //           Divyanshi Pal
// // // //         </h1>
// // // //         <div className="flex items-center gap-4" />
// // // //       </header>

// // // //       {/* Navigation */}
// // // //       <nav className="flex justify-center gap-6 md:gap-10 py-4 font-semibold text-sm md:text-base">
// // // //         {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
// // // //           <a
// // // //             key={label}
// // // //             href="#"
// // // //             className="hover:text-[#3758EB] transition-colors duration-300"
// // // //           >
// // // //             {label}
// // // //           </a>
// // // //         ))}
// // // //       </nav>

// // // //       {/* Hero Section */}
// // // //       <section className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-20 px-6 md:px-20 py-16 relative z-10">

// // // //         {/* Left Text */}
// // // //         <div ref={leftTextRef} className="flex-1 flex items-center justify-center md:justify-end">
// // // //           <div className="text-center md:text-left max-w-sm">
// // // //             <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-3 text-white">
// // // //               Divyanshi<br /> Pal
// // // //             </h2>
// // // //             <p className="text-sm md:text-base text-[#3758EB] mb-2">
// // // //               FullStack Developer. <br /> Application Developer.
// // // //             </p>
// // // //             <p className="text-[#94A3B8] text-sm mt-3">
// // // //               Passionate about transforming ideas into interactive digital experiences.
// // // //             </p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Center Image */}
// // // //         <div className="flex-1 flex items-center justify-center relative">
// // // //           <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-[#3758EB] opacity-20 blur-3xl -z-10" />
// // // //           <img
// // // //             ref={imageRef}
// // // //             src="https://cdni.iconscout.com/illustration/premium/thumb/web-developer-working-on-laptop-5488426-4570436.png"
// // // //             alt="Developer illustration"
// // // //             className="w-full max-w-xs md:max-w-sm drop-shadow-lg"
// // // //           />
// // // //         </div>

// // // //         {/* Right CTA */}
// // // //         <div ref={rightTextRef} className="flex-1 flex items-center justify-center md:justify-start">
// // // //           <div className="max-w-sm text-[#94A3B8] text-center md:text-left">
// // // //             <div className="w-10 h-1 bg-[#3758EB] mx-auto md:mx-0 mb-4" />
// // // //             <p>
// // // //               I build clean, scalable web applications using the MERN stack,
// // // //               focusing on intuitive UI and real-world functionality.
// // // //             </p>
// // // //             <a
// // // //               href="#contact"
// // // //               className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-[#3758EB] text-white font-semibold rounded hover:bg-[#1e3a8a] transition"
// // // //             >
// // // //               Let’s Talk <span className="text-lg">→</span>
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Scroll Down Indicator */}
// // // //       <div
// // // //         ref={scrollRef}
// // // //         className="mt-10 animate-bounce text-[#3758EB] text-center text-xl"
// // // //       >
// // // //         ↓ Scroll Down
// // // //       </div>

// // // //     </main>
// // // //   );
// // // // }

// // // 'use client';

// // // import { useEffect, useRef } from 'react';
// // // import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
// // // import gsap from 'gsap';
// // // import ScrollTrigger from 'gsap/ScrollTrigger';

// // // gsap.registerPlugin(ScrollTrigger);

// // // export default function Home() {
// // //   const leftTextRef = useRef(null);
// // //   const imageRef = useRef(null);
// // //   const rightTextRef = useRef(null);
// // //   const scrollRef = useRef(null);

// // //   useEffect(() => {
// // //     gsap.from(leftTextRef.current, {
// // //       x: -100,
// // //       opacity: 0,
// // //       duration: 1,
// // //       ease: 'power3.out',
// // //     });

// // //     gsap.from(imageRef.current, {
// // //       scale: 0.8,
// // //       opacity: 0,
// // //       delay: 0.3,
// // //       duration: 1.2,
// // //       ease: 'back.out(1.7)',
// // //     });

// // //     gsap.from(rightTextRef.current, {
// // //       x: 100,
// // //       opacity: 0,
// // //       delay: 0.5,
// // //       duration: 1,
// // //       ease: 'power3.out',
// // //     });

// // //     gsap.from(scrollRef.current, {
// // //       opacity: 0,
// // //       y: 20,
// // //       duration: 1,
// // //       scrollTrigger: {
// // //         trigger: scrollRef.current,
// // //         start: 'top bottom-=100',
// // //         toggleActions: 'play none none none',
// // //       },
// // //     });
// // //   }, []);

// // //   return (
// // //     <main className="min-h-screen bg-gradient-to-br from-[#1F1D36] via-[#2C2A4A] to-[#1F1D36] text-[#FDF6F0] relative overflow-hidden">

// // //       {/* Header */}
// // //       <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-[#3A3653]">
// // //         <div className="flex items-center gap-4">
// // //           <FiLinkedin className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
// // //           <FiGithub className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
// // //           <FiInstagram className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
// // //         </div>
// // //         <h1
// // //           className="text-2xl font-bold drop-shadow-sm"
// // //           style={{ fontFamily: "'Great Vibes', cursive", color: '#F3CFC6' }}
// // //         >
// // //           Divyanshi Pal
// // //         </h1>
// // //         <div className="flex items-center gap-4" />
// // //       </header>

// // //       {/* Navigation */}
// // //       <nav className="flex justify-center gap-6 md:gap-10 py-4 font-semibold text-sm md:text-base">
// // //         {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
// // //           <a
// // //             key={label}
// // //             href="#"
// // //             className="hover:text-[#FF6B81] transition-colors duration-300"
// // //           >
// // //             {label}
// // //           </a>
// // //         ))}
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <section className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-20 px-6 md:px-20 py-16 relative z-10">

// // //         {/* Left Text */}
// // //         <div ref={leftTextRef} className="flex-1 flex items-center justify-center md:justify-end">
// // //           <div className="text-center md:text-left max-w-sm">
// // //             <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-3 text-white">
// // //               Divyanshi<br /> Pal
// // //             </h2>
// // //             <p className="text-sm md:text-base text-[#F3CFC6] mb-2">
// // //               FullStack Developer. <br /> Application Developer.
// // //             </p>
// // //             <p className="text-[#B6B6C9] text-sm mt-3">
// // //               Passionate about transforming ideas into interactive digital experiences.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Center Image */}
// // //         <div className="flex-1 flex items-center justify-center relative">
// // //           <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-[#FF6B81] opacity-20 blur-3xl -z-10" />
// // //           <img
// // //             ref={imageRef}
// // //             src="https://cdni.iconscout.com/illustration/premium/thumb/female-programmer-working-on-laptop-4444639-3686827.png"
// // //             alt="Developer illustration"
// // //             className="w-full max-w-xs md:max-w-sm drop-shadow-lg"
// // //           />
// // //         </div>

// // //         {/* Right CTA */}
// // //         <div ref={rightTextRef} className="flex-1 flex items-center justify-center md:justify-start">
// // //           <div className="max-w-sm text-[#F3CFC6] text-center md:text-left">
// // //             <div className="w-10 h-1 bg-[#F3CFC6] mx-auto md:mx-0 mb-4" />
// // //             <p>
// // //               I build clean, scalable web applications using the MERN stack,
// // //               focusing on intuitive UI and real-world functionality.
// // //             </p>
// // //             <a
// // //               href="#contact"
// // //               className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-[#FF6B81] text-white font-semibold rounded hover:bg-[#e2556d] transition"
// // //             >
// // //               Let’s Talk <span className="text-lg">→</span>
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Scroll Down Indicator */}
// // //       <div
// // //         ref={scrollRef}
// // //         className="mt-10 animate-bounce text-[#FF6B81] text-center text-xl"
// // //       >
// // //         ↓ Scroll Down
// // //       </div>

// // //     </main>
// // //   );
// // // }


// // // 'use client';

// // // import { useEffect, useRef } from 'react';
// // // import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
// // // import gsap from 'gsap';
// // // import ScrollTrigger from 'gsap/ScrollTrigger';

// // // gsap.registerPlugin(ScrollTrigger);

// // // export default function Home() {
// // //   const leftTextRef = useRef(null);
// // //   const imageRef = useRef(null);
// // //   const rightTextRef = useRef(null);
// // //   const scrollRef = useRef(null);

// // //   useEffect(() => {
// // //     gsap.from(leftTextRef.current, {
// // //       x: -100,
// // //       opacity: 0,
// // //       duration: 1,
// // //       ease: 'power3.out',
// // //     });

// // //     gsap.from(imageRef.current, {
// // //       scale: 0.8,
// // //       opacity: 0,
// // //       delay: 0.3,
// // //       duration: 1.2,
// // //       ease: 'back.out(1.7)',
// // //     });

// // //     gsap.from(rightTextRef.current, {
// // //       x: 100,
// // //       opacity: 0,
// // //       delay: 0.5,
// // //       duration: 1,
// // //       ease: 'power3.out',
// // //     });

// // //     gsap.from(scrollRef.current, {
// // //       opacity: 0,
// // //       y: 20,
// // //       duration: 1,
// // //       scrollTrigger: {
// // //         trigger: scrollRef.current,
// // //         start: 'top bottom-=100',
// // //         toggleActions: 'play none none none',
// // //       },
// // //     });
// // //   }, []);

// // //   return (
// // //     <main className="min-h-screen bg-[#0F172A] text-[#1F2937] relative overflow-hidden">

// // //       {/* Header */}
// // //       <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-[#E5E7EB] bg-[#0F172A] shadow-sm">
// // //         <div className="flex items-center gap-4 text-[#6B7280]">
// // //           <FiLinkedin className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
// // //           <FiGithub className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
// // //           <FiInstagram className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
// // //         </div>
// // //         <h1
// // //           className="text-2xl font-bold"
// // //           style={{ fontFamily: "'Great Vibes', cursive", color: '#fad4da' }}
// // //         >
// // //           Divyanshi Pal
// // //         </h1>
// // //         <div />
// // //       </header>

// // //       {/* Navigation */}
// // //       <nav className="flex justify-center gap-6 md:gap-10 py-4 font-semibold text-sm md:text-base text-[#6B7280]">
// // //         {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
// // //           <a
// // //             key={label}
// // //             href="#"
// // //             className="hover:text-[#fad4da] transition-colors duration-300"
// // //           >
// // //             {label}
// // //           </a>
// // //         ))}
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <section className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-20 px-6 md:px-20 py-16 relative z-10 bg-[#0F172A]">

// // //         {/* Left Text */}
// // //         <div ref={leftTextRef} className="flex-1 flex items-center justify-center md:justify-end">
// // //           <div className="text-center md:text-left max-w-sm">
// // //             <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-3 text-[#fad4da]">
// // //               Divyanshi<br /> Pal
// // //             </h2>
// // //             <p className="text-sm md:text-base text-[#fad4da] mb-2">
// // //               FullStack Developer. <br /> Application Developer.
// // //             </p>
// // //             <p className="text-[#fad4da] text-sm mt-3">
// // //               Passionate about transforming ideas into interactive digital experiences.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Center Image */}
// // //         <div className="flex-1 flex items-center justify-center relative">
// // //           <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-[#FF6B81] opacity-10 blur-3xl -z-10" />
// // //           <img
// // //             ref={imageRef}
// // //             src="https://cdni.iconscout.com/illustration/premium/thumb/female-programmer-working-on-laptop-4444639-3686827.png"
// // //             alt="Developer illustration"
// // //             className="w-full max-w-xs md:max-w-sm drop-shadow-xl"
// // //           />
// // //         </div>

// // //         {/* Right CTA */}
// // //         <div ref={rightTextRef} className="flex-1 flex items-center justify-center md:justify-start">
// // //           <div className="max-w-sm text-[#6B7280] text-center md:text-left">
// // //             <div className="w-10 h-1 bg-[#FF6B81] mx-auto md:mx-0 mb-4" />
// // //             <p>
// // //               I build clean, scalable web applications using the MERN stack,
// // //               focusing on intuitive UI and real-world functionality.
// // //             </p>
// // //             <a
// // //               href="#contact"
// // //               className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-[#FF6B81] text-white font-semibold rounded hover:bg-[#e55a6d] transition"
// // //             >
// // //               Let’s Talk <span className="text-lg">→</span>
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Scroll Down Indicator */}
// // //       <div
// // //         ref={scrollRef}
// // //         className="mt-10 animate-bounce text-[#FF6B81] text-center text-xl"
// // //       >
// // //         ↓ Scroll Down
// // //       </div>

// // //     </main>
// // //   );
// // // }

// 'use client';

// import { useEffect, useRef } from 'react';
// import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
// import gsap from 'gsap';
// import HeroCodeEditor from './HeroCodeEditor';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const rightTextRef = useRef(null);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     gsap.from(rightTextRef.current, {
//       x: 100,
//       opacity: 0,
//       delay: 0.5,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     gsap.from(scrollRef.current, {
//       opacity: 0,
//       y: 20,
//       duration: 1,
//       scrollTrigger: {
//         trigger: scrollRef.current,
//         start: 'top bottom-=100',
//         toggleActions: 'play none none none',
//       },
//     });
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#0F172A] text-[#F1F5F9] relative overflow-hidden">

//       {/* Header */}
//       <header className="flex justify-between items-center px-6 md:px-16 py-5 border-b border-[#1E293B] bg-[#0F172A] shadow-sm">
//         <div className="flex items-center gap-4 text-[#AAB1C2]">
//           <FiLinkedin className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
//           <FiGithub className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
//           <FiInstagram className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
//         </div>
//         <h1
//           className="text-2xl font-bold"
//           style={{ fontFamily: "'Great Vibes', cursive", color: '#F9B6C2' }}
//         >
//           Divyanshi Pal
//         </h1>
//         <div />
//       </header>

//       {/* Navigation */}
//       <nav className="flex justify-center gap-6 md:gap-10 py-3 font-semibold text-sm md:text-base text-[#AAB1C2] tracking-wide">
//         {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
//           <a
//             key={label}
//             href="#"
//             className="hover:text-[#FF6B81] transition-colors duration-300"
//           >
//             {label}
//           </a>
//         ))}
//       </nav>

//       {/* Hero Section - perfectly balanced */}
//       <section className="flex justify-center bg-[#0F172A]">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 items-center w-full max-w-screen-xl">

//           {/* Hero Code Editor */}
//           <div className="flex justify-center">
//             <HeroCodeEditor />
//           </div>

//           {/* Right CTA */}
//           <div
//             ref={rightTextRef}
//             className="text-center lg:text-left text-[#CBD5E1] px-4"
//           >
//             <div className="w-10 h-1 bg-[#FF6B81] mx-auto lg:mx-0 mb-4" />
//             <p className="text-base leading-relaxed max-w-md mx-auto lg:mx-0">
//               I build clean, scalable web applications using the MERN stack,
//               focusing on intuitive UI and real-world functionality.
//             </p>
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-[#FF6B81] hover:bg-[#e55a6d] text-white font-semibold tracking-wide rounded shadow-md shadow-[#ff6b8170] transition"
//             >
//               Let’s Talk <span className="text-lg">→</span>
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* Scroll Down Indicator */}
//       <div
//         ref={scrollRef}
//         className="pb-10 animate-bounce text-[#FF6B81] text-center text-xl"
//       >
//         ↓ Scroll Down
//       </div>

//     </main>
//   );
// }


'use client';

import { useEffect, useRef } from 'react';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import gsap from 'gsap';
import HeroCodeEditor from './HeroCodeEditor';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
    <main className="min-h-screen bg-[#0F172A] text-[#F1F5F9] relative overflow-hidden">

      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-[#1E293B] bg-[#0F172A] shadow-sm">
        <div className="flex items-center gap-4 text-[#AAB1C2]">
          <FiLinkedin className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
          <FiGithub className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
          <FiInstagram className="text-xl cursor-pointer hover:text-[#FF6B81] transition duration-300" />
        </div>
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "'Great Vibes', cursive", color: '#F9B6C2' }}
        >
          Divyanshi Pal
        </h1>
        <div />
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 md:gap-10 py-4 font-semibold text-sm md:text-base text-[#AAB1C2] tracking-wide">
        {['HOME', 'ABOUT', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((label) => (
          <a
            key={label}
            href="#"
            className="hover:text-[#FF6B81] transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center px-6 md:px-20 py-24 bg-[#0F172A]">

  {/* Left Text */}
  <div ref={leftTextRef} className="text-center lg:text-left">
    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-3 text-[#F9B6C2]">
      Divyanshi<br /> Pal
    </h2>
    <p className="text-sm md:text-base text-[#F9B6C2] mb-2 tracking-wide">
      FullStack Developer. <br /> Application Developer.
    </p>
    <p className="text-[#CBD5E1] text-sm mt-3 max-w-sm mx-auto lg:mx-0">
      Passionate about transforming ideas into interactive digital experiences.
    </p>
  </div>

  {/* Center Editor */}
  <div className="flex justify-center">
    <HeroCodeEditor />
  </div>

  {/* Right CTA */}
  <div ref={rightTextRef} className="text-center lg:text-left text-[#CBD5E1]">
    <div className="w-10 h-1 bg-[#FF6B81] mx-auto lg:mx-0 mb-4" />
    <p className="max-w-sm mx-auto lg:mx-0">
      I build clean, scalable web applications using the MERN stack,
      focusing on intuitive UI and real-world functionality.
    </p>
    <a
      href="#contact"
      className="inline-block mt-6 px-6 py-2 bg-[#FF6B81] hover:bg-[#e55a6d] text-white font-semibold tracking-wide rounded shadow-md shadow-[#ff6b8170] transition"
    >
      Let’s Talk →
    </a>
  </div>
</section>


      {/* Scroll Down Indicator */}
      <div
        ref={scrollRef}
        className="mt-10 animate-bounce text-[#FF6B81] text-center text-xl"
      >
        ↓ Scroll Down
      </div>

    </main>
  );
}
