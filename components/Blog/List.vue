<script setup lang='ts'>
const props = defineProps<{
  data: any
}>()

const { $formatDate } = useNuxtApp()
function readingTime(content: any) {
  let minutes = 0
  const contentAsString = JSON.stringify(content)
  const words = contentAsString.split(' ').length
  const wordsPerMinute = 225

  minutes = Math.ceil(words / wordsPerMinute)

  return minutes
}

const active = useState()
</script>

<template>
  <div class="grid w-full grid-cols-1 gap-4 px-1 py-1 space-y-8 md:space-y-0 md:grid-cols-2 xl:grid-cols-3">
    <div v-for="(post, index) in props.data " :key="post._path" :class="[index === 0 && 'xl:col-span-3']">
      <NuxtLink :to="post._path" class="cursor-pointer" @click="active = post._path">
        <div class="px-0 md:px-4">
          <div
            :class="[index === 0 ? 'xl:grid xl:grid-cols-2 xl:w-full' : ' flex flex-col']"
            class="group h-full hover:border-transparent transition-all duration-300 rounded-xl p-4 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          >
            <div>
              <img
                :class="[
                  index === 0 ? 'xl:h-72 hover:scale-none' : 'hover:scale-105',
                  { active: active === post._path },
                ]" class="object-cover w-full transition-all duration-200 ease-in aspect-video rounded-xl"
                :src="post.imageUrl" alt="Image Description"
              >
            </div>
            <div :class="[index === 0 ? 'xl:px-4 ' : 'px-0']">
              <div :class="[index === 0 ? 'my-5' : 'my-6']" class="flex flex-col justify-between space-y-3">
                <h3
                  :class="[index === 0 ? 'text-xl xl:text-2xl line-clamp-1 md:line-clamp-2' : 'text-xl line-clamp-1']"
                  class="font-semibold text-gray-800 dark:text-gray-200 dark:group-hover:text-white"
                >
                  {{ post.headline }}
                </h3>
                <p
                  :class="[index === 0 ? 'line-clamp-3 xl:line-clamp-6' : 'line-clamp-3']"
                  class="mt-5 text-gray-600 dark:text-gray-300"
                >
                  {{ post.description }}
                </p>
              </div>
              <div class="flex items-center mt-auto gap-x-3">
                <img class="w-8 h-8 rounded-full" :src="post.authorImg" :alt="post.author">
                <div class="flex items-center justify-between w-full ">
                  <div class="space-y-.5">
                    <h5 class="text-white ">
                      {{ post.author }}
                    </h5>
                    <p class="text-sm text-gray-400">
                      {{ readingTime(post) }} min read
                    </p>
                  </div>
                  <time :datetime="$formatDate(post.date)" class="text-sm text-gray-400">{{ $formatDate(post.date)
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

<style scoped>
img.active {
  view-transition-name: selected-film;
  contain: layout;
}
</style>
