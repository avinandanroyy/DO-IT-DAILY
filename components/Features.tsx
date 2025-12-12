import React from 'react';
import { Target, Users, Zap, BarChart3, Lock, Repeat } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Binary Tracking",
    description: "Did you do it? Yes or No. No partial credit. No excuses. Our tracking engine is built on absolute truth.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "The Arena",
    description: "A public leaderboard where anonymity is optional but shame is real. Compete with others to keep your streak alive.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Deep Work Pods",
    description: "Audio-only channels designed for silent co-working. Enter the pod, mute your mic, and grind.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: 4,
    title: "Visual Commit Graph",
    description: "Your consistency visualized. See your year in pixels. Fill the grid. Don't break the chain.",
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Stakes & Pledges",
    description: "Put money on the line. If you miss a day, your pledge goes to a charity you hate. Radical motivation.",
    icon: <Lock className="w-8 h-8" />,
    gradient: "from-red-500 to-rose-500"
  },
  {
    id: 6,
    title: "Ritual Design",
    description: "Tools to stack habits. Build routines that trigger automatically. Turn willpower into muscle memory.",
    icon: <Repeat className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500"
  }
];

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-yellow-400">
              Systematic
            </span>
            <br />
            <span className="text-white">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to build unbreakable habits and maintain consistency
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-black rounded-2xl p-8 border border-yellow-400/20 hover:border-yellow-400 transition-all duration-300 overflow-hidden"
            >
              {/* Icon */}
              <motion.div
                className="mb-6 w-16 h-16 rounded-xl bg-yellow-400 p-4 text-black flex items-center justify-center shadow-lg shadow-yellow-400/20"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>

              {/* Learn more link */}
              <motion.div
                className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-yellow-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Learn more</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
