import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonial';
import Pricing from './components/Pricing';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <div className="w-full min-h-screen bg-white text-black selection:bg-yellow-400 selection:text-black">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-yellow-400/20'
            : 'bg-transparent'
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-white-400">
            Do It Daily
          </span>
          
        </motion.div>
        
        <div className="flex items-center gap-4">
          <a
            href="#features"
            className="hidden md:block text-gray-300 text-sm font-medium hover:text-yellow-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hidden md:block text-gray-300 text-sm font-medium hover:text-yellow-400 transition-colors"
          >
            Pricing
          </a>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black text-sm font-semibold px-6 py-2 rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
          >
            Get Started
          </motion.a>
        </div>
      </motion.nav>

      <main className="flex flex-col w-full">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;
