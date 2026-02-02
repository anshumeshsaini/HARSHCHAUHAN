import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const keywords = ['GROWTH', 'ROAS', 'SEO', 'FUNNELS', 'DATA', 'SCALE', 'CONVERT'];

const FloatingKeywords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static floating keywords at various positions */}
      <motion.span
        className="absolute top-[15%] left-[10%] text-sm font-display text-muted-foreground/30 tracking-widest"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        GROWTH
      </motion.span>
      
      <motion.span
        className="absolute top-[25%] right-[15%] text-sm font-display text-muted-foreground/20 tracking-widest"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        ROAS
      </motion.span>
      
      <motion.span
        className="absolute bottom-[30%] left-[20%] text-sm font-display text-muted-foreground/25 tracking-widest"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        FUNNELS
      </motion.span>
      
      <motion.span
        className="absolute top-[60%] right-[10%] text-sm font-display text-muted-foreground/20 tracking-widest"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        SEO
      </motion.span>
      
      <motion.span
        className="absolute bottom-[20%] right-[25%] text-sm font-display text-muted-foreground/30 tracking-widest"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        DATA
      </motion.span>

      {/* Center rotating keyword */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-48">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-display font-bold text-accent/20 tracking-tight"
          >
            {keywords[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingKeywords;
