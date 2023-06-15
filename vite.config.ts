import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import vitePluginImp from "vite-plugin-imp"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
        {
          libName: "react-multi-carousel",
          style: () => "react-multi-carousel/lib/styles.css",
        },
      ],
    }),
  ],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
