// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'shadcn-nuxt'],
  colorMode: {
    classSuffix: ''
  },
  css:[
    '~/assets/styles/style.css',
    '~/assets/styles/demo.css'
  ],
})