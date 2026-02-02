import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, RotateCw, TrendingUp } from 'lucide-react';

const stages = [
  {
    id: 'traffic',
    label: 'Traffic',
    icon: Zap,
    title: 'Attract The Right Eyes',
    description: 'Targeted campaigns across Meta, Google, and emerging platforms. I find your audience where they actually spend time.',
    details: ['Platform Selection', 'Audience Research', 'Creative Strategy', 'Budget Allocation'],
  },
  {
    id: 'conversion',
    label: 'Conversion',
    icon: ArrowRight,
    title: 'Turn Clicks Into Customers',
    description: 'Optimized landing pages, compelling offers, and frictionless checkout flows. Every touchpoint engineered to convert.',
    details: ['Funnel Architecture', 'A/B Testing', 'CRO Optimization', 'Offer Strategy'],
  },
  {
    id: 'retention',
    label: 'Retention',
    icon: RotateCw,
    title: 'Keep Them Coming Back',
    description: 'Email sequences, loyalty programs, and personalized retargeting. The real profit is in repeat customers.',
    details: ['Email Automation', 'Loyalty Systems', 'Personalization', 'Win-Back Campaigns'],
  },
  {
    id: 'scale',
    label: 'Scale',
    icon: TrendingUp,
    title: 'Multiply What Works',
    description: 'Once the system proves ROI, we pour fuel on the fire. Systematic scaling with maintained efficiency.',
    details: ['Performance Analysis', 'Budget Scaling', 'Channel Expansion', 'Team Processes'],
  },
];

const InteractiveGrowth = () => {
  const [activeStage, setActiveStage] = useState(stages[0]);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How I Build <span className="text-cyan-500">Growth</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A systematic approach to scaling brands. Click to explore each stage.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Toggle Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {stages.map((stage, index) => (
              <motion.button
                key={stage.id}
                onClick={() => setActiveStage(stage)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`group flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                  activeStage.id === stage.id
                    ? 'bg-cyan-500 text-black shadow-lg'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  activeStage.id === stage.id ? 'bg-white/20' : 'bg-cyan-500/20'
                }`}>
                  <stage.icon className={`w-6 h-6 ${
                    activeStage.id === stage.id ? 'text-white' : 'text-cyan-500'
                  }`} />
                </div>
                
                <div>
                  <span className={`text-xs uppercase tracking-wider ${
                    activeStage.id === stage.id ? 'text-white/70' : 'text-gray-400'
                  }`}>
                    Stage {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{stage.label}</h3>
                </div>
                
                <ArrowRight className={`w-5 h-5 ml-auto transition-transform ${
                  activeStage.id === stage.id ? 'translate-x-1 text-white' : 'opacity-0 group-hover:opacity-50 text-gray-400'
                }`} />
              </motion.button>
            ))}
          </motion.div>
          
          {/* Content Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-3xl p-8 md:p-12"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <activeStage.icon className="w-8 h-8 text-cyan-500" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  {activeStage.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {activeStage.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {activeStage.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-white"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGrowth;
