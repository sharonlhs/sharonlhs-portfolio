// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      AMPLITUDE_KEY: process.env.AMPLITUDE_KEY
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

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon', 'nuxt-mail'],

  googleFonts: {
    families: {
      Inter: [400, 500, 700]
    },
    display: 'swap'
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },

  mail: {
    message: {
      to: process.env.SMTP_TO,
      cc: process.env.SMTP_TO,
      bcc: process.env.SMTP_TO,
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    }
  }
})