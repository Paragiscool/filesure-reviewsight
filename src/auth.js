import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      name: "Demo Login",
      credentials: {},
      async authorize() {
        return { id: "1", name: "Admin User", email: "admin@reviewsight.com" };
      }
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
