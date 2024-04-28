<script setup lang='ts'>
defineProps<{
  name: string
  title: string
  description: string
  imageURL: string
  twitterURL: string
  githubURL: string
}>()
</script>

<template>
  <div class="flex h-full flex-col space-y-3 lg:space-y-1 lg:flex-row space-x-2">
    <div class="grid place-items-center">
      <div class="w-[250px] md:w-[300px] lg:w-[200px]">
        <div>
          <img :src="imageURL" :alt="name" class="rounded-md object-cover">
        </div>
      </div>
    </div>
    <div class="flex items-center md:items-start flex-col justify-between px-0 md:px-2 space-y-3 lg:space-y-2">
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-center md:text-start text-gray-800 dark:text-gray-200 truncate md:block">
          {{ name }}
        </h3>
        <p class=" dark:text-gray-300 text-gray-600 text-md font-semibold">
          {{ title }}
        </p>
      </div>

      <div>
        <p class="text-gray-600 font-Inter text-center md:text-start dark:text-[#94A3B8]">
          {{ description }}
        </p>
      </div>

      <div class="mt-2 sm:mt-auto space-x-2.5">
        <div class="flex items-center space-x-3">
          <NuxtLink :to="twitterURL" target="_blank">
            <Icon
              name="line-md:twitter-x"
              class="w-5 h-5 text-gray-500 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500"
            />
          </NuxtLink>
          <NuxtLink :to="githubURL" target="_blank">
            <Icon
              name="line-md:github"
              class="w-5 h-5 text-gray-500 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
