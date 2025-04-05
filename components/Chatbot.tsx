'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaSpinner } from 'react-icons/fa';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you learn more about Arun today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested questions
  const suggestedQuestions = [
    "Tell me about Arun",
    "What are his skills?",
    "What projects has he worked on?",
    "What is his education background?",
    "What are his achievements?",
    "How can I contact him?",
    "Tell me about his hackathon experience",
    "What certifications does he have?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userInput: string): { response: string; followUpQuestions: string[] } => {
    const lowerInput = userInput.toLowerCase();
    
    // General greetings
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return {
        response: 'Hello there! I\'m your AI assistant. How can I help you learn more about Arun today?',
        followUpQuestions: [
          "Tell me about Arun",
          "What are his skills?",
          "What projects has he worked on?"
        ]
      };
    } 
    
    // About the chatbot
    else if (lowerInput.includes('about') && (lowerInput.includes('you') || lowerInput.includes('bot') || lowerInput.includes('assistant'))) {
      return {
        response: 'I\'m an AI assistant created to help visitors learn more about Arun. I can tell you about his skills, projects, education, achievements, and much more. What would you like to know?',
        followUpQuestions: [
          "Tell me about Arun's skills",
          "What projects has he worked on?",
          "What is his education background?"
        ]
      };
    } 
    
    // About Arun
    else if (lowerInput.includes('about') && lowerInput.includes('arun')) {
      return {
        response: 'Arun is a passionate software developer and engineering student with expertise in Flutter, UI/UX design, and AI/ML development. He\'s currently pursuing his education at Sri Sairam Engineering College with a CGPA of 8.83. He has participated in numerous hackathons, including being a finalist in SIH\'24, and has completed several NPTEL certifications. He\'s also solved over 3000 programming problems and completed 10+ projects.',
        followUpQuestions: [
          "Tell me more about his skills",
          "What projects has he worked on?",
          "What are his achievements?"
        ]
      };
    }
    
    // Skills
    else if (lowerInput.includes('skills') || lowerInput.includes('what can you do') || lowerInput.includes('expertise')) {
      return {
        response: 'Arun has expertise in:\n- Flutter Development\n- UI/UX Design\n- AI/ML Development\n- Software Development\n- Problem Solving\n- Competitive Programming\n- Web Development\n- Mobile App Development\n- Database Management\n- Cloud Computing\n\nHe\'s also skilled in various programming languages and frameworks. Would you like to know more about any specific skill?',
        followUpQuestions: [
          "Tell me about his Flutter projects",
          "What programming languages does he know?",
          "Tell me about his UI/UX work"
        ]
      };
    } 
    
    // Programming languages
    else if (lowerInput.includes('language') || lowerInput.includes('programming') || lowerInput.includes('code')) {
      return {
        response: 'Arun is proficient in several programming languages and technologies:\n\n- Java\n- Python\n- JavaScript/TypeScript\n- Dart (Flutter)\n- HTML/CSS\n- SQL\n\nHe has demonstrated his programming skills through various projects, hackathons, and by solving over 3000 programming problems. His NPTEL certifications in Programming in Java and Python for Data Science further validate his expertise.',
        followUpQuestions: [
          "Tell me about his Java projects",
          "What has he built with Python?",
          "Show me his Flutter work"
        ]
      };
    }
    
    // Projects
    else if (lowerInput.includes('projects') || lowerInput.includes('work') || lowerInput.includes('portfolio')) {
      return {
        response: 'Arun has worked on several impressive projects:\n\n1. Veterinary Drug Management App\n   - A comprehensive solution for veterinary clinics\n   - Developed using Flutter for cross-platform compatibility\n\n2. IEEE TechGood Project\n   - Received IEEE funding for this innovative project\n   - Focused on creating positive social impact\n\n3. Various Hackathon Projects\n   - Including his SIH\'24 finalist project\n   - Demonstrating rapid prototyping and problem-solving skills\n\n4. Open Source Contributions\n   - Active contributor to various open-source projects\n   - Sharing knowledge with the developer community\n\nEach project showcases different aspects of his skills. Would you like to know more details about any specific project?',
        followUpQuestions: [
          "Tell me more about the Veterinary App",
          "What was the IEEE TechGood project about?",
          "Tell me about his hackathon projects"
        ]
      };
    } 
    
    // Contact
    else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return {
        response: 'You can reach out to Arun through multiple channels:\n\n📧 Email: arun.s00101@gmail.com\n📱 Phone: +91 90031 28358\n💼 LinkedIn: Connect with him for professional networking\n🐱 GitHub: Check out his code contributions\n\nFeel free to reach out for collaborations or opportunities!',
        followUpQuestions: [
          "Tell me about his GitHub projects",
          "What kind of collaborations is he interested in?",
          "Tell me about his work experience"
        ]
      };
    } 
    
    // Education
    else if (lowerInput.includes('education') || lowerInput.includes('college') || lowerInput.includes('university') || lowerInput.includes('degree')) {
      return {
        response: 'Arun is currently pursuing his education at Sri Sairam Engineering College:\n\n📚 Current CGPA: 8.83\n🎓 NPTEL Certifications:\n- Cloud Computing (2024) - Elite + Silver, 75%\n- Programming in Java (2023) - Elite + Silver, 75%\n- Introduction to Database Systems (2024) - 49%\n- Python for Data Science (2024) - Elite + Silver, 81%\n\nHe consistently maintains excellent academic performance while actively participating in various technical competitions and hackathons. His education combines theoretical knowledge with practical experience through projects and certifications.',
        followUpQuestions: [
          "Tell me about his NPTEL certifications",
          "What hackathons has he participated in?",
          "Tell me about his achievements"
        ]
      };
    } 
    
    // Achievements
    else if (lowerInput.includes('achievements') || lowerInput.includes('awards') || lowerInput.includes('accomplishments')) {
      return {
        response: 'Arun has achieved several notable milestones:\n\n🏆 SIH\'24 Finalist\n🌟 Top 100 at Hack4Purpose Hackathon\n💡 IEEE Funding for TechGood Project\n📊 3000+ Problems Solved\n🎯 10+ Projects Completed\n🏅 5+ Hackathons\n📜 10+ Certifications\n\nThese achievements demonstrate his dedication to continuous learning and self-improvement. He balances academic excellence with practical experience through competitions and projects.',
        followUpQuestions: [
          "Tell me about SIH'24",
          "What was the Hack4Purpose project?",
          "Tell me about his certifications"
        ]
      };
    } 
    
    // Hackathons
    else if (lowerInput.includes('hackathon') || lowerInput.includes('competition') || lowerInput.includes('contest')) {
      return {
        response: 'Arun has participated in several prestigious hackathons and competitions:\n\n1. Smart India Hackathon 2024 (Finalist)\n   - National-level hackathon\n   - Reached the final round\n\n2. Hack4Purpose Hackathon (Top 100)\n   - Secured position in Top 100\n   - Developed innovative solutions\n\n3. IEEE TechGood Project Competition\n   - Received funding for his project\n   - Focused on social impact\n\nEach competition has helped him develop new skills and gain valuable experience in rapid prototyping and team collaboration. He enjoys the challenge of solving real-world problems within tight deadlines.',
        followUpQuestions: [
          "Tell me about his SIH'24 project",
          "What was the Hack4Purpose solution?",
          "Tell me about the IEEE TechGood project"
        ]
      };
    } 
    
    // Certifications
    else if (lowerInput.includes('certification') || lowerInput.includes('nptel') || lowerInput.includes('course')) {
      return {
        response: 'Arun has completed several NPTEL certifications:\n\n1. Cloud Computing (2024)\n   - Elite + Silver\n   - Score: 75%\n   - Covers cloud architecture and deployment\n\n2. Programming in Java (2023)\n   - Elite + Silver\n   - Score: 75%\n   - Advanced Java programming concepts\n\n3. Introduction to Database Systems (2024)\n   - Score: 49%\n   - Database design and management\n\n4. Python for Data Science (2024)\n   - Elite + Silver\n   - Score: 81%\n   - Data analysis and machine learning\n\nThese certifications demonstrate his commitment to continuous learning and skill development across various domains of computer science.',
        followUpQuestions: [
          "Tell me about his Cloud Computing certification",
          "What did he learn in Python for Data Science?",
          "Tell me about his Java programming skills"
        ]
      };
    } 
    
    // Experience
    else if (lowerInput.includes('experience') || lowerInput.includes('work experience') || lowerInput.includes('job')) {
      return {
        response: 'While Arun is currently a student, he has gained significant practical experience through:\n\n1. Project Development\n   - Developed 10+ projects independently and in teams\n   - Created solutions for real-world problems\n\n2. Hackathon Participation\n   - Participated in 5+ hackathons including SIH\'24\n   - Gained experience in rapid prototyping and team collaboration\n\n3. Open Source Contributions\n   - Contributed to various open-source projects\n   - Collaborated with developers worldwide\n\n4. Technical Competitions\n   - Participated in coding competitions\n   - Solved over 3000 programming problems\n\nThis hands-on experience complements his academic learning and has helped him develop practical skills in software development.',
        followUpQuestions: [
          "Tell me about his projects",
          "What hackathons has he participated in?",
          "Tell me about his open source work"
        ]
      };
    }
    
    // GitHub
    else if (lowerInput.includes('github') || lowerInput.includes('repository') || lowerInput.includes('code')) {
      return {
        response: 'Arun is active on GitHub where he:\n\n- Maintains repositories for his personal projects\n- Contributes to open-source projects\n- Shares code samples and solutions\n- Collaborates with other developers\n\nHis GitHub profile showcases his coding skills, project work, and contributions to the developer community. You can connect with him on GitHub to see his latest work and contributions.',
        followUpQuestions: [
          "Tell me about his projects",
          "What open source contributions has he made?",
          "Tell me about his coding skills"
        ]
      };
    }
    
    // Flutter
    else if (lowerInput.includes('flutter') || lowerInput.includes('mobile') || lowerInput.includes('app')) {
      return {
        response: 'Arun has expertise in Flutter development:\n\n- Developed cross-platform mobile applications\n- Created responsive and user-friendly interfaces\n- Implemented state management solutions\n- Integrated backend services with Flutter apps\n\nHis Veterinary Drug Management App is a notable example of his Flutter development skills. He enjoys building mobile applications that solve real-world problems and provide excellent user experiences.',
        followUpQuestions: [
          "Tell me about the Veterinary App",
          "What other Flutter apps has he built?",
          "Tell me about his UI/UX skills"
        ]
      };
    }
    
    // UI/UX
    else if (lowerInput.includes('ui') || lowerInput.includes('ux') || lowerInput.includes('design')) {
      return {
        response: 'Arun has skills in UI/UX design:\n\n- Creates intuitive and user-friendly interfaces\n- Follows modern design principles and trends\n- Focuses on accessibility and usability\n- Designs responsive layouts for various devices\n\nHis projects demonstrate his ability to create visually appealing and functional user interfaces that enhance the overall user experience.',
        followUpQuestions: [
          "Tell me about his Flutter apps",
          "What design tools does he use?",
          "Tell me about his projects"
        ]
      };
    }
    
    // AI/ML
    else if (lowerInput.includes('ai') || lowerInput.includes('ml') || lowerInput.includes('machine learning') || lowerInput.includes('artificial intelligence')) {
      return {
        response: 'Arun has experience in AI/ML development:\n\n- Completed NPTEL certification in Python for Data Science\n- Developed machine learning models for various applications\n- Implemented AI solutions in his projects\n- Continuously learning about new AI/ML technologies\n\nHis interest in AI/ML is reflected in his projects and certifications, demonstrating his ability to apply these technologies to solve complex problems.',
        followUpQuestions: [
          "Tell me about his Python for Data Science certification",
          "What AI/ML projects has he worked on?",
          "Tell me about his programming skills"
        ]
      };
    }
    
    // Thank you
    else if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return {
        response: 'You\'re welcome! Feel free to ask if you have any more questions about Arun\'s skills, projects, education, or achievements. I\'m here to help!',
        followUpQuestions: [
          "Tell me about his skills",
          "What projects has he worked on?",
          "Tell me about his education"
        ]
      };
    } 
    
    // Help
    else if (lowerInput.includes('help') || lowerInput.includes('what can i ask')) {
      return {
        response: 'You can ask me about:\n\n1. Skills & Expertise\n2. Projects & Work\n3. Education & Certifications\n4. Achievements & Awards\n5. Contact Information\n6. Hackathons & Competitions\n7. NPTEL Certifications\n8. Programming Languages\n9. Experience\n10. GitHub\n11. Flutter Development\n12. UI/UX Design\n13. AI/ML\n\nFeel free to ask any question about these topics!',
        followUpQuestions: [
          "Tell me about his skills",
          "What projects has he worked on?",
          "Tell me about his education"
        ]
      };
    } 
    
    // Publications
    else if (lowerInput.includes('publication') || lowerInput.includes('paper') || lowerInput.includes('research')) {
      return {
        response: 'Arun has contributed to several research publications:\n\n1. "Recycling as a Service: IOT enabled smart waste management system with machine learning"\n   - Published in IEEE\n   - Date: April 10, 2024\n   - Focuses on IoT and ML for waste management\n\n2. "HELMET DETECTION IN TWO WHEELER USING IMAGE PROCESSING"\n   - IEEE Conference\n   - Status: Going to publish\n   - Focuses on image processing for road safety\n\nThese publications demonstrate his research capabilities and contributions to technological innovation.',
        followUpQuestions: [
          "Tell me about the waste management paper",
          "What is the helmet detection system about?",
          "Tell me about his research interests"
        ]
      };
    }
    
    // Default response
    else {
      return {
        response: 'I\'m not sure about that specific topic. You can ask me about Arun\'s:\n\n- Skills and expertise\n- Projects and work experience\n- Education and certifications\n- Achievements and awards\n- Contact information\n- Hackathon participation\n- Programming languages\n- GitHub contributions\n- Flutter development\n- UI/UX design\n- AI/ML experience\n\nWhat would you like to know?',
        followUpQuestions: [
          "Tell me about his skills",
          "What projects has he worked on?",
          "Tell me about his education"
        ]
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setIsLoading(true);
    setShowSuggestions(false);

    // Simulate bot response
    setTimeout(() => {
      const { response, followUpQuestions } = getBotResponse(input);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      setIsLoading(false);
      setSuggestedQuestions(followUpQuestions);
      setShowSuggestions(true);
    }, 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setIsLoading(true);
    setShowSuggestions(false);

    // Simulate bot response
    setTimeout(() => {
      const { response, followUpQuestions } = getBotResponse(question);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      setIsLoading(false);
      setSuggestedQuestions(followUpQuestions);
      setShowSuggestions(true);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(true)}
      >
        <FaRobot className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-gray-800 rounded-xl shadow-xl overflow-hidden z-50 border-t-4 border-blue-500"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-10 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <FaRobot className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[380px] overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-r from-green-500 to-teal-500' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-500'
                        }`}>
                          {message.sender === 'user' ? <FaUser className="w-4 h-4 text-white" /> : <FaRobot className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                      <div className={`rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white' 
                          : 'bg-gray-700 text-gray-200'
                      }`}>
                        <p>{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Suggested Questions */}
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <p className="text-gray-400 text-sm mb-2">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded-lg transition-colors"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start">
                    <div className="mr-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
                        <FaRobot className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3">
                      <div className="flex space-x-2">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading || !input.trim()}
                  className={`p-2 rounded-lg ${
                    isLoading || !input.trim()
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                  }`}
                >
                  {isLoading ? (
                    <FaSpinner className="w-5 h-5 text-white animate-spin" />
                  ) : (
                    <FaPaperPlane className="w-5 h-5 text-white" />
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 