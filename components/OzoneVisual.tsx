import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Microscope } from 'lucide-react';

const OzoneVisual: React.FC = () => {
  // Generate random positions for ozone particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <section id="ozone" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wide mb-6">
              <Microscope size={12} />
              High-Tech Hygiene
           </div>
           
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Unsichtbare Gefahr.<br/>
              <span className="text-blue-400">Molekulare Lösung.</span>
           </h2>
           
           <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
              Herkömmliche Reinigung reicht oft nicht aus. Unsere industriellen Ozon-Generatoren fluten den Raum mit aktivem Sauerstoff (O₃). Dieser spaltet Geruchsmoleküle und zerstört die Zellmembranen von Bakterien und Viren.
           </p>

           <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                 <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 shrink-0">
                    <Zap size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-white mb-1">Neutralisation statt Überdeckung</h4>
                    <p className="text-sm text-slate-400">Gerüche werden nicht parfümiert, sondern auf molekularer Ebene eliminiert.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                 <div className="p-2 bg-green-500/20 rounded-lg text-green-400 shrink-0">
                    <ShieldCheck size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-white mb-1">100% Desinfektion</h4>
                    <p className="text-sm text-slate-400">Erreicht auch Ritzen, Polster und Tapeten, wo Wischen unmöglich ist.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Visual Animation Container */}
        <div className="relative h-[400px] md:h-[500px] w-full bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl shadow-blue-900/20">
           {/* Scanning Line */}
           <motion.div 
             className="absolute top-0 left-0 right-0 h-1 bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-20"
             animate={{ top: ["0%", "100%", "0%"] }}
             transition={{ duration: 4, ease: "linear", repeat: Infinity }}
           />
           
           <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Bacteria (Target) */}
              <motion.div 
                className="relative z-10"
                animate={{ scale: [1, 0.95, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                 {/* Blob Shape */}
                 <div className="w-32 h-32 md:w-48 md:h-48 bg-red-500/20 rounded-full blur-xl absolute inset-0 animate-pulse"></div>
                 <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-48 md:h-48 fill-red-500/80 drop-shadow-lg">
                    <path d="M45.7,-58.3C58.9,-46.8,69.1,-32.5,73.1,-16.9C77.1,-1.3,74.9,15.6,66.6,29.9C58.3,44.2,43.9,55.9,28.7,62.3C13.5,68.7,-2.5,69.8,-17.1,65.3C-31.7,60.8,-44.9,50.7,-55.4,37.6C-65.9,24.5,-73.7,8.4,-72.1,-6.6C-70.5,-21.6,-59.5,-35.5,-47.2,-46.6C-34.9,-57.7,-21.3,-66,-6.6,-68.1C8.1,-70.3,28.8,-66.3,45.7,-58.3Z" transform="translate(100 100)" />
                 </svg>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-200 font-mono text-xs font-bold tracking-widest uppercase opacity-80">
                    Bakterium
                 </div>
              </motion.div>

              {/* Ozone Particles (Attacking) */}
              {particles.map((p) => (
                 <motion.div
                    key={p.id}
                    className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60A5FA]"
                    initial={{ 
                       x: (p.x - 50) * 5, // Spread out
                       y: (p.y - 50) * 5,
                       opacity: 0
                    }}
                    animate={{ 
                       x: [ (p.x - 50) * 5, 0 ], // Move to center
                       y: [ (p.y - 50) * 5, 0 ],
                       opacity: [0, 1, 0], // Fade in then vanish on impact
                       scale: [0.5, 1.2, 0]
                    }}
                    transition={{ 
                       duration: 3, 
                       repeat: Infinity, 
                       delay: p.delay,
                       ease: "easeInOut"
                    }}
                 />
              ))}
              
              {/* HUD Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end font-mono text-xs text-blue-300/70">
                 <div>
                    <p>O3 CONCENTRATION: HIGH</p>
                    <p>TARGET STATUS: NEUTRALIZING</p>
                 </div>
                 <div className="flex gap-1">
                    <span className="animate-pulse">●</span> REC
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default OzoneVisual;