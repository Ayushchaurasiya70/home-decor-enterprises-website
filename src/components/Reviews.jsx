import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ExternalLink } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Villa Owner',
    location: 'Cantonment, Varanasi',
    rating: 5,
    date: '2 weeks ago',
    text: 'Home Decor Enterprises transformed our 4BHK villa completely. The black and gold detailing in the living area is breathtaking. Extremely professional team and delivered right on time!',
    verified: true,
  },
  {
    id: 2,
    name: 'Ananya Verma',
    role: 'Boutique Owner',
    location: 'Sigra, Varanasi',
    rating: 5,
    date: '1 month ago',
    text: 'Best commercial designers in Varanasi! They designed our apparel studio with modern lighting and space-saving layouts. Clients love the ambiance.',
    verified: true,
  },
  {
    id: 3,
    name: 'Vikramaditya Singh',
    role: 'Penthouse Owner',
    location: 'Bhelupur, Varanasi',
    rating: 5,
    date: '2 months ago',
    text: 'From 3D elevations to turnkey construction, Home Decor Enterprises handled everything smoothly. Their choice of materials and color palettes is super high-end.',
    verified: true,
  },
  {
    id: 4,
    name: 'Dr. Sameer Tripathi',
    role: 'Clinic & Residence',
    location: 'Chetganj, Varanasi',
    rating: 5,
    date: '3 months ago',
    text: 'Their attention to detail and acoustic wall finishes for my workspace exceeded expectations. Truly modern minimalism at its best.',
    verified: true,
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.85,
    rotateY: direction > 0 ? 25 : -25,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 400 : -400,
    opacity: 0,
    scale: 0.85,
    rotateY: direction < 0 ? 25 : -25,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Reviews = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeIndex = Math.abs(page % reviews.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page, isAutoPlaying]);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-medium">
                Client Testimonials
              </span>
            </div>
            <h2 className="font-elegant text-4xl md:text-6xl text-[#f5f5dc]">
              Words of <span className="font-cursive-light text-[#d4af37] text-5xl md:text-7xl lowercase">trust</span>
            </h2>
          </div>

          {/* Google Rating Badge */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 bg-[#121212] border border-[#d4af37]/30 px-6 py-4 rounded-2xl shadow-xl backdrop-blur-md self-start lg:self-auto"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-elegant text-3xl font-bold text-[#f5f5dc]">4.6</span>
                <div className="flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#d4af37" className="text-[#d4af37]" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-[#f5f5dc]/60 uppercase tracking-wider mt-0.5">
                Based on 108+ Google Reviews
              </span>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#d4af37]/10 text-[#d4af37] rounded-xl hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 ml-2"
              title="View Google Reviews"
            >
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        {/* Interactive 3D Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto min-h-[380px] flex items-center justify-center perspective-1000"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -100) {
                  paginate(1);
                } else if (swipe > 10000 || offset.x > 100) {
                  paginate(-1);
                }
              }}
              className="absolute w-full bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl cursor-grab active:cursor-grabbing border-t-[#d4af37]/40"
            >
              <Quote size={48} className="text-[#d4af37]/20 absolute top-8 right-8" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#d4af37" className="text-[#d4af37]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#f5f5dc] text-lg md:text-2xl font-light leading-relaxed mb-8 font-elegant italic">
                "{reviews[activeIndex].text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center font-elegant text-[#d4af37] font-bold text-lg">
                    {reviews[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[#f5f5dc] font-medium text-base">
                        {reviews[activeIndex].name}
                      </h4>
                      {reviews[activeIndex].verified && (
                        <CheckCircle2 size={16} className="text-[#d4af37]" />
                      )}
                    </div>
                    <p className="text-[#f5f5dc]/50 text-xs tracking-wider">
                      {reviews[activeIndex].role} • {reviews[activeIndex].location}
                    </p>
                  </div>
                </div>

                <span className="text-xs text-[#d4af37]/60 font-mono hidden sm:block">
                  {reviews[activeIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls & Pagination */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mt-8">
          {/* Progress Dots */}
          <div className="flex gap-2 items-center">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-[#d4af37]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full border border-white/10 text-[#f5f5dc] hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full border border-white/10 text-[#f5f5dc] hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;