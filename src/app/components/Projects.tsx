'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
   {
    title: "Music Player Web App",
    description:
      "A dynamic and interactive music player built with React and Last.fm API integration.Trending Songs: Displays the latest and most popular songs based on real-time data or pre-defined lists. New Releases: A section dedicated to the newest music tracks, keeping users up-to-date with fresh content. Weekly Top Songs: Showcases the most-played or highest-rated songs of the week. Popular Artists: Allows users to explore top artists and access their music collections.",
    image: "/mp.png",
    tags: ["React", "CSS", "LastFm.API"],
     github: "https://github.com/Divyanshi2408/music-player",
  },
  {
    title: "ThreadSpire – Community Wisdom Threads",
    description:
      "A MERN-based community platform where users create, remix, and organize long-form wisdom threads.Create & Organize Threads: Users can write, edit, and group related threads. Social Features: Bookmark, react, remix threads. Follow users and view trending content. Analytics: Thread engagement and activity stats. Collections: Organize threads into custom collections.",
    image: "/tsp.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Divyanshi2408/ThreadSpire-Community-Wisdom-Threads",
  },
  {
    title: "Real Estate Web App",
    description:
      "A full-stack MERN Real Estate application for property listings, user authentication, and real-time search.Property Listings: Users can explore properties for sale or rent. Search Filters: Narrow down listings by location, price, and property type. Authentication: Login/signup feature with JWT. Dashboard: Users can post, edit, and delete their own property listings.",
    image: "/re.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Divyanshi2408/Real-Estate-webApp",
  },
   {
    title: "Learning Management System (LMS)",
    description:
      "A MERN stack-based LMS platform where users can enroll in courses, track progress, and access learning materials. Course Listing, Enrollment, Admin Dashboard, Payment Integration.Course Listing: Browse and filter courses by category or level. Enrollment & Progress Tracking: Users can enroll, mark lessons as complete, and track their learning journey. Admin Dashboard: Manage courses, users, and analytics. Payment Integration: (Optional) Free or integrated payment feature to purchase courses.",
    image: "/lms.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Divyanshi2408/Learning-Management-System",
  },
  {
    title: "Recipe Finder Web App",
    description:
      "A voice-enabled recipe finder using Speech Recognition API to browse recipes interactively.Search by Category: Users can search for dishes categorized by cuisine, meal type, and other filters for better results. Text Search: A simple and efficient text-based search option to find recipes quickly. Voice Search: Integrated a voice search feature that allows users to find recipes using voice commands for enhanced accessibility and convenience. Responsive Design: Optimized for both desktop and mobile devices, ensuring easy navigation on any screen size.",
    image: "/rp.png",
    tags: ["React", "CSS", "React Hooks", "Speech Recognition API"],
     github: "https://github.com/Divyanshi2408/recipe-finder",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const swiperListRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(cardRef.current, {
        opacity: 0,
        xPercent: -30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(swiperListRef.current, {
        opacity: 0,
        xPercent: 30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: swiperListRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="project"
      className="bg-[#0F172A] text-[#fad4da] px-4 md:px-20 py-16 overflow-x-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Featured Projects</h2>
      <p className="text-center text-gray-400 mb-10 text-sm md:text-base">
        Explore my latest work and creative solutions
      </p>

      <div className="flex flex-col lg:flex-row gap-10 overflow-hidden">
        {/* Featured Project Card */}
        <div
          ref={cardRef}
          className="lg:w-[65%] w-full bg-[#fad4da] rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between max-w-full"
        >
          <div className="relative">
            <Image
              src={selectedProject.image}
              alt={`Screenshot of ${selectedProject.title}`}
              width={700}
              height={400}
              className="object-cover w-full max-w-full h-72 sm:h-80 rounded-xl"
            />
           <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-[#7c3aed] p-2 rounded-full shadow-md hover:bg-[#6b21a8] transition"
            title="View on GitHub"
          >
            <FaExternalLinkAlt size={14} />
          </a>

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
                className="bg-[#334155] text-white px-4 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div ref={swiperListRef} className="lg:w-[35%] w-full">
          <h4 className="text-lg font-semibold mb-4 text-[#38BDF8]">All Projects</h4>

          {/* Mobile List */}
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

          {/* Desktop Swiper */}
          <div className="hidden lg:block overflow-hidden max-w-full">
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

            {/* Navigation Controls */}
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
