import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

// Note: We use dotenv to load environment variables from .env file since this file is outside of Vite's build pipeline
if (!import.meta.env.VITE_GRAPHQL_URL) {
  throw new Error("codegen nends env var VITE_GRAPHQL_URL to be set");
}

if (new URL(import.meta.env.VITE_GRAPHQL_URL).pathname !== "/graphql") {
  console.warn(
    "codegen expects VITE_GRAPHQL_URL didn't end with '/graphql', are you sure it's a graphql endpoint?"
  );
}

const config: CodegenConfig = {
  // This should point to a @moneypot/caas graphql api
  schema: import.meta.env.VITE_GRAPHQL_URL,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
