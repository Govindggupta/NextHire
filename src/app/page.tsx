"use client"

import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
    <div>
      <div>
        {session?.user?.name}
      </div>
      <div>
        <img src={session?.user?.image as string} alt="user avatar" />
      </div>
      Hello world!!
    </div>
    </>
  )
}