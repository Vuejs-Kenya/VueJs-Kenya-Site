// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    prefix: 'UI',
    componentDir: './components/ui',
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  experimental: {
    viewTransition: true,
  },
  runtimeConfig: {
    mailchimp_api_key: '',
    mailchimp_server_key: '',
    mailchimp_audience_id: '',
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
    configPath: 'tailwind.config.js',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  devtools: { enabled: true },
})
