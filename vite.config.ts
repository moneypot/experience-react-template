import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@moneypot/experience-react-sdk/generated": "./src/__generated__",
    },
  },
  define: {
    // Fallback if .env is missing (StackBlitz filters .env files)
    ...(process.env.VITE_GRAPHQL_URL
      ? {}
      : {
          "import.meta.env.VITE_GRAPHQL_URL": JSON.stringify(
            "https://hub1.moneypot.com/graphql",
          ),
        }),
  },
});
