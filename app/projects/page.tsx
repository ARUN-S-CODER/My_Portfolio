'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Vet Drugx App",
      description: "A Flutter-based veterinary drug information system for searching medical drugs, dosage rates, and symptoms. Going to publish on Play Store.",
      image: "/projects/vetdrugx.png",
      technologies: ["Flutter", "Dart", "Firebase", "REST API"],
      features: [
        "Comprehensive drug database",
        "Real-time search functionality",
        "User-friendly interface",
        "Offline data support"
      ],
      github: "https://github.com/yourusername/vetdrugx",
      live: "https://play.google.com/store"
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
      github: "https://github.com/yourusername/ticketbuddy"
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
      github: "https://github.com/yourusername/helmet-detection"
    },
    {
      title: "Table Recognition System",
      description: "AI-based invoice data extraction system that generates knowledge graphs from key-value pairs.",
      image: "/projects/table-recognition.png",
      technologies: ["Python", "OpenCV", "Machine Learning", "NetworkX"],
      features: [
        "Automated data extraction",
        "Knowledge graph generation",
        "High accuracy",
        "Batch processing"
      ],
      github: "https://github.com/yourusername/table-recognition"
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
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-700">
                  {/* Project image would go here */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span className="text-lg">Project Preview</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects; 