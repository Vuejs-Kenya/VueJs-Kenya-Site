<script setup lang='ts'>
import BaseContainerComponent from '../base/ContainerComponent.vue'
import CobeGlobeComponent from '~/components/cobe/GlobeComponent.vue'
import IconsSocialComponent from '~/components/icons/SocialComponent.vue'

const socialIcons = [
  {
    id: 1,
    name: 'Github',
    icon: 'mdi:github',
    url: 'https://github.com/Vuejs-Kenya',
  },

  {
    id: 2,
    name: 'Twitter',
    icon: 'mdi:twitter',
    url: 'https://twitter.com/KenyaVue?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
  },
  {
    id: 3,
    name: 'Youtube',
    icon: 'ion:logo-youtube',
    url: 'https://www.youtube.com/channel/UCG7sVmGdGifbY12REDk2yYA',
  },
  {
    id: 4,
    name: 'WhatsApp',
    icon: 'ic:baseline-whatsapp',
    url: 'https://www.youtube.com/channel/UCG7sVmGdGifbY12REDk2yYA',
  },
  {
    id: 5,
    name: 'LinkedIn',
    icon: 'fa6-brands:linkedin',
    url: 'https://www.linkedin.com/company/vuejskenya/',
  },

]
</script>

<template>
  <BaseContainerComponent>
    <!-- <div class="flex flex-col space-y-8">
            <div class="items-center">
                <h1 class="text-3xl sm:text-4xl text-center font-semibold">
                    Join our diverse <br /> <span class="text-green-500"> Vue</span> community.
                </h1>
            </div>
        </div> -->
    <div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-20 lg:items-center">
        <div class="grid place-items-center lg:grid lg:place-items-start lg:h-96">
          <div class="space-y-4">
            <h1
              class="block text-3xl text-center font-bold text-black dark:text-white sm:text-4xl md:text-start lg:text-4xl lg:leading-[50px]"
            >
              Join our diverse <span class="text-[#28C962]">Vue</span> community.
            </h1>
            <p class="leading-7 text-gray-700 dark:text-gray-300">
              Experience the vibrant world of Vue.js with us! Join our diverse Vue community and embark on a
              journey of learning, collaboration, and innovation. Whether you're a seasoned developer or just
              starting your Vue.js adventure, we welcome you to connect, share, and grow with us. Together,
              we're shaping the future of web development in a supportive and inclusive environment.
            </p>

            <IconsSocialComponent :social-icons="socialIcons" />
          </div>
        </div>

        <div>
          <div class="grid place-items-center">
            <CobeGlobeComponent />
          </div>
        </div>
      </div>
    </div>
  </BaseContainerComponent>
</template>
