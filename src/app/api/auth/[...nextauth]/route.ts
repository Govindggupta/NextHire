import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";



const googleClientId = process.env.GOOGLE_CLIENT_ID as string | undefined;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string | undefined;
const nextAuthUrl = process.env.NEXTAUTH_URL as string | undefined;

if (!googleClientId || !googleClientSecret) {
  console.error("[auth] Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in environment.");
} else {
  console.log(
    "[auth] Using Google client:",
    `${googleClientId.slice(0, 6)}…`,
    "secret length:",
    googleClientSecret.length
  );
}

if (!nextAuthUrl) {
  console.warn("[auth] NEXTAUTH_URL not set. Defaulting to host of incoming request.");
} else {
  console.log("[auth] NEXTAUTH_URL:", nextAuthUrl);
}

export const authOptions = {
  
  providers: [
    
    GoogleProvider({
      clientId: googleClientId as string,
      clientSecret: googleClientSecret as string,
    }),
  ],
  debug: process.env.NODE_ENV !== "production",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };