import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, createContext, useContext } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const AudioContext = createContext<AudioContextType>({ isPlaying: false, toggleAudio: () => {} });

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/background-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const AudioToggle = () => {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-12 right-12 z-[90] glass w-12 h-12 rounded-full items-center justify-center text-emerald shadow-2xl border-gold/20 hidden md:flex"
      onClick={toggleAudio}
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
      <div className="absolute right-14 bg-emerald text-white text-[9px] uppercase tracking-widest py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Ambient Music
      </div>
    </motion.button>
  );
};
