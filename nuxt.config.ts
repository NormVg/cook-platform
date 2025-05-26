// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  runtimeConfig: {
    appWriteKey: process.env.APPWRITE_API_KEY,
    appWriteProject: process.env.APPWRITE_API_PROJECT,
    appWriteBucket: process.env.APPWRITE_API_BUCKET,
  },

  css: ["~/assets/global.css"],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
    },
  },

  modules: ["@pinia/nuxt"],
})
