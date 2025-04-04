'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCode, FaTrophy } from 'react-icons/fa';

const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedTech, setExpandedTech] = useState<number | null>(null);

  const experiences = [
    {
      company: "iTech India Pvt Ltd",
      role: "AI Developer",
      duration: "March 2025 - ongoing",
      type: "Internship",
      description: "Built a Table Recognition System that extracts key-value pairs from invoice bills and generates a knowledge graph.",
      technologies: ["OpenCV", "Machine Learning", "Python", "Data Processing"],
      achievements: [
        "Developed an AI-based invoice data extraction system",
        "Implemented knowledge graph generation for better data representation",
        "Improved accuracy of data extraction by 25%"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
        company: "Shiash Info Pvt Ltd",
        role: "Java Full Stack Developer",
        duration: "June 2024 - August 2024",
        type: "Internship",
        description: "Worked on JDBC, OOPS, DSA, and Spring Basics for enterprise-level applications.",
        technologies: ["Java", "Spring", "JDBC", "DSA"],
        achievements: [
          "Developed multiple enterprise-level applications",
          "Implemented efficient data structures and algorithms",
          "Contributed to core Java development"
        ],
        color: "from-yellow-500 to-orange-500"
      },
      {
        company: "Masterminds Startup",
        role: "Flutter Developer",
        duration: "December 2024 - January 2025",
        type: "Internship",
        description: "Developed Vet Drugx, a mobile application for veterinary professionals to search medical drugs, dosage rates, and symptoms.",
        technologies: ["Flutter", "Dart", "Firebase", "REST API"],
        achievements: [
          "Built a comprehensive drug information system",
          "Implemented real-time search functionality",
          "Integrated veterinary database with over 1000+ entries"
        ],
        color: "from-green-500 to-teal-500"
      },
    {
      company: "Nova Tech",
      role: "Python Developer",
      duration: "April 2024 - May 2024",
      type: "Internship",
      description: "Created data analytics applications and productivity tools using Python and Streamlit.",
      technologies: ["Python", "Streamlit", "NumPy", "Pandas"],
      achievements: [
        "Developed a To-Do List application using Streamlit",
        "Performed data cleaning and analytics tasks",
        "Implemented data visualization solutions"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      company: "Coverscave",
      role: "UI/UX Designer",
      duration: "March 2024 - April 2024",
      type: "Internship",
      description: "Designed user interfaces for web applications in the real estate and education sectors.",
      technologies: ["Figma"],
      achievements: [
        "Designed web UI for a real estate website",
        "Created course enrollment web design",
        "Implemented modern UI/UX principles"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      company: "Altriusty Startup",
      role: "AI/ML Developer",
      duration: "March 2024 - April 2024",
      type: "Internship",
      description: "Developed AI-powered applications and user interfaces using Streamlit and Dialogflow.",
      technologies: ["Python", "Streamlit", "Dialogflow"],
      achievements: [
        "Created multiple UI pages using Streamlit",
        "Developed a rule-based chatbot using Dialogflow",
        "Integrated AI functionalities into web applications"
      ],
      color: "from-blue-500 to-purple-500"
    },
    
    {
      company: "Prodigy InfoTech",
      role: "Data Analyst",
      duration: "December 2023 - January 2024",
      type: "Internship",
      description: "Performed data analysis and visualization using Python and Excel.",
      technologies: ["Python", "NumPy", "Matplotlib", "Excel"],
      achievements: [
        "Conducted data cleaning using NumPy",
        "Created data visualizations in Excel",
        "Implemented data visualization using Matplotlib"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      company: "Bharat Intern",
      role: "Web Developer",
      duration: "November 2023 - December 2023",
      type: "Internship",
      description: "Developed web applications including a Netflix clone and portfolio website.",
      technologies: ["HTML", "CSS", "JavaScript"],
      achievements: [
        "Built a Netflix clone website",
        "Created a responsive portfolio website",
        "Implemented modern web design principles"
      ],
      color: "from-green-500 to-teal-500"
    },
    
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
              <FaBriefcase className="text-yellow-500 w-10 h-10" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Work Experience
            </span>
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`bg-gray-800 rounded-xl p-6 relative border-l-4 border-${exp.color.split(' ')[1].split('-')[1]}-500 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="ml-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <motion.h2 
                        className={`text-2xl font-bold text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r ${exp.color} transition-colors duration-300`}
                        animate={{ x: hoveredCard === index ? 10 : 0 }}
                      >
                        {exp.role}
                      </motion.h2>
                      <motion.h3 
                        className={`text-xl bg-clip-text text-transparent bg-gradient-to-r ${exp.color} mb-1`}
                        animate={{ x: hoveredCard === index ? 10 : 0, transition: { delay: 0.1 } }}
                      >
                        {exp.company}
                      </motion.h3>
                    </div>
                    <div className="text-right">
                      <motion.span 
                        className={`bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-sm inline-block`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.type}
                      </motion.span>
                      <motion.p 
                        className="text-gray-400 mt-1"
                        animate={{ x: hoveredCard === index ? -10 : 0 }}
                      >
                        {exp.duration}
                      </motion.p>
                    </div>
                  </div>

                  <motion.p 
                    className="text-gray-300 mt-4"
                    animate={{ opacity: hoveredCard === index ? 1 : 0.8 }}
                  >
                    {exp.description}
                  </motion.p>

                  <motion.div 
                    className="mt-4"
                    animate={{ y: hoveredCard === index ? 0 : 10, opacity: hoveredCard === index ? 1 : 0.8 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
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
                        <FaTrophy className={`text-${exp.color.split(' ')[1].split('-')[1]}-500 w-6 h-6`} />
                      </motion.div>
                      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                        Key Achievements:
                      </span>
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r ${exp.color} transition-colors duration-300`}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="flex flex-wrap gap-2 mt-4"
                    animate={{ y: hoveredCard === index ? 0 : 10, opacity: hoveredCard === index ? 1 : 0.8 }}
                  >
                    <div className="flex items-center gap-2 mb-2 w-full">
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
                        <FaCode className={`text-${exp.color.split(' ')[1].split('-')[1]}-500 w-6 h-6`} />
                      </motion.div>
                      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                        Technologies Used:
                      </span>
                    </div>
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className={`bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:scale-110 transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setExpandedTech(expandedTech === idx ? null : idx)}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Experience; 