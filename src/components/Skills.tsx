import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'Meta Ads', level: 95 },
  { name: 'Google Ads', level: 90 },
  { name: 'SEO', level: 85 },
  { name: 'CRO', level: 92 },
  { name: 'Analytics', level: 88 },
  { name: 'Automation', level: 85 },
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-black text-white"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mastery across the digital marketing stack.
          </p>
        </motion.div>

        {/* Skill Bars */}
        <div ref={ref} className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-medium text-white">
                  {skill.name}
                </span>
                <span className="text-cyan-400 font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.1,
                    ease: 'easeOut',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-16"
        >
          {[
            'Shopify',
            'WordPress',
            'Klaviyo',
            'HubSpot',
            'Zapier',
            'Hotjar',
            'Mixpanel',
            'Segment',
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
