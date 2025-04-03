'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPalette, FaRobot, FaMobileAlt, FaGraduationCap, FaTrophy, FaLaptopCode, FaUserTie, FaLightbulb, FaHeart, FaRocket, FaBrain, FaHandshake, FaGlobe } from 'react-icons/fa';

const About: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('about');
  const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Software Development",
      description: "Building robust and scalable applications using modern technologies",
      details: "Expert in React, Node.js, and full-stack development",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
      details: "Proficient in Figma, Adobe XD, and design principles",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "AI/ML Development",
      description: "Implementing machine learning solutions",
      details: "Experience with Python, TensorFlow, and ML algorithms",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications",
      details: "Skilled in Flutter, React Native, and mobile UI/UX",
      color: "from-red-500 to-pink-500"
    }
  ];

  const quickFacts = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      text: "B.Tech Computer Science student with 8.67 CGPA",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      text: "Full-stack developer with expertise in React and Flutter",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      text: "Certified UI/UX Designer",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      text: "AI/ML enthusiast with practical project experience",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaTrophy className="w-6 h-6" />,
      text: "Winner at Hack4Purpose Hackathon",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const timelineItems = [
    {
      year: "2020",
      title: "Beginning My Tech Journey",
      description: "Started learning programming and web development fundamentals",
      icon: <FaRocket className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "2021",
      title: "First Professional Project",
      description: "Developed a veterinary management system for a local clinic",
      icon: <FaHandshake className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2022",
      title: "AI/ML Exploration",
      description: "Started exploring machine learning and AI technologies",
      icon: <FaBrain className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      year: "2023",
      title: "Hackathon Success",
      description: "Won first place at Hack4Purpose with an innovative solution",
      icon: <FaTrophy className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      year: "2024",
      title: "Global Collaboration",
      description: "Working on international projects and expanding my network",
      icon: <FaGlobe className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Passion",
      description: "Driven by a genuine love for technology and problem-solving",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Growth",
      description: "Committed to continuous learning and personal development",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <>
      <Navigation />
      <section className="min-h-screen pt-20 px-4 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-4"
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
            >
              <FaUserTie className="text-yellow-500 w-10 h-10" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              About Me
            </span>
          </motion.h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {['about', 'timeline', 'skills', 'values', 'facts'].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-2 rounded-full capitalize transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
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
                className="space-y-6 text-gray-300 bg-gray-800 rounded-xl p-8 shadow-lg border-t-4 border-yellow-500"
              >
                <motion.div 
                  className="flex flex-col md:flex-row gap-8 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <FaUserTie className="w-16 h-16 text-white" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
                      Who I Am
                    </h2>
                    <p className="text-lg leading-relaxed">
                      I am a passionate tech enthusiast with a strong foundation in software development,
                      UI/UX design, and artificial intelligence. Currently pursuing my B.Tech in Computer
                      Science and Business Systems at Sri Sairam Engineering College, I combine technical
                      expertise with a business-oriented mindset.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    My Journey
                  </h2>
                  <p className="text-lg leading-relaxed">
                    My journey in technology has been driven by a desire to create impactful solutions
                    that make a difference. From developing mobile applications for veterinary professionals
                    to building AI-powered systems for invoice processing, I've always focused on solving
                    real-world problems through technology.
                  </p>
                </motion.div>

                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
                    My Vision
                  </h2>
                  <p className="text-lg leading-relaxed">
                    I envision a future where technology seamlessly integrates with everyday life to solve
                    complex problems. My goal is to contribute to this vision by developing innovative
                    solutions that enhance user experiences and make a positive impact on society.
                  </p>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-700"></div>
                
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    onHoverStart={() => setActiveTimelineItem(index)}
                    onHoverEnd={() => setActiveTimelineItem(null)}
                  >
                    <div className={`bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 md:border-l-0 ${index % 2 === 0 ? 'md:border-r-4' : 'border-l-4'} border-${item.color.split(' ')[1].split('-')[1]}-500`}>
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`bg-gradient-to-r ${item.color} p-3 rounded-full`}
                          animate={{
                            scale: activeTimelineItem === index ? 1.2 : 1,
                            rotate: activeTimelineItem === index ? 10 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full px-4 py-1 text-sm font-bold text-yellow-500 border-2 border-yellow-500">
                        {item.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                    className={`bg-gray-800 rounded-xl p-6 cursor-pointer shadow-lg border-t-4 border-${skill.color.split(' ')[1].split('-')[1]}-500`}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} p-3 rounded-lg`}
                        animate={{
                          scale: hoveredSkill === index ? 1.2 : 1,
                          rotate: hoveredSkill === index ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
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

            {activeTab === 'values' && (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gray-800 rounded-xl p-6 shadow-lg border-t-4 border-${value.color.split(' ')[1].split('-')[1]}-500`}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${value.color} p-4 rounded-lg inline-block mb-4`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
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
                className="bg-gray-800 rounded-xl p-6 shadow-lg border-t-4 border-yellow-500"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
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
                  >
                    <FaTrophy className="text-yellow-500 w-8 h-8" />
                  </motion.div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
                    Quick Facts
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 p-4 bg-gray-700 rounded-lg border-l-4 border-${fact.color.split(' ')[1].split('-')[1]}-500`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    >
                      <motion.div
                        className={`bg-gradient-to-r ${fact.color} p-2 rounded-lg`}
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {fact.icon}
                      </motion.div>
                      <p className="text-gray-300">{fact.text}</p>
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