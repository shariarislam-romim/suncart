import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://suncart-delta.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()