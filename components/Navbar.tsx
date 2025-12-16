import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (view: 'home' | 'impressum' | 'datenschutz' | 'agb') => void;
  currentView: 'home' | 'impressum' | 'datenschutz' | 'agb';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled (for background style)
      setScrolled(currentScrollY > 20);

      // Determine visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [lastScrollY]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Leistungen', id: 'services' },
    { name: 'Ablauf', id: 'why-us' },
    { name: 'Ratgeber', id: 'checklist' },
    { name: 'Kontakt', id: 'contact' }
  ];

  return (
    <>
      {/* Top Bar - Extra Thin */}
      <div className="bg-brand-dark text-white py-1 px-4 text-center text-[10px] font-medium relative z-50 tracking-wide">
         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
            <div className="hidden sm:flex items-center gap-2 text-slate-400">
              <ShieldCheck size={10} className="text-brand-accent" />
              <span>Zertifizierter Tatortreiniger - 24h Notdienst im Rhein-Main-Gebiet & Mannheim</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="font-semibold text-slate-200">
                Notdienst aktiv <span className="text-slate-500 mx-1">|</span> {currentTime} Uhr
              </span>
            </div>
         </div>
      </div>

      {/* Smart Sticky Navbar - Thinner */}
      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-md py-1.5 border-b border-slate-200' 
            : 'top-[24px] bg-white/0 py-2 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Area */}
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group focus:outline-none">
              <div className="relative">
                 {/* Show Back Arrow only on sub-pages */}
                 {currentView !== 'home' && (
                   <div className={`flex items-center gap-2 text-brand-dark ${scrolled ? 'h-7' : 'h-8 md:h-10'}`}>
                      <ArrowLeft size={18} />
                      <span className="text-sm font-bold">Zurück</span>
                   </div>
                 )}
              </div>
              
              {/* Text Logo - Always visible, no image logo */}
              <div className={`text-left transition-opacity duration-300 ${scrolled && currentView !== 'home' ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                <div className="font-heading font-bold text-brand-dark leading-tight text-lg md:text-xl">Tatortreinigung & Entrümpelung 24</div>
                <div className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">Mainz & Rhein-Main-Gebiet & Mannheim</div>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <a 
                  key={item.name}
                  href={`#${item.id}`} 
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className="text-[11px] font-bold uppercase tracking-wide text-slate-600 hover:text-brand-dark transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:01772458195" className="bg-brand-dark text-white px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:-translate-y-0.5">
                <Phone size={12} className="text-brand-accent animate-pulse" />
                <span>0177 2458195</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
               <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-1.5 text-brand-dark hover:bg-slate-100 rounded-lg transition-colors"
               >
                 {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 z-40 backdrop-blur-sm md:hidden"
            />
            <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl md:hidden flex flex-col"
            >
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                   <span className="font-bold text-lg text-brand-dark">Menü</span>
                   <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white rounded-full text-slate-500 shadow-sm border border-slate-200">
                      <X size={20} />
                   </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-5">
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => { setMobileMenuOpen(false); onNavigate('home'); }} 
                      className="flex items-center justify-between text-lg font-medium text-slate-700 py-4 border-b border-slate-50 active:bg-slate-50 px-2 rounded-lg"
                    >
                      Startseite
                      <span className="text-slate-300">→</span>
                    </button>
                    {navLinks.map((item) => (
                      <a 
                        key={item.name}
                        href={`#${item.id}`}
                        onClick={(e) => handleLinkClick(e, item.id)} 
                        className="flex items-center justify-between text-lg font-medium text-slate-700 py-4 border-b border-slate-50 active:bg-slate-50 px-2 rounded-lg"
                      >
                        {item.name}
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-5 border-t border-slate-100 bg-slate-50">
                  <a href="tel:01772458195" className="w-full bg-brand-dark text-white px-4 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
                    <Phone size={20} className="text-brand-accent" />
                    Notdienst anrufen
                  </a>
                  <p className="text-center text-xs text-slate-400 mt-4">24/7 erreichbar im Rhein-Main-Gebiet</p>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;