
import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Settings, 
  LifeBuoy, 
  TrendingUp,
  UserCircle
} from 'lucide-react';
import { AppTab, Language } from '../types';

interface SidebarProps {
  activeTab: AppTab;
  setActiveTab: (t: AppTab) => void;
  lang: Language;
  t: any;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, lang, t }) => {
  const NAV_ITEMS = [
    { id: 'dashboard' as AppTab, icon: <LayoutDashboard size={20} />, label: t.dashboard },
    { id: 'courses' as AppTab, icon: <BookOpen size={20} />, label: t.courses },
    { id: 'schedule' as AppTab, icon: <Calendar size={20} />, label: t.schedule },
    { id: 'profile' as AppTab, icon: <UserCircle size={20} />, label: t.profile },
  ];

  return (
    <aside className="bg-white h-screen w-64 border-r border-[#B3A49C]/20 transition-all duration-300 flex flex-col hidden lg:flex">
      <div className="p-10">
        {/* Logo space handled by Navbar but keeping sidebar structure */}
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
              activeTab === item.id 
                ? 'bg-[#A25035] text-white shadow-xl shadow-[#A25035]/20' 
                : 'text-[#B3A49C] hover:bg-[#F7F7F7] hover:text-[#0F0C09]'
            }`}
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="font-bold text-sm tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-[#F7F7F7]">
        <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-[#B3A49C] hover:bg-red-50 hover:text-red-500 transition-all group">
          <LifeBuoy size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-sm tracking-wide">{t.support}</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
