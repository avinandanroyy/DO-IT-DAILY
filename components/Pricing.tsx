import React from 'react';
import { Check } from 'lucide-react';
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
    <section id="pricing" className="w-full py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          <div className="md:pr-12 md:sticky md:top-24">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
              Skin in<br/> the Game
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We charge money because if you don't pay, you won't pay attention. 
              The investment is part of the commitment mechanism.
            </p>
            <div className="h-px w-full bg-black mb-4"></div>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
              [ 30-Day Money Back Guarantee ]
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {tiers.map((tier) => (
              <div 
                key={tier.name} 
                className={`relative p-8 border ${tier.isPopular ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-black'}`}
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-wide">{tier.name}</h3>
                  <span className="text-3xl font-bold font-mono">{tier.price}<span className="text-sm font-sans font-normal opacity-60">/mo</span></span>
                </div>
                <p className={`text-sm mb-8 ${tier.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>{tier.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 text-sm font-bold uppercase tracking-widest border transition-all duration-300
                  ${tier.isPopular 
                    ? 'bg-white text-black border-white hover:bg-gray-200' 
                    : 'bg-black text-white border-black hover:bg-gray-800'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;