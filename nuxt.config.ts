// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },


  nodemailer: {
    from: '"TheAlphaOnes" <thealphaones.hq@gmail.com>',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ACC,
      pass: process.env.MAIL_PASS,
    },
  },

  runtimeConfig: {
    appWriteKey: process.env.APPWRITE_API_KEY,
    appWriteProject: process.env.APPWRITE_API_PROJECT,
    appWriteBucket: process.env.APPWRITE_API_BUCKET,

    public:{

      taoAuthToken :process.env.TAO_AUTH_TOKEN,
      taoAuthURL:process.env.TAO_AUTH_URL,
      taoAuthCallback:process.env.TAO_AUTH_CALLBACK,
      taoTokenWeb:process.env.TAO_TOKEN_WEB
    }
  },

  css: ["~/assets/global.css"],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
    },
  },


  modules: ["@pinia/nuxt",'motion-v/nuxt','nuxt-nodemailer'],
})
