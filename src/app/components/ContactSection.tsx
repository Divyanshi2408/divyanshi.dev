// 'use client';

// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { MdEmail, MdLocationOn } from 'react-icons/md';
// import { FormEvent, useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function ContactSection() {
//   const sectionRef = useRef(null);
//   const formRef = useRef(null);
//   const infoRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(sectionRef.current, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 85%',
//         },
//       });

//       gsap.from(formRef.current, {
//         opacity: 0,
//         xPercent: -30, // Changed from x: -100 to xPercent
//         duration: 1,
//         delay: 0.3,
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: 'top 85%',
//         },
//       });

//       gsap.from(infoRef.current, {
//         opacity: 0,
//         xPercent: 30, // Changed from x: 100 to xPercent
//         duration: 1,
//         delay: 0.3,
//         scrollTrigger: {
//           trigger: infoRef.current,
//           start: 'top 85%',
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     alert('Message sent!');
//   };

//   return (
//     <section id="contact"
//       className="bg-[#0F172A] text-[#fad4da] px-6 py-16 md:px-20 overflow-x-hidden"
//     >
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-2">Let&apos;s Connect</h2>
//         <p className="text-gray-400">
//           Ready to bring your ideas to life? Let&apos;s discuss how we can work together to
//           create something amazing.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8 max-w-full">
//         {/* Left Form */}
//         <div ref={formRef} className="bg-[#fad4da] p-6 rounded-xl shadow-md">
//           <h3 className="text-xl text-black font-semibold mb-4">Send a Message</h3>
//           <p className="text-sm text-black mb-6">
//             Fill out the form below and I will get back to you within 24 hours
//           </p>

//           <form className="space-y-5 text-black" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm mb-1">Full Name</label>
//               <input
//                 type="text"
//                 required
//                 placeholder="Enter your full name"
//                 className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-1">Email Address</label>
//               <input
//                 type="email"
//                 required
//                 placeholder="your.email@example.com"
//                 className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-1">Your Message</label>
//               <textarea
//                 rows={4}
//                 required
//                 placeholder="Tell me about your project, timeline, and budget..."
//                 className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 bg-[#FF6B81] hover:bg-[#e55a6d] text-white font-semibold tracking-wide rounded shadow-md shadow-[#ff6b8170] text-sm font-medium hover:opacity-90 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Right Info Cards */}
//         <div ref={infoRef} className="flex flex-col gap-6 max-w-full">
//           {/* Contact Info */}
//           <div className="bg-[#fad4da] p-6 rounded-xl shadow-md space-y-4">
//             <h3 className="text-lg text-black font-semibold">Contact Information</h3>
//             <div className="flex items-center gap-3 text-sm">
//               <MdEmail className="text-[#FF6B81]" />
//               <span className="text-black">Divyanshipal2808@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-3 text-sm">
//               <MdLocationOn className="text-[#FF6B81]" />
//               <span className="text-black">Uttar Pradesh, India</span>
//             </div>
//           </div>

//           {/* Follow Me */}
//           <div className="bg-[#fad4da] p-6 rounded-xl shadow-md">
//             <h3 className="text-lg text-black font-semibold mb-4">Follow Me</h3>
//             <div className="flex flex-col gap-3 text-black">
//               <a href="https://github.com/Divyanshi2408" className="flex items-center gap-3 hover:text-[#FF6B81] text-sm">
//                 <FaGithub /> GitHub
//               </a>
//               <a href="#" className="flex items-center gap-3 hover:text-[#FF6B81] text-sm">
//                 <FaTwitter /> X (Twitter)
//               </a>
//               <a href="https://www.linkedin.com/in/divyanshi-pal/" className="flex items-center gap-3 hover:text-[#FF6B81] text-sm">
//                 <FaLinkedin /> LinkedIn
//               </a>
//             </div>
//           </div>

//           {/* Availability */}
//           <div className="bg-[#fad4da] p-6 rounded-xl shadow-md">
//             <div className="flex items-center gap-2 mb-2">
//               <span className="w-3 h-3 bg-green-400 rounded-full"></span>
//               <p className="text-sm text-black font-semibold">Available for Projects</p>
//             </div>
//             <p className="text-sm text-black">
//               I am currently accepting new freelance projects and collaboration opportunities.
//               Let&apos;s create something extraordinary together!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FormEvent, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(formRef.current, {
        opacity: 0,
        xPercent: -30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(infoRef.current, {
        opacity: 0,
        xPercent: 30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert('Message sent successfully!');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#0F172A] text-[#fad4da] px-6 py-16 md:px-20 overflow-x-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Let&apos;s Connect</h2>
        <p className="text-gray-400">
          Ready to bring your ideas to life? Let&apos;s discuss how we can work together to
          create something amazing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-full">
        {/* Left Form */}
        <div className="bg-[#fad4da] p-6 rounded-xl shadow-md">
          <h3 className="text-xl text-black font-semibold mb-4">Send a Message</h3>
          <p className="text-sm text-black mb-6">
            Fill out the form below and I will get back to you within 24 hours
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 text-black"
          >
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Your Message</label>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="Tell me about your project, timeline, and budget..."
                className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#FF6B81] hover:bg-[#e55a6d] text-white font-semibold tracking-wide rounded shadow-md shadow-[#ff6b8170] text-sm font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Info Cards */}
        <div ref={infoRef} className="flex flex-col gap-6 max-w-full">
          {/* Contact Info */}
          <div className="bg-[#fad4da] p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-lg text-black font-semibold">Contact Information</h3>
            <div className="flex items-center gap-3 text-sm">
              <MdEmail className="text-[#FF6B81]" />
              <span className="text-black">Divyanshipal2808@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MdLocationOn className="text-[#FF6B81]" />
              <span className="text-black">Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Follow Me */}
          <div className="bg-[#fad4da] p-6 rounded-xl shadow-md">
            <h3 className="text-lg text-black font-semibold mb-4">Follow Me</h3>
            <div className="flex flex-col gap-3 text-black">
              <a
                href="https://github.com/Divyanshi2408"
                className="flex items-center gap-3 hover:text-[#FF6B81] text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-[#FF6B81] text-sm"
              >
                <FaTwitter /> X (Twitter)
              </a>
              <a
                href="https://www.linkedin.com/in/divyanshi-pal/"
                className="flex items-center gap-3 hover:text-[#FF6B81] text-sm"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-[#fad4da] p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <p className="text-sm text-black font-semibold">Available for Projects</p>
            </div>
            <p className="text-sm text-black">
              I am currently accepting new freelance projects and collaboration opportunities.
              Let&apos;s create something extraordinary together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
