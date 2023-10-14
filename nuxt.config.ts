// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vueuse/nuxt', 'nuxt-icon', '@nuxt/content'],
  extends: [
    '@nuxt-themes/elements',
    '@nuxt-themes/typography',
  ],
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
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    exposeLevel: 2,
    config: {},
    injectPosition: 'last',
    viewer: true,
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
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
    },
  },
  devtools: { enabled: true },
  imports: {
    dirs: ['./utils', './Types'],
  },
})
