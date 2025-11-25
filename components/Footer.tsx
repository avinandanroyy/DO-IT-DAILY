    import React from 'react';

    const Footer: React.FC = () => {
      return (
        <footer className="w-full bg-white border-t border-black py-12">
          <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-xl font-bold tracking-tighter uppercase">
              do-it-daily.
            </div>

            

            <div className="text-xs text-gray-400">
              © {new Date().getFullYear()} All Rights Reserved.
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;