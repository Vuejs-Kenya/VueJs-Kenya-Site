<script setup lang='ts'>
import LandingPageHeroSection from '../components/landingPage/HeroSection.vue'
import LandingPageAboutSection from '../components/landingPage/AboutSection.vue'
import LandingPageSpeakersSection from '../components/landingPage/SpeakersSection.vue'

const communityInformation = [
  {
    id: 1,
    icon: 'logos:vue',
    title: '  Vue advocacy',
    content: 'Our community is dedicated to the Vue.js framework, valuing its simplicity and efficiency for modern web development',
  },

  {
    id: 2,
    icon: 'radix-icons:calendar',
    title: 'Meetups',
    content: 'We host regular meetups, giving members a chance to come together, share knowledge, and discuss the latest trends in tech.',
  },

  {
    id: 3,
    icon: 'material-symbols:laptop-chromebook-outline',
    title: 'Hackathons',
    content: 'We host hackathons to inspire creativity and collaboration. Join us to tackle exciting projects, and showcase your coding skills.',
  },

  {
    id: 3,
    icon: 'icon-park-outline:bookshelf',
    title: 'Standup Thursdays',
    content: 'We love sharing knowledge. Our community members are passionate about teaching and learning from one another. ',
  },
]
</script>

<template>
  <div class="space-y-10">
    <LandingPageHeroSection />
    <div class="space-y-10 md:space-y-28">
      <LandingPageAboutSection :community-information="communityInformation" />
      <LandingPageSpeakersSection />
    </div>
  </div>
</template>
