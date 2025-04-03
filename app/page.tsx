'use client';

import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPalette, FaRobot, FaMobileAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState(0);

  const roles = [
    { text: 'Software Developer', icon: <FaCode className="w-6 h-6" />, color: "from-blue-500 to-purple-500" },
    { text: 'UI/UX Designer', icon: <FaPalette className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" },
    { text: 'AI/ML Enthusiast', icon: <FaRobot className="w-6 h-6" />, color: "from-green-500 to-teal-500" },
    { text: 'Mobile Developer', icon: <FaMobileAlt className="w-6 h-6" />, color: "from-red-500 to-pink-500" }
  ];

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/ARUN-S-CODER", label: "GitHub", color: "from-gray-700 to-gray-900" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://linkedin.com/in/arun-s", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
    { icon: <FaEnvelope className="w-5 h-5" />, href: "mailto:arun@example.com", label: "Email", color: "from-red-500 to-red-700" }
  ];

  return (
    <>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
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
              className="inline-block mb-4"
            >
              <FaCode className="text-yellow-500 w-16 h-16" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Hi, I'm Arun S
            </h1>
          </motion.div>

          <motion.div 
            className="text-xl md:text-2xl mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-3"
              >
                <motion.div
                  className={`bg-gradient-to-r ${roles[activeRole].color} p-2 rounded-lg`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  {roles[activeRole].icon}
                </motion.div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
                  {roles[activeRole].text}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tech enthusiast with expertise in software development, UI/UX design, AI/ML, and app development.
            Passionate about problem-solving and creating impactful solutions.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="/contact"
              className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg ${
                hoveredButton === 'contact' ? 'scale-105 shadow-xl' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredButton('contact')}
              onHoverEnd={() => setHoveredButton(null)}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/projects"
              className={`border-2 border-yellow-500 text-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 ${
                hoveredButton === 'projects' ? 'scale-105 shadow-lg' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredButton('projects')}
              onHoverEnd={() => setHoveredButton(null)}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${link.color} p-3 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 