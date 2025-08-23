"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/themetogle"
import { useSession, signOut, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <>
    <div>
      <div>
        {session?.user?.name}
      </div>
      <div>
        {session?.user?.email}
      </div>
      {session && (
        <Button onClick={() => signOut()}>signOut</Button>
      )}
      {!session && (
        <Button onClick={() => router.push("/login")}>signIn</Button>
      )}
      Hello world!!

      <ModeToggle />
    </div>
    </>
  )
}