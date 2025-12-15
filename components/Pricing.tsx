import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Synthesize a pleasant "Success" chime using Web Audio API
  const playSuccessSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      // Melody: High C -> High E -> High G (Major Triad)
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5
      
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      console.error("Audio play failed", e);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const category = formData.get('category') as string;
    const message = formData.get('message') as string;

    // Construct mailto link
    const subject = `Anfrage: ${category} von ${name}`;
    const body = `Name: ${name}\nTelefon: ${phone}\nKategorie: ${category}\n\nNachricht:\n${message}`;
    
    const mailtoLink = `mailto:info@tatortreinigung-entruempelung24.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Simulate slight delay for UI feedback then open mail client
    setTimeout(() => {
      window.location.href = mailtoLink;
      setFormState('success');
      playSuccessSound();
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">24/7 Notdienst</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Wir sind für Sie da.</h2>
          <p className="text-slate-600 font-light text-lg max-w-xl mx-auto">
            Melden Sie sich jederzeit. Wir behandeln Ihre Anfrage streng vertraulich und diskret.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
           
           {/* Contact Info Cards */}
           <div className="space-y-6">
              <motion.a 
                href="tel:01772458195" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-6 p-8 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <Phone size={28} />
                </div>
                <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Notfall Nummer (24h)</p>
                    <p className="text-3xl font-bold text-brand-dark">0177 2458195</p>
                    <p className="text-sm text-green-600 font-medium mt-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Jetzt erreichbar</p>
                </div>
              </motion.a>

              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 mb-4">
                       <Mail size={20} />
                    </div>
                    <h4 className="font-bold text-brand-dark mb-1">E-Mail</h4>
                    <p className="text-sm text-slate-500 break-words">info@tatortreinigung-entruempelung24.de</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 mb-4">
                       <MapPin size={20} />
                    </div>
                    <h4 className="font-bold text-brand-dark mb-1">Hauptsitz</h4>
                    <p className="text-sm text-slate-500">Hauptstraße 197<br/>55120 Mainz</p>
                 </div>
              </div>

              <div className="bg-brand-dark rounded-2xl p-8 text-white relative overflow-hidden">
                 <div className="relative z-10 flex items-start gap-4">
                    <Clock className="text-brand-accent shrink-0 mt-1" />
                    <div>
                       <h4 className="font-bold text-lg mb-2">Schnelle Reaktionszeit</h4>
                       <p className="text-slate-300 font-light text-sm leading-relaxed">
                          Wir garantieren einen Rückruf innerhalb von 15 Minuten und sind im Notfall in 60-90 Minuten vor Ort im gesamten Rhein-Main-Gebiet.
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Contact Form */}
           <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                       <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Anfrage vorbereitet</h3>
                    <p className="text-slate-500 mb-8">Ihr E-Mail-Programm sollte sich geöffnet haben. Bitte senden Sie die E-Mail ab, um die Anfrage abzuschließen.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-brand-dark font-medium hover:underline text-sm"
                    >
                      Neue Anfrage senden
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    <h3 className="text-2xl font-bold text-brand-dark mb-6">Rückruf anfordern</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Name</label>
                          <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all" placeholder="Ihr Name" />
                       </div>
                       <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Telefon</label>
                          <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all" placeholder="Rückrufnummer" />
                       </div>
                    </div>

                    <div className="space-y-1">
                       <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Anliegen</label>
                       <select name="category" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all text-slate-700">
                          <option value="Allgemein">Bitte wählen...</option>
                          <option value="Tatortreinigung">Tatortreinigung</option>
                          <option value="Leichenfundort">Leichenfundort</option>
                          <option value="Entrümpelung">Entrümpelung</option>
                          <option value="Sonstiges">Sonstiges</option>
                       </select>
                    </div>

                    <div className="space-y-1">
                       <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Nachricht (Optional)</label>
                       <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all resize-none" placeholder="Wie können wir helfen?"></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState === 'submitting'}
                      className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Absenden <Send size={18} />
                        </>
                      )}
                    </motion.button>
                    <p className="text-xs text-slate-400 text-center mt-4">Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.</p>
                  </motion.form>
                )}
              </AnimatePresence>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;