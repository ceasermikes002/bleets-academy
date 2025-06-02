import { create } from "zustand"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  package: string
  options: string[]
  experienceLevel: string
  goals: string
}

interface RegistrationStore {
  formData: FormData
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFormField: (field: keyof FormData, value: any) => void
  addOption: (option: string) => void
  removeOption: (option: string) => void
  resetForm: () => void
}

const initialState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  package: "standard",
  options: [],
  experienceLevel: "beginner",
  goals: "",
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  formData: initialState,

  setFormField: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),

  addOption: (option) =>
    set((state) => ({
      formData: {
        ...state.formData,
        options: [...state.formData.options, option],
      },
    })),

  removeOption: (option) =>
    set((state) => ({
      formData: {
        ...state.formData,
        options: state.formData.options.filter((item) => item !== option),
      },
    })),

  resetForm: () => set({ formData: initialState }),
}))
