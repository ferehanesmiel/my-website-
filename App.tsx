
import React, { useState } from 'react';
import { translations } from './translations';
import { AppTab, Language, UserProfile, Course } from './types';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import DashboardView from './components/DashboardView';
import ProfileView from './components/ProfileView';
import RightPanel from './components/RightPanel';
import AuthModal from './components/AuthModal';
import MobileNav from './components/MobileNav';

const POPULAR_COURSES: Course[] = [
  {
    id: '1',
    title: 'Business English for Executives',
    instructor: 'Sarah Jenkins',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    category: 'Professional',
    duration: '12 Hours',
    bgColor: 'bg-[#E3C8B7]',
  },
  {
    id: '2',
    title: 'Advanced French Grammar',
    instructor: 'Luc Beaumont',
    avatar: 'https://picsum.photos/seed/luc/100/100',
    category: 'Grammar',
    duration: '8 Hours',
    bgColor: 'bg-[#B3A49C]',
  },
  {
    id: '3',
    title: 'Modern Japanese Culture',
    instructor: 'Yuki Tanaka',
    avatar: 'https://picsum.photos/seed/yuki/100/100',
    category: 'Culture',
    duration: '15 Hours',
    bgColor: 'bg-[#C48857]',
  },
  {
    id: '4',
    title: 'IELTS Academic Masterclass',
    instructor: 'James Wilson',
    avatar: 'https://picsum.photos/seed/james/100/100',
    category: 'Exam Prep',
    duration: '20 Hours',
    bgColor: 'bg-[#E3C8B7]',
  }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [lang, setLang] = useState<Language>('en');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserProfile>({
    fullName: "Alex Thompson",
    bio: "Passionate learner exploring the intersection of linguistics and technology.",
    techInterests: ["React", "AI/ML", "Cloud Systems"],
    avatar: "https://picsum.photos/seed/alex/150/150",
    email: "alex@zemendigital.com"
  });

  const t = translations[lang] || translations['en'];

  const handleAuthSuccess = (fullName: string, email: string) => {
    setUser({
      ...user,
      fullName,
      email,
      avatar: `https://picsum.photos/seed/${fullName}/150/150`
    });
    setIsLoggedIn(true);
    setActiveTab('dashboard');
  };

  const handleStartLearning = () => {
    if (isLoggedIn) {
      setActiveTab('dashboard');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('home');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView lang={lang} t={t} onStart={handleStartLearning} />;
      case 'dashboard':
        return <DashboardView lang={lang} t={t} user={user} courses={POPULAR_COURSES} />;
      case 'profile':
        return <ProfileView lang={lang} t={t} user={user} onUpdate={setUser} />;
      default:
        return <DashboardView lang={lang} t={t} user={user} courses={POPULAR_COURSES} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7F7F7] text-[#0F0C09] overflow-hidden selection:bg-[#A25035]/30">
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={handleAuthSuccess}
        t={t}
      />

      {/* Sidebar - Desktop Only */}
      {isLoggedIn && activeTab !== 'home' && (
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          lang={lang} 
          t={t} 
        />
      )}

      {/* Mobile Nav - Mobile Only */}
      <MobileNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
        t={t} 
        isLoggedIn={isLoggedIn}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          t={t} 
          user={user}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onLoginClick={() => setIsAuthModalOpen(true)}
        />
        
        <div className="flex-1 overflow-y-auto custom-scrollbar pb-32 lg:pb-0">
          <div className="flex h-full">
            <div className="flex-1">
              {renderContent()}
            </div>
            
            {/* Conditional Right Panel for Dashboard */}
            {activeTab === 'dashboard' && isLoggedIn && (
              <div className="hidden xl:block w-85 bg-white border-l border-[#B3A49C]/20 h-full overflow-y-auto custom-scrollbar">
                <RightPanel user={user} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
