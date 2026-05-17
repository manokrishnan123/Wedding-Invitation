import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

export const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-[90] glass w-12 h-12 rounded-full flex items-center justify-center text-emerald shadow-2xl border-gold/20"
      onClick={() => setIsPlaying(!isPlaying)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
        >
          <Volume2 size={20} />
          <div className="absolute -inset-1 border border-gold/30 rounded-full animate-ping opacity-20" />
        </motion.div>
      ) : (
        <VolumeX size={20} className="opacity-40" />
      )}
      
      {/* Decorative tooltip */}
      <div className="absolute right-14 bg-emerald text-white text-[9px] uppercase tracking-widest py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Ambient Music
      </div>
    </motion.button>
  );
};
