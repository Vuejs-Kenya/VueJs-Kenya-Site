<script setup lang='ts'>
const communityInformation = [
  {
    id: 1,
    icon: 'logos:vue',
    title: '  Vue advocacy',
    content: ' Our community is dedicated to the Vue.js framework, valuing its simplicity and efficiency for modern web development',
  },

  {
    id: 2,
    icon: 'radix-icons:calendar',
    title: 'Meetups',
    content: ' We host regular meetups, giving members a chance to come together, share knowledge, and discuss the latest trends in tech.',
  },

  {
    id: 3,
    icon: 'material-symbols:laptop-chromebook-outline',
    title: 'Hackathons',
    content: 'We host hackathons to inspire creativity and collaboration. Join us to tackle exciting projects, overcome challenges, and showcase your coding skills.',
  },

  {
    id: 3,
    icon: 'icon-park-outline:bookshelf',
    title: 'Standup Thursdays',
    content: 'We believe in the power of knowledge sharing. Our community members are passionate about teaching and learning from one another. ',
  },
]

useSeoMeta({
  title: 'VueJs Kenya',
  ogTitle: 'VueJs Kenya',
  description: 'A community of Vue developers committed to promoting the use of Vue.js and other cutting-edge technologies in Kenya, through regular meetups, workshops, hackathons, and other events.',
  ogDescription: 'A community of Vue developers committed to promoting the use of Vue.js and other cutting-edge technologies in Kenya, through regular meetups, workshops, hackathons, and other events.',
})
</script>

<template>
  <div class="space-y-10 md:space-y-20">
    <LandingPageHeroSection />
    <LandingPageAboutSection :community-information="communityInformation" />
    <LazyLandingPageSpeakersSection />
    <CardSpeakerCallToAction />
    <LazyLandingPageTeamSection />
    <LandingPageCommunityPartnersSection />
    <LandingPageTicketSection />
    <LandingPageCommunitySection />
    <LandingPageNewsLetterSection />
  </div>
</template>
