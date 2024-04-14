<script setup lang='ts'>
import BaseContainerComponent from '../base/ContainerComponent.vue'

interface CommunityInformation {
  id: number
  title: string
  icon: string
  content: string
}
defineProps<{
  communityInformation: CommunityInformation[]
}>()
</script>

<template>
  <BaseContainerComponent>
    <div class="relative">
      <div>
        <div class="h-[5rem]" />
        <div
          class="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        >
          <div
            class="sticky right-0 left-0 m-auto z-5 top-0 h-[310px] w-[200px] md:w-[310px] rounded-full bg-green-600 opacity-20 blur-[100px]"
          />
        </div>

        <div class="flex flex-col items-start max-w-5xl gap-10 mx-auto lg:flex-row lg:px-8">
          <div class="w-full text-center md:text-start lg:sticky lg:top-20 lg:w-[28rem]">
            <h2 class="text-lg font-semibold leading-8 tracking-tight text-green-600">
              Who are we
            </h2>
            <p class="mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
              A community of Vue developers
            </p>
            <p class="mt-6 mb-2 text-base leading-7 dark:text-gray-300">
              Our community is committed to promoting the use of Vue.js and other cutting-edge technologies in
              Kenya,
              through regular meetups, workshops, hackathons, and other events.
            </p>
          </div>
          <div class="flex-1 mt-5 md:mt-0">
            <dl
              class="grid w-full grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-1 lg:max-w-none lg:gap-y-16"
            >
              <div v-for="{ id, content, title, icon } in communityInformation" :key="id">
                <div
                  class="relative px-6 py-10 bg-white dark:bg-transparent dark:border-gray-800 border rounded-lg"
                >
                  <div
                    class="flex items-center justify-center w-10 h-10 backdrop-blur-[12px] dark:bg-green-600 bg-opacity-60 border-2 border-green-500 rounded-lg"
                  >
                    <Icon :name="icon" class="text-xl text-green-500 dark:text-white" />
                  </div>

                  <dt class="mt-4 text-lg font-semibold leading-7 dark:text-white">
                    {{ title }}
                  </dt>
                  <dd class="mt-2 text-base leading-7 dark:text-gray-300">
                    {{ content }}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </BaseContainerComponent>
</template>
