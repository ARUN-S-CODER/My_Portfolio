'use client';

import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPalette, FaRobot, FaMobileAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const socialLinks = [
    { icon: <FaGithub className="icon-responsive" />, href: "https://github.com/ARUN-S-CODER", label: "GitHub", color: "from-gray-700 to-gray-900" },
    { icon: <FaLinkedin className="icon-responsive" />, href: "https://www.linkedin.com/in/arun-s-b-tech-b26515257", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
    { icon: <FaEnvelope className="icon-responsive" />, href: "mailto:arun.s00101@gmail.com", label: "Email", color: "from-red-500 to-red-700" }
  ];

  return (
    <>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-responsive text-center">
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
              <FaCode className="text-yellow-500 w-12 h-12 sm:w-16 sm:h-16" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Hi, I'm Arun S
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg"
              >
                <FaCode className="icon-responsive text-white" />
              </motion.div>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'AI/ML Enthusiast',
                    2000,
                    'Mobile Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.p 
            className="text-responsive text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tech enthusiast with expertise in software development, UI/UX design, AI/ML, and app development.
            Passionate about problem-solving and creating impactful solutions.
          </motion.p>

          <motion.div 
            className="flex-responsive justify-center gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="/contact"
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredButton('contact')}
              onHoverEnd={() => setHoveredButton(null)}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/projects"
              className="button-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredButton('projects')}
              onHoverEnd={() => setHoveredButton(null)}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4 sm:gap-6"
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
                className={`bg-gradient-to-r ${link.color} p-2 sm:p-3 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300`}
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