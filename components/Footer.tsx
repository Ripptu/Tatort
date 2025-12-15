import React from 'react';
import { ShieldCheck, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'impressum' | 'datenschutz' | 'agb') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-slate-900 via-brand-accent to-slate-900 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
           
           {/* Brand Section */}
           <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-brand-accent border border-slate-800 shadow-lg">
                   <ShieldCheck size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg text-white leading-tight">Tatortreinigung</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Mainz & Rhein-Main</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                 Ihr zertifizierter Partner für schwierige Situationen. Wir arbeiten diskret, schnell und nach strengsten Hygiene-Standards.
              </p>
              <div className="flex gap-4">
                 {/* Social Placeholders / Trust Badges */}
                 <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-default">
                    <span className="text-[10px] font-bold">DE</span>
                 </div>
                 <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-default">
                    <span className="text-[10px] font-bold">ISO</span>
                 </div>
              </div>
           </div>
           
           {/* Quick Links */}
           <div>
              <h4 className="font-bold text-white mb-6 font-heading tracking-wide">Leistungen</h4>
              <ul className="space-y-3 text-sm">
                 <li><a href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-brand-accent"></span> Tatortreinigung</a></li>
                 <li><a href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-brand-accent"></span> Leichenfundort</a></li>
                 <li><a href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-brand-accent"></span> Entrümpelung</a></li>
                 <li><a href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-brand-accent"></span> Ozonbehandlung</a></li>
              </ul>
           </div>

           {/* Contact Info */}
           <div>
              <h4 className="font-bold text-white mb-6 font-heading tracking-wide">Kontakt</h4>
              <ul className="space-y-4 text-sm">
                 <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-slate-500 mt-1 shrink-0" />
                    <span>Hauptstraße 197<br/>55120 Mainz</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Mail size={16} className="text-slate-500 shrink-0" />
                    <a href="mailto:info@tatortreinigung-entruempelung24.de" className="hover:text-white transition-colors break-all">info@tatortreinigung-entruempelung24.de</a>
                 </li>
                 <li className="flex items-center gap-3">
                    <Phone size={16} className="text-slate-500 shrink-0" />
                    <a href="tel:01772458195" className="hover:text-white transition-colors font-bold">0177 2458195</a>
                 </li>
              </ul>
           </div>

           {/* Call to Action Column */}
           <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50">
              <h4 className="font-bold text-white mb-2 font-heading">Notfall?</h4>
              <p className="text-xs text-slate-500 mb-4">Wir sind 24/7 für Sie erreichbar.</p>
              <a href="tel:01772458195" className="flex items-center justify-between w-full bg-white text-brand-dark px-4 py-3 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors group">
                 0177 2458195
                 <ArrowUpRight size={16} className="text-slate-400 group-hover:text-brand-dark transition-colors" />
              </a>
           </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
           <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Tatortreinigung & Entrümpelung 24.
           </div>
           <div className="flex gap-6">
              <button onClick={() => onNavigate('impressum')} className="hover:text-slate-300 transition-colors">Impressum</button>
              <button onClick={() => onNavigate('datenschutz')} className="hover:text-slate-300 transition-colors">Datenschutz</button>
              <button onClick={() => onNavigate('agb')} className="hover:text-slate-300 transition-colors">AGB</button>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;