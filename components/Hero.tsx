import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 mx-auto flex flex-col items-center justify-center min-h-screen py-24">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black border border-yellow-400 rounded-full text-sm font-medium text-yellow-400">
            <Sparkles className="w-4 h-4" />
            <span>The anti-procrastination community</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.1] text-white">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block"
            >
              Do It
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="block text-yellow-400"
            >
              Daily
            </motion.span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center max-w-3xl mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-300">
            Master consistency through ruthless accountability and minimalist tracking.
            <br />
            <span className="text-gray-400">Real-time progress, real results.</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/60 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Streak
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-yellow-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-yellow-400/50 text-white hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 md:gap-16 text-center"
        >
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              10k+
            </motion.div>
            <div className="text-sm text-gray-400">Active Streaks</div>
          </div>
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              500+
            </motion.div>
            <div className="text-sm text-gray-400">Daily Habits</div>
          </div>
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              99%
            </motion.div>
            <div className="text-sm text-gray-400">Success Rate</div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm font-medium flex flex-col items-center gap-2"
          >
            <span>Scroll to discover</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;