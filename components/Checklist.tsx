import React, { useState } from 'react';
import { FileText, Download, Check, Printer } from 'lucide-react';
import { motion } from 'framer-motion';

const Checklist: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate download delay
    setTimeout(() => {
      setDownloading(false);
      alert("Der Download der Checkliste würde hier starten. (Demo-Modus)");
    }, 2000);
  };

  return (
    <section id="checklist" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Visual Side */}
            <div className="bg-brand-dark p-12 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Pattern */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-[80px] -mr-20 -mt-20 opacity-50"></div>
               
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-full text-slate-300 text-xs font-bold uppercase tracking-wide mb-6 border border-slate-600">
                    <FileText size={12} />
                    Kostenloses PDF
                 </div>
                 <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
                    Die ersten 48 Stunden:<br/>
                    Ein Leitfaden für Hinterbliebene.
                 </h3>
                 <p className="text-slate-400 leading-relaxed mb-8">
                    In der Trauer fällt es schwer, klare Gedanken zu fassen. Unsere Checkliste hilft Ihnen, nichts Wichtiges zu vergessen – von behördlichen Schritten bis zur Wohnungskündigung.
                 </p>
               </div>

               {/* Document Preview Visual */}
               <div className="relative z-10 mt-8 flex justify-center lg:justify-start">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="relative w-48 h-64 bg-white rounded-tr-2xl rounded-bl-2xl shadow-2xl flex flex-col items-center pt-8 px-4 text-slate-800"
                  >
                     <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">T24</div>
                     <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
                     <div className="w-3/4 h-2 bg-slate-100 rounded mb-6"></div>
                     <div className="w-full space-y-2">
                        {[1,2,3,4,5].map(i => (
                           <div key={i} className="flex items-center gap-2">
                              <div className="w-3 h-3 border border-slate-300 rounded-sm"></div>
                              <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                           </div>
                        ))}
                     </div>
                     <div className="absolute -right-4 -bottom-4 bg-brand-accent text-brand-dark font-bold px-4 py-2 rounded-lg shadow-lg text-sm">
                        GRATIS
                     </div>
                  </motion.div>
               </div>
            </div>

            {/* Content Side */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
               <h4 className="text-xl font-bold text-brand-dark mb-6">Das beinhaltet der Ratgeber:</h4>
               
               <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {[
                     "Behördengänge & Fristen",
                     "Kündigung Mietvertrag",
                     "Erbschein & Testament",
                     "Bestatter & Trauerfeier",
                     "Versicherungen informieren",
                     "Wohnungsauflösung",
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                           <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-slate-600 text-sm font-medium">{item}</span>
                     </div>
                  ))}
               </div>

               <div className="space-y-4">
                  <button 
                     onClick={handleDownload}
                     disabled={downloading}
                     className="w-full bg-brand-dark text-white font-bold text-lg py-4 rounded-xl shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                     {downloading ? (
                        <>Lade herunter...</>
                     ) : (
                        <>
                           <Download size={20} />
                           Jetzt kostenlos herunterladen
                        </>
                     )}
                  </button>
                  <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-2">
                     <Printer size={12} />
                     Optimiert für den Druck im DIN A4 Format
                  </p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;