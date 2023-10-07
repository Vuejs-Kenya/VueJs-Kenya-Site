<script setup lang='ts'>
const partners = [
  {
    id: 1,
    partner: 'Vue',
    icon: 'logos:vue',
    link: 'https://vuejs.org',
  },

  {
    id: 2,
    partner: 'Nuxt',
    icon: 'logos:nuxt-icon',
    link: 'nuxt.com',
  },

  {
    id: 3,
    partner: 'Vuetify',
    icon: 'logos:vuetifyjs',
    link: 'https://vuetifyjs.com',
  },
  {
    id: 4,
    partner: 'Vueuse',
    icon: 'logos:vueuse',
    link: 'https://vueuse.org/',
  },

  {
    id: 5,
    partner: 'Rollup',
    icon: 'logos:rollupjs',
    link: 'https://rollupjs.org/',
  },

  {
    id: 6,
    partner: 'Vite',
    icon: 'logos:vitejs',
    link: 'https://vitejs.dev',
  },
]
</script>

<template>
  <div class="space-y-6">
    <SpotLightFeature color="0,97,0" color-dark="0,64,0">
      <SpotLightFeatureTitle title="Meet our community partners" />
    </SpotLightFeature>
    <BaseContainer>
      <div class="px-6 mt-6">
        <CardCommunityPartner :partners="partners" />
      </div>
    </BaseContainer>
  </div>
</template>
