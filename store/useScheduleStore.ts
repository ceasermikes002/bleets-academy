import { create } from "zustand"

interface ScheduleState {
  topic: string
  frequency: number
  duration: number
  setTopic: (topic: string) => void
  setFrequency: (frequency: number) => void
  setDuration: (duration: number) => void
  resetForm: () => void
}

const initialState = {
  topic: "",
  frequency: 0,
  duration: 0,
}

export const useScheduleStore = create<ScheduleState>((set) => ({
  ...initialState,
  setTopic: (topic) => set({ topic }),
  setFrequency: (frequency) => set({ frequency }),
  setDuration: (duration) => set({ duration }),
  resetForm: () => set(initialState),
}))
