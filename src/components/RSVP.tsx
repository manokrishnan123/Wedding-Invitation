import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#064e3b', '#d4af37', '#ffffff']
    });
  };

  const onSubmit = (data: any) => {
    console.log('RSVP Data:', data);
    setSubmitted(true);
    triggerConfetti();
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 bg-ivory flex items-center justify-center min-h-[600px] overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="text-center relative"
        >
          {/* Animated Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1, 0.5],
                x: Math.sin(i) * 100,
                y: Math.cos(i) * 100
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute left-1/2 top-1/2 text-gold/40"
            >
              <Sparkles size={16 + (i % 3) * 8} />
            </motion.div>
          ))}

          <div className="w-24 h-24 bg-emerald/5 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="z-10"
            >
              <CheckCircle2 size={48} className="text-emerald" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-emerald/10 rounded-full"
            />
          </div>
          <h2 className="font-display text-6xl text-emerald mb-6 tracking-tight">Thank You!</h2>
          <p className="font-serif text-2xl italic text-gold max-w-md mx-auto">Your presence will make our celebration truly complete.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-32 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-24">
           <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-4"
            >
              The Final Word
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-6xl md:text-[8rem] text-emerald leading-none"
            >
              R.S.V.P
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 pt-12">
            <p className="text-gray-600 font-serif text-2xl italic leading-relaxed mb-12 border-l-2 border-gold/20 pl-8">
              "To celebrate life, love, and the magic of togetherness, we invite you to join our journey."
            </p>
            <div className="space-y-8">
               <div>
                  <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-2">For Assistance</h4>
                  <span className="font-serif text-xl text-emerald block">hello@manoandbisna.com</span>
                  <span className="font-serif text-xl text-emerald block">+91 94000 00000</span>
               </div>
            </div>
          </div>

          <motion.form 
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-8 bg-white p-10 md:p-20 rounded-[4rem] shadow-[0_100px_150px_-50px_rgba(6,78,59,0.1)] border border-gold/10 relative"
          >
            <div className="absolute top-10 right-10 w-16 h-16 opacity-5">
               <Send size={64} className="text-emerald" />
            </div>

            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gold">Your Invited Name</label>
              <input 
                {...register('name', { required: true })}
                className="w-full bg-transparent border-b border-gold/20 py-4 focus:outline-none focus:border-emerald transition-all font-serif text-2xl text-emerald placeholder:text-emerald/20"
                placeholder="Full Name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gold">Guest Count</label>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <label key={num} className="relative cursor-pointer group flex-1">
                       <input type="radio" {...register('guests', { required: true })} value={num} className="hidden peer" />
                       <div className="w-full py-3 text-center border border-emerald/10 rounded-xl peer-checked:bg-emerald peer-checked:text-white peer-checked:border-emerald transition-all font-serif italic group-hover:border-gold">
                         {num}
                       </div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gold">Attendance</label>
                <div className="flex gap-4">
                  {['yes', 'no'].map((val) => (
                    <label key={val} className="relative cursor-pointer group flex-1">
                       <input type="radio" {...register('attending', { required: true })} value={val} className="hidden peer" />
                       <div className="w-full py-3 text-center border border-emerald/10 rounded-xl peer-checked:bg-emerald peer-checked:text-white peer-checked:border-emerald transition-all font-serif italic text-sm uppercase tracking-widest group-hover:border-gold">
                         {val === 'yes' ? 'Accepts' : 'Declines'}
                       </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-6 bg-emerald text-white rounded-2xl uppercase tracking-[0.5em] text-xs font-bold shadow-2xl shadow-emerald/30 flex items-center justify-center gap-4 transition-all hover:bg-black"
            >
              Confirm Presence
            </motion.button>
            <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest">Thank you for being part of our story.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
