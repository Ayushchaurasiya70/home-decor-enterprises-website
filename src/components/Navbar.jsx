import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated Business WhatsApp Number for Home Decor Enterprises
  const whatsappNumber = "919128884990";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Home%20Decor%20Enterprises,%20I%20want%20to%20discuss%20an%20interior%20project.`;

  const navLinks = [
    { title: 'Home', path: '#' },
    { title: 'About Us', path: '#about' },
    { title: 'Services', path: '#services' },
    { title: 'Portfolio', path: '#portfolio' },
    { title: 'Reviews', path: '#reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg shadow-black/50 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Section with Halka Cursive Font */}
          <a href="#" className="flex flex-col">
            <span className="font-cursive-light text-2xl md:text-3xl text-[#d4af37] tracking-wide leading-none">
              Home Decor
            </span>
            <span className="font-elegant text-[9px] md:text-[10px] text-[#f5f5dc] tracking-[0.25em] uppercase opacity-80 mt-1">
              Enterprises & Interiors
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.path}
                className="text-[#f5f5dc] text-xs uppercase tracking-[0.2em] font-light relative group transition-colors duration-300 hover:text-[#d4af37]"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Functional WhatsApp CTA Button */}
          <div className="hidden md:block">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#d4af37] text-[#d4af37] px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 shadow-sm hover:shadow-[#d4af37]/20"
            >
              <MessageCircle size={16} />
              <span>Let's Chat</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#f5f5dc] hover:text-[#d4af37] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center items-center h-screen w-screen"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.linkUrls || navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={index}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#f5f5dc] text-2xl font-elegant hover:text-[#d4af37] transition-colors tracking-widest"
                >
                  {link.title}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase shadow-lg shadow-[#d4af37]/20"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;