export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  learningGoals?: string;
  preferredTopics?: string[];
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
  timezone?: string;
  language?: string;
  notificationPreferences?: {
    email: boolean;
    sms: boolean;
    marketing: boolean;
  };
}

export interface Session {
  id: string;
  studentId: string;
  tutorId: string;
  courseId: string;
  scheduledAt: Date;
  meetingLink: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
}

export interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiryMonth: string;
  expiryYear: string;
  isDefault: boolean;
}

export interface Transaction {
  id: string;
  amount: number;
  status: string;
  createdAt: Date;
  transactionId: string;
}

export interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role?: 'LEARNER' | 'TUTOR' | 'ADMIN';
  profileImage?: File;
}
