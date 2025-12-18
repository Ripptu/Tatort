import React, { useState } from 'react';
import { ChevronDown, Shield, Banknote, Sparkles } from 'lucide-react';

type AccordionItemProps = {
  question: string;
  answer: React.ReactNode;
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
        className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pt-2 border-t border-slate-50 text-sm md:text-base">
           {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'costs' | 'services'>('costs');

  const costData = [
    {
      q: "Wie setzen sich die Kosten bei Tatort- und Leichenfundortreinigungen zusammen?",
      a: (
        <>
          <p className="mb-2">Die Kosten richten sich nach dem Reinigungsgrad und dem tatsächlichen Aufwand, nicht pauschal nach der Wohnfläche.</p>
          <p className="mb-2 font-semibold">Entscheidend sind unter anderem:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Art und Umfang der Verunreinigung</li>
            <li>betroffene Bereiche (Reinigungszonen)</li>
            <li>erforderliche Schutz-, Desinfektions- und Spezialmaßnahmen</li>
          </ul>
          <p>Jeder Einsatz wird individuell eingeschätzt.</p>
        </>
      )
    },
    {
      q: "Was bedeutet Reinigung nach Zonen?",
      a: (
        <>
          <p className="mb-2">Bei Tatort-, Leichenfundort- und Spezialreinigungen werden die betroffenen Bereiche in Reinigungszonen eingeteilt. Je nach Zone unterscheiden sich Arbeitsaufwand, Hygienemaßnahmen und Reinigungsverfahren.</p>
          <p className="font-semibold mb-1">So stellen wir sicher, dass:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>alle belasteten Bereiche fachgerecht gereinigt werden</li>
            <li>die Kosten transparent kalkuliert bleiben</li>
          </ul>
        </>
      )
    },
    {
      q: "Gibt es einen Pauschalpreis?",
      a: (
        <>
          <p className="mb-2"><strong>Ja.</strong> Nach einer Einschätzung vor Ort oder anhand der vorhandenen Informationen bieten wir Ihnen einen verbindlichen Pauschalpreis an.</p>
          <p>Dieser umfasst alle vereinbarten Leistungen – ohne versteckte Zusatzkosten.</p>
        </>
      )
    },
    {
      q: "Wer trägt die Kosten für die Reinigung?",
      a: (
        <>
          <p className="mb-2">In den meisten Fällen werden die Kosten vom Auftraggeber getragen.</p>
          <p className="mb-2">In bestimmten Situationen kann eine Beteiligung einer Versicherung möglich sein, abhängig vom jeweiligen Einzelfall.</p>
          <p>Gerne klären wir dies transparent im persönlichen Gespräch.</p>
        </>
      )
    },
    {
      q: "Entstehen zusätzliche Kosten während der Arbeiten?",
      a: (
        <>
          <p className="mb-2"><strong>Nein.</strong></p>
          <p>Nach Vereinbarung eines Pauschalpreises entstehen keine zusätzlichen Kosten, sofern sich der Arbeitsumfang nicht ändert.</p>
        </>
      )
    }
  ];

  const serviceData = [
    {
      q: "Welche Leistungen bieten Sie an?",
      a: (
        <>
          <p className="mb-2 font-semibold">Wir sind spezialisiert auf:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Tatortreinigung</li>
            <li>Leichenfundortreinigung</li>
            <li>Spezial- und Extremreinigungen</li>
          </ul>
          <p className="mb-2 font-semibold">Zusätzlich bieten wir:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Grundreinigungen</li>
            <li>Unterhaltsreinigungen</li>
          </ul>
          <p>an – sowohl im privaten als auch im gewerblichen Bereich.</p>
        </>
      )
    },
    {
      q: "Wie läuft eine Tatort- oder Leichenfundortreinigung ab?",
      a: (
        <>
          <p className="mb-2">Nach der Kontaktaufnahme besprechen wir den Sachverhalt, schätzen den Aufwand ein und vereinbaren den Ablauf.</p>
          <p className="mb-2">Die Reinigung erfolgt diskret, gründlich und nach höchsten Hygienestandards.</p>
          <p>Nach Abschluss sind die Räume wieder sicher und nutzbar.</p>
        </>
      )
    },
    {
      q: "Bieten Sie auch Grund- und Unterhaltsreinigung an?",
      a: (
        <>
          <p className="mb-2"><strong>Ja.</strong> Neben Spezial- und Extremreinigungen führen wir auch:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Grundreinigungen (z. B. nach Renovierungen oder bei starker Verschmutzung)</li>
            <li>Unterhaltsreinigungen (regelmäßige Reinigung von Objekten)</li>
          </ul>
          <p>fachgerecht und zuverlässig durch.</p>
        </>
      )
    },
    {
      q: "Wie schnell sind Sie einsatzbereit?",
      a: (
        <>
          <p className="mb-2">Wir bieten einen <strong>24-Stunden-Notdienst</strong>.</p>
          <p>In dringenden Fällen sind wir kurzfristig einsatzbereit – auch an Wochenenden und Feiertagen.</p>
        </>
      )
    }
  ];

  const data = activeTab === 'costs' ? costData : serviceData;

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
           <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Transparenz & Information</span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
              Häufige Fragen & Kosten<br/>
              <span className="text-slate-500 text-2xl md:text-3xl">Tatort-, Leichenfundort- & Spezialreinigung</span>
           </h2>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button 
             onClick={() => { setActiveTab('costs'); setOpenIndex(0); }}
             className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === 'costs' ? 'bg-brand-dark text-white border-brand-dark shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          >
             <Banknote size={18} className={activeTab === 'costs' ? 'text-brand-accent' : ''} />
             Kosten & Preise
          </button>
          <button 
             onClick={() => { setActiveTab('services'); setOpenIndex(0); }}
             className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === 'services' ? 'bg-brand-dark text-white border-brand-dark shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          >
             <Sparkles size={18} className={activeTab === 'services' ? 'text-brand-accent' : ''} />
             Leistungen & Ablauf
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
              <p className="text-slate-500 text-sm">Unsicher wegen der Kosten oder dem Ablauf? Rufen Sie uns an.</p>
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