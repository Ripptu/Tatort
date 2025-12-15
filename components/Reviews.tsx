import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// German Reviews Data
const testimonials = [
  {
    text: "Sehr professionelle und diskrete Abwicklung. In einer so schweren Zeit waren wir dankbar für die einfühlsame Unterstützung.",
    initial: "T",
    name: "Thomas W.",
    role: "Kunde aus Mainz",
  },
  {
    text: "Der Notdienst war auch am Sonntag sofort erreichbar. Die Mitarbeiter waren pünktlich und haben unglaublich sauber gearbeitet.",
    initial: "S",
    name: "Sabine K.",
    role: "Kundin aus Frankfurt",
  },
  {
    text: "Transparente Kostenaufstellung und Hilfe bei der Versicherung. Wir mussten uns um nichts kümmern. Klare Weiterempfehlung.",
    initial: "M",
    name: "Michael B.",
    role: "Kunde aus Wiesbaden",
  },
  {
    text: "Absolut empfehlenswert. Schnell, sauber und sehr respektvoll im Umgang mit der Situation.",
    initial: "A",
    name: "Andreas H.",
    role: "Kunde aus Darmstadt",
  },
  {
    text: "Die Wohnung wurde perfekt gereinigt und geruchsneutral übergeben. Eine riesige Erleichterung für uns.",
    initial: "E",
    name: "Elke M.",
    role: "Kundin aus Offenbach",
  },
  {
    text: "Ich war beeindruckt von der schnellen Reaktion. Innerhalb von 2 Stunden war jemand vor Ort.",
    initial: "J",
    name: "Jürgen P.",
    role: "Kunde aus Mannheim",
  },
  {
    text: "Sehr faire Preise und keine versteckten Kosten. Das Team war sehr freundlich und professionell.",
    initial: "C",
    name: "Claudia R.",
    role: "Kundin aus Hanau",
  },
  {
    text: "Die Entrümpelung verlief reibungslos. Sehr saubere Arbeit.",
    initial: "P",
    name: "Peter L.",
    role: "Kunde aus Rüsselsheim",
  },
  {
    text: "Vielen Dank für die schnelle Hilfe. Ich kann diese Firma nur weiterempfehlen.",
    initial: "K",
    name: "Kerstin S.",
    role: "Kundin aus Mainz",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, initial, name, role }, i) => (
              <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow max-w-xs w-full" key={i}>
                <div className="flex text-yellow-400 gap-0.5 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                </div>
                <div className="text-slate-600 text-sm leading-relaxed mb-6">"{text}"</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">
                    {initial}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-slate-900 text-sm">{name}</div>
                    <div className="text-xs text-slate-400">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Reviews = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block border border-slate-200 bg-white py-1 px-4 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 shadow-sm">
            Kundenstimmen
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            Vertrauen ist unsere<br/>Basis
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Sehen Sie, was unsere Kunden über unsere Arbeit sagen.
          </p>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={38} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;