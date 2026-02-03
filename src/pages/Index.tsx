import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollStory from '@/components/ScrollStory';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import {InteractiveGrowth} from '@/components/InteractiveGrowth';
import Skills from '@/components/Skills';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <ScrollStory />
        <About />
        <Services />
        <CaseStudies />
        <InteractiveGrowth />
        <Skills />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
