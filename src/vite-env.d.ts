/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URL: string;
  // Add your own env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
