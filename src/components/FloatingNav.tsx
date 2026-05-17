import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Calendar, MapPin, Image as ImageIcon, Send } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const FloatingNav = () => {
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(6, 78, 59, 0.95)']
  );

  const navItems = [
    { icon: Heart, label: 'Couple', href: '#couple' },
    { icon: Calendar, label: 'Wedding', href: '#events' },
    { icon: ImageIcon, label: 'Gallery', href: '#gallery' },
    { icon: Send, label: 'RSVP', href: '#rsvp' },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav 
        style={{ backgroundColor: navBackground }}
        className="fixed top-0 left-0 w-full z-[100] h-20 hidden md:flex items-center justify-between px-12 border-b border-white/5 transition-colors duration-500"
      >
        <div className="font-display text-white text-2xl tracking-widest uppercase">
          M<span className="text-gold italic mx-1">&</span>B
        </div>
        
        <div className="flex gap-12 glass px-10 py-3 rounded-full border-gold/10">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center gap-1"
            >
              <span className="text-white/60 text-[9px] uppercase tracking-[0.3em] font-bold group-hover:text-gold transition-colors">
                {item.label}
              </span>
              <motion.div 
                className="h-[1px] bg-gold w-0 group-hover:w-full transition-all duration-300"
              />
            </a>
          ))}
        </div>

        <motion.a 
          href="#rsvp" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-2.5 bg-gold text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full shadow-lg shadow-gold/20 hover:bg-[#B38D46] transition-all"
        >
          RSVP
        </motion.a>
      </motion.nav>

      {/* Mobile Nav (Floating Dock) */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-auto md:hidden">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass rounded-full py-3 px-6 flex items-center gap-8 shadow-2xl shadow-black/40 border border-white/10"
        >
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 active:scale-90 transition-transform relative group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-emerald/60 items-center justify-center group-hover:text-gold transition-colors">
                 <item.icon size={22} strokeWidth={1.5} />
              </div>
              <motion.div 
                layoutId="mobileNavUnderline"
                className="absolute -bottom-1 w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100"
              />
            </a>
          ))}
        </motion.div>
      </nav>
    </>
  );
};
