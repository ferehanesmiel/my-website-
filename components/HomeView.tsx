
import React from 'react';
import { Cpu, Code2, BrainCircuit, Rocket, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface HomeViewProps {
  lang: Language;
  t: any;
  onStart: () => void;
}

const TECH_STACK = [
  { name: 'React & Frontend', icon: <Code2 />, color: 'bg-blue-500/10 text-blue-500' },
  { name: 'Python Systems', icon: <Cpu />, color: 'bg-green-500/10 text-green-500' },
  { name: 'AI & Intelligence', icon: <BrainCircuit />, color: 'bg-[#A25035]/10 text-[#A25035]' },
  { name: 'Cloud Scale', icon: <Rocket />, color: 'bg-purple-500/10 text-purple-500' },
];

const HomeView: React.FC<HomeViewProps> = ({ lang, t, onStart }) => {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F0C09] pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/70 text-sm mb-8 backdrop-blur-sm">
             <span className="w-2 h-2 bg-[#A25035] rounded-full animate-pulse"></span>
             New Python & AI courses available
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
             Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48857] to-[#A25035]">Future</span> of Tech.
          </h1>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
             Empowering learners in Ethiopia and beyond with cutting-edge digital skills. Join zemendigital today.
          </p>
          <button 
            onClick={onStart}
            className="group bg-[#A25035] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-[#A25035]/40 flex items-center gap-3 mx-auto"
          >
            {t.startLearning}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Techy background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A25035] rounded-full blur-[160px]"></div>
           <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
           <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">{t.whatYouLearn}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TECH_STACK.map((tech, idx) => (
            <div key={idx} className="p-8 bg-white border border-[#B3A49C]/20 rounded-[30px] hover:shadow-xl transition-all group cursor-pointer">
              <div className={`w-14 h-14 ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(tech.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
              <p className="text-[#B3A49C] text-sm leading-relaxed">
                Expert-led curriculum designed for modern industry requirements.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeView;
