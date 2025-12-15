import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceMap: React.FC = () => {
  const locations = [
    "Mainz", "Wiesbaden", "Frankfurt", "Mannheim", "Darmstadt", 
    "Rüsselsheim", "Hanau", "Bad Kreuznach", "Offenbach",
    "Worms", "Aschaffenburg", "Bingen", "Ingelheim", "Limburg", "Koblenz"
  ];

  // Duplicate exactly once to create [A, B]. 
  // We animate from 0% to -50%. At -50%, B is in the exact position A was.
  // Instant reset to 0% creates the seamless loop.
  const marqueeLocations = [...locations, ...locations];

  return (
    <section id="area" className="py-20 bg-slate-900 overflow-hidden relative text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
         
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-xs font-bold uppercase tracking-wide mb-6">
            <MapPin size={12} />
            Einsatzgebiet Rhein-Main
         </div>
         
         <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
            Wir sind überall dort,<br/>
            <span className="text-slate-400">wo Sie uns brauchen.</span>
         </h2>
         
         <p className="text-slate-400 text-lg mb-12 max-w-2xl font-light">
            Durch unsere zentrale Lage garantieren wir kürzeste Anfahrtswege und schnelle Reaktionszeiten im gesamten Rhein-Main-Gebiet und darüber hinaus.
         </p>

         {/* Marquee Animation Container */}
         <div className="w-full max-w-[100vw] relative py-10 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
            
            {/* Gradients pushed to the absolute edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none"></div>
            
            <motion.div 
              className="flex whitespace-nowrap gap-16 w-max"
              animate={{ x: "-50%" }}
              initial={{ x: 0 }}
              transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity 
              }}
            >
              {marqueeLocations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-3xl font-heading font-bold text-slate-600 group-hover:text-slate-200 transition-colors duration-300">
                    {loc}
                  </span>
                </div>
              ))}
            </motion.div>
         </div>

      </div>
    </section>
  );
};

export default ServiceMap;