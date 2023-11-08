import { auth } from '@/auth'
import { GoogleLoginButton, LoginButton } from '@/components/login-button'
import { redirect } from 'next/navigation'
import GoogleOneTap from './google-one-tap'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex gap-x-4 h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <LoginButton />
      <GoogleLoginButton />
      <GoogleOneTap />
    </div>
  )
}
