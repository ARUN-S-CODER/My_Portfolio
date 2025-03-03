'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPalette, FaRobot, FaMobileAlt, FaGraduationCap, FaTrophy, FaLaptopCode, FaUserTie } from 'react-icons/fa';

const About: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: "Software Development",
      description: "Building robust and scalable applications using modern technologies",
      details: "Expert in React, Node.js, and full-stack development"
    },
    {
      icon: <FaPalette className="text-4xl text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
      details: "Proficient in Figma, Adobe XD, and design principles"
    },
    {
      icon: <FaRobot className="text-4xl text-primary" />,
      title: "AI/ML Development",
      description: "Implementing machine learning solutions",
      details: "Experience with Python, TensorFlow, and ML algorithms"
    },
    {
      icon: <FaMobileAlt className="text-4xl text-primary" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications",
      details: "Skilled in Flutter, React Native, and mobile UI/UX"
    }
  ];

  const quickFacts = [
    {
      icon: <FaGraduationCap className="text-2xl text-primary" />,
      text: "B.Tech Computer Science student with 8.67 CGPA"
    },
    {
      icon: <FaLaptopCode className="text-2xl text-primary" />,
      text: "Full-stack developer with expertise in React and Flutter"
    },
    {
      icon: <FaPalette className="text-2xl text-primary" />,
      text: "Certified UI/UX Designer"
    },
    {
      icon: <FaRobot className="text-2xl text-primary" />,
      text: "AI/ML enthusiast with practical project experience"
    },
    {
      icon: <FaTrophy className="text-2xl text-primary" />,
      text: "Winner at Hack4Purpose Hackathon"
    }
  ];

  return (
    <>
      <Navigation />
      <section className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center flex items-center justify-center gap-4"
          >
            <FaUserTie className="text-primary" />
            About Me
          </motion.h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {['about', 'skills', 'facts'].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-2 rounded-full capitalize transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-gray-300"
              >
                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  I am a passionate tech enthusiast with a strong foundation in software development,
                  UI/UX design, and artificial intelligence. Currently pursuing my B.Tech in Computer
                  Science and Business Systems at Sri Sairam Engineering College, I combine technical
                  expertise with a business-oriented mindset.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  My journey in technology has been driven by a desire to create impactful solutions
                  that make a difference. From developing mobile applications for veterinary professionals
                  to building AI-powered systems for invoice processing, I've always focused on solving
                  real-world problems through technology.
                </motion.p>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 cursor-pointer"
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{
                          scale: hoveredSkill === index ? 1.2 : 1,
                          rotate: hoveredSkill === index ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                        <p className="text-gray-300">{skill.description}</p>
                        <AnimatePresence>
                          {hoveredSkill === index && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-gray-400 mt-2 text-sm"
                            >
                              {skill.details}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'facts' && (
              <motion.div
                key="facts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FaTrophy className="text-primary" />
                  Quick Facts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {fact.icon}
                      </motion.div>
                      <span className="text-gray-300">{fact.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default About; 