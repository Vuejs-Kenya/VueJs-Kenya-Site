<script setup lang='ts'>
interface Events {
  id: string
  name: string
}

interface Content {
  id: string
  talk: string
  events: Events[]
}
const props = defineProps<{
  name: string
  avatar: string
  title: string
  twitterURL: string
  githubURL: string
  content: Content[]
}>()
</script>

<template>
  <div
    class="h-56 px-5 py-3 space-y-3 text-sm bg-white dark:bg-transparent dark:border-gray-900 border rounded-lg shadow-sm w-72 md:w-80"
  >
    <div class="flex items-center gap-2">
      <img :src="props.avatar" :alt="props.name" class="rounded-full size-10">
      <div>
        <div class="font-medium">
          {{ props.name }}
        </div>
        <div class="text-xs text-stone-600 dark:text-stone-300">
          {{ props.title }}
        </div>
      </div>
    </div>
    <div class="overflow-y-scroll scrollbar-hide flex flex-col space-y-2 h-28">
      <ul v-for="talk in props.content" :key="talk.id">
        <li>
          - {{ talk.talk }}
        </li>
      </ul>
    </div>

    <div class="flex items-center space-x-3">
      <button type="button">
        <NuxtLink :to="props.githubURL">
          <Icon
            name="line-md:github"
            class="w-5 h-5 text-gray-700 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500"
          />
        </NuxtLink>
      </button>

      <button type="button">
        <NuxtLink :to="props.twitterURL">
          <Icon
            name="line-md:twitter-x"
            class="w-5 h-5 text-gray-500 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500"
          />
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
