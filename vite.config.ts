import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        // Split by resolved module path rather than by package name. The
        // array form silently stops matching when a dependency reorganises
        // its entry points: after the react-router 6.30 bump it emitted an
        // empty 0.03 kB vendor chunk and folded react into the router chunk.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          const path = id.split("node_modules/").pop() ?? "";
          // react-router must be tested before react, it contains "react"
          if (path.startsWith("react-router") || path.startsWith("@remix-run"))
            return "router";
          if (path.startsWith("@fortawesome")) return "icons";
          if (path.startsWith("react-helmet")) return "helmet";
          if (
            path.startsWith("react/") ||
            path.startsWith("react-dom/") ||
            path.startsWith("scheduler/")
          )
            return "vendor";
        },
      },
    },
  },
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    },
  },
});
