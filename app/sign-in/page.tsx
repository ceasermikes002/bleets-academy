import SignInForm from '@/components/SignInForm';
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | TutorBreez",
  description: "Sign in to your TutorBreez account",
}

export default function SignInPage() {
  
  return (
   <SignInForm/>
  )
}
