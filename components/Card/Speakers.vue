<script setup lang="ts">
interface Speakers {
  id: number
  name: string
  title: string
  twitterURL: string
  githubURL: string
  imageURL: string
}
defineProps<{
  speakers: Speakers[]
}>()
</script>

<template>
  <GridContainer>
    <div v-for="{ id, name, title, twitterURL, githubURL, imageURL } in speakers" :key="id">
      <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
        <img class="w-20 h-20 rounded-lg" :src="imageURL" :alt="name">

        <div class="space-y-3 sm:flex sm:flex-col sm:h-full">
          <div class="space-y-1">
            <h3 class="text-sm font-medium text-gray-200 truncate md:block">
              {{ name }}
            </h3>
            <p class="hidden text-xs text-white md:block">
              {{ title }}
            </p>
          </div>

          <div class="mt-2 sm:mt-auto space-x-2.5">
            <div class="flex items-center space-x-3">
              <NuxtLink :to="twitterURL" target="_blank">
                <Icon name="mdi:twitter" class="text-xl text-white" />
              </NuxtLink>
              <NuxtLink :to="githubURL" target="_blank">
                <Icon name="mdi:github" class="text-xl text-white" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GridContainer>
</template>
