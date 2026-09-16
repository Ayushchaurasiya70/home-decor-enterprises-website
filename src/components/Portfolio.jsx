import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ArrowUpRight, MapPin, Maximize2, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'The Royal Heritage Suite',
    category: 'Residential',
    location: 'Cantonment, Varanasi',
    year: '2025',
    area: '4,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    description: 'A grand luxury living room overhaul blending traditional Varanasi aesthetic elements with sleek modern italian furniture.',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Aura Luxury Boutique',
    category: 'Commercial',
    location: 'Sigra, Varanasi',
    year: '2025',
    area: '2,800 sq.ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    description: 'Minimalist commercial showroom designed with ambient gold cove lighting and marble displays to accentuate premium apparel.',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Minimalist Glass Villa',
    category: 'Architectural',
    location: 'Vidyapeeth Rd, Varanasi',
    year: '2024',
    area: '6,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    description: 'Complete elevation and structural build featuring floor-to-ceiling glass panels and sustainable natural wood detailing.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'Ganges Lounge & Cafe',
    category: 'Commercial',
    location: 'Assi Ghat, Varanasi',
    year: '2024',
    area: '3,100 sq.ft',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    description: 'Moody rooftop dining lounge featuring acoustic wooden ceilings, brass highlights, and panoramic riverside views.',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 5,
    title: 'The Black & Beige Penthouse',
    category: 'Residential',
    location: 'Bhelupur, Varanasi',
    year: '2025',
    area: '3,800 sq.ft',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    description: 'Ultra-modern interior incorporating custom textured stone walls, hidden LED strips, and bespoke beige velvet seating.',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 6,
    title: 'Siddharth Executive Office',
    category: 'Architectural',
    location: 'Chetganj, Varanasi',
    year: '2024',
    area: '1,900 sq.ft',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
    description: 'Corporate executive suite built with acoustic soundproofing, automated ambient lighting, and walnut wood paneling.',
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop'
    ]
  }
];

const categories = ['All', 'Residential', 'Commercial', 'Architectural'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModalImage, setActiveModalImage] = useState(0);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(item => item.category === activeFilter);

  // Updated WhatsApp number for Home Decor Enterprises
  const whatsappNumber = "919128884990";

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-medium">
                Our Showcase
              </span>
            </div>
            <h2 className="font-elegant text-4xl md:text-6xl text-[#f5f5dc]">
              Selected <span className="font-cursive-light text-[#d4af37] text-5xl md:text-7xl lowercase">works</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-8 md:mt-0 bg-[#121212] p-1.5 rounded-full border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 relative ${
                  activeFilter === cat ? 'text-[#0a0a0a]' : 'text-[#f5f5dc]/70 hover:text-[#d4af37]'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-[#d4af37] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveModalImage(0);
                }}
                className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#d4af37]/50 transition-all duration-500 shadow-xl"
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/30">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action Icon */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#d4af37] text-[#0a0a0a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Eye size={18} />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div className="flex items-center gap-2 text-[#d4af37] text-xs mb-1 font-light">
                    <MapPin size={12} />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-elegant text-2xl text-[#f5f5dc] group-hover:text-[#d4af37] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#f5f5dc]/60 text-xs font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Modal Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-[#d4af37]/30 w-full max-w-5xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col lg:flex-row relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 text-[#f5f5dc] hover:text-[#d4af37] border border-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Image Viewer Left Side */}
              <div className="lg:w-3/5 bg-black relative flex flex-col justify-between min-h-[320px] lg:min-h-[500px]">
                <img
                  src={selectedProject.gallery[activeModalImage]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Thumbnails (If gallery has multiple images) */}
                {selectedProject.gallery.length > 1 && (
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-2 overflow-x-auto p-2 bg-black/60 backdrop-blur-md rounded-lg">
                    {selectedProject.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImage(idx)}
                        className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                          activeModalImage === idx ? 'border-[#d4af37] scale-105' : 'border-transparent opacity-60'
                        }`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Content Right Side */}
              <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-medium">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-elegant text-3xl text-[#f5f5dc] mt-1 mb-4">
                    {selectedProject.title}
                  </h3>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2 text-xs text-[#f5f5dc]/80">
                      <MapPin size={14} className="text-[#d4af37]" />
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#f5f5dc]/80">
                      <Calendar size={14} className="text-[#d4af37]" />
                      <span>Year: {selectedProject.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#f5f5dc]/80 col-span-2">
                      <Maximize2 size={14} className="text-[#d4af37]" />
                      <span>Total Area: {selectedProject.area}</span>
                    </div>
                  </div>

                  <p className="text-[#f5f5dc]/70 text-xs leading-relaxed font-light mb-6">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Direct Action */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Home%20Decor%20Enterprises,%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(selectedProject.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#d4af37] text-[#0a0a0a] py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#f5f5dc] transition-colors shadow-lg shadow-[#d4af37]/20"
                >
                  <span>Request Similar Project</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;