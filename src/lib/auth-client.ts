import { getClientEnv } from '#/configs/client-env'
import { inferAdditionalFields } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'
import type { Auth } from './auth'

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: getClientEnv().VITE_BETTER_AUTH_URL,
  plugins: [inferAdditionalFields<Auth>()],
})

export type ClientSession = ReturnType<typeof useSession>['data']
