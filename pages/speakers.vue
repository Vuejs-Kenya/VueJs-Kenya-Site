<script setup lang='ts'>
import CardSpeakerComponent from '~/components/card/SpeakerComponent.vue'
import BaseContainerComponent from '~/components/base/ContainerComponent.vue'

const speakers = [
  {
    id: useId(),
    name: 'Jibril Mohamod',
    title: 'Junior Software Engineer',
    githubURL: 'https://github.com/jibrilmohamod',
    twitterURL: 'https://twitter.com/mohamodjibril',
    imageURL: 'https://github.com/jibrilmohamod.png',
    talks: [
      {
        id: useId(),
        talk: 'Image Optimizations on Nuxt using Nuxt Image and Cloudinary.',
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Joseph Wamburu',
    title: 'DevOps Engineer at ARC ride global',
    githubURL: 'https://github.com/joseph-njogu',
    twitterURL: 'https://twitter.com/josephnjogu487',
    imageURL: 'https://github.com/joseph-njogu.png',
    talks: [
      {
        id: useId(),
        talk: `Joseph's Odyssey: Navigating DevOps and Mastering Vue - A Developer's Tale.`,
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },
    ],
  },
  {
    id: useId(),
    name: 'Alexander Gekov',
    title: 'Software Engineer',
    githubURL: 'https://github.com/alexander-gekov',
    twitterURL: 'https://twitter.com/AlexanderGekov',
    imageURL: 'https://github.com/alexander-gekov.png',
    talks: [
      {
        id: useId(),
        talk: `Building a Blog with Nuxt 3 + Storyblok.`,
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },
    ],
  },
  {
    id: useId(),
    name: 'Selemon Brahanu',
    title: 'Creator of Windi UI & Nuxt UI Vue',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: 'https://github.com/selemondev.png',
    talks: [
      {
        id: useId(),
        talk: 'Nuxt 3 Unleashed: Supercharge Your Web Apps with Speed, Scalability, and Modernity.',
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },
      {
        id: useId(),
        talk: 'Nuxt 3: Exploring Rendering modes; from SSR to SPA and everything in between.',
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },

      {
        id: useId(),
        talk: 'Unveiling Nuxt DevTools & Nuxtr Extension!',
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },

      {
        id: useId(),
        talk: 'Exploring Nuxtlabs UI: Optimizing UI development with Nuxt 3.',
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },

      {
        id: useId(),
        talk: 'Harnessing the Power Of Nuxt Content Module.',
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Daniel Roe',
    title: 'Nuxt Core Team Lead',
    githubURL: 'https://github.com/danielroe',
    twitterURL: 'https://twitter.com/danielcroe',
    imageURL: 'https://github.com/danielroe.png',
    talks: [
      {
        id: useId(),
        talk: 'NuxtJs Composition API.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Clement Habinshuti',
    title: 'Senior Software Engineer @Microsoft',
    githubURL: 'https://github.com/habbes',
    twitterURL: 'https://twitter.com/habyhabbes',
    imageURL: 'https://github.com/habbes.png',
    talks: [
      {
        id: useId(),
        talk: 'Render + Interaction {Renderaction}.',
        events: [
          {
            id: useId(),
            name: 'Monthly Meetup',
          },
        ],
      },
      {
        id: useId(),
        talk: 'Composition API.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Brian Nduhiu',
    title: 'Senior Software Engineer',
    githubURL: 'https://github.com/brian-nduhiu',
    twitterURL: 'https://twitter.com/BrianNduhiu',
    imageURL: 'https://github.com/brian-nduhiu.png',
    talks: [
      {
        id: useId(),
        talk: 'Animation Techniques in Vue JS.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Lenny Kamande',
    title: 'Senior Software Engineer',
    githubURL: 'https://github.com/lennykamande',
    twitterURL: 'https://twitter.com/lennymanyeki',
    imageURL: 'https://pbs.twimg.com/profile_images/1186670731452735489/upoV3xXv_200x200.jpg',
    talks: [
      {
        id: useId(),
        talk: 'Laravel Vue Series.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },

      {
        id: useId(),
        talk: 'How Vite changes the game.',
        events: [
          {
            id: useId(),
            name: 'Monthly Meetup',
          },
        ],
      },
    ],
  },
  {
    id: useId(),
    name: 'Mauko Maunde',
    title: 'Senior Software Engineer',
    githubURL: 'https://github.com/maukoese',
    twitterURL: 'https://twitter.com/maukoese',
    imageURL: 'https://github.com/maukoese.png',
    talks: [
      {
        id: useId(),
        talk: `State Management in Vue 3.`,
        events: [
          {
            id: useId(),
            name: 'Monthly Meetup',
          },
        ],
      },

      {
        id: useId(),
        talk: `Managing Styles in VueJs.`,
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Uchechukwu Azubuko',
    title: 'Lead FrontEnd Engineer',
    githubURL: 'https://github.com/UcheAzubuko',
    twitterURL: 'https://twitter.com/UcheAzubuko',
    imageURL: 'https://github.com/UcheAzubuko.png',
    talks: [
      {
        id: useId(),
        talk: `Testing the Vue Way: Vitest in action.`,
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Maxence Poutord',
    title: 'Senior Software Engineer',
    githubURL: 'https://github.com/maxpou',
    twitterURL: 'https://twitter.com/_maxpou',
    imageURL: 'https://github.com/maxpou.png',
    talks: [
      {
        id: useId(),
        talk: 'Effective FrontEnd Testing.',
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Alexander Opalic',
    title: 'FullStack Developer',
    githubURL: 'https://github.com/alexanderop',
    twitterURL: 'https://twitter.com/alexanderopalic',
    imageURL: 'https://github.com/alexanderop.png',
    talks: [
      {
        id: useId(),
        talk: 'Vue Composables.',
        events: [
          {
            id: useId(),
            name: 'Weekly Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'John Philip',
    title: 'Software Engineer',
    githubURL: 'https://github.com/dxphilo',
    twitterURL: 'https://twitter.com/amjohnphilip',
    imageURL: 'https://github.com/dxphilo.png',
    talks: [
      {
        id: useId(),
        talk: 'Handling Routes & Best practices.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Abel Masila',
    title: 'Senior FrontEnd Engineer',
    githubURL: 'https://github.com/abel-masila',
    twitterURL: 'https://twitter.com/abel_masila',
    imageURL: 'https://github.com/abel-masila.png',
    talks: [
      {
        id: useId(),
        talk: 'Introduction & Overview of Vue 3.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Dominic Odhiambo',
    title: 'Senior Software Engineer',
    githubURL: 'https://github.com/ayimdomnic',
    twitterURL: '',
    imageURL: 'https://github.com/ayimdomnic.png',
    talks: [
      {
        id: useId(),
        talk: 'Vue + Grahpql.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Samuel Snopko',
    title: 'Head of Product @Storyblok',
    githubURL: 'https://github.com/samuells',
    twitterURL: 'https://twitter.com/samuelsnopko',
    imageURL: 'https://github.com/samuells.png',
    talks: [
      {
        id: useId(),
        talk: 'Building Jamstack Websites with Nuxt JS.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },

  {
    id: useId(),
    name: 'Jack Herrington',
    title: 'Full stack principal engineer ',
    githubURL: 'https://github.com/jherr',
    twitterURL: 'https://twitter.com/jherr',
    imageURL: 'https://github.com/jherr.png',
    talks: [
      {
        id: useId(),
        talk: 'Micro-Frontends in VueJS.',
        events: [
          {
            id: useId(),
            name: 'Virtual Series',
          },
        ],
      },
    ],
  },
]

const speakerGuideLines = [
  {
    id: 1,
    guideline: 'Make sure you\'re familiar with the topic and have your presentation and any required materials ready.',
  },

  {
    id: 2,
    guideline: 'The speaker should be respectful to the audience and fellow speakers. Harassment or discriminatory behavior will not be tolerated.',
  },

  {
    id: 3,
    guideline: 'Ensure that your content is accessible and inclusive to all attendees, regardless of their background or level of expertise.',
  },

  {
    id: 4,
    guideline: 'Keep your presentation lively and engaging, using visuals and anecdotes to illustrate your points and maintain audience interest.',
  },

  {
    id: 5,
    guideline: 'The speaker should be open to receiving feedback and suggestions from the audience and event organizers.',
  },

  {
    id: 6,
    guideline: 'The event organizers may record or live stream the presentation. The speaker should be informed of this and provide consent beforehand.',
  },
]
</script>

<template>
  <BaseContainerComponent>
    <div class="mt-12 flex flex-col space-y-16">
      <div>
        <div class="mb-4 text-center">
          <div class="flex flex-col space-y-3 items-center">
            <h1 class="text-3xl sm:text-4xl text-center font-semibold">
              Meet Our Past <span class="text-green-500">Speakers</span>
            </h1>
            <p class="max-w-2xl font-Inter dark:text-gray-300 px-2 text-sm md:text-md md:px-0">
              At VueJS Kenya, we welcome both seasoned developers and rising stars as speakers, fostering a
              thriving
              community where
              every voice fuels growth.
            </p>
          </div>
        </div>
        <div
          class="grid place-items-center grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto mt-20"
        >
          <div v-for="{ id, name, title, talks, githubURL, twitterURL, imageURL } in speakers" :key="id">
            <CardSpeakerComponent
              :twitter-u-r-l="twitterURL" :github-u-r-l="githubURL" :content="talks" :title="title"
              :name="name" :avatar="imageURL"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-10">
        <div class="grid place-items-center">
          <h1 class="text-3xl sm:text-4xl text-center leading-10 font-semibold">
            Speaker<span class="text-green-500"> guidelines</span>
          </h1>
        </div>
        <div class="flex flex-col space-y-6 px-6">
          <ul
            v-for="speakerGuideLine in speakerGuideLines" :key="speakerGuideLine.id"
            class="list-disc list-outside pr-[revert]"
          >
            <li class="text-black cursor-pointer duration-200 ease-in dark:text-white">
              {{ speakerGuideLine.guideline }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BaseContainerComponent>
</template>
