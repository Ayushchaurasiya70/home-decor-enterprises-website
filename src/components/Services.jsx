import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, HardHat, ArrowUpRight, Check } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Residential Interiors',
    category: 'Villas & Apartments',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
    description: 'Bespoke home interiors crafted for modern living. We combine ergonomic comfort with high-end luxury materials to turn houses into sanctuaries.',
    highlights: ['Luxury Living Rooms', 'Modular Kitchens', 'Custom Lighting Design', 'Master Suites']
  },
  {
    id: '02',
    title: 'Commercial Spaces',
    category: 'Offices & Hospitality',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    description: 'Sophisticated commercial design that elevates brand prestige. Designed to optimize workflow while leaving a lasting impression on visitors.',
    highlights: ['Corporate Offices', 'Retail Showrooms', 'Luxury Cafes & Restaurants', 'Boutique Spaces']
  },
  {
    id: '03',
    title: 'Architectural & General',
    category: 'Turnkey Construction',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description: 'Complete architectural design, 3D spatial planning, and turnkey construction management executed with precision and premium craftsmanship.',
    highlights: ['3D Elevation & Layouts', 'Full Turnkey Construction', 'Structural Renovation', 'Material Sourcing']
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // WhatsApp Redirect URL
  const whatsappNumber = "919560055485";

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Dynamic Background Image Blur Switcher */}
      <div className="absolute inset-0 z-0 opacity-15 transition-all duration-700 pointer-events-none scale-105">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeService}
            src={services[activeService].image}
            alt="Service Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover filter blur-md"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-medium">
                Our Expertise
              </span>
            </div>
            <h2 className="font-elegant text-4xl md:text-6xl text-[#f5f5dc]">
              Bespoke Services <span className="font-cursive-light text-[#d4af37] text-5xl md:text-7xl lowercase">& Solutions</span>
            </h2>
          </div>
          <p className="text-[#f5f5dc]/60 text-sm max-w-sm font-light mt-4 md:mt-0">
            Tailored architecture and interior craftsmanship suited for high-end residential and commercial developments.
          </p>
        </div>

        {/* Interactive Services Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative group rounded-xl p-8 transition-all duration-500 cursor-pointer border flex flex-col justify-between ${
                  isActive 
                    ? 'bg-[#121212]/90 border-[#d4af37] shadow-2xl shadow-[#d4af37]/10 -translate-y-2' 
                    : 'bg-[#121212]/40 border-white/5 hover:border-[#d4af37]/40'
                }`}
              >
                <div>
                  {/* Top Header inside card */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-elegant text-2xl text-[#d4af37]/60 font-light">
                      {service.id}
                    </span>
                    <div className={`p-3 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#d4af37] text-[#0a0a0a]' : 'bg-white/5 text-[#f5f5dc]'}`}>
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Service Image Preview */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-[#d4af37] bg-black/60 px-3 py-1 rounded-full border border-[#d4af37]/30">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-elegant text-2xl text-[#f5f5dc] mb-3 group-hover:text-[#d4af37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#f5f5dc]/70 text-xs leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Interactive Highlights List */}
                  <div className="space-y-2 mb-8 border-t border-white/5 pt-4">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#f5f5dc]/80 font-light">
                        <Check size={14} className="text-[#d4af37]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Kaashian%20Team,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs uppercase tracking-widest text-[#d4af37] font-medium group-hover:text-[#f5f5dc] transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;