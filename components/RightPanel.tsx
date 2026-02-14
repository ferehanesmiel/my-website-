
import React from 'react';
import { 
  BarChart, 
  Bar, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { CheckCircle2, Circle, Clock, ChevronRight } from 'lucide-react';
import { HomeworkItem, UserProfile } from '../types';

const CHART_DATA = [
  { day: 'Mon', hours: 1.5 },
  { day: 'Tue', hours: 2.3 },
  { day: 'Wed', hours: 0.8 },
  { day: 'Thu', hours: 3.1 },
  { day: 'Fri', hours: 2.0 },
  { day: 'Sat', hours: 4.2 },
  { day: 'Sun', hours: 1.8 },
];

const HOMEWORK: HomeworkItem[] = [
  { id: '1', task: 'Python Strings Lab', completed: true, dueDate: 'Today' },
  { id: '2', task: 'ML Concept Review', completed: false, dueDate: 'Tomorrow' },
  { id: '3', task: 'React State Management', completed: false, dueDate: '2 days left' },
];

interface RightPanelProps {
  user: UserProfile;
}

const RightPanel: React.FC<RightPanelProps> = ({ user }) => {
  return (
    <div className="p-8 space-y-10">
      {/* Profile Summary */}
      <section className="text-center">
        <div className="relative inline-block mb-4">
          <img 
            src={user.avatar} 
            alt={user.fullName} 
            className="w-24 h-24 rounded-[30px] border-4 border-white shadow-xl object-cover"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
        </div>
        <h3 className="text-xl font-bold">{user.fullName}</h3>
        <p className="text-[#B3A49C] text-sm font-medium">Student</p>
        
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="bg-[#F7F7F7] p-3 rounded-2xl border border-[#B3A49C]/10">
            <p className="text-[#B3A49C] text-[10px] uppercase font-bold mb-1">Courses</p>
            <p className="text-lg font-bold">12</p>
          </div>
          <div className="bg-[#F7F7F7] p-3 rounded-2xl border border-[#B3A49C]/10">
            <p className="text-[#B3A49C] text-[10px] uppercase font-bold mb-1">XP</p>
            <p className="text-lg font-bold">1.2k</p>
          </div>
        </div>
      </section>

      {/* Activity Chart */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Weekly Activity</h4>
          <span className="text-xs font-bold text-[#A25035]">Active</span>
        </div>
        <div className="h-48 w-full -ml-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CHART_DATA}>
              <Tooltip 
                cursor={{ fill: '#F7F7F7' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
                {CHART_DATA.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.day === 'Sat' ? '#A25035' : '#E3C8B7'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Tasks List */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Tasks</h4>
          <button className="text-[#B3A49C] hover:text-[#A25035]">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="space-y-4">
          {HOMEWORK.map(item => (
            <div key={item.id} className="flex items-start gap-4 group cursor-pointer">
              <div className="mt-1 shrink-0">
                {item.completed ? (
                  <CheckCircle2 size={20} className="text-[#A25035]" />
                ) : (
                  <Circle size={20} className="text-[#B3A49C] group-hover:text-[#A25035] transition-colors" />
                )}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-bold ${item.completed ? 'line-through text-[#B3A49C]' : 'text-[#0F0C09]'}`}>
                  {item.task}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-[#B3A49C] mt-0.5 font-bold uppercase tracking-wider">
                  <Clock size={10} />
                  <span>{item.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RightPanel;
