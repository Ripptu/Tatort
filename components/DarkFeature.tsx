import React from 'react';
import { CheckCircle, Clock, HeartHandshake, Award } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="flex items-center justify-center gap-4 mb-4">
           <div className="h-px w-8 bg-slate-400"></div>
           <span className="text-slate-500 font-serif italic text-lg">Ihre Sicherheit</span>
           <div className="h-px w-8 bg-slate-400"></div>
        </div>
        
        <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
           Warum <span className="text-brand-primary">Tatortreinigung 24?</span>
        </h2>
        <p className="text-slate-600 text-lg mb-12 leading-relaxed font-light max-w-2xl mx-auto">
           In emotionalen Ausnahmesituationen brauchen Sie einen Partner, auf den Sie sich verlassen können. Wir arbeiten menschlich, diskret und professionell.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
           {[
              { title: "Zertifizierter Fachbetrieb", text: "Strenge Einhaltung aller Hygienestandards.", icon: Award },
              { title: "24/7 Notdienst", text: "Erreichbar auch an Wochenenden & Feiertagen.", icon: Clock },
              { title: "Absolute Diskretion", text: "Neutrale Fahrzeuge und Kleidung.", icon: HeartHandshake },
              { title: "Transparente Preise", text: "Festpreisangebot nach Besichtigung.", icon: CheckCircle },
           ].map((item, i) => (
              <div key={i} className="flex gap-6 group bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0 text-slate-400 group-hover:text-slate-900 group-hover:border-slate-900/50 transition-all duration-300">
                    <item.icon size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                 </div>
              </div>
           ))}
        </div>
        
        <div className="mt-12">
           <a href="#contact" className="inline-block bg-brand-dark text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all hover:-translate-y-0.5 border border-slate-700">
              Jetzt Beratung anfordern
           </a>
        </div>
        
      </div>
    </section>
  );
};

export default WhyUs;