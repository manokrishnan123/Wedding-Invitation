/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Hero } from './components/Hero';
import { CoupleDetails } from './components/CoupleDetails';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Reception } from './components/Reception';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';
import { AmbientLamps } from './components/AmbientLamps';
import { AudioToggle, AudioProvider } from './components/AudioToggle';
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
    <AudioProvider>
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
            className="fixed inset-0 z-[1000] flex items-center justify-center perspective-[1200px]"
          >
            {/* Top flap - opens upward like a card cover */}
            <motion.div
              initial={{ rotateX: 0 }}
              exit={{
                rotateX: -105,
                transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] }
              }}
              style={{ transformOrigin: 'top center' }}
              className="absolute inset-x-0 top-0 h-1/2 bg-emerald z-[1002]"
            />

            {/* Bottom flap - opens downward */}
            <motion.div
              initial={{ rotateX: 0 }}
              exit={{
                rotateX: 105,
                transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] }
              }}
              style={{ transformOrigin: 'bottom center' }}
              className="absolute inset-x-0 bottom-0 h-1/2 bg-emerald z-[1002]"
            />

            {/* Center content - vertically stacked at the seam */}
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6, delay: 1 } }}
              className="relative z-[1003] flex flex-col items-center text-center"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif italic text-gold/80 text-xs tracking-[0.3em] uppercase mb-6"
              >
                You are invited to
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl md:text-7xl text-white drop-shadow-lg"
              >
                Mano <span className="text-gold">&</span> Bisna
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1, ease: [0.76, 0, 0.24, 1] }}
                className="h-px bg-gold/60 mt-5 max-w-[200px]"
              />

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="block mt-5 font-serif italic text-gold/80 text-xs tracking-[0.4em] uppercase"
              >
                The Wedding
              </motion.span>

            </motion.div>

            {/* Decorative gold seal at the seam line */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.4 } }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1004] w-16 h-16 rounded-full border-2 border-gold/60 flex items-center justify-center bg-emerald/90 backdrop-blur-sm"
            >
              <span className="font-display text-gold text-sm">M&B</span>
            </motion.div>

            {/* Background behind the flaps */}
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.8 } }}
              className="absolute inset-0 bg-emerald-950 z-[1001]"
            />
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
        <Reception />
        <Gallery />
      </main>

      <Footer />
    </div>
    </AudioProvider>
  );
}
