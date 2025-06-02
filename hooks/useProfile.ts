'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api'
import type { UserProfile } from '@/lib/types'

export function useProfile() {
  const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)

  const { data: profile } = useQuery<UserProfile>({
    queryKey: ['profile'],
    queryFn: api.fetchProfile
  })

  const updateProfileMutation = useMutation({
    mutationFn: (data: Partial<UserProfile>) => api.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    }
  })

  const updateProfile = async (data: Partial<UserProfile>) => {
    setIsLoading(true)
    try {
      await updateProfileMutation.mutateAsync(data)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    profile,
    isLoading,
    updateProfile
  }
}