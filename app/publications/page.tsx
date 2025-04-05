'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Publications = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const publications = [
    {
      title: "Recycling as a Service: IOT enabled smart waste management system with machine learning",
      conference: "IEEE",
      date: "April 10, 2024",
      status: "Published",
      link: "https://drive.google.com/file/d/1FTIsaK5C1Z9kai456yz5H4YYofGFIOr2/view?usp=drivesdk",
      description: "This paper presents an innovative IoT-based smart waste management system that leverages machine learning for efficient recycling processes. The system aims to optimize waste collection and recycling operations through real-time monitoring and predictive analytics."
    },
    {
      title: "HELMET DETECTION IN TWO WHEELER USING IMAGE PROCESSING",
      conference: "IEEE",
      date: "2024",
      status: "Going to publish",
      link: null,
      description: "This research focuses on developing an image processing-based system for automatic helmet detection in two-wheeler riders. The system aims to enhance road safety by ensuring compliance with helmet regulations."
    }
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Education', href: '/education' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Publications', href: '/publications' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <nav className="bg-[#121212]/95 backdrop-blur-md shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-white hover:text-yellow-500 transition-colors">
              Arun S
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm text-gray-300 hover:text-white transition-colors ${
                    item.href === '/publications' ? 'text-yellow-500' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#121212]"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-sm text-gray-300 hover:text-white transition-colors ${
                      item.href === '/publications' ? 'text-yellow-500' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Research Publications
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Explore my research contributions in the field of technology and innovation
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                      {publication.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-gray-300 mb-4">
                      <span className="flex items-center text-sm sm:text-base">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {publication.conference}
                      </span>
                      <span className="flex items-center text-sm sm:text-base">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        {publication.date}
                      </span>
                      <span className={`flex items-center text-sm sm:text-base ${
                        publication.status === "Published" ? "text-green-400" : "text-yellow-400"
                      }`}>
                        <span className={`w-2 h-2 ${
                          publication.status === "Published" ? "bg-green-500" : "bg-yellow-500"
                        } rounded-full mr-2`}></span>
                        {publication.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base mb-4">
                      {publication.description}
                    </p>
                  </div>
                  {publication.link && (
                    <motion.a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
                      <FaFilePdf className="text-lg" />
                      <span>View Paper</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications; 