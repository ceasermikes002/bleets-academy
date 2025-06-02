import React from 'react';
import MultiStepForm from '@/components/RegistrationForm';

export default function ClassRegPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-cyan-900 to-indigo-900 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-cyan-600">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-cyan-200">
          Register for Your First Class
        </h1>
        <MultiStepForm />
      </div>
    </div>
  );
}
