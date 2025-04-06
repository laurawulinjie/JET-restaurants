import { createProxyMiddleware } from "http-proxy-middleware";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxt/test-utils/module"],
  css: ["@/styles/default.scss"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_KEY: process.env.API_KEY,
    },
  },
  nitro: {
    devProxy: {
      "/api": {
        target: process.env.API_BASE_URL,
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
});
