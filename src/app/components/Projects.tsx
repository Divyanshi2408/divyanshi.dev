'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import { Swiper as SwiperType } from 'swiper';

const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "A MERN stack-based LMS platform where users can enroll in courses, track progress, and access learning materials. Course Listing, Enrollment, Admin Dashboard, Payment Integration.",
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
      "A dynamic and interactive music player built with React and Last.fm API integration.",
    image: "/projects/helpkitgenie.png",
    tags: ["React", "CSS", "LastFm.API"],
  },
  {
    title: "Recipe Finder Web App",
    description:
      "A voice-enabled recipe finder using Speech Recognition API to browse recipes interactively.",
    image: "/projects/helpkitgenie.png",
    tags: ["React", "CSS", "React Hooks", "Speech Recognition API"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] px-6 md:px-20 py-16">
      <h2 className="text-4xl font-bold text-center mb-2">Featured Projects</h2>
      <p className="text-center text-gray-400 mb-10">
        Explore my latest work and creative solutions
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Featured Project - 65% width */}
        <div className="lg:w-[65%] w-full bg-[#fad4da] rounded-xl p-6 shadow-md">
          <div className="relative">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={700}
              height={400}
              className="object-cover w-full h-60 lg:h-72 rounded-md"
            />
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

        {/* Right: Vertical Swiper - 35% width */}
        <div className="lg:w-[35%] w-full">
          <h4 className="text-lg font-semibold mb-4 text-[#38BDF8]">All Projects</h4>

          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={20}
            mousewheel
            modules={[Mousewheel, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              setSelectedProject(projects[swiper.activeIndex]);
            }}
            className="h-[600px]"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!h-[180px]">
                <div
                  onClick={() => {
                    setActiveIndex(index);
                    setSelectedProject(project);
                    swiperRef.current?.slideTo(index);
                  }}
                  className={`cursor-pointer border rounded-xl overflow-hidden transition-transform hover:scale-105 h-full bg-[#fad4da] ${
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
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Project Counter and Nav Buttons */}
          <div className="text-center mt-6 text-[#F1F5F9]">
            <span className="bg-[#fad4da] text-sm px-4 py-2 rounded-full inline-flex items-center gap-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="text-black font-bold hover:scale-110 transition"
              >
                ←
              </button>
              {activeIndex + 1} of {projects.length} Projects
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="text-black font-bold hover:scale-110 transition"
              >
                →
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
