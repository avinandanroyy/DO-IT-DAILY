import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 aspect-square relative"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=800&fit=crop&q=80&auto=format" 
                alt="The Architect - Tall Skyscraper" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="font-mono text-xs uppercase tracking-widest mb-2 text-yellow-400">
                  [ The Architect ]
                </div>
                <div className="text-2xl font-bold">Building the Future</div>
              </div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">Why I Built This</span>
              <br />
              
            </h2>
            
            <div className="space-y-4 text-lg text-gray-300">
              <p>
                I realized that <span className="font-bold text-white">willpower is a myth</span>. Environment is everything.
              </p>
              <p>
                <span className="font-bold text-yellow-400">
                  Do It Daily
                </span> isn't just an app. It's the digital environment I built to force myself to succeed. It's sharp, unforgiving, and effective. I built it for myself, but you can use it too.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              className="mt-8 pt-8 border-t border-yellow-400/20 flex items-center gap-4 bg-black rounded-xl p-6"
            >
              <div className="h-16 w-16 bg-yellow-400 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg shadow-yellow-400/20">
                AR
              </div>
              <div>
                <div className="font-bold text-lg text-white">Avinandan Roy</div>
                <div className="text-sm text-gray-400 font-medium">Developer & Designer</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;