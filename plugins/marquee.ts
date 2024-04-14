import { Marquee } from '@selemondev/vue3-marquee'
import '@selemondev/vue3-marquee/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Marquee', Marquee)
})
