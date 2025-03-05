declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABSE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    }
  }
}

export {}