<script setup lang='ts'>
const boxRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const boxElement = boxRef.value

  if (!boxElement)
    return

  const updateAnimation = () => {
    const angle
      = (Number.parseFloat(getComputedStyle(boxElement).getPropertyValue('--angle'))
        + 0.5)
      % 360
    boxElement.style.setProperty('--angle', `${angle}deg`)
    requestAnimationFrame(updateAnimation)
  }

  requestAnimationFrame(updateAnimation)
})

const speakers = [
  {
    id: 1,
    name: 'Selemon Brahanu',
    title: 'Creator of Windi UI & Nuxt UI Vue',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: 'https://github.com/selemondev.png',
  },

  {
    id: 2,
    name: 'Joseph Wamburu',
    title: 'DevOps Engineer at ARC ride global',
    githubURL: 'https://github.com/joseph-njogu',
    twitterURL: 'https://twitter.com/josephnjogu487',
    imageURL: 'https://github.com/joseph-njogu.png',
  },
  {
    id: 3,
    name: 'Alexander Gekov',
    title: 'Software Engineer',
    githubURL: 'https://github.com/alexander-gekov',
    twitterURL: 'https://twitter.com/AlexanderGekov',
    imageURL: 'https://github.com/alexander-gekov.png',
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
    id: 5,
    name: 'Mauko Maunde',
    title: 'Senior Software Engineer',
    githubURL: 'https://github.com/maukoese',
    twitterURL: 'https://twitter.com/maukoese',
    imageURL: 'https://github.com/maukoese.png',
  },

  {
    id: 6,
    name: 'Maxence Poutord',
    title: 'Senior Software Engineer',
    githubURL: 'https://github.com/maxpou',
    twitterURL: 'https://twitter.com/_maxpou',
    imageURL: 'https://github.com/maxpou.png',
  },
]
</script>

<template>
  <div class="space-y-6">
    <SpotLightFeature color="0,97,0" color-dark="0,64,0">
      <SpotLightFeatureTitle title="Meet our speakers" />
    </SpotLightFeature>
    <BaseContainer>
      <div class="px-6 mt-6">
        <CardSpeakers :speakers="speakers" />
      </div>
    </BaseContainer>
  </div>
</template>
