/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KEY_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
