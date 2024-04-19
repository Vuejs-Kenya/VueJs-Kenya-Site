<script setup lang='ts'>
import FooterIconComponent from './IconComponent.vue'

const socialIcons = [
  {
    id: 1,
    icon: 'line-md:twitter-x',
    link: 'https://twitter.com/kenyavue',

  },

  {
    id: 2,
    icon: 'line-md:github',
    link: 'https://github.com/Vuejs-Kenya',
  },

  {
    id: 3,
    icon: 'line-md:linkedin',
    link: 'https://www.linkedin.com/company/vuejskenya/',
  },

  {
    id: 4,
    icon: 'line-md:youtube',
    link: 'https://www.youtube.com/@vuejskenya',
  },
]

const date = new Date().getFullYear()
const colorMode = useColorMode()
</script>

<template>
  <BaseContainerComponent>
    <div class="my-6 mt-20">
      <div
        class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t dark:before:border-gray-800 before:mr-4 after:flex-[1_1_0%] after:border-t dark:after:border-gray-800 after:ml-4"
      >
        <div class="flex items-center space-x-1 dark:space-x-3">
          <img
            src="/logo.png" alt="VueJs Kenya Logo" class="rounded-lg bg-transparent dark:bg-white w-9 h-9"
          >
        </div>
      </div>

      <div class="flex flex-col w-full space-y-3 sm:space-y-0 sm:flex-row sm:flex sm:justify-between">
        <div class="flex items-center justify-center w-full sm:justify-start">
          <small class="dark:text-white"> &copy; {{ date }} VueJs Kenya. </small>
        </div>
        <div class="flex justify-center">
          <FooterIconComponent v-for="{ id, link, icon } in socialIcons" :key="id" :link="link" :icon="icon" />
        </div>
      </div>
    </div>
  </BaseContainerComponent>
</template>
