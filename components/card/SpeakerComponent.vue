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
  <div class="flex flex-col space-y-3">
    <div class="flex items-center gap-2">
      <img :src="props.avatar" :alt="props.name" class="w-64 h-64 rounded-lg">
    </div>

    <div class="flex flex-col space-y-2">
      <h1 class="font-bold">
        {{ props.name }}
      </h1>
      <h4 class="font-semibold text-gray-600 dark:text-gray-300">
        {{ props.title }}
      </h4>
    </div>

    <div>
      <h1 class="dark:text-white font-semibold">
        Talks
      </h1>
    </div>

    <div class="overflow-y-scroll scrollbar-hide flex flex-col space-y-2 h-28">
      <ul v-for="talk in props.content" :key="talk.id" class="list-disc list-outside pl-[revert]">
        <li
          class="dark:text-gray-400 hover:dark:text-gray-200 w-56 font-Inter cursor-pointer duration-200 ease-in text-gray-700 hover:text-gray-900"
        >
          {{ talk.talk }}
        </li>
      </ul>
    </div>

    <div class="flex items-center space-x-3">
      <button type="button">
        <NuxtLink :to="props.githubURL" target="_blank">
          <Icon
            name="line-md:github"
            class="w-5 h-5 text-gray-700 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500"
          />
        </NuxtLink>
      </button>

      <button type="button">
        <NuxtLink :to="props.twitterURL" target="_blank">
          <Icon
            name="line-md:twitter-x"
            class="w-5 h-5 text-gray-500 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500"
          />
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
