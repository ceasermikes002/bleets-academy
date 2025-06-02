"use client"
import { useAuth } from '@/contexts/AuthContext';
import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';

const SignInForm = () => {
    const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
      {/* Background grid */}
      <div className="absolute inset-0 cyberpunk-grid opacity-30 pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Left side - Background Image */}
        <div className="relative hidden md:block rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
          <Image
            src="/images/auth-bg.jpg"
            alt="Authentication Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h2 className="text-4xl font-bold font-vt323 mb-4">Welcome Back!</h2>
            <p className="text-white/80">Sign in to continue your learning journey with TutorBreez</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold font-vt323 mb-2">
                <span className="gradient-text">Sign In</span>
              </h1>
              <p className="text-white/70">Enter your credentials to continue</p>
            </div>

            <div className="cyberpunk-card p-8 relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors backdrop-blur-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-white mb-2">Password</label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors backdrop-blur-sm"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignInForm