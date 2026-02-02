import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MagneticButton from './MagneticButton';

const CTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-sand" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium mb-4"
            >
              Ready to scale?
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-section-title md:text-5xl lg:text-6xl mb-6"
            >
              Let's Build Your Next
              <br />
              <span className="text-accent">Growth Story.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-body-large max-w-2xl mx-auto mb-10"
            >
              Whether you're starting fresh or scaling up, I'm here to help you 
              build marketing systems that actually work.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <MagneticButton
                href="https://wa.me/917088717909"
                variant="primary"
              >
                WhatsApp Me
              </MagneticButton>
              <MagneticButton
                href="mailto:harshchauhan.official7@gmail.com"
                variant="outline"
              >
                Book Strategy Call
              </MagneticButton>
            </motion.div>
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 right-10 w-40 h-40 border border-accent/10 rounded-full hidden lg:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 left-10 w-60 h-60 border border-accent/5 rounded-full hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
