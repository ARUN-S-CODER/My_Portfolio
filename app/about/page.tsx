'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
      details: "Expert in React, Web Tech, and full-stack development",
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
      details: "Experience with Python, OpenCV, and ML algorithms",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications",
      details: "Skilled in Flutter and mobile UI/UX",
      color: "from-red-500 to-pink-500"
    }
  ];

  const quickFacts = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      text: "B.Tech Computer Science student with 8.667 CGPA",
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
      text: "Smart India Hackathon 2024 Finalist",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <FaTrophy className="w-6 h-6" />,
      text: "Top 100 in Hack4Purpose Hackathon",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const timelineItems = [
    {
      year: "2021",
      title: "Beginning of Journey",
      description: "Started learning programming basics and exploring UI/UX design fundamentals",
      icon: <FaCode className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "2022",
      title: "Web Development",
      description: "Explored web development and completed my first internship projects",
      icon: <FaLaptopCode className="w-6 h-6 text-white" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2023",
      title: "AI & Innovation",
      description: "Ventured into artificial intelligence and modern tech innovations",
      icon: <FaRobot className="w-6 h-6 text-white" />,
      color: "from-green-500 to-teal-500"
    },
    {
      year: "2024",
      title: "Growth, Achievements & Recognition",
      description: "SIH finalist, IEEE paper publication, Hack4Purpose top 100, and various technical contest achievements",
      icon: <FaTrophy className="w-6 h-6 text-white" />,
      color: "from-red-500 to-pink-500"
    },
    {
      year: "2025",
      title: "Flutter Developer & Professional Projects",
      description: "Leading veterinary drug management app development and exploring new technologies",
      icon: <FaMobileAlt className="w-6 h-6 text-white" />,
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
          <div className="flex justify-center gap-4 mb-8 overflow-x-auto py-2">
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
                    className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/profile.png"
                      alt="Arun S Profile"
                      fill
                      sizes="(max-width: 128px) 100vw, 128px"
                      className="object-cover"
                      priority
                    />
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
                className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-yellow-500 before:to-orange-500 md:before:mx-auto md:before:left-0 md:before:right-0"
              >
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-center justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className={`flex items-center gap-4 w-full ${
                      item.year === "2022" || item.year === "2024" 
                        ? 'md:flex-row-reverse' 
                        : 'md:flex-row'
                    }`}>
                      <motion.div
                        className={`flex-none w-full md:w-[calc(50%-2rem)] ${
                          item.year === "2022" || item.year === "2024" 
                            ? 'md:text-right' 
                            : 'md:text-left'
                        }`}
                      >
                        <motion.div
                          className="flex flex-col gap-2 rounded-lg bg-gray-800 p-4 shadow-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="inline-block rounded-full bg-gray-900 px-4 py-1 text-sm font-bold text-yellow-500 border border-yellow-500/30 w-fit">
                            {item.year}
                          </span>
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          <p className="text-gray-300 text-sm">{item.description}</p>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className={`flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.div>

                      <div className="hidden md:block flex-none w-[calc(50%-2rem)]" />
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