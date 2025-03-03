'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <>
      <Navigation />
      <section className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-lg">
              I am a passionate tech enthusiast with a strong foundation in software development,
              UI/UX design, and artificial intelligence. Currently pursuing my B.Tech in Computer
              Science and Business Systems at Sri Sairam Engineering College, I combine technical
              expertise with a business-oriented mindset.
            </p>

            <p className="text-lg">
              My journey in technology has been driven by a desire to create impactful solutions
              that make a difference. From developing mobile applications for veterinary professionals
              to building AI-powered systems for invoice processing, I've always focused on solving
              real-world problems through technology.
            </p>

            <div className="bg-gray-800 rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>🎓 B.Tech Computer Science student with 8.67 CGPA</li>
                <li>💻 Full-stack developer with expertise in React and Flutter</li>
                <li>🎨 Certified UI/UX Designer</li>
                <li>🤖 AI/ML enthusiast with practical project experience</li>
                <li>🏆 Winner at Hack4Purpose Hackathon</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">What I Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                  <p>Building robust and scalable applications using modern technologies</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p>Creating intuitive and beautiful user interfaces with Figma and Adobe XD</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">AI/ML Development</h3>
                  <p>Implementing machine learning solutions for real-world problems</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                  <p>Developing cross-platform mobile applications using Flutter and React Native</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About; 