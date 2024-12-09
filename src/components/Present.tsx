import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github } from 'lucide-react';


const Present: React.FC  = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex items-center">
    <div className="container mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-2">Youssef Atef</h1>
        <p className="text-2xl md:text-3xl mb-4">Front-End Developer</p>
        <p className="mb-8 text-lg md:text-xl">
          Passionate about building responsive and high-performance web applications using modern technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="/cv.pdf"  // Replace with the actual link to your CV
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-white text-blue-600 rounded shadow-lg hover:bg-gray-200 hover:text-blue transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Download size={20} className="mr-1" />
            Download CV
          </motion.a>
          <motion.a
            href="https://github.com/YOUSSEF-33" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border border-white text-white rounded shadow-lg hover:bg-white hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Github size={20} className="mr-1" />
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </div>
  </header>
  )
}

export default Present