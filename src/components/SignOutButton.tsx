'use client'

import { signOut } from "next-auth/react"

interface SignOutButtonProps {
  userEmail?: string | null
}

export default function SignOutButton({ userEmail }: SignOutButtonProps) {
  return (
    <div>
      You are signed in as {userEmail}
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
