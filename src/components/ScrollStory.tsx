import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stories = [
  "Traffic is easy.",
  "Attention is hard.",
  "Trust is everything.",
  "Growth is engineered."
];

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] section-dark">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            {stories.map((story, index) => {
              const start = index / stories.length;
              const end = (index + 1) / stories.length;
              
              return (
                <StoryText
                  key={index}
                  text={story}
                  scrollProgress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StoryTextProps {
  text: string;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
}

const StoryText = ({ text, scrollProgress, start, end }: StoryTextProps) => {
  const opacity = useTransform(
    scrollProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollProgress,
    [start, start + 0.05, end - 0.05, end],
    [50, 0, 0, -50]
  );
  
  const scale = useTransform(
    scrollProgress,
    [start, start + 0.05, end - 0.05, end],
    [0.9, 1, 1, 0.9]
  );

  return (
    <motion.h2
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center text-section-title md:text-5xl lg:text-6xl font-display font-semibold"
    >
      {text}
    </motion.h2>
  );
};

export default ScrollStory;
