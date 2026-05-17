import { motion } from 'motion/react';

export const AmbientLamps = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.2, 1],
            y: ['-10%', '110%'],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          style={{
            width: 4 + Math.random() * 8 + 'px',
            height: 4 + Math.random() * 8 + 'px',
            background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)',
            filter: 'blur(2px)',
          }}
        />
      ))}
    </div>
  );
};
