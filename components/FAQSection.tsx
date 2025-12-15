import React, { useState } from 'react';
import { ChevronDown, Shield, HelpCircle, FileCheck, Banknote } from 'lucide-react';

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 bg-white"
        onClick={onClick}
      >
        <span className="font-bold text-brand-dark text-lg font-heading">{question}</span>
        <ChevronDown 
          className={`text-brand-accent transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <div 
        className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pt-2 border-t border-slate-50">
           {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'insurance' | 'faq'>('insurance');

  const insuranceData = [
    {
      q: "Wer übernimmt die Kosten einer Tatortreinigung?",
      a: "Die Kostenübernahme hängt vom Einzelfall ab. In vielen Fällen greifen Gebäudeversicherungen (bei Schäden an der Substanz), Hausratversicherungen (für Inventar) oder das Opferentschädigungsgesetz (bei Gewalttaten). Ist ein Nachlass vorhanden, können die Kosten daraus beglichen werden. Wir unterstützen Sie bei der Antragstellung und Kommunikation mit den Versicherern."
    },
    {
      q: "Zahlt die Gebäudeversicherung?",
      a: "Ja, die Gebäudeversicherung kommt oft für Schäden auf, die fest mit dem Gebäude verbunden sind (Böden, Estrich, Wände), insbesondere wenn durch Leichenfund (lange Liegezeit) Flüssigkeiten in die Bausubstanz eingedrungen sind."
    },
    {
      q: "Greift die Hausratversicherung?",
      a: "Die Hausratversicherung ist oft zuständig für die Reinigung oder Entsorgung von beweglichem Inventar (Möbel, Teppiche), das durch den Vorfall kontaminiert wurde."
    },
    {
      q: "Was, wenn das Erbe ausgeschlagen wird?",
      a: "Wenn das Erbe ausgeschlagen wird und keine Versicherung greift, übernimmt in manchen Fällen das Ordnungsamt oder das Gesundheitsamt die Kosten zur Gefahrenabwehr (Seuchenschutz). Wir beraten Sie hierzu gerne."
    }
  ];

  const generalData = [
    {
      q: "Wie schnell können Sie vor Ort sein?",
      a: "Als 24h-Notdienst sind wir im Rhein-Main-Gebiet in der Regel innerhalb von 60-90 Minuten am Einsatzort. Unser Team ist rund um die Uhr, auch an Wochenenden und Feiertagen, einsatzbereit."
    },
    {
      q: "Wie lange darf ich die Wohnung nicht betreten?",
      a: "Das Betreten ist in der Regel unmittelbar nach Abschluss unserer Arbeiten und der anschließenden Ozon-Behandlung (zur Geruchsneutralisation) wieder sicher möglich. Meistens ist dies nach 24 Stunden der Fall. Wir geben Ihnen eine genaue Freigabe."
    },
    {
      q: "Werden persönliche Dokumente gerettet?",
      a: "Ja, das ist ein wichtiger Teil unserer Arbeit. Wir filtern gezielt nach Testamenten, wichtigen Unterlagen, Bargeld und persönlichen Erinnerungsstücken und übergeben diese gereinigt an die Angehörigen."
    },
    {
      q: "Können Sie den Leichengeruch vollständig entfernen?",
      a: "Ja. Durch professionelle Reinigungsmittel und den Einsatz von industriellen Ozongeneratoren oder Verneblern neutralisieren wir organische Gerüche dauerhaft, anstatt sie nur zu überdecken."
    }
  ];

  const data = activeTab === 'insurance' ? insuranceData : generalData;

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
           <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Ratgeber & Hilfe</span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              Häufige Fragen &<br/>Kostenübernahme
           </h2>
           <p className="text-slate-600 text-lg font-light max-w-xl mx-auto">
              Wir wissen, dass jetzt viele Fragen offen sind. Hier finden Sie Antworten zu Versicherungen und Ablauf.
           </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button 
             onClick={() => { setActiveTab('insurance'); setOpenIndex(0); }}
             className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === 'insurance' ? 'bg-brand-dark text-white border-brand-dark shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          >
             <Banknote size={18} className={activeTab === 'insurance' ? 'text-brand-accent' : ''} />
             Versicherung & Kosten
          </button>
          <button 
             onClick={() => { setActiveTab('faq'); setOpenIndex(0); }}
             className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === 'faq' ? 'bg-brand-dark text-white border-brand-dark shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          >
             <HelpCircle size={18} className={activeTab === 'faq' ? 'text-brand-accent' : ''} />
             Ablauf & Angehörige
          </button>
        </div>

        <div className="space-y-4">
          {data.map((item, index) => (
            <AccordionItem 
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Trust Box */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-soft">
           <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Shield size={24} className="text-brand-accent" />
           </div>
           <div className="text-center sm:text-left">
              <h4 className="font-bold text-brand-dark mb-1">Kostenlose Erstberatung</h4>
              <p className="text-slate-500 text-sm">Unsicher bezüglich der Versicherung? Rufen Sie uns an, wir helfen Ihnen bei der Einschätzung.</p>
           </div>
           <a href="tel:01772458195" className="ml-auto bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors whitespace-nowrap">
              0177 2458195
           </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;