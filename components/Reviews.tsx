import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Converted from Reviews to Service Areas List
const locations = [
  "Mainz",
  "Wiesbaden",
  "Frankfurt am Main",
  "Offenbach am Main",
  "Darmstadt",
  "Rüsselsheim",
  "Hanau",
  "Aschaffenburg",
  "Groß-Gerau",
  "Bad Homburg",
  "Hofheim am Taunus",
  "Maintal",
  "Neu-Isenburg",
  "Mannheim",
  "Ludwigshafen",
  "Heidelberg"
];

const Reviews: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block border border-slate-200 bg-white py-1 px-4 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 shadow-sm">
            Einsatzgebiet
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            Vor Ort im gesamten<br/>
            <span className="text-brand-primary">Rhein-Main-Gebiet</span>
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Wir sind schnell bei Ihnen. Unsere zentralen Standorte garantieren kurze Anfahrtswege in der gesamten Region.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-center gap-3 group cursor-default"
              >
                <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-brand-dark transition-colors">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Reviews;