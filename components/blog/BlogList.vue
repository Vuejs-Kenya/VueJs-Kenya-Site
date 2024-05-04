<script setup lang='ts'>
const props = defineProps<{
  data: any
}>()

const { $formatDate } = useNuxtApp()
function readingTime(content: any) {
  let minutes = 0
  const contentAsString = JSON.stringify(content)
  const words = contentAsString.split(' ').length
  const wordsPerMinute = 250

  minutes = Math.ceil(words / wordsPerMinute)

  return minutes
}
</script>

<template>
  <div class="grid grid-cols-1 gap-4 px-2 py-1 space-y-8 md:space-y-0 lg:grid-cols-2 xl:grid-cols-3">
    <div v-for="post in props.data " :key="post._path">
      <NuxtLink :to="post._path" class="cursor-pointer">
        <div
          class="h-full w-auto md:w-[380px] dark:bg-[#0F172A] border border-gray-200 dark:border-gray-900 shadow-sm dark:border-gray-80 rounded-lg"
        >
          <div
            class="group h-full hover:border-transparent transition-all flex flex-col duration-300 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          >
            <div>
              <img
                class="object-cover w-full transition-all rounded-tr-lg rounded-tl-lg duration-200 ease-in aspect-video"
                :src="post.imageUrl" alt="Image Description"
              >
            </div>
            <div class="px-4 pb-4">
              <div class="flex flex-col my-6 justify-between space-y-3">
                <h3
                  class="text-xl line-clamp-1 font-semibold text-gray-800 dark:text-gray-200 dark:group-hover:text-white"
                >
                  {{ post.headline }}
                </h3>
                <p class="mt-5 text-gray-600 font-Inter text-sm leading-6 dark:text-[#94A3B8] line-clamp-3">
                  {{ post.description }}
                </p>
              </div>
              <div class="flex items-center mt-auto gap-x-3">
                <img class="w-8 h-8 rounded-full" :src="post.authorImg" :alt="post.author">
                <div class="flex items-center justify-between w-full ">
                  <div class="space-y-.5">
                    <h5 class="dark:text-white ">
                      {{ post.author }}
                    </h5>
                    <p class="text-sm dark:text-gray-400">
                      {{ readingTime(post.body) }} min read
                    </p>
                  </div>
                  <time :datetime="$formatDate(post.date)" class="text-sm dark:text-gray-400">{{
                    $formatDate(post.date)
                  }}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
