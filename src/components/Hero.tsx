import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';

const WEDDING_DATE = new Date('2026-08-30T10:30:00'); // Mano & Bisna Wedding Date

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(intervalToDuration({
    start: new Date(),
    end: WEDDING_DATE
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(intervalToDuration({
        start: new Date(),
        end: WEDDING_DATE
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60 z-20" />
        <img 
          src="/images/ChatGPT Image May 17, 2026, 12_46_37 PM.png" 
          alt="Luxury Kerala Wedding Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="container relative z-30 px-8 mx-auto">
        <div className="max-w-5xl text-center mx-auto">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
             className="mb-8"
          >
            <span className="font-serif italic text-gold text-xs md:text-sm uppercase tracking-[0.4em] opacity-80">
              A Lifetime of Love Begins
            </span>
          </motion.div>

        <div className="mb-12 relative">
          <motion.h1 
            className="font-display text-7xl md:text-[10rem] text-white leading-none relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Mano <span className="text-gold font-serif italic text-4xl md:text-7xl block md:inline mx-4">&</span> Bisna
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="h-px bg-gold/40 mt-8 mx-auto max-w-2xl"
          />
        </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex gap-6 md:gap-12 items-center justify-center font-serif text-white/90">
               {[
                 { label: 'Months', val: timeLeft.months },
                 { label: 'Days', val: timeLeft.days },
                 { label: 'Hrs', val: timeLeft.hours },
                 { label: 'Mins', val: timeLeft.minutes }
               ].map((item, i) => (
                 <div key={item.label} className="text-center group">
                   <motion.span 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 3 + (i * 0.1) }}
                     className="text-4xl md:text-6xl font-display text-gold mb-1 block"
                   >
                     {String(item.val || 0).padStart(2, '0')}
                   </motion.span>
                   <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block">{item.label}</span>
                 </div>
               ))}
            </div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 4 }}
             className="mt-20 group relative pt-12 flex flex-col items-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold/30 group-hover:h-20 transition-all duration-700" />
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold cursor-pointer">
               Scroll to Enter
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>

      {/* Decorative Ornaments */}
      <div className="absolute top-24 left-10 opacity-30 hidden lg:block">
        <div className="w-20 h-20 border border-gold/20 flex items-center justify-center rounded-sm rotate-45">
          <div className="w-16 h-16 border border-gold/40 flex items-center justify-center rounded-sm">
             <span className="font-display text-gold text-2xl -rotate-45">M | B</span>
          </div>
        </div>
      </div>

      {/* Decorative SVG Path */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C100 10 300 90 400 50" stroke="url(#goldGradient)" strokeWidth="0.5" />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C5A059" stopOpacity="0" />
              <stop offset="0.5" stopColor="#C5A059" />
              <stop offset="1" stopColor="#C5A059" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
