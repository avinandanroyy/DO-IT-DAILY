import React from 'react';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Testimonials from './components/Testimonial.tsx';
import Pricing from './components/Pricing.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Navigation could go here, but keeping it minimal as requested */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
        <div className="text-white text-xl font-bold tracking-tighter uppercase pointer-events-auto cursor-pointer">
          do-it-daily.
        </div>
        <div className="pointer-events-auto">
           <a href="#pricing" className="text-white text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
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