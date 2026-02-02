import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Target, Search, BarChart3, Palette, RotateCw } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Meta, Google, and beyond—paid campaigns that print money, not just impressions.',
  },
  {
    icon: Target,
    title: 'Funnel Optimization',
    description: 'Every click should count. I engineer conversion paths that turn browsers into buyers.',
  },
  {
    icon: Search,
    title: 'SEO & Growth Strategy',
    description: 'Organic traffic that compounds. Long-term visibility, sustainable growth.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Tracking',
    description: "If you can't measure it, you can't improve it. Full-stack attribution setup.",
  },
  {
    icon: Palette,
    title: 'Brand Positioning',
    description: 'Stand out in crowded markets. Strategic messaging that resonates and converts.',
  },
  {
    icon: RotateCw,
    title: 'Automation & Retargeting',
    description: 'Smart sequences that nurture leads while you sleep. Scale without burnout.',
  },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-cyan-500">Do</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Full-stack digital marketing expertise, from strategy to execution.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 cursor-pointer shadow-lg transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <service.icon className="w-6 h-6 text-cyan-500" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white underline-animate inline-block">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
