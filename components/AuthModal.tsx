
import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (fullName: string, email: string) => void;
  t: any;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess, t }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      onSuccess(formData.fullName || 'New User', formData.email || 'user@example.com');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F0C09]/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Top Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-[#A25035] to-[#C48857]" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#B3A49C] hover:text-[#0F0C09] hover:bg-[#F7F7F7] rounded-xl transition-all"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? t.welcomeBack : t.signUp}
            </h2>
            <p className="text-[#B3A49C] font-medium">
              {isLogin ? "Welcome back to your learning journey." : "Start your digital education today."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#B3A49C] uppercase tracking-wider ml-1">{t.fullName}</label>
                <div className="flex items-center gap-3 bg-[#F7F7F7] p-4 rounded-2xl border border-[#B3A49C]/10 focus-within:border-[#A25035]/30 transition-all">
                  <User size={18} className="text-[#B3A49C]" />
                  <input 
                    type="text" 
                    required
                    placeholder="Alex Thompson"
                    className="bg-transparent outline-none w-full text-sm font-medium"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#B3A49C] uppercase tracking-wider ml-1">{t.email}</label>
              <div className="flex items-center gap-3 bg-[#F7F7F7] p-4 rounded-2xl border border-[#B3A49C]/10 focus-within:border-[#A25035]/30 transition-all">
                <Mail size={18} className="text-[#B3A49C]" />
                <input 
                  type="email" 
                  required
                  placeholder="alex@example.com"
                  className="bg-transparent outline-none w-full text-sm font-medium"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#B3A49C] uppercase tracking-wider ml-1">{t.password}</label>
              <div className="flex items-center gap-3 bg-[#F7F7F7] p-4 rounded-2xl border border-[#B3A49C]/10 focus-within:border-[#A25035]/30 transition-all">
                <Lock size={18} className="text-[#B3A49C]" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="bg-transparent outline-none w-full text-sm font-medium"
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#A25035] text-white py-4 rounded-2xl font-bold shadow-xl shadow-[#A25035]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <>
                  {isLogin ? t.signIn : t.createAccount}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[#F7F7F7] text-center">
            <p className="text-sm font-medium text-[#B3A49C]">
              {isLogin ? t.noAccount : t.haveAccount}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-[#A25035] font-bold hover:underline"
              >
                {isLogin ? t.signUp : t.signIn}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
