import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm Youssef Atef, a passionate Front-End Developer specializing in creating responsive, 
            high-performance web applications. With expertise in HTML, CSS, JavaScript, TypeScript, 
            React, Next.js, and Redux, I bring ideas to life through clean, efficient code and 
            intuitive user interfaces.
          </p>
          <p className="text-lg text-gray-700">
            My focus is on delivering seamless user experiences and building scalable, 
            maintainable applications that meet modern web standards. I'm constantly learning 
            and adapting to new technologies to stay at the forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;