import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Scroll animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] opacity-[0.02] blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Images Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Main Large Image */}
            <motion.div variants={fadeInUp} className="relative z-10 w-full md:w-10/12 aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern Interior Design" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Golden Overlay Border */}
              <div className="absolute inset-0 border border-[#d4af37]/30 m-4 pointer-events-none"></div>
            </motion.div>

            {/* Overlapping Small Image */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } }
              }}
              className="absolute -bottom-10 -right-4 md:right-0 z-20 w-3/5 md:w-1/2 aspect-square border-4 border-[#0a0a0a] rounded-sm overflow-hidden shadow-2xl shadow-black"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" 
                alt="Luxury Details" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-medium">
                Who We Are
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-elegant text-4xl md:text-5xl lg:text-6xl text-[#f5f5dc] leading-tight mb-6">
              Redefining <span className="font-cursive-light text-[#d4af37] text-5xl md:text-6xl lg:text-7xl lowercase">luxury</span> <br /> in Varanasi.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-[#f5f5dc]/70 text-sm md:text-base font-light leading-relaxed mb-8">
              At <strong className="text-[#f5f5dc] font-medium">Kaashian Interiors & Construction</strong>, we don't just build spaces; we craft experiences. From commercial marvels to cozy residential sanctuaries, our approach combines timeless aesthetics with modern functionality. 
              <br /><br />
              Rooted in the spiritual heart of India, Varanasi, we bring a unique blend of heritage and contemporary design to every project, ensuring your space is a true reflection of your personality and lifestyle.
            </motion.p>

            {/* Stats/Highlight Boxes */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 pt-6 border-t border-[#f5f5dc]/10">
              <div>
                <h4 className="font-elegant text-4xl text-[#d4af37] mb-1">100+</h4>
                <p className="text-[#f5f5dc]/60 text-xs uppercase tracking-widest">Projects Delivered</p>
              </div>
              <div>
                <h4 className="font-elegant text-4xl text-[#d4af37] mb-1">4.6★</h4>
                <p className="text-[#f5f5dc]/60 text-xs uppercase tracking-widest">Client Rating</p>
              </div>
            </motion.div>

            {/* Signature / Founder Note */}
            <motion.div variants={fadeInUp} className="mt-10">
              <p className="font-cursive-light text-2xl text-[#f5f5dc]/80">Kaashian Team</p>
              <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.2em] mt-1">Best Architects & Designers</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;