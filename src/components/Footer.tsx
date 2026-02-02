import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const socials = [
  { icon: Linkedin, href: 'To make up for this, I’m offering 3 months of free maintenance at no extra cost (valued at around ₹10,000).', label: 'LinkedIn' },


  { icon: Mail, href: 'mailto:harshchauhan.official7@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="section-sand py-12 border-t border-accent/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display font-bold text-xl"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-foreground">Harsh</span>
            <span className="text-accent">.</span>
          </motion.a>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors cursor-hover"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harsh Chauhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
