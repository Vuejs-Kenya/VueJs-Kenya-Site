<script setup lang='ts'>
const youtubeVideos = [
  {
    id: useId(),
    title: 'Testing the Vue Way',
    speakerName: 'Uchechukwu Azubuko',
    src: 'https://www.youtube.com/embed/RycxCRb3OvE?si=Hsk7pkawyqED64h1',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/UcheAzubuko',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/UcheAzubuko',
      },
    ],
  },

  {
    id: useId(),
    title: 'Exploring NuxtLabs UI',
    speakerName: 'Selemondev',
    src: 'https://www.youtube.com/embed/zLUzN8zRRRE?si=W4l3dBmHVrAmGWO4',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/selemondev',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/selemondev',
      },
    ],
  },

  {
    id: useId(),
    title: 'Unveiling Nuxt DevTools & Nuxtr Extension',
    speakerName: 'Selemondev',
    src: 'https://www.youtube.com/embed/jWFjCbgup28?si=gRP6PwRsldTPutI5',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/selemondev',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/selemondev',
      },
    ],
  },

  {
    id: useId(),
    title: 'Exploring Rendering Modes In Nuxt 3',
    speakerName: 'Selemondev',
    src: 'https://www.youtube.com/embed/SO0U6Ae3-os?si=QgLRTA19F6xLqGm6',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/selemondev',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/selemondev',
      },
    ],
  },

  {
    id: useId(),
    title: 'Navigating DevOps And Mastering Vue',
    speakerName: 'Joseph Njogu',
    src: 'https://www.youtube.com/embed/wItgeokkeZA?si=_QGa20nYLFCTpjnP',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/joseph-njogu',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/joseph-njogu487',
      },
    ],
  },

  {
    id: useId(),
    title: 'Nuxt 3 Unleashed',
    speakerName: 'Selemondev',
    src: 'https://www.youtube.com/embed/fSxFdGuG9wA?si=xlZhgR7leEM-I6my',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/selemondev',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/selemondev',
      },
    ],
  },

  {
    id: useId(),
    title: 'Vue 3 Composition API',
    speakerName: 'Clement Habinshuti',
    src: 'https://www.youtube.com/embed/QcjWohc4-7s?si=UwokDEqKtFfkDPCr',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/habbes',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/habyhabbes',
      },
    ],
  },

  {
    id: useId(),
    title: 'Crushing Interviews',
    speakerName: 'David Roberts',
    src: 'https://www.youtube.com/embed/E4YITRtuCuM?si=z-uQUpZr8i16zdR-',
    socials: [
      {
        id: useId(),
        name: 'YouTube',
        icon: 'line-md:youtube',
        link: 'https://www.youtube.com/@crushingdigital',
      },

      {
        id: useId(),
        name: 'LinkedIn',
        icon: 'line-md:linkedin',
        link: 'https://www.linkedin.com/in/davidproberts/',
      },
    ],
  },

  {
    id: useId(),
    title: 'Building Jamstack Websites with Nuxtjs',
    speakerName: 'Samuel Snopko',
    src: 'https://www.youtube.com/embed/3xEB3GPX0_M?si=MDmpy8zz7Bs6Si6T',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://twitter.com/samuelsnopko',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/samuelsnopko',
      },
    ],
  },

  {
    id: useId(),
    title: 'Larave Vue(Part 3)',
    speakerName: 'Lenny Kamande',
    src: 'https://www.youtube.com/embed/i91e2tFLbho?si=bKHtWodfM2WdQDi4',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/lennykamande',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/lennymanyeki',
      },
    ],
  },

  {
    id: useId(),
    title: 'Larave Vue(Part 2)',
    speakerName: 'Lenny Kamande',
    src: 'https://www.youtube.com/embed/GdAg7i1ZPoo?si=MUy7VwEIa5iwABc_',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/lennykamande',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/lennymanyeki',
      },
    ],
  },

  {
    id: useId(),
    title: 'Fullstack with Larave Vue (Part 1 of 3)',
    speakerName: 'Lenny Kamande',
    src: 'https://www.youtube.com/embed/qXdUuG75qHc?si=7em838DOgzyK2wo_',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/lennykamande',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/lennymanyeki',
      },
    ],
  },
  {
    id: useId(),
    title: 'Vue + GraphQL Part 2',
    speakerName: 'Dormnic Odhiambo',
    src: 'https://www.youtube.com/embed/xEhQnfDoDJ4?si=pzjliiGt4PJ3U7lg',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/ayimdomnic',
      },
    ],
  },

  {
    id: useId(),
    title: 'Vue + GraphQL Part 1',
    speakerName: 'Dormnic Odhiambo',
    src: 'https://www.youtube.com/embed/-ZFrIDk9eKg?si=KVDNLO0jDK-SV2E0',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/ayimdomnic',
      },
    ],
  },

  {
    id: useId(),
    title: 'State Management with Vuex',
    speakerName: 'John Kamau',
    src: 'https://www.youtube.com/embed/ptWXkT7vnT4?si=2sI6cDwvcjYPDrEE',
    socials: [],
  },

  {
    id: useId(),
    title: 'Intro To Vue 3',
    speakerName: 'Abel Masila',
    src: 'https://www.youtube.com/embed/1tLqL8VeAqM?si=6mE9QUjzNYZx4III',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/abel-masila',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/abel_masila',
      },
    ],
  },

  {
    id: useId(),
    title: 'Effective Frontend Testing With Vuejs',
    speakerName: ' Maxence Poutord',
    src: 'https://www.youtube.com/embed/kgMOkYCun4I?si=4spiSrTm3fvknD2f',
    socials: [
      {
        id: useId(),
        name: 'Github',
        icon: 'line-md:github',
        link: 'https://github.com/maxpou',
      },

      {
        id: useId(),
        name: 'Twitter',
        icon: 'line-md:twitter-x',
        link: 'https://twitter.com/_maxpou',
      },
    ],
  },
]
</script>

<template>
  <main class="relative px-6 max-w-[1500px] mx-auto md:px-10 xl:px-2">
    <div class="py-10 lg:px-20 space-y-10">
      <div class="grid place-items-center gap-y-1">
        <h1 class="dark:text-white text-black text-center text-lg md:text-2xl lg:text-3xl font-semibold">
          Learn With Our Workshop Videos
        </h1>
        <h4 class="dark:text-white text-black text-center max-w-lg">
          Enhance your skills by exploring our Vue and Nuxt sessions.
        </h4>
      </div>

      <div class="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-y-8 w-full">
        <div v-for="{ id, title, speakerName, src, socials } in youtubeVideos" :key="id" class="flex flex-col space-y-3 w-[280px] md:w-[300px] lg:w-[350px] xl:w-[400px]">
          <iframe
            :src="src"
            title="YouTube video player" frameborder="0" class="rounded-md md:h-[200px] lg:h-[200px] xl:h-[250px] w-[280px] h-[230px] md:w-[330px] lg:w-[350px] xl:w-[400px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          />
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <h1 class="dark:text-white text-black font-bold text-base truncate lg:text-xl">
                {{ title }}
              </h1>

              <div class="flex items-center space-x-2">
                <ul v-for="{ id: social_id, link, icon } in socials" :key="social_id">
                  <NuxtLink :to="link" target="_blank" class="cursor-pointer hover:text-green-500">
                    <Icon
                      :name="icon"
                      class="w-5 h-5 text-gray-500 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500"
                    />
                  </NuxtLink>
                </ul>
              </div>
            </div>
            <h4 class="dark:text-white text-black">
              By <span
                class=""
              >
                {{ speakerName }}
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div class="grid place-items-center">
        <h4 class="font-semibold text-center">
          Check out our
          <NuxtLink to="https://www.youtube.com/@vuejskenya" external target="_blank" class="text-red-500 font-semibold underline hover:text-red-600 transition-all duration-200 ease-in">
            YouTube
          </NuxtLink>
          channel for more!
        </h4>
      </div>
    </div>
  </main>
</template>
