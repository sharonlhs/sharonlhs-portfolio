// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      AMPLITUDE_KEY: process.env.AMPLITUDE_KEY,
      CONTACT_US_ENDPOINT: process.env.CONTACT_US_ENDPOINT,
      MY_EMAIL: process.env.MY_EMAIL
    }
  },
  css: ['~/assets/css/main.css'],
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: '✨ Portfolio | Sharon Lim',

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio of Sharon Lim' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon', 'nuxt-resend'],

  googleFonts: {
    families: {
      Inter: [400, 500, 700]
    },
    display: 'swap'
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
})