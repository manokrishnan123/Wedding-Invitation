import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';

interface ReceptionEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  image: string;
}

const EVENTS: ReceptionEvent[] = [
  {
    title: 'Reception',
    date: 'Aug 31, 2026',
    time: '4:00 PM - 9:00 PM',
    location: '',
    venue: 'Madavoor Palace',
    image: '/images/Madavoor.webp'
  }
];

export const Reception = () => {
  return (
    <section id="reception" className="py-24 bg-emerald/5">
      <div className="container px-6 mx-auto">
         <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-medium"
          >
            The Celebration Continues
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-emerald mt-4"
          >
            The Reception
          </motion.h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[500px] md:h-[600px] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(6,78,59,0.15)]"
            >
              {/* Image with Cinematic Zoom and Solid-to-Blend Backdrop */}
              <div className="absolute inset-0 z-0">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5 }}
                  src={event.image}
                  className="w-full h-full object-cover transition-all duration-1000"
                  alt={event.title}
                  referrerPolicy="no-referrer"
                />
                {/* Solid color backdrop behind text (blends to image) */}
                <div className="absolute inset-0 bg-emerald-950/40 md:bg-transparent z-5" />
                <div className="absolute inset-y-0 right-0 w-full md:w-[60%] bg-emerald-950/50 z-5 hidden md:block" />
                <div className="absolute inset-y-0 right-[60%] w-64 bg-linear-to-l from-emerald-950/50 to-transparent z-5 hidden md:block" />

                {/* Subtle glass effect for the text area */}
                <div className="absolute inset-0 bg-black/10 z-6 pointer-events-none" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-end justify-end pb-12 px-8 md:justify-center md:p-16 lg:p-24 z-20 text-white text-right">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  className="h-px bg-gold/50 mb-8 max-w-[100px]"
                />

                <span className="font-serif italic text-gold text-lg mb-4 tracking-widest">{event.date}</span>
                <h3 className="font-display text-5xl md:text-7xl mt-4 mb-8 leading-tight tracking-tight group-hover:text-gradient-gold transition-all duration-700 drop-shadow-lg">{event.title}</h3>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 max-w-sm flex flex-col items-end"
                >
                   <div className="flex items-center gap-4 text-white/90 drop-shadow-md">
                     <span className="text-xl md:text-2xl uppercase tracking-[0.2em] font-bold">{event.time}</span>
                     <Clock size={20} className="text-gold" />
                   </div>
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                     className="flex items-start justify-end gap-4 text-white/90 drop-shadow-md"
                   >
                     <div className="text-right">
                       <span className="text-lg md:text-xl font-bold block text-white">{event.venue}</span>
                       <span className="text-xs uppercase tracking-widest opacity-80">{event.location}</span>
                     </div>
                     <MapPin size={20} className="text-gold shrink-0 mt-1" />
                   </motion.div>

                  <motion.a
                    href="https://maps.app.goo.gl/3waNrHnV2DM4TeRw6"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 py-4 border border-white/20 rounded-full text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-emerald transition-all inline-block text-center"
                  >
                    Get Directions
                  </motion.a>
                </motion.div>
              </div>

              {/* Action Indicator */}
              <div className="absolute top-10 left-10 flex-col items-center gap-2 opacity-40 hidden md:flex">
                <div className="w-[1px] h-10 bg-gold" />
                <span className="vertical-text text-[9px] text-white tracking-[0.4em] uppercase">Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
