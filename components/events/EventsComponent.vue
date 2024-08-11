<script setup lang='ts'>
import BaseContainerComponent from '~/components/base/ContainerComponent.vue'
import ButtonPillComponent from '~/components/button/PillComponent.vue'

const speakers = [
  {
    id: useId(),
    name: 'Chris ( Dev Montana )',
    title: 'FullStack Developer',
    talk: 'WebSockets With Nuxt & Nitro',
    githubURL: 'https://github.com/DevHumbleChris',
    twitterURL: 'https://twitter.com/AmChrisKE',
    imageURL: '/websockets-with-nuxt-and-nitro.jpeg',
    slides: '',
    event: 'Weekly Series',
  },
  {
    id: useId(),
    name: 'Arash Sheyda',
    title: 'FullStack Developer',
    talk: 'Building FullStack Nuxt Apps With MongoDB',
    githubURL: 'https://github.com/arashsheyda',
    twitterURL: 'https://twitter.com/arash_sheyda',
    imageURL: '/fullstack-nuxt-with-mongodb.jpeg',
    slides: 'https://talks.arashsheyda.me/2024/nuxt-fullstack-mongo/1?clicks=1',
    event: 'Weekly Series',
  },
  {
    id: useId(),
    name: 'Jibril Mohamod',
    title: 'Junior Software Engineer',
    talk: 'Image Optimizations on Nuxt using Nuxt Image and Cloudinary.',
    githubURL: 'https://github.com/jibrilmohamod',
    twitterURL: 'https://twitter.com/mohamodjibril',
    imageURL: '/image-optimizations.jpeg',
    slides: '',
    event: 'Weekly Series',
  },

  {
    id: useId(),
    name: 'Alexander Gekov',
    title: 'Software Engineer',
    talk: `Building a Blog with Nuxt 3 + Storyblok.`,
    githubURL: 'https://github.com/alexander-gekov',
    twitterURL: 'https://twitter.com/AlexanderGekov',
    imageURL: '/nuxt3-storyblok.jpeg',
    event: 'Weekly Series',
  },

  {
    id: useId(),
    name: 'Selemon Brahanu',
    talk: 'Building NPM Packages With Vue 3',
    title: 'Creator of Windi UI & Nuxt UI Vue',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: '/npm-package-with-vue3.jpeg',
    slides: '',
    event: 'Weekly Series',
  },

  {
    id: useId(),
    name: 'Selemon Brahanu',
    talk: 'Nuxt 3: Exploring Rendering modes',
    title: 'Creator of Windi UI & Nuxt UI Vue',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: '/rendering-modes.jpeg',
    slides: '',
    event: 'Weekly Series',
  },

  {
    id: useId(),
    name: 'Selemon Brahanu',
    talk: 'Unveiling Nuxt DevTools & Nuxtr Extension!',
    title: 'Creator of Windi UI & Nuxt UI Vue',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: '/nuxt-devtools.jpeg',
    slides: '',
    event: 'Weekly Series',
  },

  {
    id: useId(),
    name: 'Selemon Brahanu',
    talk: 'Exploring Nuxtlabs UI: Optimizing UI development with Nuxt 3.',
    title: 'Creator of Windi UI & Nuxt UI Vue',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: '/nuxtlabs-ui.jpeg',
    slides: '',
    event: 'Weekly Series',
  },

  {
    id: useId(),
    name: 'Selemon Brahanu',
    talk: 'Harnessing the Power Of Nuxt Content Module.',
    title: 'Creator of Windi UI & Nuxt UI Vue',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: '/nuxt-content-module.jpeg',
    slides: '',
    event: 'Weekly Series',
  },

  {
    id: useId(),
    name: 'Daniel Roe',
    title: 'Nuxt Core Team Lead',
    talk: 'NuxtJs Composition API.',
    githubURL: 'https://github.com/danielroe',
    twitterURL: 'https://twitter.com/danielcroe',
    imageURL: '/nuxtjs-composition-api.jpeg',
    slides: '',
    event: 'Virtual Series',
  },

  {
    id: useId(),
    name: 'Clement Habinshuti',
    title: 'Senior Software Engineer @Microsoft',
    talk: 'Render + Interaction {Renderaction}.',
    githubURL: 'https://github.com/habbes',
    twitterURL: 'https://twitter.com/habyhabbes',
    imageURL: '/clement-render-interaction.jpeg',
    slides: '',
    event: 'Monthly Meetup',
  },

  {
    id: useId(),
    name: 'Clement Habinshuti',
    title: 'Senior Software Engineer @Microsoft',
    talk: 'Composition API.',
    githubURL: 'https://github.com/habbes',
    twitterURL: 'https://twitter.com/habyhabbes',
    imageURL: '/composition-api.jpeg',
    slides: '',
    event: 'Virtual Series',
  },

  {
    id: useId(),
    name: 'Brian Nduhiu',
    title: 'Senior Software Engineer',
    talk: 'Animation Techniques in Vue JS.',
    githubURL: 'https://github.com/brian-nduhiu',
    twitterURL: 'https://twitter.com/BrianNduhiu',
    imageURL: '/animation-techniques.jpeg',
    slides: '',
    event: 'Virtual Series',
  },

  {
    id: useId(),
    name: 'Lenny Kamande',
    title: 'Senior Software Engineer',
    talk: 'How Vite changes the game.',
    githubURL: 'https://github.com/lennykamande',
    twitterURL: 'https://twitter.com/lennymanyeki',
    imageURL: '/vite.jpeg',
    slides: '',
    event: 'Monthly Meetup',
  },
  {
    id: useId(),
    name: 'Mauko Maunde',
    title: 'Senior Software Engineer',
    talk: `State Management in Vue 3.`,
    githubURL: 'https://github.com/maukoese',
    twitterURL: 'https://twitter.com/maukoese',
    imageURL: '/state-management.jpeg',
    slides: '',
    event: 'Monthly Meetup',
  },

  {
    id: useId(),
    name: 'Mauko Maunde',
    title: 'Senior Software Engineer',
    talk: `Managing Styles in VueJs.`,
    githubURL: 'https://github.com/maukoese',
    twitterURL: 'https://twitter.com/maukoese',
    imageURL: '/styles-in-vuejs.jpeg',
    slides: '',
    event: 'Virtual Series',
  },

  {
    id: useId(),
    name: 'Uchechukwu Azubuko',
    title: 'Lead FrontEnd Engineer',
    githubURL: 'https://github.com/UcheAzubuko',
    twitterURL: 'https://twitter.com/UcheAzubuko',
    imageURL: '/vitest.jpeg',
    talk: `Testing the Vue Way: Vitest in action.`,
    slides: '',
    event: 'Weekly Series',
  },
  {
    id: useId(),
    name: 'Alexander Opalic',
    title: 'FullStack Developer',
    talk: 'Vue Composables.',
    githubURL: 'https://github.com/alexanderop',
    twitterURL: 'https://twitter.com/alexanderopalic',
    imageURL: '/vue-composables.jpeg',
    slides: '',
    event: 'Weekly Series',
  },

  {
    id: useId(),
    name: 'Abel Masila',
    title: 'Senior FrontEnd Engineer',
    talk: 'Essential Vue 3 patterns and techniques',
    githubURL: 'https://github.com/abel-masila',
    twitterURL: 'https://twitter.com/abel_masila',
    imageURL: '/vue3-patterns.jpeg',
    slides: '',
    event: 'Monthly Meetup',
  },

  {
    id: useId(),
    name: 'Dominic Odhiambo',
    title: 'Senior Software Engineer',
    talk: 'Vue + Grahpql.',
    githubURL: 'https://github.com/ayimdomnic',
    twitterURL: '',
    imageURL: '/vue-graphql.jpeg',
    slides: '',
    event: 'Virtual Series',
  },

  {
    id: useId(),
    name: 'Samuel Snopko',
    title: 'Head of Product @Storyblok',
    talk: 'Building Jamstack Websites with Nuxt JS.',
    githubURL: 'https://github.com/samuells',
    twitterURL: 'https://twitter.com/samuelsnopko',
    imageURL: '/jamstack-website.jpeg',
    slides: '',
    event: 'Virtual Series',
  },

  {
    id: useId(),
    name: 'Jack Herrington',
    title: 'Full stack principal engineer ',
    githubURL: 'https://github.com/jherr',
    talk: 'Micro-Frontends in VueJS.',
    twitterURL: 'https://twitter.com/jherr',
    imageURL: '/micro-frontend.jpeg',
    slides: '',
    event: 'Virtual Series',
  },
]
</script>

<template>
  <BaseContainerComponent>
    <div class="mt-12 flex flex-col space-y-4">
      <div class="mb-4 text-center">
        <div class="flex flex-col space-y-3 items-center">
          <h1 class="text-3xl sm:text-4xl text-center font-semibold">
            <span class="text-green-500"> VueJs</span> Events
          </h1>
          <p class="max-w-2xl font-Inter dark:text-gray-300 px-2 text-sm md:text-md md:px-0">
            Stay up to date with all our latest events by exploring both our past and upcoming sessions.
          </p>
        </div>
      </div>
      <div class="grid place-items-center">
        <h1 class="dark:text-white text-black md:text-2xl font-semibold">
          Previous Events
        </h1>
      </div>
      <div
        class="grid place-items-center grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
      >
        <div v-for="{ id, name, talk, event, imageURL, slides } in speakers" :key="id" class="h-80 flex items-center justify-center p-2">
          <div class="flex flex-col space-y-3 h-full">
            <div class="flex items-center gap-2 border rounded-lg">
              <img :src="imageURL" :alt="talk" class="h-44 rounded-lg">
            </div>

            <div class="flex flex-col items-start justify-between h-full">
              <div class="flex items-center justify-between w-full">
                <ButtonPillComponent :title="event" />
                <NuxtLink v-if="slides" :to="slides" external target="_blank">
                  <button type="button">
                    <Icon name="line-md:list-3-filled" class="w-5 h-5 text-gray-500 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500" />
                  </button>
                </NuxtLink>
              </div>
              <h1 class="font-bold max-w-[300px]">
                {{ talk }}
              </h1>
              <h4 class="font-semibold text-gray-600 dark:text-gray-300">
                By {{ name }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseContainerComponent>
</template>
