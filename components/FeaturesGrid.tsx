import React, { useState } from 'react';
import { Biohazard, Trash2, SprayCan, Home, Sparkles, Skull, X, ArrowRight, Building2, CalendarRange, Brush } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceType {
  icon: React.ElementType;
  title: string;
  description: string;
  detailText: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const services: ServiceType[] = [
    {
      icon: Biohazard,
      title: "Tatortreinigung",
      description: "Zertifizierte Reinigung nach Todesfällen.",
      detailText: "Unsere Tatortreinigung umfasst die komplette Beseitigung von Blut, Gewebe und Körperflüssigkeiten nach Leichenfunden, Unfällen oder Suiziden. Wir arbeiten strikt nach Infektionsschutzgesetz, desinfizieren alle betroffenen Bereiche und stellen die hygienische Unbedenklichkeit der Räumlichkeiten wieder her."
    },
    {
      icon: Skull,
      title: "Leichenfundort",
      description: "Sanierung nach langer Liegezeit.",
      detailText: "Bei längeren Liegezeiten entstehen besondere Herausforderungen durch Verwesungsprozesse. Wir entfernen kontaminierte Bodenbeläge, Putz oder Möbel und führen eine professionelle Geruchsneutralisation durch. Schädlingsbekämpfung ist oft Teil dieses Prozesses."
    },
    {
      icon: Trash2,
      title: "Messie-Wohnungen",
      description: "Entrümpelung und Grundreinigung.",
      detailText: "Wir helfen diskret und vorurteilsfrei. Vom Sortieren über den Abtransport von Müll bis hin zur klinischen Grundreinigung. Wir machen Wohnungen wieder bewohnbar und übergeben sie besenrein an Eigentümer oder Verwaltung."
    },
    {
      icon: Home,
      title: "Entrümpelung",
      description: "Haushaltsauflösungen komplett.",
      detailText: "Ob Keller, Dachboden oder ganzes Haus – wir entrümpeln schnell und fachgerecht. Wertsachen werden separiert, Restmüll wird umweltgerecht entsorgt. Inklusive Demontage von Einbauten und Entfernung von Bodenbelägen."
    },
    {
      icon: SprayCan,
      title: "Ozonbehandlung",
      description: "Dauerhafte Geruchsbeseitigung.",
      detailText: "Ozon (O3) spaltet Geruchsmoleküle auf und neutralisiert sie, statt sie nur zu überdecken. Ideal nach Leichenfunden, Bränden, bei Nikotingeruch oder Tiergerüchen. Der Raum ist danach geruchsneutral und desinfiziert."
    },
    {
      icon: Sparkles,
      title: "Spezialreinigung",
      description: "Fäkalien & Animal Hoarding.",
      detailText: "Extreme Verschmutzungen erfordern Spezialwissen. Wir reinigen Fäkalien-verschmutzte Wohnungen (z.B. nach Rohrbruch oder bei Pflegefällen) und sanieren Wohnungen nach Animal Hoarding Fällen inklusive Desinfektion."
    },
    {
      icon: Brush,
      title: "Grundreinigung",
      description: "Intensive Tiefenreinigung.",
      detailText: "Gründliche Reinigung bis in den letzten Winkel. Ideal nach Renovierungen, Umzügen oder bei starker Verschmutzung. Wir entfernen hartnäckigen Schmutz, Pflegefilme und Rückstände, die bei der normalen Reinigung übersehen werden."
    },
    {
      icon: CalendarRange,
      title: "Unterhaltsreinigung",
      description: "Regelmäßige Sauberkeit.",
      detailText: "Laufende Reinigung in festgelegten Intervallen für Büros, Praxen und Privathaushalte. Wir sorgen für dauerhafte Hygiene, saubere Oberflächen und ein gepflegtes Ambiente – ganz nach Ihrem Zeitplan."
    },
    {
      icon: Building2,
      title: "Gebäudereinigung",
      description: "Werterhalt Ihrer Immobilie.",
      detailText: "Umfassender Service für Immobilienverwaltungen und Eigentümer. Von der Treppenhausreinigung über Glasreinigung bis zur Pflege der Gemeinschaftsflächen sorgen wir für einen optimalen Eindruck."
    },
  ];

  const handleRequestClick = () => {
    setSelectedService(null);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Unsere Leistungen</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
             Professionelle Reinigung
          </h2>
          <p className="text-slate-500 text-base font-light">
            Klicken Sie auf eine Leistung für mehr Details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, idx) => (
            <motion.div 
               key={idx} 
               whileHover={{ y: -5 }}
               onClick={() => setSelectedService(service)}
               className="bg-slate-50 rounded-xl p-6 cursor-pointer border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300 shadow-sm">
                 <service.icon size={20} />
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2 font-heading group-hover:text-slate-900">
                 {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                 {service.description}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-200/50 w-full flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-800 uppercase tracking-wider transition-colors">
                <span>Details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
               <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
               >
                 <X size={20} />
               </button>

               <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-6 border border-slate-200">
                  <selectedService.icon size={28} />
               </div>

               <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{selectedService.title}</h3>
               <div className="h-1 w-20 bg-slate-200 mb-6 rounded-full"></div>
               
               <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {selectedService.detailText}
               </p>

               <button 
                  onClick={handleRequestClick}
                  className="w-full bg-brand-dark text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2"
               >
                  JETZT ANFRAGEN <ArrowRight size={18} />
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;