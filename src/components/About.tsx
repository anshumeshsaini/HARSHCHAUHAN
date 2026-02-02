import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img from '../assets/harsh.jpeg';

const stats = [
  { value: '120+', label: 'Brands Scaled' },
  { value: '₹5Cr+', label: 'Ad Spend Managed' },
  { value: '4.5x', label: 'Avg ROAS' },
  { value: '6+', label: 'Years Experience' },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={img}
                alt="Harsh Chauhan"
                className="w-full h-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Name */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">
                  Harsh Chauhan
                </h3>
                <p className="text-cyan-400 mt-1">
                  Digital Marketing Expert
                </p>
              </div>
            </div>

            {/* Accent glow */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-28 h-28 bg-cyan-500/20 blur-2xl rounded-full"
            />
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Turning Data Into
              <span className="text-cyan-400"> Decisions</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                I’m not just a marketer — I’m a growth architect. For over six
                years, I’ve helped brands cut through digital noise and turn
                clicks into revenue.
              </p>

              <p>
                My approach is simple: data-first, creative-led, and
                conversion-obsessed. Every campaign is built to scale — not
                impress vanity dashboards.
              </p>

              <p>
                From startups to enterprise brands, I’ve managed ₹5Cr+ in ad
                spend while consistently delivering 4.5x+ ROAS.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
