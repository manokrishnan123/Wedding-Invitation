/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Hero } from './components/Hero';
import { CoupleDetails } from './components/CoupleDetails';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';
import { AmbientLamps } from './components/AmbientLamps';
import { AudioToggle } from './components/AudioToggle';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-ivory overflow-x-hidden min-h-screen selection:bg-gold selection:text-white">
      {/* Grain Overlay */}
      <div className="grain" />
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[100]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: '-100%',
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[1000] bg-emerald flex flex-col items-center justify-center p-6 text-white"
          >
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <span className="font-serif italic text-gold/80 block mb-4 tracking-[0.3em] uppercase text-xs">A Cinematic Journey</span>
                <h1 className="font-display text-5xl md:text-7xl mb-12">
                  Mano <span className="text-gold">&</span> Bisna
                </h1>
              </motion.div>
              
              <div className="flex flex-col items-center gap-6">
                <div className="w-[1px] h-32 bg-gold/30 relative overflow-hidden">
                  <motion.div 
                    initial={{ y: '-100%' }}
                    animate={{ y: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gold"
                  />
                </div>
                <div className="font-serif italic text-white/40 text-sm tracking-widest">
                  Est. 2026
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingNav />
      <AmbientLamps />
      <AudioToggle />
      
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <CoupleDetails />
        <Events />
        <Gallery />
        <RSVP />
      </main>

      <Footer />
    </div>
  );
}
