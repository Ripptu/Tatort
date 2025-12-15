import React from 'react';
import { CheckCircle, Clock, HeartHandshake, Award } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           {/* Content */}
           <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-4">
                 <div className="h-px w-8 bg-slate-400"></div>
                 <span className="text-slate-500 font-serif italic text-lg">Ihre Sicherheit</span>
              </div>
              
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                 Warum <span className="text-brand-primary">Tatortreinigung 24?</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                 In emotionalen Ausnahmesituationen brauchen Sie einen Partner, auf den Sie sich verlassen können. Wir arbeiten menschlich, diskret und professionell.
              </p>

              <div className="space-y-6">
                 {[
                    { title: "Zertifizierter Fachbetrieb", text: "Strenge Einhaltung aller Hygienestandards.", icon: Award },
                    { title: "24/7 Notdienst", text: "Erreichbar auch an Wochenenden & Feiertagen.", icon: Clock },
                    { title: "Absolute Diskretion", text: "Neutrale Fahrzeuge und Kleidung.", icon: HeartHandshake },
                    { title: "Transparente Preise", text: "Festpreisangebot nach Besichtigung.", icon: CheckCircle },
                 ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                       <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shrink-0 text-slate-400 group-hover:text-slate-900 group-hover:border-slate-900/50 transition-all duration-300">
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

           {/* UI Visual / Image Placeholder */}
           <div className="order-1 lg:order-2 relative h-[500px] w-full">
              <div className="absolute top-8 -right-8 w-full h-full border-2 border-slate-100 rounded-2xl z-0"></div>
              
              <div className="relative z-10 rounded-2xl shadow-xl w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 border border-slate-300">
                 <div className="flex flex-col items-center gap-3">
                   <div className="w-16 h-16 bg-slate-300 rounded-full"></div>
                   <span className="font-medium uppercase tracking-widest text-sm">Platzhalter Bild</span>
                 </div>
              </div>
              
              {/* Floating Quote */}
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl max-w-sm z-20 border-t-4 border-slate-900">
                 <div className="flex gap-1 text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                 </div>
                 <p className="text-brand-dark text-lg font-serif italic mb-4 leading-relaxed">"Schnell, sauber und sehr einfühlsam. Danke für die schnelle Hilfe in dieser schweren Zeit."</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-sm text-slate-500 font-serif">FM</div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Familie M., Frankfurt</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;