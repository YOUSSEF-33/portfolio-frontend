import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:yatef57@gmail.com"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} className="mr-2" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/youssef-atef-120907247/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/YOUSSEF-33"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={24} className="mr-2" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;