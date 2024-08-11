/* eslint-disable node/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    'nuxt-content-assets',
    '@nuxt/content',
    'shadcn-nuxt',
    'nuxt-aos',
  ],

  extends: [
    '@nuxt-themes/elements',
    '@nuxt-themes/typography',
  ],

  colorMode: {
    classSuffix: '',
  },

  content: {
    highlight: {
      theme: {
        dark: 'one-dark-pro',
        default: 'one-dark-pro',
      },
    },
    markdown: {
      // Object syntax can be used to override default options
      remarkPlugins: {
        // Override remark-emoji options
        'remark-emoji': {
          emoticon: true,
        },
      },
    },
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
    mailchimp_api_key: process.env.MAILCHIMP_API_KEY,
    mailchimp_server_key: process.env.MAILCHIMP_API_SERVER,
    mailchimp_audience_id: process.env.MAILCHIMP_AUDIENCE_ID,
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
  compatibilityDate: '2024-08-10',
})
