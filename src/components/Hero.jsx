import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]" id="home">
      {/* Background Image with Slow Zoom Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>

      {/* Hero Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-[#d4af37] text-xs md:text-sm uppercase tracking-[0.3em] font-medium flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
              Bespoke Architecture & Interiors
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="font-elegant text-5xl md:text-7xl lg:text-8xl text-[#f5f5dc] leading-tight mb-6">
            Crafting Timeless <br className="hidden md:block" />
            <span className="font-cursive-light text-[#d4af37] lowercase text-6xl md:text-8xl lg:text-9xl relative top-2 md:top-4">elegance</span> in Every Space.
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-[#f5f5dc]/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Transforming ordinary spaces into extraordinary masterpieces. Based in Varanasi, Home Decor Enterprises blends modern minimalism with classic luxury to build your dream sanctuary.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#portfolio"
              className="bg-[#d4af37] text-[#0a0a0a] px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-[#f5f5dc] transition-colors duration-300 flex items-center gap-2 group"
            >
              Explore Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#services"
              className="border border-[#f5f5dc]/30 text-[#f5f5dc] px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[#f5f5dc]/50 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#d4af37]" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;