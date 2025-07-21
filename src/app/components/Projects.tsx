'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaGithub} from 'react-icons/fa';
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
      "A dynamic and feature-rich music streaming platform built using React and Last.fm API. It includes real-time trending charts, newly released tracks, and weekly top song listings to keep users updated with the latest hits. The app also features a curated 'Popular Artists' section, allowing users to explore artist profiles and access their top tracks. The user interface is optimized for responsiveness, ensuring a smooth and enjoyable listening experience across all devices.",
    image: "/mp.png",
    tags: ["React", "CSS", "LastFm.API"],
    github: "https://github.com/Divyanshi2408/music-player",
  },
  {
    title: "ThreadSpire – Community Wisdom Threads",
    description:
      "A powerful MERN stack-based social platform designed for long-form knowledge sharing. Users can write, organize, and remix insightful threads, while also engaging socially through bookmarks, reactions, and follows. ThreadSpire supports personalized content through collections, and includes trending threads and analytics dashboards to help users track engagement and performance. The modern UI and scalable backend architecture make it ideal for both individual creators and growing communities.",
    image: "/tsp.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Divyanshi2408/ThreadSpire-Community-Wisdom-Threads",
  },
  {
    title: "Real Estate Web App",
    description:
      "A robust full-stack real estate platform built with the MERN stack. The application enables users to browse and filter property listings by location, price range, and type. It features secure JWT-based user authentication, allowing users to create accounts, manage property posts, and maintain a personalized dashboard. The admin-friendly dashboard includes create, update, and delete functionality, empowering users to control their listings seamlessly. The UI is fully responsive and intuitive for users of all tech levels.",
    image: "/re.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Divyanshi2408/Real-Estate-webApp",
  },
  {
    title: "Learning Management System (LMS)",
    description:
      "A comprehensive and scalable LMS built using the MERN stack. The system supports course browsing, student enrollment, and lesson tracking, making it easy for users to manage their learning journey. Administrators have access to an integrated dashboard to create and manage courses, monitor users, and view platform analytics. The project also includes optional payment integration for course enrollment, providing flexibility for both free and paid courses. Designed for scalability, accessibility, and responsiveness.",
    image: "/lms.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Divyanshi2408/Learning-Management-System",
  },
  {
    title: "Recipe Finder Web App",
    description:
      "An interactive and voice-enabled recipe discovery application utilizing the Speech Recognition API. Users can search for recipes using voice commands or traditional text input, and filter results by cuisine, meal type, and ingredients. The UI is fully responsive, offering a smooth experience across mobile and desktop. It’s designed for accessibility and ease-of-use, making cooking inspiration accessible to users of all ages. The app promotes culinary exploration with intuitive navigation and clean, modern visuals.",
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
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Featured Projects</h2> */}
      <div className="text-center mb-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#fad4da] to-[#e55a6d] text-transparent bg-clip-text drop-shadow-[0_1px_4px_rgba(234,90,109,0.4)]">
        Featured Projects
      </h1>
      <div className="h-1 w-16 bg-[#e55a6d] mx-auto mt-2 rounded"></div>
    </div>

      <p className="text-center text-gray-400 mb-10 text-sm md:text-base">
        Explore my latest work and creative solutions
      </p>

      <div className="flex flex-col lg:flex-row gap-10 overflow-hidden">
        {/* Featured Project Card */}
      <div
      ref={cardRef}
      className="w-full max-w-full lg:w-[68%] bg-[#fad4da] rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg flex flex-col gap-4 "
    >
      {/* Image */}
      <div className="relative">
        <Image
          src={selectedProject.image}
          alt={`Screenshot of ${selectedProject.title}`}
          width={700}
          height={400}
          className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
        />
      </div>

        {/* Title + GitHub */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1E293B]">
            {selectedProject.title}
          </h3>
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#1E293B] hover:bg-[#0f172a] transition"
            title="View on GitHub"
          >
            <FaGithub size={16} className="text-white" />
          </a>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
          {selectedProject.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {selectedProject.tags.map((tag, index) => (
            <span
          key={index}
          className="bg-[#334155] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
          title={`Technology used: ${tag}`}
        >
          {tag}
        </span>

          ))}
        </div>
      </div>


        {/* Right Panel */}
        <div ref={swiperListRef} className="lg:w-[35%] w-full">
          <h4 className="text-lg font-semibold mb-4 text-[#e55a6d]">All Projects</h4>

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
                selectedProject.title === project.title ? 'ring-2 ring-[#e55a6d]' : ''
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
                      selectedProject.title === project.title ? 'ring-2 ring-[#e55a6d]' : ''
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

                 <button
                  onClick={() => {
                    const prev = Math.max(activeIndex - 1, 0);
                    swiperRef.current?.slideTo(prev);
                    setSelectedProject(projects[prev]);
                    setActiveIndex(prev);
                  }}
                 className="m-2 px-2 font-bold hover:scale-110 transition focus:outline-none bg-[#FF6B81] hover:bg-[#e55a6d] text-white rounded-full shadow-md shadow-[#ff6b8170]"

                >
                  ←
                </button>
              
              <span className="bg-[#FF6B81] hover:bg-[#e55a6d] text-white font-semibold  rounded shadow-md shadow-[#ff6b8170] text-sm px-4 py-2 rounded-full inline-flex items-center gap-3">
             
                {activeIndex + 1} of {projects.length} Projects
                
              </span>
              <button
                  onClick={() => {
                    const next = Math.min(activeIndex + 1, projects.length - 1);
                    swiperRef.current?.slideTo(next);
                    setSelectedProject(projects[next]);
                    setActiveIndex(next);
                  }}
                  className="m-2 px-2 font-bold hover:scale-110 transition focus:outline-none bg-[#FF6B81] hover:bg-[#e55a6d] text-white rounded-full shadow-md shadow-[#ff6b8170]"

                >
                  →
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
