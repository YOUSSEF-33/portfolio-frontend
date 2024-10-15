import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, GitBranch, Globe, Layout, Server } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', icon: Layout },
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'React', icon: Globe },
  { name: 'Next.js', icon: Server },
  { name: 'Redux', icon: Database },
  { name: 'Git', icon: GitBranch },
];

const Skills: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover-lift"
            >
              <skill.icon size={40} className="text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;