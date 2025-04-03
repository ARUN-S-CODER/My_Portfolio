'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaCode, FaFileCode, FaAward, FaChevronDown, FaChevronUp, FaStar, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeStats, setActiveStats] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    {
      category: "Hackathons & Competitions",
      color: "from-yellow-500 to-orange-500",
      icon: <FaTrophy className="w-6 h-6" />,
      items: [
        {
          title: "Hack4Purpose Hackathon",
          description: "Secured position in Top 100 teams among 1000+ participants",
          icon: <FaTrophy className="w-6 h-6" />,
          date: "2024"
        },
        {
          title: "IEEE TechGood Project",
          description: "Secured $7,447 funding for innovative technology solution",
          icon: <FaMedal className="w-6 h-6" />,
          date: "2023"
        }
      ]
    },
    {
      category: "Certifications",
      color: "from-blue-500 to-purple-500",
      icon: <FaCertificate className="w-6 h-6" />,
      items: [
        {
          title: "Flutter Developer Certification",
          description: "Zero Solutions - Professional certification in Flutter development and mobile app creation",
          icon: <FaCertificate className="w-6 h-6" />,
          date: "2024"
        },
        {
          title: "UI/UX Design Certification",
          description: "Zero Solutions - Professional certification in UI/UX design principles and practices",
          icon: <FaCertificate className="w-6 h-6" />,
          date: "2024"
        },
        {
          title: "AI/ML Developer Certification",
          description: "Novi Tech - Comprehensive certification in AI and Machine Learning",
          icon: <FaCertificate className="w-6 h-6" />,
          date: "2023"
        }
      ]
    },
    {
      category: "Coding Achievements",
      color: "from-green-500 to-teal-500",
      icon: <FaCode className="w-6 h-6" />,
      items: [
        {
          title: "Skillrack Problem Solving",
          description: "Solved 3000+ programming problems demonstrating strong algorithmic skills",
          icon: <FaCode className="w-6 h-6" />,
          date: "2022-2024"
        },
        {
          title: "LeetCode Practice",
          description: "Solved 200+ problems on LeetCode platform, improving problem-solving skills",
          icon: <FaFileCode className="w-6 h-6" />,
          date: "2023-2024"
        },
        {
          title: "College Symposium Coding Events",
          description: "Winner of multiple coding competitions in college-level symposiums",
          icon: <FaAward className="w-6 h-6" />,
          date: "2022-2024"
        }
      ]
    },
    {
      category: "Leadership",
      color: "from-red-500 to-pink-500",
      icon: <FaUsers className="w-6 h-6" />,
      items: [
        {
          title: "Sairam Maths Club",
          description: "Served as Mastermind for 2 years, organizing technical events and workshops",
          icon: <FaTrophy className="w-6 h-6" />,
          date: "2022-2024"
        },
        {
          title: "IEEE CS Society",
          description: "Treasurer for 1 year, managing finances and organizing technical events",
          icon: <FaMedal className="w-6 h-6" />,
          date: "2023"
        }
      ]
    }
  ];

  const stats = [
    {
      value: "3000+",
      label: "Problems Solved",
      icon: <FaCode className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      value: "10+",
      label: "Projects Completed",
      icon: <FaLightbulb className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      value: "5+",
      label: "Hackathons",
      icon: <FaTrophy className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      value: "3+",
      label: "Years Experience",
      icon: <FaChartLine className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <>
      <Navigation />
      <section className="min-h-screen pt-20 px-4 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
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
              <FaTrophy className="text-yellow-500 w-12 h-12" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Professional Achievements
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my accomplishments, certifications, and contributions to the tech community
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setActiveStats(index)}
                onHoverEnd={() => setActiveStats(null)}
              >
                <motion.div 
                  className="mb-3 inline-block"
                  animate={{
                    scale: activeStats === index ? 1.2 : 1,
                    rotate: activeStats === index ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white opacity-90 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {achievements.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-${category.color.split(' ')[1].split('-')[1]}-500`}
              >
                <button
                  onClick={() => toggleCategory(category.category)}
                  className={`w-full p-6 flex justify-between items-center text-left bg-gradient-to-r ${category.color} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`bg-gradient-to-r ${category.color} p-2 rounded-lg`}
                      animate={{
                        scale: expandedCategory === category.category ? 1.1 : 1,
                        rotate: expandedCategory === category.category ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white">
                      {category.category}
                    </h2>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === category.category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                  >
                    {expandedCategory === category.category ? <FaChevronUp /> : <FaChevronDown />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedCategory === category.category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 grid gap-4">
                        {category.items.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`flex items-start space-x-4 bg-gray-700 rounded-lg p-4 transition-all duration-300 ${
                              hoveredItem === `${category.category}-${idx}` 
                                ? 'transform scale-[1.02] shadow-md border-l-4 border-' + category.color.split(' ')[1].split('-')[1] + '-500' 
                                : ''
                            }`}
                            onMouseEnter={() => setHoveredItem(`${category.category}-${idx}`)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <motion.div 
                              className={`flex-shrink-0 mt-1 bg-gradient-to-r ${category.color} p-2 rounded-lg`}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {achievement.icon}
                            </motion.div>
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold text-white">
                                  {achievement.title}
                                </h3>
                                <motion.span 
                                  className={`text-sm text-white bg-gradient-to-r ${category.color} px-3 py-1 rounded-full`}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {achievement.date}
                                </motion.span>
                              </div>
                              <p className="text-gray-300 mt-1">
                                {achievement.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.div
                className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaStar className="w-10 h-10 text-white" />
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Featured Achievement</h3>
                <p className="text-gray-300 mb-4">
                  Secured position in Top 100 teams at Hack4Purpose Hackathon among 1000+ participants, 
                  demonstrating exceptional problem-solving skills and innovation.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Achievements; 