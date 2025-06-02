"use client"
import { useAuth } from '@/contexts/AuthContext';
import { SignUpData } from '@/lib/types';
import React, { useState, useCallback } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

const SignUpForm = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState<SignUpData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    role: 'LEARNER',
    profileImage: undefined,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFormData(prev => ({ ...prev, profileImage: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1,
    multiple: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData, formData.profileImage);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative">
      {/* Background grid */}
      <div className="absolute inset-0 cyberpunk-grid opacity-30 pointer-events-none"></div>

      <div className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row bg-white/10 backdrop-blur-md border border-white/10">
        {/* Left side - Illustration or Image */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-500/80 to-pink-500/80 p-8 relative">
          {/* You can replace this with a 3D illustration or PNG as needed */}
          <Image
            src="/images/auth-illustration.png"
            alt="Sign up illustration"
            width={220}
            height={220}
            className="mx-auto mb-6 drop-shadow-2xl"
            priority
          />
          <h2 className="text-2xl font-bold font-vt323 text-white mb-2 text-center">Join TutorBreez</h2>
          <p className="text-white/80 text-center">Create your account and start your learning journey today</p>
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-white/70 bg-opacity-80 p-8">
          <div className="w-full max-w-xs mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold font-vt323 mb-2 text-black">Sign Up</h1>
              <p className="text-gray-600">Create your account to get started</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full bg-white border border-gray-300 text-black p-3 rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-white border border-gray-300 text-black p-3 rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-white border border-gray-300 text-black p-3 rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-white border border-gray-300 text-black p-3 rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-white border border-gray-300 text-black p-3 rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 text-black p-3 rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
              >
                <option value="LEARNER">Learner</option>
                <option value="TUTOR">Tutor</option>
                <option value="ADMIN">Admin</option>
              </select>
              <div>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                    isDragActive
                      ? 'border-purple-500 bg-purple-100'
                      : 'border-gray-300 hover:border-purple-500/50'
                  }`}
                >
                  <input {...getInputProps()} />
                  {previewUrl ? (
                    <div className="relative w-20 h-20 mx-auto mb-2">
                      <Image
                        src={previewUrl}
                        alt="Profile preview"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="w-6 h-6 mb-1 text-gray-400" />
                      <p className="text-gray-500 text-sm">
                        {isDragActive
                          ? 'Drop the image here'
                          : 'Profile Image (optional)'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm