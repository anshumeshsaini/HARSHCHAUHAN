import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'E-Commerce Fashion Brand',
    industry: 'Fashion & Lifestyle',
    challenge: 'Struggling with high CAC and low conversion rates on paid ads.',
    solution: 'Rebuilt funnel architecture, implemented dynamic retargeting, and optimized creative testing framework.',
    results: [
      { metric: 'ROAS', value: '+320%', before: '1.2x', after: '5.0x' },
      { metric: 'CPA', value: '-38%', before: '₹850', after: '₹527' },
      { metric: 'Conversion Rate', value: '+4.8x', before: '0.8%', after: '3.8%' },
    ],
  },
  {
    id: 2,
    client: 'SaaS Productivity Tool',
    industry: 'Technology',
    challenge: 'Low trial-to-paid conversion with expensive acquisition costs.',
    solution: 'Implemented cohort-based onboarding sequences and intent-based retargeting.',
    results: [
      { metric: 'Trial Conversions', value: '+156%', before: '8%', after: '20.5%' },
      { metric: 'CAC', value: '-45%', before: '$120', after: '$66' },
      { metric: 'LTV', value: '+89%', before: '$340', after: '$642' },
    ],
  },
  {
    id: 3,
    client: 'D2C Health Supplements',
    industry: 'Health & Wellness',
    challenge: 'Saturated market with high competition and trust issues.',
    solution: 'UGC-driven creative strategy, influencer amplification, and subscription funnel optimization.',
    results: [
      { metric: 'Revenue', value: '+280%', before: '₹12L/mo', after: '₹45.6L/mo' },
      { metric: 'Subscriber Base', value: '+5.2x', before: '340', after: '1,768' },
      { metric: 'Ad Spend Efficiency', value: '+67%', before: '2.1x', after: '3.5x' },
    ],
  },
];

const CaseStudies = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Case <span className="text-cyan-500">Studies</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Real results from real brands. Here's how I've helped businesses scale.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedCase(study)}
              className="group relative bg-gray-900 rounded-2xl p-8 cursor-pointer overflow-hidden border border-gray-700 hover:border-cyan-500 transition-colors"
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-cyan-500" />
              </div>
              
              <p className="text-sm text-cyan-400 font-medium mb-2">{study.industry}</p>
              <h3 className="text-xl font-semibold mb-4">{study.client}</h3>
              
              <div className="space-y-3 pt-4 border-t border-gray-700">
                {study.results.slice(0, 2).map((result) => (
                  <div key={result.metric} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{result.metric}</span>
                    <span className="text-cyan-500 text-lg font-semibold">{result.value}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-gray-400 mt-4 group-hover:text-white transition-colors">
                Click to view full case study →
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto text-white"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm text-cyan-400 font-medium mb-2">{selectedCase.industry}</p>
                  <h3 className="text-2xl md:text-3xl font-bold">{selectedCase.client}</h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Challenge</h4>
                  <p>{selectedCase.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Solution</h4>
                  <p>{selectedCase.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedCase.results.map((result) => (
                      <div key={result.metric} className="text-center p-4 rounded-xl bg-gray-800">
                        <div className="text-2xl md:text-3xl text-cyan-500 font-semibold">{result.value}</div>
                        <div className="text-xs text-gray-400 mt-1">{result.metric}</div>
                        <div className="text-xs text-gray-400 mt-2">
                          {result.before} → {result.after}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
