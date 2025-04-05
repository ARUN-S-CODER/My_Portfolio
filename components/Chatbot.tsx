'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaChevronDown } from 'react-icons/fa';

interface Message {
  text: string;
  isUser: boolean;
  followUpQuestions?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Tell me about your background",
    "What are your technical skills?",
    "Tell me about your projects",
    "What's your educational qualification?",
    "What achievements do you have?",
    "How can I contact you?",
    "Tell me about your hackathon experience",
    "What certifications do you have?",
    "Tell me about your publications",
    "What's your GitHub profile?",
    "Tell me about your LinkedIn profile",
    "What's your experience in AI/ML?",
    "Tell me about your Flutter projects",
    "What's your experience in web development?",
    "Tell me about your UI/UX skills"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): { response: string; followUpQuestions: string[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('background')) {
      return {
        response: "I'm a passionate developer with expertise in Flutter, UI/UX Design, and AI/ML Development. I have a strong background in creating innovative solutions and have participated in various hackathons and competitions. I'm currently pursuing my education with a focus on technology and innovation.",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('skills') || lowerMessage.includes('expertise')) {
      return {
        response: "My key technical skills include:\n• Flutter Development\n• UI/UX Design\n• AI/ML Development\n• Python Programming\n• Web Development\n• Mobile App Development\n• OpenCV\n• Machine Learning\n• Data Science\n• Problem Solving",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('projects')) {
      return {
        response: "I've worked on several notable projects:\n• Table Recognition System - AI-based invoice data extraction\n• Ticket Buddy Bot - AI-driven multilingual museum ticket booking\n• Helmet Detection System - Image processing for traffic safety\n• Veterinary Drug Management App - Comprehensive clinic solution\n• Netflix Clone - Full-stack streaming platform\n• Portfolio Website - Modern responsive portfolio",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('educational') || lowerMessage.includes('degree')) {
      return {
        response: "I'm a student of Computer Science and Business Systems in Sri Sairam Engineering College, Chennai. I'm currently pursuing my education with a strong focus on technology and innovation. I have completed several NPTEL certifications and actively participate in technical competitions. My education combines theoretical knowledge with practical experience through projects and certifications.",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplishment')) {
      return {
        response: "My achievements include:\n• Top 100 in Hack4Purpose Hackathon\n• Multiple NPTEL certifications with high scores\n• Successful completion of various technical projects\n• Active participation in IEEE events\n• Finalist in Smart India Hackathon\n• Published research papers in IEEE",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return {
        response: "You can reach me through:\n📧 Email: arun.s00101@gmail.com\n💼 LinkedIn: linkedin.com/in/arun-s-b-tech-b26515257\n🐙 GitHub: github.com/ARUN-S-CODER",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('hackathon') || lowerMessage.includes('competition')) {
      return {
        response: "I've participated in several hackathons and competitions:\n• Hack4Purpose Hackathon (Top 100)\n• Smart India Hackathon (Finalist)\n• Various IEEE competitions\n• Technical project competitions\n\nThese experiences have helped me develop rapid prototyping and problem-solving skills.",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('certification') || lowerMessage.includes('certificate')) {
      return {
        response: "I've completed several NPTEL certifications:\n• Python for Data Science\n• Cloud Computing\n• Programming in Java\n• Introduction to Database Systems",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('publication') || lowerMessage.includes('paper') || lowerMessage.includes('research')) {
      return {
        response: "My research publications include:\n1. 'Recycling as a Service: IOT enabled smart waste management system with machine learning'\n   - Published in IEEE\n   - Date: April 10, 2024\n   - Focuses on IoT and ML for waste management\n\n2. 'HELMET DETECTION IN TWO WHEELER USING IMAGE PROCESSING'\n   - IEEE Conference\n   - Status: Going to publish\n   - Focuses on image processing for road safety",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('github') || lowerMessage.includes('repository')) {
      return {
        response: "You can find my work on GitHub at github.com/ARUN-S-CODER. My repositories include:\n• Table Recognition Project\n• Ticket Buddy Bot\n• Veterinary Drug Management App\n• Netflix Clone\n• Portfolio Website\n\nI actively contribute to open-source projects and share my code with the developer community.",
        followUpQuestions: suggestedQuestions
      };
    }

    if (lowerMessage.includes('linkedin') || lowerMessage.includes('profile')) {
      return {
        response: "You can connect with me on LinkedIn at linkedin.com/in/arun-s-b-tech-b26515257. My profile showcases:\n• Professional experience\n• Technical skills\n• Projects and achievements\n• Educational background\n• Certifications\n\nFeel free to connect for professional networking and opportunities!",
        followUpQuestions: suggestedQuestions
      };
    }
    if (lowerMessage.includes('ai/ml')){
      return {
        response: "• I have a strong interest in AI/ML and have completed several certifications in the field. \n• I have a good understanding of machine learning algorithms and have worked on several projects related to AI/ML. \n• I am also interested in genai and have worked on several projects related to it.",
        followUpQuestions: suggestedQuestions
      };
    }
    if (lowerMessage.includes('ui/ux')) {
      return {
        response: "I have a good understanding of UI/UX design and have worked on several projects related to it. \nI have done lot of design works in figma and can design your website or app in figma.",
        followUpQuestions: suggestedQuestions
      };
    }
    if (lowerMessage.includes('flutter')) {
      return {
        response: "• I have a good stuff in flutter as well as dart. \n• And I Completed Veterinary Drug managment app in flutter. \n • It shows how I am strong in app development.",
        followUpQuestions: suggestedQuestions
      };
    }
    if (lowerMessage.includes('web')) {
      return {
        response: "I have a quite good knowledge in web Technology. \n • I develop various Websites and you find those creative web projects in my portfolio itself.",
        followUpQuestions: suggestedQuestions
      };
    }
    return {
      response: "I can tell you about:\n• Background\n• Skills\n• Projects\n• Education\n• Achievements\n• Contact Information\n• Hackathons\n• Certifications\n• Publications\n• GitHub\n• LinkedIn\n• Experience\n\nWhat would you like to know?",
      followUpQuestions: suggestedQuestions
    };
  };

  const handleSuggestedQuestion = (question: string) => {
    setShowDropdown(false);
    setMessages(prev => [...prev, { text: question, isUser: true }]);
    setIsTyping(true);

    setTimeout(() => {
      const { response, followUpQuestions } = getBotResponse(question);
      setMessages(prev => [...prev, { 
        text: response, 
        isUser: false,
        followUpQuestions 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaRobot className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-20 right-4 w-full max-w-md h-[70vh] bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            <div className="flex justify-between items-center p-4 bg-gray-900">
              <h2 className="text-lg font-semibold text-white">Chat with me</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[calc(70vh-4rem)] overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-700 p-4 rounded-lg"
                  >
                    <p className="text-gray-300">Hello! I can tell you about my background, skills, projects, and more. What would you like to know?</p>
                  </motion.div>
                  <div className="relative" ref={dropdownRef}>
                    <motion.button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full flex justify-between items-center p-3 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Select a question</span>
                      <FaChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                    </motion.button>
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-10 w-full mt-2 bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                        >
                          {suggestedQuestions.map((question, index) => (
                            <motion.button
                              key={index}
                              onClick={() => handleSuggestedQuestion(question)}
                              className="w-full text-left p-3 text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {question}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isUser
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                            : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        <p className="whitespace-pre-line">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                  {!isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <div className="relative" ref={dropdownRef}>
                        <motion.button
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="w-full flex justify-between items-center p-3 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>What else would you like to know?</span>
                          <FaChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                        </motion.button>
                        <AnimatePresence>
                          {showDropdown && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-10 w-full mt-2 bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                            >
                              {suggestedQuestions.map((question, index) => (
                                <motion.button
                                  key={index}
                                  onClick={() => handleSuggestedQuestion(question)}
                                  className="w-full text-left p-3 text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  {question}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 