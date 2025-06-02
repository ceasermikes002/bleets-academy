/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { getAuthHeader } from "./axios"
import type { UserProfile, Session, PaymentMethod, Transaction } from "./types"

// Profile API
export const fetchProfile = async (): Promise<UserProfile> => {
  const headers = await getAuthHeader()
  const res = await axios.get("/users/profile", { headers })
  return res.data
}

export const updateProfile = async (data: Partial<UserProfile>): Promise<UserProfile> => {
  const headers = await getAuthHeader()
  const res = await axios.put("/users/profile", data, { headers })
  return res.data
}

// Sessions API
export const fetchUserSessions = async (): Promise<Session[]> => {
  const headers = await getAuthHeader()
  const res = await axios.get("/sessions", { headers })
  return res.data
}

export const updateSessionAvailability = async (dates: Date[], slots: string[]) => {
  const headers = await getAuthHeader()
  const res = await axios.post("/sessions/availability", { dates, slots }, { headers })
  return res.data
}

// Payments API
export const fetchPaymentMethods = async (): Promise<PaymentMethod[]> => {
  const headers = await getAuthHeader()
  const res = await axios.get("/payments/methods", { headers })
  return res.data
}

export const addPaymentMethod = async (data: any) => {
  const headers = await getAuthHeader()
  const res = await axios.post("/payments/methods", data, { headers })
  return res.data
}

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const headers = await getAuthHeader()
  const res = await axios.get("/payments/transactions", { headers })
  return res.data
}

// Settings API
export const updateUserSettings = async (settings: any) => {
  const headers = await getAuthHeader()
  const res = await axios.put("/users/settings", settings, { headers })
  return res.data
}
