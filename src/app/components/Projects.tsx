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
    image: "/lms.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "ThreadSpire – Community Wisdom Threads",
    description:
      "A MERN-based community platform where users create, remix, and organize long-form wisdom threads.",
    image: "/tsp.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Real Estate Web App",
    description:
      "A full-stack MERN Real Estate application for property listings, user authentication, and real-time search.",
    image: "/re.png",
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
        {/* Left: Featured Project */}
      <div className="lg:w-[65%] w-full bg-[#f9f5f7] rounded-2xl p-8 shadow-lg flex flex-col justify-between">
  <div className="relative">
    <Image
      src={selectedProject.image}
      alt={selectedProject.title}
      width={700}
      height={400}
      className="object-cover w-full h-72 rounded-xl"
    />
    <span className="absolute top-4 right-4 bg-[#7c3aed] p-2 rounded-full shadow-md">
      <FaExternalLinkAlt size={14} />
    </span>
  </div>

  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#1E293B]">
    {selectedProject.title}
  </h3>
  <p className="text-sm text-[#334155] mb-4">
    {selectedProject.description}
  </p>

  <div className="flex flex-wrap gap-3">
    {selectedProject.tags.map((tag, index) => (
      <span
        key={index}
        className="bg-[#FF6B81] text-[#1E293B] px-4 py-1 rounded-full text-xs font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
</div>


        {/* Right: Vertical Swiper */}
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
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm font-semibold p-2 text-center">
                      {project.title}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Project Counter and Nav Buttons */}
          <div className="text-center mt-6 text-[#1E293B]">
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
