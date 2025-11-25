import React from 'react';
import { Target, Users, Zap, BarChart3, Lock, Repeat } from 'lucide-react';

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Binary Tracking",
    description: "Did you do it? Yes or No. No partial credit. No excuses. Our tracking engine is built on absolute truth.",
    icon: <Target className="w-8 h-8" />
  },
  {
    id: 2,
    title: "The Arena",
    description: "A public leaderboard where anonymity is optional but shame is real. Compete with others to keep your streak alive.",
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Deep Work Pods",
    description: "Audio-only channels designed for silent co-working. Enter the pod, mute your mic, and grind.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Visual Commit Graph",
    description: "Your consistency visualized. See your year in pixels. Fill the grid. Don't break the chain.",
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    id: 5,
    title: "Stakes & Pledges",
    description: "Put money on the line. If you miss a day, your pledge goes to a charity you hate. Radical motivation.",
    icon: <Lock className="w-8 h-8" />
  },
  {
    id: 6,
    title: "Ritual Design",
    description: "Tools to stack habits. Build routines that trigger automatically. Turn willpower into muscle memory.",
    icon: <Repeat className="w-8 h-8" />
  }
];

const Features: React.FC = () => {
  return (
    <section className="w-full py-24 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Systematic <br/> Excellence
          </h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group border-r border-b border-gray-200 p-8 hover:bg-gray-50 transition-colors duration-300 min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 opacity-80 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                [ Explore Feature ]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;