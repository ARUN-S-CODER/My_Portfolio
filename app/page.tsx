'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Navigation from '@/components/Navigation';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Arun S
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'Software Developer',
                1000,
                'UI/UX Designer',
                1000,
                'AI/ML Enthusiast',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Tech enthusiast with expertise in software development, UI/UX design, AI/ML, and app development.
            Passionate about problem-solving and creating impactful solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 