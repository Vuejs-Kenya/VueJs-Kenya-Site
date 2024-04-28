<script setup lang="ts">
import BaseCardComponent from '../base/CardComponent.vue'
import ButtonCustomComponent from '../button/CustomComponent.vue'
</script>

<template>
  <div class="grid px-2 pt-16 place-items-center md:px-16">
    <div class="w-full md:max-w-5xl">
      <BaseCardComponent class="w-full">
        <div class="absolute lg:bottom-0 flex items-center lg:left-7 left-0 bottom-10 lg:inset-y-0 lg:h-full">
          <img
            src="https://api.iconify.design/logos:vue.svg" class="hidden object-cover h-44 cursor-pointer lg:block"
            alt="Nuxt Svg"
          >

          <img src="https://api.iconify.design/logos:vue.svg" class="cursor-pointer h-8 md:hidden" alt="Nuxt Svg">
        </div>
        <div class="relative z-10 grid h-full place-items-center">
          <div class="grid space-y-6 place-items-center ">
            <h2 class="text-2xl text-center font-semibold dark:text-white">
              Become the next VueJs Kenya <span class="text-green-500 "> <br> Speaker</span>
            </h2>
            <ButtonCustomComponent :loading="false" label="Become a speaker" />
          </div>
        </div>

        <div class="absolute lg:bottom-0 flex items-center lg:right-4 right-0 bottom-8 lg:inset-y-0 lg:h-full">
          <img
            src="https://api.iconify.design/logos:nuxt-icon.svg"
            class="hidden object-cover h-44 cursor-pointer lg:block" alt="Nuxt Svg"
          >

          <img src="https://api.iconify.design/logos:nuxt-icon.svg" class="cursor-pointer h-8 md:hidden" alt="Nuxt Svg">
        </div>

        <div class="absolute bottom-0 flex items-center lg:left-1 lg:mt-16 left-4 -top-3 lg:inset-y-0 lg:h-full">
          <img
            src="https://api.iconify.design/devicon:vuetify.svg"
            class="hidden object-cover h-20 cursor-pointer lg:block" alt="Nuxt Svg"
          >

          <img src="https://api.iconify.design/devicon:vuetify.svg" class="cursor-pointer h-10 md:hidden" alt="Nuxt Svg">
        </div>

        <div class="absolute bottom-0 flex items-center lg:left-44 lg:mt-16 left-3 -top-48 lg:inset-y-0 lg:h-full">
          <img
            src="https://api.iconify.design/logos:vitejs.svg" class="hidden object-cover h-20 cursor-pointer lg:block"
            alt="Nuxt Svg"
          >

          <img src="https://api.iconify.design/logos:vitejs.svg" class="cursor-pointer h-8 md:hidden" alt="Nuxt Svg">
        </div>

        <div class="absolute bottom-0 flex items-center right-3 lg:right-[200px] -top-48 lg:top-0 lg:inset-y-0 lg:h-full">
          <img
            src="https://github.com/unjs.png" class="hidden rounded-md object-cover h-16 cursor-pointer lg:block"
            alt="Nuxt Svg"
          >

          <img src="https://github.com/unjs.png" class="cursor-pointer rounded-md h-8 md:hidden" alt="Nuxt Svg">
        </div>

        <div class="absolute bottom-0 flex items-center lg:right-6 lg:top-0 right-4 -top-3 lg:inset-y-0 lg:h-full">
          <img
            src="https://api.iconify.design/logos:pinia.svg" class="hidden object-cover h-24 cursor-pointer lg:block"
            alt="Nuxt Svg"
          >

          <img src="https://api.iconify.design/logos:pinia.svg" class="cursor-pointer h-12 md:hidden" alt="Nuxt Svg">
        </div>
      </BaseCardComponent>
    </div>
  </div>
</template>
