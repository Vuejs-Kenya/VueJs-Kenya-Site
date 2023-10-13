<script setup lang='ts'>
const socialIcons = [
  {
    id: 1,
    icon: 'mdi:twitter',
    link: 'https://twitter.com/kenyavue',

  },

  {
    id: 2,
    icon: 'mdi:github',
    link: 'https://github.com/Vuejs-Kenya',
  },

  {
    id: 3,
    icon: 'fa6-brands:linkedin',
    link: 'https://www.linkedin.com/company/vuejskenya/',
  },

  {
    id: 4,
    icon: 'akar-icons:youtube-fill',
    link: 'https://www.youtube.com/@vuejskenya',
  },
  {
    id: 5,
    name: 'WhatsApp',
    icon: 'ic:baseline-whatsapp',
    link: 'https://www.youtube.com/channel/UCG7sVmGdGifbY12REDk2yYA',
  },
]

const date = new Date().getFullYear()
</script>

<template>
  <BaseContainer>
    <div class="my-6 mt-20">
      <div
        class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-800 before:mr-4 after:flex-[1_1_0%] after:border-t after:border-gray-800 after:ml-4"
      >
        <img
          src="/logo.png" alt="Vue Js Kenya Logo"
          class="w-10 h-10"
        >
      </div>

      <div class="flex flex-col md:flex-row md:flex md:justify-between">
        <div class="order-last text-center pt-4 md:order-first md:pt-0 md:text-start">
          <small class="text-white"> &copy; {{ date }} VueJs Kenya. </small>
        </div>
        <div class="flex order-first md:order-last">
          <FooterIcon
            v-for="{ id, link, icon } in socialIcons"
            :key="id"
            :link="link"
            :icon="icon"
          />
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
