
import React, { useState } from 'react';
import { UserProfile, Language } from '../types';
// Added missing User icon to imports
import { Edit3, Check, X, Camera, Mail, Briefcase, Hash, User } from 'lucide-react';

interface ProfileViewProps {
  lang: Language;
  t: any;
  user: UserProfile;
  onUpdate: (u: UserProfile) => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ lang, t, user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfile>(user);

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  const toggleInterest = (interest: string) => {
    const updated = formData.techInterests.includes(interest)
      ? formData.techInterests.filter(i => i !== interest)
      : [...formData.techInterests, interest];
    setFormData({ ...formData, techInterests: updated });
  };

  const PRESET_INTERESTS = ["React", "AI/ML", "Python", "UX/UI", "Cloud Systems", "Cybersecurity"];

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto">
      <div className="bg-white rounded-[32px] border border-[#B3A49C]/20 overflow-hidden shadow-sm">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#A25035] to-[#C48857] h-32 relative">
          <div className="absolute -bottom-16 left-10">
             <div className="relative group">
                <img 
                  src={formData.avatar} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-[40px] border-8 border-white shadow-xl object-cover"
                />
                {isEditing && (
                  <button className="absolute inset-0 bg-black/40 rounded-[40px] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                    <Camera />
                  </button>
                )}
             </div>
          </div>
          <div className="absolute bottom-4 right-10">
             {!isEditing ? (
               <button 
                 onClick={() => setIsEditing(true)}
                 className="bg-white text-[#A25035] px-6 py-2.5 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-[#F7F7F7] transition"
               >
                 <Edit3 size={18} />
                 {t.editProfile}
               </button>
             ) : (
               <div className="flex gap-2">
                 <button 
                   onClick={handleSave}
                   className="bg-[#0F0C09] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:opacity-90 transition"
                 >
                   <Check size={18} />
                   {t.save}
                 </button>
                 <button 
                   onClick={() => { setFormData(user); setIsEditing(false); }}
                   className="bg-white text-[#0F0C09] px-6 py-2.5 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-[#F7F7F7] transition"
                 >
                   <X size={18} />
                   {t.cancel}
                 </button>
               </div>
             )}
          </div>
        </div>

        <div className="pt-24 pb-12 px-10">
           {isEditing ? (
             <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#B3A49C] uppercase tracking-wider mb-2">{t.fullName}</label>
                    <div className="flex items-center gap-3 bg-[#F7F7F7] p-3 rounded-2xl border border-[#B3A49C]/10">
                      <User size={18} className="text-[#B3A49C]" />
                      <input 
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="bg-transparent outline-none w-full font-medium"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#B3A49C] uppercase tracking-wider mb-2">Email</label>
                    <div className="flex items-center gap-3 bg-[#F7F7F7] p-3 rounded-2xl border border-[#B3A49C]/10">
                      <Mail size={18} className="text-[#B3A49C]" />
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-transparent outline-none w-full font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#B3A49C] uppercase tracking-wider mb-2">{t.bio}</label>
                  <textarea 
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    rows={4}
                    className="w-full bg-[#F7F7F7] p-4 rounded-2xl border border-[#B3A49C]/10 outline-none font-medium resize-none focus:ring-2 ring-[#A25035]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#B3A49C] uppercase tracking-wider mb-2">{t.techInterests}</label>
                  <div className="flex flex-wrap gap-2">
                    {PRESET_INTERESTS.map(interest => (
                      <button 
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                          formData.techInterests.includes(interest)
                          ? 'bg-[#A25035] text-white shadow-md'
                          : 'bg-[#F7F7F7] text-[#B3A49C] hover:bg-[#B3A49C]/10'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
             </div>
           ) : (
             <div className="space-y-12">
               <div>
                 <h3 className="text-3xl font-bold text-[#0F0C09] mb-2">{user.fullName}</h3>
                 <p className="text-[#B3A49C] flex items-center gap-2">
                    <Mail size={16} />
                    {user.email}
                 </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                     <h4 className="text-sm font-bold text-[#B3A49C] uppercase tracking-wider flex items-center gap-2">
                       <Briefcase size={16} />
                       {t.bio}
                     </h4>
                     <p className="text-[#0F0C09] leading-relaxed font-medium bg-[#F7F7F7] p-6 rounded-3xl">
                       {user.bio}
                     </p>
                  </div>

                  <div className="space-y-4">
                     <h4 className="text-sm font-bold text-[#B3A49C] uppercase tracking-wider flex items-center gap-2">
                       <Hash size={16} />
                       {t.techInterests}
                     </h4>
                     <div className="flex flex-wrap gap-2">
                       {user.techInterests.map(interest => (
                         <span key={interest} className="px-4 py-2 bg-[#E3C8B7]/30 text-[#A25035] rounded-xl text-sm font-bold">
                           {interest}
                         </span>
                       ))}
                     </div>
                  </div>
               </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
