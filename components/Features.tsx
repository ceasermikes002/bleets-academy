import { motion } from 'framer-motion';
import React from 'react';
import { AnimatedText } from './ui/animated-text';
import { featuresData } from '../data/featuresData';

const Features = () => {
  return (
    <div>
      <section id="features" className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-900/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
          <AnimatedText text="Why Choose Bleets Academy?" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-xl p-6 hover:from-purple-800/50 hover:to-cyan-800/50 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">{feature.title}</h3>
              <p className="text-cyan-100/80">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
