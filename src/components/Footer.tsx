import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-32 bg-ivory border-t border-gold/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-repeat" />
      </div>

      <div className="container px-6 mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <div className="font-display text-7xl md:text-9xl text-emerald mb-6 tracking-tighter">
            M<span className="text-gold italic mx-2">&</span>B
          </div>
          <div className="text-gold uppercase tracking-[1em] text-[11px] font-bold">
            The Wedding . Aug 2026
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center mb-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
          {['Registry', 'The Couple', 'The Wedding', 'RSVP'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'The Wedding' ? 'events' : item === 'The Couple' ? 'couple' : item.toLowerCase().replace(' ', '-')}`}
              className="text-emerald text-[10px] uppercase tracking-[0.5em] font-bold hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
            <div className="flex justify-center gap-4">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="w-1 h-1 rounded-full bg-gold/40" />
               ))}
            </div>
            
            <p className="font-serif italic text-2xl text-emerald/40 leading-relaxed">
              "Love is the only thing that we can carry with us when we go, and it makes the end so easy."
            </p>

            <div className="pt-20 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="text-[9px] text-gray-400 uppercase tracking-widest text-left space-y-1">
                 <p>© 2026 Mano & Bisna Wedding Experience.</p>
               </div>
            </div>
        </div>
      </div>
    </footer>
  );
};
