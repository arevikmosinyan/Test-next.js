
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_SPOTIFY_CLIENT_ID: string
        NEXT_PUBLIC_SPOTIFY_SECRET: string
        NEX_PUBLIC_BASE_URL: string
      }
    }
  }
  

  export {}