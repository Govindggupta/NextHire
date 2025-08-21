"use client";

import { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";



export default function LoginGoogle() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? undefined;


  const [clickedMethod, setClickedMethod] = useState<"google" | undefined>(
    undefined,
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <div className="mb-6 text-center">
          <h1 className="mt-4 text-xl font-semibold text-gray-900">
            Continue with Google
          </h1>
        </div>

        <Button
          onClick={() => {
            setClickedMethod("google");
            const callbackUrl = next && next.length > 0 ? next : "/register";
            signIn("google", { callbackUrl }).finally(() => {
              setClickedMethod(undefined);
            });
          }}
          loading={clickedMethod === "google"}
          disabled={!!clickedMethod && clickedMethod !== "google"}
          className="flex w-full items-center justify-center space-x-2 border border-gray-300 bg-gray-100 font-normal text-gray-900 hover:bg-gray-200"
        >
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}


