import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ entryRoot: "src" })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/react-compound-factory.ts"),
      name: "react-coumpound-factory",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
})
