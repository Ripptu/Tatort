import React, { useState, useRef } from 'react';
import { Camera, Upload, CheckCircle2, AlertTriangle, Smartphone, ScanLine, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AiAnalysis: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      startScan();
    }
  };

  const startScan = () => {
    setStatus('scanning');
    // Simulate AI processing time
    setTimeout(() => {
      setStatus('complete');
    }, 3500);
  };

  const openWhatsApp = () => {
    const text = "Hallo, ich habe hier ein Foto für die KI-Analyse hochgeladen. Können Sie mir eine Einschätzung geben?";
    window.open(`https://wa.me/491772458195?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="ai-analysis" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"></div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] w-full h-full opacity-10">
            {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-slate-700"></div>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-xs font-bold uppercase tracking-wide mb-6 shadow-lg shadow-blue-500/20">
               <ScanLine size={12} />
               KI-Foto-Analyse Beta
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
               Schnell-Einschätzung<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">durch künstliche Intelligenz.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
               Unsicher über den Aufwand? Laden Sie anonym ein Foto des Raumes hoch. Unsere KI analysiert den Verschmutzungsgrad und hilft uns, Ihnen sofort ein Angebot zu machen.
            </p>

            <ul className="space-y-4 mb-10">
               {[
                 { text: "100% Anonym & Diskret", icon: CheckCircle2 },
                 { text: "Sofortige Ersteinschätzung", icon: CheckCircle2 },
                 { text: "Direkter WhatsApp-Expertensupport", icon: Smartphone },
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-300">
                    <item.icon className="text-green-400" size={20} />
                    {item.text}
                 </li>
               ))}
            </ul>

            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 flex gap-4 items-start">
               <AlertTriangle className="text-yellow-400 shrink-0 mt-1" size={20} />
               <p className="text-xs text-slate-400 leading-relaxed">
                  Hinweis: Die KI-Analyse dient als erste Orientierung. Für ein verbindliches Festpreisangebot prüft einer unserer zertifizierten Experten das Bild persönlich im Anschluss.
               </p>
            </div>
          </div>

          {/* Right: Interactive Scanner */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative mx-auto bg-slate-950 border-8 border-slate-800 rounded-[3rem] h-[600px] w-full max-w-sm shadow-2xl overflow-hidden flex flex-col">
               
               {/* Phone Notch/Header */}
               <div className="h-8 bg-slate-950 w-full z-20 flex justify-center items-end pb-2">
                  <div className="w-24 h-4 bg-slate-900 rounded-full"></div>
               </div>

               {/* Screen Content */}
               <div className="flex-1 bg-slate-900 relative flex flex-col p-6">
                  
                  {status === 'idle' && (
                     <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-700 rounded-2xl bg-slate-800/30 p-8 text-center transition-all hover:bg-slate-800/50 hover:border-blue-500/50">
                        <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-6">
                           <Camera size={40} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Foto hochladen</h3>
                        <p className="text-sm text-slate-400 mb-8">Machen Sie ein Foto vom Raum oder wählen Sie eines aus der Galerie.</p>
                        <button 
                           onClick={() => fileInputRef.current?.click()}
                           className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                           <Upload size={18} />
                           Bild auswählen
                        </button>
                        <input 
                           type="file" 
                           ref={fileInputRef} 
                           onChange={handleFileChange} 
                           accept="image/*" 
                           className="hidden" 
                        />
                     </div>
                  )}

                  {status === 'scanning' && preview && (
                     <div className="flex-1 relative rounded-2xl overflow-hidden bg-black">
                        <img src={preview} alt="Upload" className="w-full h-full object-cover opacity-60" />
                        
                        {/* Scanning Grid */}
                        <div className="absolute inset-0 z-10 opacity-30" 
                           style={{ backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>

                        {/* Scanning Beam */}
                        <motion.div 
                           className="absolute top-0 left-0 w-full h-2 bg-green-400 shadow-[0_0_20px_#4ade80] z-20"
                           animate={{ top: ["0%", "100%", "0%"] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="absolute bottom-10 left-0 right-0 text-center z-30">
                           <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-green-400 font-mono text-xs font-bold border border-green-500/30">
                              <Loader2 size={12} className="animate-spin" />
                              ANALYSING PIXELS...
                           </div>
                        </div>
                     </div>
                  )}

                  {status === 'complete' && preview && (
                     <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="flex-1 flex flex-col"
                     >
                        <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-green-500/30">
                           <img src={preview} alt="Analyzed" className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                           <div className="absolute bottom-3 left-3 flex gap-2">
                              <span className="px-2 py-1 bg-green-500 rounded text-[10px] font-bold text-black uppercase">Biohazard Detected</span>
                              <span className="px-2 py-1 bg-blue-500 rounded text-[10px] font-bold text-white uppercase">Complex</span>
                           </div>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 mb-6 flex-1">
                           <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                              <CheckCircle2 size={18} className="text-green-400" />
                              Analyse abgeschlossen
                           </h4>
                           <div className="space-y-3">
                              <div className="flex justify-between text-sm">
                                 <span className="text-slate-400">Objekttyp:</span>
                                 <span className="text-white font-medium">Innenraum</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                 <span className="text-slate-400">Komplexität:</span>
                                 <span className="text-yellow-400 font-medium">Hoch</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                 <span className="text-slate-400">Dringlichkeit:</span>
                                 <span className="text-red-400 font-medium">Sofort empfohlen</span>
                              </div>
                              <div className="h-px bg-slate-700 my-2"></div>
                              <p className="text-xs text-slate-400 italic">
                                 "Basierend auf dem Bild empfehlen wir eine Spezialreinigung mit Ozon-Behandlung."
                              </p>
                           </div>
                        </div>

                        <button 
                           onClick={openWhatsApp}
                           className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                        >
                           <Smartphone size={20} />
                           Ergebnis an Experte senden
                           <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-[10px] text-center text-slate-500 mt-3">Öffnet WhatsApp Chat</p>
                     </motion.div>
                  )}

               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiAnalysis;