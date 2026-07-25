// src/config/env.ts
import { createServerOnlyFn } from '@tanstack/react-start'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.url(),
})

export const getServerEnv = createServerOnlyFn(() => {
  return envSchema.parse(process.env)
})
