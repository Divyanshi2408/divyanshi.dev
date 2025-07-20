// 'use client';
// import Image from 'next/image';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// export default function HeroCodeEditor() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     gsap.from(containerRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       ease: 'power3.out',
//     });
//   }, []);

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-[#0F172A] px-6 py-16">
//       <div
//         ref={containerRef}
//         className="relative w-full max-w-3xl bg-[#1E293B] rounded-xl shadow-2xl p-6"
//       >
//         {/* Top bar */}
//         <div className="flex items-center gap-2 mb-4">
//           <span className="w-3 h-3 rounded-full bg-red-400"></span>
//           <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
//           <span className="w-3 h-3 rounded-full bg-green-400"></span>
//         </div>

//         {/* Code editor body */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           {/* Avatar */}
//           <div className="relative flex justify-center">
//             <div className="absolute w-48 h-48 bg-[#FF6B81] opacity-10 blur-2xl rounded-full -z-10" />
//             <Image
//               src="/profile.png" // Replace with your own cartoon avatar
//               alt="Avatar"
//               width={150}
//               height={150}
//               className="rounded-full object-cover border-4 border-[#F9B6C2]"
//             />
//           </div>

//           {/* Fake code block */}
//           <div className="bg-[#0F172A] p-4 rounded-lg text-[#CBD5E1] text-sm font-mono leading-relaxed">
//             <p className="text-[#F9B6C2]">// Portfolio Welcome</p>
//             <p>
//               <span className="text-pink-400">const</span> dev = {'{'}
//             </p>
//             <p className="ml-4">
//               name: <span className="text-[#FF6B81]">'Divyanshi Pal'</span>,
//             </p>
//             <p className="ml-4">
//               role: <span className="text-[#FF6B81]">'FullStack Developer'</span>,
//             </p>
//             <p className="ml-4">
//               stack: <span className="text-[#FF6B81]">['React', 'Node.js', 'MongoDB']</span>
//             </p>
//             <p>{'}'}</p>
//             <p className="mt-4 text-[#F9B6C2]">// Let’s build something amazing</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroCodeEditor() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-sm bg-[#fad4da] rounded-xl shadow-xl px-4 py-5  hover:shadow-[0_0_15px_#e55a6d] transition-all duration-300"
    >
      {/* Fake editor header buttons */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
      </div>

      {/* Updated mock code */}
      <div className="bg-[#0F172A] p-4 rounded-lg text-[#CBD5E1] text-sm font-mono leading-relaxed">
        <p className="text-[#F9B6C2]">{"// work in progress..."}</p>
<p>
  <span className="text-pink-400">const</span> status = {'{'}
</p>
<p className="ml-4">
  learning: <span className="text-[#FF6B81]">&apos;Next.js & TypeScript&apos;</span>,
</p>
<p className="ml-4">
  building: <span className="text-[#FF6B81]">&apos;Full-stack projects&apos;</span>,
</p>
<p className="ml-4">
  availableFor: <span className="text-[#FF6B81]">&apos;Developer Roles&apos;</span>,
</p>
<p className="ml-4">
  github: <span className="text-[#FF6B81]">&apos;/Divyanshipal2408&apos;</span>,
</p>
<p>{'}'}</p>
<p className="text-[#F9B6C2] mt-3">{"// let’s build something impactful 🚀"}</p>

      </div>
    </div>
  );
}
