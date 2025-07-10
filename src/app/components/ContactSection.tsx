'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FormEvent } from 'react';

export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section className="bg-[#0F172A] text-white px-6 py-16 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Let's Connect</h2>
        <p className="text-gray-400">
          Ready to bring your ideas to life? Let’s discuss how we can work together to
          create something amazing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Form */}
        <div className="bg-[#1E293B] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <p className="text-sm text-gray-400 mb-6">
            Fill out the form below and I'll get back to you within 24 hours
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Your Message</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your project, timeline, and budget..."
                className="w-full px-4 py-2 bg-[#334155] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Send Message ⚠️
            </button>
          </form>
        </div>

        {/* Right Info Cards */}
        <div className="flex flex-col gap-6">
          {/* Contact Info */}
          <div className="bg-[#1E293B] p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="flex items-center gap-3 text-sm">
              <MdEmail className="text-purple-400" />
              <span>Divyanshipal2808@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MdLocationOn className="text-purple-400" />
              <span>Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Follow Me */}
          <div className="bg-[#1E293B] p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 hover:text-purple-400 text-sm">
                <FaGithub /> GitHub
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-purple-400 text-sm">
                <FaTwitter /> X (Twitter)
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-purple-400 text-sm">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-[#1E293B] p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <p className="text-sm font-semibold">Available for Projects</p>
            </div>
            <p className="text-sm text-gray-400">
              I’m currently accepting new freelance projects and collaboration opportunities.
              Let’s create something extraordinary together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
