
import React from 'react';
import HeroBanner from './HeroBanner';
import CourseCard from './CourseCard';
import { Course, UserProfile, Language } from '../types';

interface DashboardViewProps {
  lang: Language;
  t: any;
  user: UserProfile;
  courses: Course[];
}

const DashboardView: React.FC<DashboardViewProps> = ({ lang, t, user, courses }) => {
  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto space-y-10">
      <header>
        <h2 className="text-3xl font-bold">{t.hello}, {user.fullName.split(' ')[0]}!</h2>
        <p className="text-[#B3A49C]">It's time to sharpen your digital edge.</p>
      </header>

      <HeroBanner 
        title="Python for Data Science" 
        progress={45} 
        lastLesson="Pandas DataFrames"
      />

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t.popularCourses}</h2>
          <button className="text-[#A25035] font-semibold hover:underline">{t.viewAll}</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardView;
