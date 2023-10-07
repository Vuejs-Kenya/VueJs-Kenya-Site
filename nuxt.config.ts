// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vueuse/nuxt', 'nuxt-icon'],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    exposeLevel: 2,
    config: {},
    injectPosition: 'last',
    viewer: true,
  },
  devtools: { enabled: true },
  imports: {
    dirs: ['./utils'],
  },
})
