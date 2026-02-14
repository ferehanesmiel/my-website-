
import React from 'react';
import { LayoutDashboard, BookOpen, UserCircle, Home } from 'lucide-react';
import { AppTab, Language } from '../types';

interface MobileNavProps {
  activeTab: AppTab;
  setActiveTab: (t: AppTab) => void;
  lang: Language;
  t: any;
  isLoggedIn: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab, lang, t, isLoggedIn }) => {
  if (!isLoggedIn) return null;

  const NAV_ITEMS = [
    { id: 'home' as AppTab, icon: <Home size={22} />, label: t.home },
    { id: 'dashboard' as AppTab, icon: <LayoutDashboard size={22} />, label: t.dashboard },
    { id: 'courses' as AppTab, icon: <BookOpen size={22} />, label: t.courses },
    { id: 'profile' as AppTab, icon: <UserCircle size={22} />, label: t.profile },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/80 backdrop-blur-xl border border-[#B3A49C]/20 shadow-2xl rounded-3xl p-2 z-[60] flex items-center justify-between">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex-1 flex flex-col items-center justify-center py-2 transition-all rounded-2xl ${
            activeTab === item.id 
              ? 'text-[#A25035] bg-[#A25035]/5 scale-110' 
              : 'text-[#B3A49C] hover:text-[#0F0C09]'
          }`}
        >
          {item.icon}
          <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav;
