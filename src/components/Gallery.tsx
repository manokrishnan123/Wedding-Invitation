import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const IMAGES = [
  '/images/Gallery01.png',
  '/images/Gallery1.png',
  '/images/Gallery6.png',
  '/images/Gallery3.png',
  '/images/Gallery2.png',
  '/images/Gallery7.png',
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-ivory">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-medium"
          >
            Moments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-emerald mt-4"
          >
            Wedding Gallery
          </motion.h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className={cn(
                "relative overflow-hidden rounded-2xl group cursor-pointer shadow-2xl",
                i === 1 || i === 4 ? "aspect-3/4 md:row-span-2" : "aspect-square"
              )}
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1 }}
                src={src} 
                className="w-full h-full object-cover transition-all duration-700 brightness-90 group-hover:brightness-100" 
                alt={`Wedding moment ${i}`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white/30 pb-1">
                  Enlarge Moment
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
