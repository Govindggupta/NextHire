import AuthButtons from "@/components/AuthButtons";

export default function Home() {
  
  return <>
  <div>
    <h1 className="text-3xl font-bold flex justify-center items-center min-h-screen min-w-screen">Landing page</h1>
    <p>
      This is a landing page for the ai interview platform.
    </p>

    <AuthButtons />

  </div>
  </>
}