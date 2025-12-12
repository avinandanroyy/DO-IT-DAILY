import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Lurker",
    price: "$0",
    description: "For those watching from the sidelines.",
    features: ["Access to public boards", "Read-only case studies", "Weekly newsletter", "No accountability features"],
    isPopular: false
  },
  {
    name: "Doer",
    price: "$12",
    description: "For those ready to commit to the craft.",
    features: ["Unlimited habit tracking", "Private Deep Work Pods", "Full Accountability Engine", "Stakes & Pledges Access", "API Access"],
    isPopular: true
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black border border-yellow-400 rounded-full text-sm font-medium text-yellow-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple, transparent pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-yellow-400">
              Skin in
            </span>
            <br />
            <span className="text-white">the Game</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We charge money because if you don't pay, you won't pay attention. 
            The investment is part of the commitment mechanism.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-yellow-400 text-black border-yellow-400 shadow-2xl shadow-yellow-400/50'
                  : 'bg-black text-white border-yellow-400/20 hover:border-yellow-400'
              }`}
            >
              {/* Popular badge */}
              {tier.isPopular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-black text-yellow-400 border border-yellow-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-3xl font-bold">{tier.name}</h3>
                  <div>
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-lg opacity-70">/mo</span>
                  </div>
                </div>
                
                <p className={`text-base mb-8 ${tier.isPopular ? 'text-black/80' : 'text-gray-300'}`}>
                  {tier.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        className={`mt-0.5 shrink-0 ${
                          tier.isPopular ? 'text-black' : 'text-yellow-400'
                        }`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                      <span className={`text-sm ${tier.isPopular ? 'text-black' : 'text-gray-300'}`}>{feat}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    tier.isPopular
                      ? 'bg-black text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-black shadow-lg'
                      : 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/50'
                  }`}
                >
                  {tier.isPopular ? 'Get Started' : 'Select Plan'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black rounded-full border border-yellow-400 shadow-sm">
            <Check className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-white">
              30-Day Money Back Guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;