import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonial';
import Pricing from './components/Pricing';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-black/5 transition-all duration-300">
        <div 
          className="text-black text-xl font-bold tracking-tighter uppercase cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          do-it-daily.
        </div>
        <div>
           <a href="#pricing" className="text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white px-4 py-2 border border-black transition-colors duration-300">
            Join Now
           </a>
        </div>
      </nav>

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