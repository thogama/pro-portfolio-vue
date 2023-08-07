// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  modules: ['nuxt-icon', '@nuxtjs/i18n'],
  i18n: {
    langDir: "locales",

    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US' },
      { code: 'pt', iso: 'pt-BR', file: 'pt-BR' },
    ],
    lazy: true,
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: "en"
    },
    // strategy:"no_prefix"
  }
})
