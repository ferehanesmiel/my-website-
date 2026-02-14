
import React from 'react';
import { Course } from '../types';
import { Play, Star, Users } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className={`group p-6 rounded-[20px] transition-all hover:shadow-xl hover:translate-y-[-4px] border border-transparent hover:border-[#B3A49C]/20 bg-white`}>
      <div className={`w-full h-40 ${course.bgColor} rounded-[20px] mb-4 overflow-hidden relative flex items-center justify-center group-hover:brightness-95 transition-all`}>
        <div className="absolute top-4 left-4 flex gap-2">
           <span className="bg-white/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
             {course.category}
           </span>
        </div>
        <Play size={40} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="currentColor" />
      </div>

      <h3 className="text-lg font-bold mb-1 leading-tight">{course.title}</h3>
      <p className="text-[#B3A49C] text-sm mb-4">Duration: {course.duration}</p>

      <div className="flex items-center justify-between pt-4 border-t border-[#B3A49C]/10">
        <div className="flex items-center gap-3">
          <img 
            src={course.avatar} 
            alt={course.instructor} 
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="text-sm font-medium text-[#0F0C09]">{course.instructor}</span>
        </div>
        
        <button className="bg-[#A25035]/10 text-[#A25035] p-2.5 rounded-xl hover:bg-[#A25035] hover:text-white transition-all active:scale-90">
          <Play size={18} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
