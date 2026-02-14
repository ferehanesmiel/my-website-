
import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="px-6 py-5 lg:px-10 bg-[#F7F7F7]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between border-b border-[#B3A49C]/10">
      <div>
        <h1 className="text-2xl font-bold text-[#0F0C09]">Hello, {userName}!</h1>
        <p className="text-[#B3A49C] text-sm">It's a great day to learn something new.</p>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <div className="hidden md:flex items-center bg-white border border-[#B3A49C]/20 rounded-2xl px-4 py-2 w-64 lg:w-80 group focus-within:ring-2 ring-[#A25035]/20 transition-all">
          <Search size={18} className="text-[#B3A49C] group-focus-within:text-[#A25035]" />
          <input 
            type="text" 
            placeholder="Search for courses..." 
            className="bg-transparent border-none outline-none ml-3 w-full text-sm placeholder:text-[#B3A49C]"
          />
        </div>

        <button className="relative p-2.5 bg-white border border-[#B3A49C]/20 rounded-2xl text-[#0F0C09] hover:bg-[#F7F7F7] transition-all active:scale-95">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#A25035] rounded-full ring-2 ring-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-[#B3A49C]/20">
          <img 
            src="https://picsum.photos/seed/alex/100/100" 
            alt="Profile" 
            className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
