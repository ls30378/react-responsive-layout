// import { resolve } from "node:path";
import path from "path";
import dts from "vite-plugin-dts";
import * as packageJson from "./package";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/components/"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve("src", "components/ResponsiveBox.tsx"),
      name: "ResponsiveBox",
      formats: ["es", "umd"],
      fileName: (format) => `responsive-box.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      // external: [...Object.keys(packageJson)],
    },
  },
});
