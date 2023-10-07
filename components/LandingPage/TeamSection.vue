<script setup lang='ts'>
const team = [
  {
    id: 1,
    name: 'Josh Murigi',
    title: 'Founder of VueJs Kenya',
    githubURL: 'https://github.com/Ryggs',
    twitterURL: 'https://twitter.com/josh_ryggs',
    imageURL: 'https://github.com/Ryggs.png',
  },

  {
    id: 2,
    name: 'Lenny Kamande',
    title: 'Co-founder of VueJs Kenya',
    githubURL: 'https://github.com/lennykamande',
    twitterURL: 'https://twitter.com/lennymanyeki',
    imageURL: 'https://github.com/lennykamande.png',
  },

  {
    id: 4,
    name: 'Brian Nduhiu',
    title: 'Senior Software Engineer',
    githubURL: 'https://github.com/brian-nduhiu',
    twitterURL: 'https://twitter.com/BrianNduhiu',
    imageURL: 'https://github.com/brian-nduhiu.png',
  },
  {
    id: 3,
    name: 'Bambi Nafula',
    title: 'Content Creator',
    githubURL: 'https://github.com/Vuejs-Kenya',
    twitterURL: 'https://twitter.com/_NafulaC',
    imageURL: 'https://pbs.twimg.com/profile_images/1708707199617277952/AYJ4oDFR_400x400.jpg',
  },
  {
    id: 5,
    name: 'Selemon Brahanu',
    title: 'Creator of Windi UI & Nuxt UI Vue',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: 'https://github.com/selemondev.png',
  },

  {
    id: 6,
    name: 'Derrick Mbarani',
    title: 'Software Engineer',
    githubURL: 'https://github.com/sciederrick',
    twitterURL: 'https://twitter.com/der15171',
    imageURL: 'https://github.com/sciederrick.png',
  },
]
</script>

<template>
  <div class="space-y-6">
    <SpotLightFeature color="0,97,0" color-dark="0,48,0">
      <SpotLightFeatureTitle title="Meet our team" />
    </SpotLightFeature>
    <BaseContainer>
      <div class="px-6 mt-6">
        <CardTeam :team="team" />
      </div>
    </BaseContainer>
  </div>
</template>
