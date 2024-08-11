<script setup lang='ts'>
import EventsComponent from '~/components/events/EventsComponent.vue'

useSeoMeta({
  description: 'Stay up to date with all our latest events by exploring both our past and upcoming sessions.',
  ogTitle: 'VueJs Kenya Events',
  ogDescription: 'Stay up to date with all our latest events by exploring both our past and upcoming sessions.',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'VueJs Kenya Events',
  twitterDescription: 'Stay up to date with all our latest events by exploring both our past and upcoming sessions.',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <EventsComponent />
</template>
