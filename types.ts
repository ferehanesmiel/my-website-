
export interface Course {
  id: string;
  title: string;
  instructor: string;
  avatar: string;
  category: string;
  duration: string;
  bgColor: string;
  progress?: number;
}

export interface HomeworkItem {
  id: string;
  task: string;
  completed: boolean;
  dueDate: string;
}

export interface UserProfile {
  fullName: string;
  bio: string;
  techInterests: string[];
  avatar: string;
  email: string;
}

export type Language = 'en' | 'am' | 'om' | 'ti' | 'so';

export type AppTab = 'home' | 'dashboard' | 'profile' | 'courses' | 'schedule';

export interface AuthState {
  isLoggedIn: boolean;
  user: UserProfile | null;
}
