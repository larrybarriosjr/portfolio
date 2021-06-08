/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_URL: string
  }
}
