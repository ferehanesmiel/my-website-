
import React from 'react';
import { PlayCircle, Clock } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface HeroBannerProps {
  title: string;
  progress: number;
  lastLesson: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, progress, lastLesson }) => {
  return (
    <div className="bg-[#A25035] rounded-[20px] p-8 text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group shadow-2xl shadow-[#A25035]/20">
      <div className="flex-1 relative z-10">
        <div className="flex items-center gap-2 mb-4 bg-white/10 w-fit px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border border-white/20">
          <Clock size={14} />
          <span>CONTINUE LEARNING</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-white/80 mb-8 max-w-md">Next lesson: <span className="font-semibold text-white">"{lastLesson}"</span>. Keep up the great pace!</p>
        
        <div className="max-w-md">
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="font-medium">Course Progress</span>
            <span className="font-bold">{progress}%</span>
          </div>
          <ProgressBar value={progress} color="bg-[#C48857]" height="h-3" />
        </div>
      </div>

      <div className="relative z-10 md:w-48 flex flex-col items-center gap-4">
        <button className="bg-white text-[#A25035] px-8 py-3 rounded-2xl font-bold flex items-center gap-3 transition-all hover:bg-[#F7F7F7] active:scale-95 shadow-lg group-hover:translate-y-[-2px]">
          <PlayCircle size={24} />
          Resume
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-[#C48857]/20 rounded-full translate-y-1/2 blur-2xl"></div>
    </div>
  );
};

export default HeroBanner;
