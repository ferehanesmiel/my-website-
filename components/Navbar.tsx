
import React, { useState } from 'react';
import { Search, Bell, LogOut, ChevronDown, Globe } from 'lucide-react';
import { Language, AppTab, UserProfile } from '../types';
import Logo from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  activeTab: AppTab;
  setActiveTab: (t: AppTab) => void;
  t: any;
  user: UserProfile;
  isLoggedIn: boolean;
  onLogout: () => void;
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  setLang, 
  activeTab, 
  setActiveTab, 
  t, 
  user, 
  isLoggedIn, 
  onLogout, 
  onLoginClick 
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'am', label: 'አማርኛ' },
    { code: 'om', label: 'Oromoo' },
    { code: 'ti', label: 'ትግርኛ' },
    { code: 'so', label: 'Soomaali' },
  ];

  const currentLangLabel = languages.find(l => l.code === lang)?.label || 'English';

  return (
    <nav className="px-4 lg:px-6 py-4 bg-white/70 backdrop-blur-md border-b border-[#B3A49C]/10 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4 lg:gap-8">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => setActiveTab('home')}
        >
          <div className="text-[#A25035] transition-transform group-hover:scale-110">
            <Logo className="w-9 h-9" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">zemendigital</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setActiveTab('home')}
            className={`text-sm font-semibold transition ${activeTab === 'home' ? 'text-[#A25035]' : 'text-[#B3A49C] hover:text-[#0F0C09]'}`}
          >
            {t.home}
          </button>
          {isLoggedIn && (
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`text-sm font-semibold transition ${activeTab === 'dashboard' ? 'text-[#A25035]' : 'text-[#B3A49C] hover:text-[#0F0C09]'}`}
            >
              {t.dashboard}
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        {/* Consolidated Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 bg-[#F7F7F7] px-3 py-2 rounded-xl border border-[#B3A49C]/20 text-xs font-bold text-[#A25035] hover:bg-white transition-all shadow-sm"
          >
            <Globe size={14} />
            <span className="hidden sm:inline">{currentLangLabel}</span>
            <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-2xl border border-[#B3A49C]/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-xs font-bold transition-colors ${
                    lang === l.code ? 'bg-[#A25035] text-white' : 'text-[#B3A49C] hover:bg-[#F7F7F7] hover:text-[#0F0C09]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {isLoggedIn ? (
          <div className="flex items-center gap-2 lg:gap-4 border-l border-[#B3A49C]/20 pl-2 lg:pl-4">
             <button className="hidden sm:block text-[#B3A49C] hover:text-[#A25035] transition p-1">
               <Search size={20} />
             </button>
             <button className="text-[#B3A49C] hover:text-[#A25035] transition p-1 relative">
               <Bell size={20} />
               <span className="absolute top-0 right-0 w-2 h-2 bg-[#A25035] rounded-full border-2 border-white"></span>
             </button>
             <button 
               onClick={() => setActiveTab('profile')}
               className="flex items-center gap-2 p-1 rounded-full hover:bg-[#F7F7F7] transition"
             >
               <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full border border-[#B3A49C]/20 object-cover" />
             </button>
             <button 
               onClick={onLogout}
               className="hidden sm:block p-2 text-[#B3A49C] hover:text-red-500 transition-all active:scale-90"
             >
               <LogOut size={20} />
             </button>
          </div>
        ) : (
          <button 
            onClick={onLoginClick}
            className="bg-[#A25035] text-white px-4 lg:px-6 py-2.5 rounded-xl font-bold text-xs lg:text-sm shadow-xl shadow-[#A25035]/20 hover:scale-[1.05] active:scale-95 transition-all"
          >
            {t.signIn}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
