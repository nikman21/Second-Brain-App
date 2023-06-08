import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {

    providers: [
        GithubProvider({
            clientId: "",
            clientSecret: "",
          }),
          GoogleProvider({
            clientId: "",
            clientSecret: "",
          }),
    ],  
}
export default NextAuth(authOptions)