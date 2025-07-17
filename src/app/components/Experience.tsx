"use client";
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {

  return (
   
<section id="experience" className="bg-[#0F172A] py-12 px-6 md:px-20 text-[#F1F5F9]">
  <h2 className="text-3xl font-bold text-[#fad4da] mb-10 text-center">Experience</h2>

  {/* ✅ Center the timeline */}
  <div className="flex justify-center">
    <div className="relative border-l-2 border-[#FF6B81] pl-6">
      {[
        {
          role: "Application Developer",
          company: "Ninepages Techsolutions",
          date: "Sep 2024 – Present",
          desc: "Built and deployed MERN stack applications with intuitive UIs, integrated REST APIs, and developed reusable React components.",
        },
        {
          role: "SDE Trainee",
          company: "DRDO (ADRDE)",
          date: "Jun 2023 – Aug 2023",
          desc: "Assisted in developing responsive React interfaces, worked with Redux for state management, and enhanced user experience across modules.",
        },
      ].map((item, idx) => (
        <div key={idx} className="mb-10 ml-6 relative">
          <div className="absolute -left-[3.8rem] top-1 w-6 h-6 bg-[#FF6B81] rounded-full flex items-center justify-center shadow-md border-2 border-[#0F172A]">
            <FaBriefcase className="text-white text-xs" />
          </div>

          <p className="text-sm text-[#AAB1C2]">{item.date}</p>
          <h3 className="text-xl font-semibold text-[#fad4da]">
            {item.role} @ <span className="text-[#FF6B81]">{item.company}</span>
          </h3>
          <p className="text-[#CBD5E1] text-sm mt-2 max-w-xl">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}
