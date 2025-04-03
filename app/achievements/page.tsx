'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaCode, FaFileCode, FaAward, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const achievements = [
    {
      category: "Hackathons & Competitions",
      color: "from-yellow-500 to-orange-500",
      items: [
        {
          title: "Hack4Purpose Hackathon",
          description: "Secured position in Top 100 teams among 1000+ participants",
          icon: <FaTrophy className="w-6 h-6 text-yellow-500" />,
          date: "2024"
        },
        {
          title: "IEEE TechGood Project",
          description: "Secured $7,447 funding for innovative technology solution",
          icon: <FaMedal className="w-6 h-6 text-blue-500" />,
          date: "2023"
        }
      ]
    },
    {
      category: "Certifications",
      color: "from-blue-500 to-purple-500",
      items: [
        {
          title: "Flutter Developer Certification",
          description: "Zero Solutions - Professional certification in Flutter development and mobile app creation",
          icon: <FaCertificate className="w-6 h-6 text-blue-500" />,
          date: "2024"
        },
        {
          title: "UI/UX Design Certification",
          description: "Zero Solutions - Professional certification in UI/UX design principles and practices",
          icon: <FaCertificate className="w-6 h-6 text-green-500" />,
          date: "2024"
        },
        {
          title: "AI/ML Developer Certification",
          description: "Novi Tech - Comprehensive certification in AI and Machine Learning",
          icon: <FaCertificate className="w-6 h-6 text-purple-500" />,
          date: "2023"
        }
      ]
    },
    {
      category: "Coding Achievements",
      color: "from-green-500 to-teal-500",
      items: [
        {
          title: "Skillrack Problem Solving",
          description: "Solved 3000+ programming problems demonstrating strong algorithmic skills",
          icon: <FaCode className="w-6 h-6 text-blue-400" />,
          date: "2022-2024"
        },
        {
          title: "LeetCode Practice",
          description: "Solved 200+ problems on LeetCode platform, improving problem-solving skills",
          icon: <FaFileCode className="w-6 h-6 text-orange-500" />,
          date: "2023-2024"
        },
        {
          title: "College Symposium Coding Events",
          description: "Winner of multiple coding competitions in college-level symposiums",
          icon: <FaAward className="w-6 h-6 text-yellow-400" />,
          date: "2022-2024"
        }
      ]
    },
    {
      category: "Leadership",
      color: "from-red-500 to-pink-500",
      items: [
        {
          title: "Sairam Maths Club",
          description: "Served as Mastermind for 2 years, organizing technical events and workshops",
          icon: <FaTrophy className="w-6 h-6 text-yellow-400" />,
          date: "2022-2024"
        },
        {
          title: "IEEE CS Society",
          description: "Treasurer for 1 year, managing finances and organizing technical events",
          icon: <FaMedal className="w-6 h-6 text-gray-400" />,
          date: "2023"
        }
      ]
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
        <div className="max-w-4xl mx-auto">
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
              <FaTrophy className="text-yellow-500 w-10 h-10" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Achievements
            </span>
          </motion.h1>

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
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {category.category}
                  </h2>
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
                              className="flex-shrink-0 mt-1"
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

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl font-bold text-white">3000+</div>
              <div className="text-white opacity-80">Problems Solved</div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-4 text-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl font-bold text-white">4+</div>
              <div className="text-white opacity-80">Certifications</div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-4 text-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl font-bold text-white">2+</div>
              <div className="text-white opacity-80">Leadership Roles</div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl p-4 text-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-white opacity-80">Major Projects</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Achievements; 