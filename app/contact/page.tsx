'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGoogle, FaEnvelope,FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FaGoogle className="w-6 h-6" />,
      link: 'mailto:arun.s00101@gmail.com',
      text: 'arun.s00101@gmail.com',
      color: "from-red-500 to-orange-500"
    },
    
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/arun-s-b-tech-b26515257',
      text: 'Connect on LinkedIn',
      color: "from-blue-500 to-blue-500"
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      link: 'https://github.com/ARUN-S-CODER',
      text: 'Follow on GitHub',
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <>
      <Navigation />
      <section className="min-h-screen pt-20 px-4 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
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
              <FaEnvelope className="text-blue-500 w-12 h-12" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Get in Touch
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-10 p-6">
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                  {submitStatus === 'success' && (
                    <p className="text-green-500 text-center">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 bg-opacity-10 p-6">
                  <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 text-gray-300 hover:text-white transition-all p-3 rounded-lg hover:bg-gray-700 ${
                          hoveredItem === link.name ? 'transform scale-[1.02] shadow-md border-l-4 border-' + link.color.split(' ')[1].split('-')[1] + '-500' : ''
                        }`}
                        onMouseEnter={() => setHoveredItem(link.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className={`flex-shrink-0 bg-gradient-to-r ${link.color} p-2 rounded-lg`}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {link.icon}
                        </motion.div>
                        <span>{link.text}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-opacity-10 p-6">
                  <h2 className="text-2xl font-bold text-white">Location</h2>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <motion.div 
                      className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="text-white font-medium">Chennai, Tamil Nadu</p>
                      <p>India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-500">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-opacity-10 p-6">
                  <h2 className="text-2xl font-bold text-white">Availability</h2>
                </div>
                <div className="p-6">
                  <div className="flex items-start space-x-4 text-gray-300">
                    <motion.div 
                      className="flex-shrink-0 bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaBriefcase className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="text-white font-medium mb-2">I'm currently available for:</p>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          Full-time positions
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          Freelance projects
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          Technical consultations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 