import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import FloatingKeywords from './FloatingKeywords';
import GradientOrb from './GradientOrb';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture section-dark">
      <GradientOrb />
      <FloatingKeywords />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-medium text-accent tracking-widest uppercase mb-6"
          >
            Digital Marketing Expert
          </motion.p>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-hero mb-6"
          >
            I Design Growth Systems
            <br />
            <span className="text-gradient-cyan">That Scale Brands.</span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-body-large max-w-2xl mx-auto mb-10"
          >
            Performance Marketer • Growth Strategist • Funnel Architect
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton 
              href="https://wa.me/917088717909"
              variant="primary"
            >
              Chat on WhatsApp
            </MagneticButton>
            <MagneticButton 
              href="#work"
              variant="outline"
            >
              View Case Studies
            </MagneticButton>
          </motion.div>
        </div>
      </div>
      
    
    </section>
  );
};

export default Hero;
