'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt, FaBook } from 'react-icons/fa';
import Navigation from '@/components/Navigation';

const Publications = () => {
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

  return (
    <>
      <Navigation />
      <section className="min-h-screen pt-16 md:pt-20 px-4 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center flex items-center justify-center gap-4"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-8 h-8 md:w-10 md:h-10"
            >
              <FaBook className="text-yellow-500 w-full h-full" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Publications
            </span>
          </motion.h1>

          <div className="grid gap-4 sm:gap-6 md:gap-8">
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
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-gray-300 mb-3 md:mb-4">
                      <span className="flex items-center text-xs sm:text-sm md:text-base">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-1.5 sm:mr-2"></span>
                        {publication.conference}
                      </span>
                      <span className="flex items-center text-xs sm:text-sm md:text-base">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-1.5 sm:mr-2"></span>
                        {publication.date}
                      </span>
                      <span className={`flex items-center text-xs sm:text-sm md:text-base ${
                        publication.status === "Published" ? "text-green-400" : "text-yellow-400"
                      }`}>
                        <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${
                          publication.status === "Published" ? "bg-green-500" : "bg-yellow-500"
                        } rounded-full mr-1.5 sm:mr-2`}></span>
                        {publication.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 md:mb-4">
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
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm sm:text-base"
                    >
                      <FaFilePdf className="text-base sm:text-lg" />
                      <span>View Paper</span>
                      <FaExternalLinkAlt className="text-xs sm:text-sm" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications; 