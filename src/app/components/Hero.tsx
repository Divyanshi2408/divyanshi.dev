// app/page.tsx (or src/pages/index.tsx if not using App Router)

'use client'
import Image from 'next/image';
import { FiInstagram, FiTwitter} from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <FiInstagram className="text-xl cursor-pointer" />
          <FiTwitter className="text-xl cursor-pointer" />
        </div>
        <h1 className="text-2xl font-signature">Divyanshi Pal</h1>
        <div className="flex items-center gap-4">
          
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 md:gap-10 py-4 font-semibold text-sm md:text-base">
        <a href="#" className="hover:text-gray-600">HOME</a>
        <a href="#" className="hover:text-gray-600">ABOUT</a>
        <a href="#" className="hover:text-gray-600">PROJECT</a>
        <a href="#" className="hover:text-gray-600">EXPIERNCE</a>
        <a href="#" className="hover:text-gray-600">CONTACT</a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 px-6 md:px-20 py-16 relative">
        {/* Left Text */}
        <div className="text-center md:text-left max-w-sm">
          <h2 className="text-4xl font-bold leading-tight mb-2">Divyanshi<br /> Pal</h2>
          <p className="text-gray-600">FullStack Developer. <br /> Application Developer.</p>
        </div>

        {/* Center Image */}
        <div className="w-[300px] md:w-[380px] lg:w-[460px] shadow-lg">
          <Image
            src="/hero-art.jpg" // <-- Put your image inside public folder with this name
            alt="Divyanshi"
            width={460}
            height={700}
            className="w-full h-auto object-cover border-4 border-black"
          />
        </div>

        {/* Right Text */}
        <div className="max-w-sm text-gray-500 text-center md:text-left">
          <div className="w-10 h-1 bg-red-400 mx-auto md:mx-0 mb-4"></div>
          <p>
            Vitae feugiat proin ut ante rhoncus tortor varius faucibus suspendisse eget ipsum aenean non sapien nullam
          </p>
        </div>
      </section>
    </main>
  )
}
