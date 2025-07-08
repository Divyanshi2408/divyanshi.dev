// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { FiExternalLink } from "react-icons/fi";

// const projects = [
//   {
//     title: "Learning Management System (LMS)",
//     description:
//       "A MERN stack-based LMS platform where users can enroll in courses, track progress, and access learning materials.",
//     image: "/projects/techsnap.png",
//     tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//   },
//   {
//     title: "ThreadSpire – Community Wisdom Threads",
//     description:
//       "A MERN-based community platform where users create, remix, and organize long-form wisdom threads.",
//     image: "/projects/domsell.png",
//     tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//   },
//   {
//     title: "Real Estate Web App",
//     description:
//       "A full-stack MERN Real Estate application for property listings, user authentication, and real-time search.",
//     image: "/projects/unstarted.png",
//     tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//   },
//   {
//     title: "Music Player Web App",
//     description:
//       "I developed a dynamic and interactive music player web application.",
//     image: "/projects/helpkitgenie.png",
//     tags: ["React", "CSS", "LastFm.API"],
//   },
// ];

// export default function FeaturedProjects() {
//   const [selectedProject, setSelectedProject] = useState(projects[0]);

//   return (
//    <section className="bg-[#0F172A] text-[#F1F5F9] px-6 md:px-20 py-16">
//       <h2 className="text-4xl font-bold text-center mb-2">Featured Projects</h2>
//       <p className="text-center text-gray-400 mb-10">
//         Explore my latest work and creative solutions
//       </p>

//       {/* Highlighted Project */}
//       <div className="bg-[#1E293B] rounded-xl p-6 flex flex-col md:flex-row gap-6 mb-10">
//         <div className="md:w-1/2 relative h-[240px] md:h-auto">
//           <Image
//             src={selectedProject.image}
//             alt={selectedProject.title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//         <div className="md:w-1/2 flex flex-col justify-between">
//           <div>
//             <h3 className="text-2xl font-semibold mb-2">
//               {selectedProject.title}
//             </h3>
//             <p className="text-gray-300 text-sm mb-4">
//               {selectedProject.description}
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {selectedProject.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-[#334155] px-2 py-1 rounded-full text-xs text-white"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <button className="self-start mt-4 flex items-center gap-2 text-[#38BDF8] hover:underline">
//             View Live <FiExternalLink />
//           </button>
//         </div>
//       </div>

//       {/* All Projects Thumbnails */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//   <div
//     key={index}
//     onClick={() => setSelectedProject(project)}
//     className={`cursor-pointer border rounded-xl overflow-hidden transition-transform hover:scale-105 ${
//       selectedProject.title === project.title ? "ring-2 ring-[#38BDF8]" : ""
//     }`}
//   >
//     <Image
//       src={project.image}
//       alt={project.title}
//       width={400}
//       height={240}
//       className="object-cover w-full h-48"
//     />
//     <div className="p-4">
//       <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
//       <p className="text-sm text-gray-400 truncate">
//         {project.description}
//       </p>
//     </div>
//   </div>
// ))}

//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css/mousewheel';

const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "A MERN stack-based LMS platform where users can enroll in courses, track progress, and access learning materials.",
    image: "/projects/techsnap.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "ThreadSpire – Community Wisdom Threads",
    description:
      "A MERN-based community platform where users create, remix, and organize long-form wisdom threads.",
    image: "/projects/domsell.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Real Estate Web App",
    description:
      "A full-stack MERN Real Estate application for property listings, user authentication, and real-time search.",
    image: "/projects/unstarted.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Music Player Web App",
    description:
      "I developed a dynamic and interactive music player web application.",
    image: "/projects/helpkitgenie.png",
    tags: ["React", "CSS", "LastFm.API"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] px-6 md:px-20 py-16">
      <h2 className="text-4xl font-bold text-center mb-2">Featured Projects</h2>
      <p className="text-center text-gray-400 mb-10">
        Explore my latest work and creative solutions
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Featured Project Display */}
        <div className="bg-[#1E293B] rounded-xl p-6 shadow-md">
          <div className="relative">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={700}
              height={400}
              className="object-cover w-full h-60 rounded-md"
            />
            <span className="absolute top-4 left-4 text-xs font-semibold uppercase">
              Choose your career & Start your project <span className="text-pink-400">now</span>
            </span>
            <span className="absolute top-4 right-4 bg-[#7c3aed] p-2 rounded-full">
              <FaExternalLinkAlt size={14} />
            </span>
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            {selectedProject.title}
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            {selectedProject.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedProject.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#334155] px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Slider for All Projects */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#38BDF8]">All Projects</h4>
<Swiper
  direction="vertical"
  slidesPerView={3}
  spaceBetween={20}
  mousewheel={true}
  modules={[Mousewheel]}
  className="h-[600px]"
>
  {projects.map((project, index) => (
    <SwiperSlide key={index} className="!h-[180px]">
      <div
        onClick={() => setSelectedProject(project)}
        className={`cursor-pointer border rounded-xl overflow-hidden transition-transform hover:scale-105 h-full bg-[#1E293B] ${
          selectedProject.title === project.title ? 'ring-2 ring-[#38BDF8]' : ''
        }`}
      >
        <div className="flex h-full">
          <Image
            src={project.image}
            alt={project.title}
            width={160}
            height={120}
            className="object-cover w-[160px] h-full rounded-l-md"
          />
          <div className="p-3 flex flex-col justify-center text-left">
            <h4 className="font-semibold text-base mb-1">{project.title}</h4>
            <p className="text-xs text-gray-400 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


        </div>
      </div>

      <div className="text-center mt-8">
        <span className="bg-[#1E293B] text-sm px-4 py-2 rounded-full">
          {projects.indexOf(selectedProject) + 1} of {projects.length} Projects
        </span>
      </div>
    </section>
  );
}
