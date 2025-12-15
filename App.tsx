import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/FeaturesGrid';
import WhyUs from './components/DarkFeature';
import OzoneVisual from './components/OzoneVisual';
import Checklist from './components/Checklist';
import FAQSection from './components/FAQSection';
import Reviews from './components/Reviews';
import ServiceMap from './components/LogoCloud';
import Contact from './components/Pricing';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import { Impressum, Datenschutz, AGB } from './components/Legal';
import { Phone } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'impressum' | 'datenschutz' | 'agb'>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'impressum':
        return <Impressum />;
      case 'datenschutz':
        return <Datenschutz />;
      case 'agb':
        return <AGB />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <WhyUs />
            <OzoneVisual />
            <Checklist />
            <FAQSection />
            <Reviews />
            <ServiceMap />
            <Contact />
          </>
        );
    }
  };

  const handleNavigate = (view: 'home' | 'impressum' | 'datenschutz' | 'agb') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-slate-50 relative">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
      
      <WhatsAppBtn />

      {/* Mobile Sticky Call Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 md:hidden z-40">
        <a href="tel:01772458195" className="flex items-center justify-center gap-2 w-full bg-brand-dark text-white font-bold text-lg py-3.5 rounded-lg shadow-lg active:scale-95 transition-transform border border-slate-700">
          <Phone size={20} className="fill-current text-brand-accent animate-pulse" />
          Jetzt anrufen (24/7)
        </a>
      </div>
    </div>
  );
};

export default App;