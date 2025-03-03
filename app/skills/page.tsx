'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaGlobe, FaMobile, FaRobot, FaPaintBrush } from 'react-icons/fa';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categoryIcons = {
    "Programming Languages": <FaCode className="w-6 h-6" />,
    "Web Development": <FaGlobe className="w-6 h-6" />,
    "Mobile Development": <FaMobile className="w-6 h-6" />,
    "AI/ML & Data": <FaRobot className="w-6 h-6" />,
    "UI/UX Design": <FaPaintBrush className="w-6 h-6" />
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, type: "Advanced" },
        { name: "Java", level: 80, type: "Advanced" },
        { name: "C", level: 75, type: "Intermediate" },
        { name: "JavaScript", level: 50, type: "Beginner" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 75, type: "Intermediate" },
        { name: "React.js", level: 55, type: "Beginner" },
        { name: "WordPress", level: 70, type: "Intermediate" },
        { name: "Streamlit", level: 75, type: "Intermediate" },
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 75, type: "Intermediate" },
        { name: "Dart", level: 75, type: "Intermediate" }
      ]
    },
    {
      title: "AI/ML & Data",
      skills: [
        { name: "OpenCV", level: 70, type: "Intermediate" },
        { name: "Machine Learning", level: 65, type: "Beginner" },
        { name: "MySQL", level: 75, type: "Intermediate" },
        { name: "Phidata", level: 70, type: "Intermediate" },
      ]
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "Figma", level: 90, type: "Advanced" },
        { name: "Adobe XD", level: 75, type: "Intermediate" }
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
            Skills & Expertise
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-primary">
                    {categoryIcons[category.title as keyof typeof categoryIcons]}
                  </span>
                  <h2 className="text-2xl font-bold text-primary">
                    {category.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group"
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="space-y-2 bg-gray-700 p-4 rounded-lg transform transition-all duration-300 hover:shadow-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 font-medium">{skill.name}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            skill.type === "Advanced" ? "bg-green-500/20 text-green-400" :
                            skill.type === "Intermediate" ? "bg-blue-500/20 text-blue-400" :
                            "bg-orange-500/20 text-orange-400"
                          }`}>
                            {skill.type}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              skill.type === "Advanced" ? "bg-green-500" :
                              skill.type === "Intermediate" ? "bg-blue-500" :
                              "bg-orange-500"
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                        <AnimatePresence>
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute inset-0 bg-gray-800/90 rounded-lg flex items-center justify-center p-4"
                            >
                              <div className="text-center">
                                <p className="text-2xl font-bold text-primary mb-2">{skill.level}%</p>
                                <p className="text-gray-300">Proficiency Level</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 bg-gray-800 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Additional Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Git & Version Control",
                "Problem Solving",
                "Team Leadership",
                "Project Management",
                "Designing",
                "Researching",
                "Prompt Engineering"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700 rounded-lg px-4 py-3 text-center text-gray-300 cursor-pointer hover:bg-gray-600 transition-colors duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills; 