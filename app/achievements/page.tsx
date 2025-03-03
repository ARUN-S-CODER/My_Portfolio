'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaCode } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const achievements = [
    {
      category: "Hackathons & Competitions",
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
      items: [
        {
          title: "UI/UX Design Certification",
          description: "Zero Solutions - Professional certification in UI/UX design and Flutter development",
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
      items: [
        {
          title: "Skillrack Problem Solving",
          description: "Solved 3000+ programming problems demonstrating strong algorithmic skills",
          icon: <FaCode className="w-6 h-6 text-blue-400" />,
          date: "2022-2024"
        }
      ]
    },
    {
      category: "Leadership",
      items: [
        {
          title: "Sairam Maths Club",
          description: "Served as Mastermind for 2 years, organizing technical events and workshops",
          icon: <FaTrophy className="w-6 h-6 text-yellow-400" />,
          date: "2022-2024"
        },
        {
          title: "EEE CS Society",
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
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navigation />
      <section className="min-h-screen pt-20 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Achievements
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {achievements.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="grid gap-6">
                  {category.items.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-4 bg-gray-700 rounded-lg p-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {achievement.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold text-white">
                            {achievement.title}
                          </h3>
                          <span className="text-sm text-gray-400">
                            {achievement.date}
                          </span>
                        </div>
                        <p className="text-gray-300 mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">3000+</div>
              <div className="text-gray-400">Problems Solved</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-gray-400">Certifications</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-gray-400">Leadership Roles</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-gray-400">Major Projects</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Achievements; 