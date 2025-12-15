import React from 'react';
import { Phone, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

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
      
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-widest mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            Zertifizierter Fachbetrieb
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-brand-dark leading-[1.15] mb-8">
            <span className="gradient-text">Tatortreinigung</span> &<br/>
            Spezialreinigung
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px w-12 bg-slate-400"></div>
             <p className="text-xl md:text-2xl font-serif italic text-slate-500">
                Diskret. Pietätvoll. Professionell.
             </p>
          </div>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-light">
            24h Notdienst im Rhein-Main-Gebiet & Mannheim. Wir kümmern uns um Tatorte, Leichenfundorte und Entrümpelungen – damit Sie sich auf das Wichtige konzentrieren können.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-sm text-slate-700 font-medium">
             <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-slate-500" />
                <span>100% Diskret</span>
             </div>
             <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-slate-500" />
                <span>Staatl. geprüft</span>
             </div>
             <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-slate-500" />
                <span>Schnelle Anfahrt</span>
             </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block group h-[600px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/5 border border-slate-200">
            <img 
               src="https://i.postimg.cc/J4Y44gP6/a141551b-b8cd-44ed-92cf-e4c4f96858b2.png" 
               alt="Professionelle Tatortreinigung" 
               className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-panel p-5 rounded-xl flex items-center gap-5 border-l-4 border-slate-900 shadow-lg">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Shield size={24} />
                  </div>
                  <div>
                      <p className="font-bold text-slate-900 leading-tight mb-1">Zertifizierte Hygiene</p>
                      <p className="text-xs text-slate-600 font-medium uppercase tracking-wide">Nach Infektionsschutzgesetz</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;