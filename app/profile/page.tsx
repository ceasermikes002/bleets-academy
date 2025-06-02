'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useProfile } from '@/hooks/useProfile'
import { useQuery } from '@tanstack/react-query'
import * as api from '@/lib/api'
import { toast } from 'react-toastify'
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { User, Settings, Loader2 } from "lucide-react"
import type { UserProfile } from '@/lib/types'

export default function ProfilePage() {
  const { user } = useAuth()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const { profile, isLoading, updateProfile } = useProfile()

  const { data: sessions } = useQuery({
    queryKey: ['sessions'],
    queryFn: api.fetchUserSessions
  })
  
  const { data: paymentMethods } = useQuery({
    queryKey: ['paymentMethods'],
    queryFn: api.fetchPaymentMethods
  })
  
  const { data: transactions } = useQuery({
    queryKey: ['transactions'],
    queryFn: api.fetchTransactions
  })

  const handleProfileUpdate = async (data: Partial<UserProfile>) => {
    try {
      await updateProfile(data)
      toast.success('Profile updated successfully')
    } catch {
      toast.error('Failed to update profile')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 pb-20 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
          <h2 className="text-xl font-orbitron">Loading profile...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-orbitron">
              Your <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-white/70">Manage your account and preferences</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center mb-4">
                      <User className="h-16 w-16 text-purple-400" />
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
                      Change Avatar
                    </Button>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          defaultValue={profile?.firstName || ""}
                          onChange={(e) => handleProfileUpdate({ firstName: e.target.value })}
                          className="bg-gray-900 border-gray-700 focus:border-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          defaultValue={user?.lastName || ""}
                          className="bg-gray-900 border-gray-700 focus:border-purple-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        defaultValue={user?.email || ""}
                        disabled
                        className="bg-gray-900 border-gray-700 focus:border-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself..."
                        className="bg-gray-900 border-gray-700 focus:border-purple-500 min-h-[100px]"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Learning Preferences</CardTitle>
                <CardDescription>Customize your learning experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="topics">Preferred Topics</Label>
                    <Input
                      id="topics"
                      placeholder="e.g., JavaScript, React, Python"
                      className="bg-gray-900 border-gray-700 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <select
                      id="experience"
                      className="w-full rounded-md bg-gray-900 border-gray-700 focus:border-purple-500 p-2 text-white"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goals">Learning Goals</Label>
                    <Textarea
                      id="goals"
                      placeholder="What do you hope to achieve?"
                      className="bg-gray-900 border-gray-700 focus:border-purple-500 min-h-[100px]"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Availability</CardTitle>
                <CardDescription>Set your preferred tutoring times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border border-gray-800 bg-gray-900/30"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="font-medium mb-4">Time Slots for {date?.toLocaleDateString()}</h3>
                    <div className="space-y-2">
                      {[
                        "9:00 AM - 10:00 AM",
                        "10:00 AM - 11:00 AM",
                        "2:00 PM - 3:00 PM",
                        "3:00 PM - 4:00 PM",
                        "4:00 PM - 5:00 PM",
                      ].map((slot, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={`slot-${i}`}
                            className="rounded border-gray-700 bg-gray-900 text-purple-600 focus:ring-purple-500"
                          />
                          <Label htmlFor={`slot-${i}`}>{slot}</Label>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
                      Save Availability
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled tutoring sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sessions?.map((session) => (
                    <div key={session.id} className="p-4 border border-gray-800 rounded">
                      <p>Session at: {new Date(session.scheduledAt).toLocaleString()}</p>
                      <p>Status: {session.status}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods?.map((method) => (
                    <div key={method.id} className="p-4 border border-gray-800 rounded">
                      <p>Card ending in: {method.last4}</p>
                      <p>Expires: {method.expiryMonth}/{method.expiryYear}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View your past payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions?.map((transaction) => (
                    <div key={transaction.id} className="p-4 border border-gray-800 rounded">
                      <p>Amount: ${transaction.amount}</p>
                      <p>Date: {new Date(transaction.createdAt).toLocaleDateString()}</p>
                      <p>Status: {transaction.status}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select
                      id="timezone"
                      className="w-full rounded-md bg-gray-900 border-gray-700 focus:border-purple-500 p-2 text-white"
                    >
                      <option value="utc-8">Pacific Time (UTC-8)</option>
                      <option value="utc-5">Eastern Time (UTC-5)</option>
                      <option value="utc+0">UTC</option>
                      <option value="utc+1">Central European Time (UTC+1)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="w-full rounded-md bg-gray-900 border-gray-700 focus:border-purple-500 p-2 text-white"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Notification Preferences</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="email-notifications"
                          defaultChecked
                          className="rounded border-gray-700 bg-gray-900 text-purple-600 focus:ring-purple-500"
                        />
                        <Label htmlFor="email-notifications">Email notifications</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="sms-notifications"
                          className="rounded border-gray-700 bg-gray-900 text-purple-600 focus:ring-purple-500"
                        />
                        <Label htmlFor="sms-notifications">SMS notifications</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="marketing-emails"
                          className="rounded border-gray-700 bg-gray-900 text-purple-600 focus:ring-purple-500"
                        />
                        <Label htmlFor="marketing-emails">Marketing emails</Label>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
                    Save Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-700 text-white hover:bg-gray-800"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Change Password
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-700 text-white hover:bg-gray-800"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Enable Two-Factor Authentication
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-700 text-white hover:bg-gray-800 text-red-400 hover:text-red-300"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
