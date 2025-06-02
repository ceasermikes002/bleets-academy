import type { Metadata } from "next"
import SignUpForm from "@/components/SignUpForm"
export const metadata: Metadata = {
  title: "Sign Up | TutorBreez",
  description: "Create your TutorBreez account",
}

export default function SignUpPage() {
  

  return (
    <SignUpForm />
  )
}
