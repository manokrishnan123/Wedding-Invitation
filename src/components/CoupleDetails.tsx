import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const CoupleDetails = () => {
  return (
    <section id="couple" className="py-32 bg-ivory relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-4"
          >
            The Union of Two Families
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl text-emerald"
          >
            A Sacred Beginning
          </motion.h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* The Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center flex-1 w-full order-2 lg:order-1 border border-gold/20 rounded-3xl p-8 md:p-10 bg-white/50 shadow-sm"
          >
            <span className="font-serif italic text-gold text-xl md:text-2xl mb-4 block">The Groom</span>
            <h3 className="font-display text-4xl md:text-6xl text-emerald mb-6 leading-tight whitespace-nowrap overflow-visible">Mano Krishnan</h3>
            <div className="space-y-1">
              <p className="text-gray-500 uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold">Son of</p>
              <p className="font-serif text-base md:text-xl text-emerald whitespace-nowrap">Mr. Krishnan P & Mrs. Beena C</p>
            </div>
            <p className="mt-6 text-gray-400 font-serif italic text-sm md:text-base max-w-xs mx-auto">
               "Steadfast like the ancient roots of the sacred banyan."
            </p>
          </motion.div>

          {/* Center Image/Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex-shrink-0 w-full lg:w-96 order-1 lg:order-2"
          >
            <div className="aspect-[3/4] relative rounded-3xl overflow-hidden border border-gold/30 shadow-[0_30px_80px_-20px_rgba(6,78,59,0.25)] ring-1 ring-emerald/10 ring-offset-4 ring-offset-ivory">
              <img
                src="/images/bridegroom.webp"
                alt="The Couple"
                className="w-full h-full object-cover object-[center_15%]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald/40 to-transparent" />
            </div>

            {/* Ornament Overlay */}
            <motion.div
              animate={{ rotate: 45 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 border border-gold/40 rounded-full flex items-center justify-center bg-ivory p-1 z-20"
            >
              <div className="w-full h-full border border-gold/60 rounded-full flex items-center justify-center">
                 <span className="font-display text-gold text-3xl">M&B</span>
              </div>
            </motion.div>
          </motion.div>

          {/* "With" separator - visible on mobile between groom & bride */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="order-2 lg:hidden flex items-center gap-4 my-2"
          >
            <div className="flex-1 h-px bg-gold/20" />
            <span className="font-serif italic text-gold text-xl tracking-widest">With</span>
            <div className="flex-1 h-px bg-gold/20" />
          </motion.div>

          {/* The Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center flex-1 w-full order-3 border border-gold/20 rounded-3xl p-8 md:p-10 bg-white/50 shadow-sm"
          >
            <span className="font-serif italic text-gold text-xl md:text-2xl mb-4 block">The Bride</span>
            <h3 className="font-display text-4xl md:text-6xl text-emerald mb-6 leading-tight whitespace-nowrap overflow-visible">Bisna S</h3>
            <div className="space-y-1">
              <p className="text-gray-500 uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold">Daughter of</p>
              <p className="font-serif text-base md:text-xl text-emerald whitespace-nowrap">Mr. Sunil Kumar EG & Mrs. Bindu V</p>
            </div>
            <p className="mt-6 text-gray-400 font-serif italic text-sm md:text-base max-w-xs mx-auto">
               "A soul as bright as the morning lamps of Guruvayur."
            </p>
          </motion.div>
        </div>


        {/* Best Compliments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center border border-gold/20 rounded-3xl p-8 md:p-10 bg-white/50 shadow-sm max-w-xl mx-auto"
        >
          <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Best Compliments</p>
          <p className="font-serif text-lg md:text-xl text-emerald">Kavya B Krishnan, Anuj Sasikumar, Family & Friends</p>
        </motion.div>

        {/* Decorative Saree/Mundu Border Pattern (Simulated with CSS/SVGs) */}
        <div className="mt-32 opacity-10 flex justify-center gap-12">
           {[...Array(5)].map((_, i) => (
             <svg key={i} width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gold">
               <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="currentColor"/>
             </svg>
           ))}
        </div>
      </div>
    </section>
  );
};
