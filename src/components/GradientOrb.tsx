import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GradientOrb = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 100 };
  const orbX = useSpring(mouseX, springConfig);
  const orbY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-0"
      style={{
        x: orbX,
        y: orbY,
        width: 400,
        height: 400,
      }}
    >
      <div 
        className="w-full h-full rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, hsl(189 94% 55% / 0.5) 0%, hsl(189 94% 43% / 0.2) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </motion.div>
  );
};

export default GradientOrb;
