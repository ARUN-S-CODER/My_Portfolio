'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';
import Image from 'next/image';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string | null;
  live: string | null;
  color: string;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const projects: Project[] = [
    {
      title: "Table Recognition System",
      description: "AI-based invoice data extraction system that generates knowledge graphs from key-value pairs. Extracts tables from invoice images, processes text using OCR, extracts entities and relationships using LLM and traditional methods, and constructs a visual knowledge graph.",
      image: "/images/table.png",
      technologies: ["Python", "OpenCV", "Machine Learning", "NetworkX", "OCR", "LLM"],
      features: [
        "Automated data extraction",
        "Knowledge graph generation",
        "High accuracy",
        "Batch processing",
        "Entity and relationship extraction"
      ],
      github: "https://github.com/ARUN-S-CODER/Table_Recognition_Project",
      live: null,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Netflix Clone",
      description: "A full-stack Netflix clone with user authentication, movie browsing, and video streaming capabilities. Features include responsive design, movie recommendations, and user profiles.",
      technologies: ["HTML", "CSS", "JavaScript", "Material-UI"],
      image: "/images/netflix_clone.png",
      features: [
        "User authentication and profiles",
        "Movie browsing and search",
        "Responsive design",
        "Video streaming",
        "Movie recommendations"
      ],
      github: "https://github.com/ARUN-S-CODER/BharatIntern",
      live: null,
      color: "from-red-500 to-red-700"
    },
    {
      title: "Hack4Purpose Hackathon Project",
      description: "A solution developed during the Hack4Purpose hackathon that secured a position in the Top 100. The project focused on addressing real-world challenges through innovative technology implementation.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      image: "/images/hack4purpose.png",
      features: [
        "Responsive Design", 
        "Project management",
        "Hackathon Informations to showcase the projects", 
        "Dashboard for users to track their progress"
      ],
      github: "https://github.com/ARUN-S-CODER/HACK4PURPOSE",
      live: "https://hack-project-hack.netlify.app",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and achievements. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and transitions.",
      technologies: ["Next.js", "React", "Tailwind CSS","TypeScript"],
      image: "/images/PORTFOLIO.png",
      features: [
        "Responsive design",
        "Interactive animations",
        "Dark mode support",
        "Project showcase",
        "Contact form",
        "AI-powered chatbot"
      ],
      github: "https://github.com/ARUN-S-CODER/My_Portfolio",
      live: "https://arun-s-portfolio.netlify.app",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Veterinary Drug Management App",
      description: "A comprehensive solution for veterinary clinics to manage drug inventory, prescriptions, and patient records efficiently.",
      technologies: ["Flutter", "Material-UI", "Flutterflow"],
      image: "/images/drug.png",
      features: [
        "Easy Search for Drugs",
        "Dosage Data for Each Species",
        "User Friendly Interface"
      ],
      github: null,
      live: null,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Ticket Buddy Bot",
      description: "AI-driven chatbot for multilingual museum ticket booking. Developed as part of SIH Project.",
      image: "/images/ticketbuddybot.jpg",
      technologies: ["Python", "NLP", "LLM","Langchain", "Streamlit"],
      features: [
        "Multilingual support",
        "24/7 automated booking",
        "Smart recommendations",
        "Payment integration"
      ],
      github: null,
      live: null,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Helmet Detection System",
      description: "Image processing model for traffic rule enforcement. Final Year project focused on road safety.",
      image: "/images/helmet.png",
      technologies: ["OpenCV", "Python", "Microcontroller", "ML"],
      features: [
        "Real-time detection",
        "High accuracy",
        "Multiple camera support",
        "Automated reporting"
      ],
      github: null,
      live: null,
      color: "from-green-500 to-teal-500"
    },
    
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ARUN-S-CODER/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

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
        <div className="max-w-6xl mx-auto">
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
              <FaCode className="text-yellow-500 w-10 h-10" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Projects
            </span>
          </motion.h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {['featured', 'github'].map((tab) => (
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
                {tab === 'featured' ? 'Featured Projects' : 'GitHub Repositories'}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'featured' && (
              <motion.div
                key="featured"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className={`bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-t-4 border-${project.color.split(' ')[1].split('-')[1]}-500`}
                  >
                    <div className="relative h-48 bg-gray-700">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        {project.image ? (
                          <Image src={project.image} alt={project.title} fill className="object-cover" />
                        ) : (
                          <span className="text-lg font-medium">Project Preview</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className={`text-2xl font-bold text-white mb-2 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r ${project.color} transition-colors`}>
                        {project.title}
                      </h2>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h3 className={`text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                          Key Features:
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {project.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r ${project.color} transition-colors duration-300`}
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:scale-110 transition-all duration-300`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-2 text-gray-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r ${project.color} transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="w-5 h-5" />
                            <span>Source Code</span>
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-2 text-gray-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r ${project.color} transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'github' && (
              <motion.div
                key="github"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {loading ? (
                  <div className="col-span-full text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mx-auto"></div>
                    <p className="mt-4 text-gray-300">Loading repositories...</p>
                  </div>
                ) : (
                  repos.map((repo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-t-4 border-yellow-500"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-yellow-500 to-orange-500 transition-colors">
                        {repo.name}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {repo.description || 'No description available'}
                      </p>
                      <div className="flex items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <FaStar className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCodeBranch className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                        {repo.language && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs">
                            {repo.language}
                          </span>
                        )}
                      </div>
                      <motion.a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-yellow-500 to-orange-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>View Repository</span>
                      </motion.a>
                    </motion.div>
                  ))
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Projects; 