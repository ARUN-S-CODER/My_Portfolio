'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';

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
  github: string;
  live: string | null;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const projects: Project[] = [
    {
      title: "Table Recognition System",
      description: "AI-based invoice data extraction system that generates knowledge graphs from key-value pairs. Extracts tables from invoice images, processes text using OCR, extracts entities and relationships using LLM and traditional methods, and constructs a visual knowledge graph.",
      image: "/projects/table-recognition.png",
      technologies: ["Python", "OpenCV", "Machine Learning", "NetworkX", "OCR", "LLM"],
      features: [
        "Automated data extraction",
        "Knowledge graph generation",
        "High accuracy",
        "Batch processing",
        "Entity and relationship extraction"
      ],
      github: "https://github.com/ARUN-S-CODER/Table_Recognition_Project",
      live: null
    },
    {
      title: "Ticket Buddy Bot",
      description: "AI-driven chatbot for multilingual museum ticket booking. Developed as part of SIH Project.",
      image: "/projects/ticketbuddy.png",
      technologies: ["Python", "NLP", "TensorFlow", "DialogFlow"],
      features: [
        "Multilingual support",
        "24/7 automated booking",
        "Smart recommendations",
        "Payment integration"
      ],
      github: "https://github.com/yourusername/ticketbuddy",
      live: null
    },
    {
      title: "Helmet Detection System",
      description: "Image processing model for traffic rule enforcement. Final Year project focused on road safety.",
      image: "/projects/helmet.png",
      technologies: ["OpenCV", "Python", "TensorFlow", "YOLOv5"],
      features: [
        "Real-time detection",
        "High accuracy",
        "Multiple camera support",
        "Automated reporting"
      ],
      github: "https://github.com/yourusername/helmet-detection",
      live: null
    }
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
      <section className="min-h-screen pt-20 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center flex items-center justify-center gap-4"
          >
            <FaCode className="text-primary" />
            Projects
          </motion.h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {['featured', 'github'].map((tab) => (
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
                    className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="relative h-48 bg-gray-700">
                      {/* Project image would go here */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <span className="text-lg">Project Preview</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-white mb-2 hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {project.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
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
                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="w-5 h-5" />
                          <span>Source Code</span>
                        </motion.a>
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
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
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-gray-300">Loading repositories...</p>
                  </div>
                ) : (
                  repos.map((repo, index) => (
                    <motion.div
                      key={repo.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-primary transition-colors truncate" title={repo.name}>
                        {repo.name}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                        {repo.description || 'No description available'}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.language && (
                          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {repo.language}
                          </span>
                        )}
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          Updated {new Date(repo.updated_at).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-500" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCodeBranch className="text-blue-500" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>

                      <motion.a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center space-x-2 text-primary hover:text-white transition-colors"
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