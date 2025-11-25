import React from 'react';

const About: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 aspect-square relative grayscale contrast-125">
             {/* Placeholder for creator image - using a sharp architectural or abstract image to fit theme if real face not desired, but prompt says creator */}
             <img 
               src="https://picsum.photos/800/800?grayscale" 
               alt="The Creator" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply"></div>
             <div className="absolute bottom-6 left-6 text-white font-mono text-xs uppercase tracking-widest">
                [ The Architect ]
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">
              Why I Built This
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                I realized that <span className="font-bold text-black">willpower is a myth</span>. Environment is everything.
              </p>
              <p>
                <b>do-it-daily</b> isn't just an app. It's the digital environment I built to force myself to succeed. It's sharp, unforgiving, and effective. I built it for myself, but you can use it too.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-300 flex items-center gap-4">
               <div className="h-12 w-12 bg-black text-white flex items-center justify-center font-bold text-xl">
                 AR
               </div>
               <div>
                 <div className="font-bold uppercase tracking-wider text-sm">Avinandan Roy</div>
                 <div className="text-xs text-gray-500 font-mono">Developer & Designer</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;