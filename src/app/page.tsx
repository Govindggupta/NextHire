import { getServerSession } from "next-auth";

export default async function Home() {

  const session = await getServerSession();
  
  return <>
  <div>
    <h1 className="text-3xl font-bold flex justify-center items-center min-h-screen min-w-screen">Landing page</h1>
    <p>
      This is a landing page for the ai interview platform.
    </p>

    {session && (
      <p>
        You are signed in as {session?.user?.email}
      </p>
    )}

  </div>
  </>
}