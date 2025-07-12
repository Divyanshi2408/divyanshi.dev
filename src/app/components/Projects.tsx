'use client';

import Image from 'next/image';
import {useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

const projects = [
  {
    title: "Music Player Web App",
    description:
      "A dynamic and interactive music player built with React and Last.fm API integration. Trending Songs, New Releases, Weekly Top Songs, and Popular Artists.",
    image: "/mp.png",
    tags: ["React", "CSS", "LastFm.API"],
  },
  {
    title: "ThreadSpire – Community Wisdom Threads",
    description:
      "A MERN-based community platform to create, remix, and organize wisdom threads. Features include social interaction, collections, and analytics.",
    image: "/tsp.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Real Estate Web App",
    description:
      "A full-stack MERN app for property listings, search filters, authentication, and user dashboard to post/manage properties.",
    image: "/re.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Learning Management System (LMS)",
    description:
      "A MERN stack LMS to browse courses, track progress, and access admin features. Includes payment integration and dashboards.",
    image: "/lms.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Recipe Finder Web App",
    description:
      "A voice-enabled recipe search app using Speech Recognition API, with text and category filters. Mobile responsive and accessible.",
    image: "/rp.png",
    tags: ["React", "CSS", "React Hooks", "Speech Recognition API"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  // const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="bg-[#0F172A] text-[#fad4da] px-4 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Featured Projects</h2>
      <p className="text-center text-gray-400 mb-10 text-sm md:text-base">
        Explore my latest work and creative solutions
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Featured Project Card */}
        <div className="lg:w-[65%] w-full bg-[#fad4da] rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between">
          <div className="relative">
            <Image
              src={selectedProject.image}
              alt={`Screenshot of ${selectedProject.title}`}
              width={700}
              height={400}
              className="object-cover w-full h-72 sm:h-80 rounded-xl"
            />
            <span className="absolute top-4 right-4 bg-[#7c3aed] p-2 rounded-full shadow-md">
              <FaExternalLinkAlt size={14} />
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-2 text-[#1E293B]">
            {selectedProject.title}
          </h3>
          <p className="text-sm text-[#334155] mb-4 leading-relaxed">
            {selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {selectedProject.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#334155] text-[#FFF] px-5 py-2 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-[35%] w-full">
          <h4 className="text-lg font-semibold mb-4 text-[#38BDF8]">All Projects</h4>

          {/* Mobile: show simple vertical list */}
          <div className="lg:hidden flex flex-col gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveIndex(index);
                }}
                className={`cursor-pointer border rounded-xl overflow-hidden transition-transform hover:scale-105 bg-[#fad4da] ${
                  selectedProject.title === project.title ? 'ring-2 ring-[#38BDF8]' : ''
                }`}
              >
                <div className="relative w-full h-40 sm:h-44">
                  <Image
                    src={project.image}
                    alt={`Thumbnail of ${project.title}`}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm font-semibold p-2 text-center">
                    {project.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: show Swiper */}
          <div className="hidden lg:block">
            <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={20}
              allowTouchMove={false}
              navigation={false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                setSelectedProject(projects[swiper.activeIndex]);
              }}
              modules={[Navigation]}
              className="h-[600px]"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="!h-[180px]">
                  <div
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveIndex(index);
                      swiperRef.current?.slideTo(index);
                    }}
                    className={`cursor-pointer border rounded-xl overflow-hidden transition-transform hover:scale-105 h-full bg-[#FF6B81] ${
                      selectedProject.title === project.title ? 'ring-2 ring-[#38BDF8]' : ''
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={`Thumbnail of ${project.title}`}
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

            {/* Manual Buttons */}
            <div className="text-center mt-6 text-[#1E293B]">
              <span className="bg-[#FF6B81] hover:bg-[#e55a6d] text-white font-semibold tracking-wide rounded shadow-md shadow-[#ff6b8170] text-sm px-4 py-2 rounded-full inline-flex items-center gap-3">
                <button
                  onClick={() => {
                    const prev = Math.max(activeIndex - 1, 0);
                    swiperRef.current?.slideTo(prev);
                    setSelectedProject(projects[prev]);
                    setActiveIndex(prev);
                  }}
                  className="font-bold hover:scale-110 transition focus:outline-none"
                >
                  ←
                </button>
                {activeIndex + 1} of {projects.length} Projects
                <button
                  onClick={() => {
                    const next = Math.min(activeIndex + 1, projects.length - 1);
                    swiperRef.current?.slideTo(next);
                    setSelectedProject(projects[next]);
                    setActiveIndex(next);
                  }}
                  className="font-bold hover:scale-110 transition focus:outline-none"
                >
                  →
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
