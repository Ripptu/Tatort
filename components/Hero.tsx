import React from 'react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Gradients (Subtle Gray) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-slate-200/40 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[100px] -z-10"></div>
      
      <div className="flex flex-col items-center text-center">
        {/* Main Content */}
        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-widest mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            Zertifizierter Fachbetrieb
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-brand-dark leading-[1.15] mb-8">
            <span className="gradient-text">Tatortreinigung</span> &<br/>
            Spezialreinigung
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
             <div className="h-px w-12 bg-slate-400"></div>
             <p className="text-xl md:text-2xl font-serif italic text-slate-500">
                Diskret. Pietätvoll. Professionell.
             </p>
             <div className="h-px w-12 bg-slate-400"></div>
          </div>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light mx-auto">
            Tatortreinigung & Entrümpelung 24 ist Ihr professioneller, zertifizierter Fachbetrieb für Tatortreinigung, Leichenfundortreinigung, Spezial- und Extremreinigungen sowie Messie-Wohnungsreinigung und Haushaltsentrümpelung. Wir stehen Ihnen 24 Stunden täglich, 7 Tage die Woche zur Verfügung - diskret, zuverlässig und schnell.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <a href="tel:01772458195" className="bg-brand-dark text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 transition-all duration-300 min-w-[200px]">
              <Phone size={20} className="text-white animate-pulse" />
              0177 2458195
            </a>
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="bg-white text-brand-dark border border-slate-200 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all min-w-[200px]"
            >
              Beratung anfordern <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-slate-700 font-medium justify-center max-w-md mx-auto">
             <div className="flex items-center gap-2.5 justify-center">
                <CheckCircle2 size={18} className="text-slate-500" />
                <span>100% Diskret</span>
             </div>
             <div className="flex items-center gap-2.5 justify-center">
                <CheckCircle2 size={18} className="text-slate-500" />
                <span>Schnelle Anfahrt</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;