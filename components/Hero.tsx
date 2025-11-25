import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import WaveShader from './WaveShader';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-50 flex items-center justify-center">
      {/* Background Shader */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
        <WaveShader />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 mx-auto flex flex-col items-start justify-center h-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="overflow-hidden mb-2">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-black uppercase">
              Do It
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-black uppercase">
              Daily.
            </h1>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between w-full mt-12 border-t border-black pt-6"
        >
          <div className="max-w-md">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              The anti-procrastination community. <br/>
              Master consistency through ruthless accountability and minimalist tracking.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <button className="group relative overflow-hidden bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300 border border-black">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Streak <ArrowDownRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-6 md:left-12 text-xs font-mono uppercase tracking-widest opacity-50 hidden md:block">
        [ Lat: 28.5355° N ] [ Lon: 77.3910° E]
      </div>
      <div className="absolute bottom-12 right-6 md:right-12 text-xs font-mono uppercase tracking-widest opacity-50 hidden md:block">
        Scroll for Manifest
      </div>
    </section>
  );
};

export default Hero;