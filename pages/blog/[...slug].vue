<script setup lang='ts'>
definePageMeta({
  layout: 'blog',
})
const route = useRoute()
const { data: post } = await useAsyncData(`article-${route.path}`, () => queryContent('/blog')
  .where({ _path: route.path })
  .findOne())
</script>

<template>
  <div class="max-w-4xl relative z-20 mt-6 mx-auto">
    <div class="space-y-6">
      <NuxtLink to="/blog" class="flex items-center pl-4 space-x-2 cursor-pointer md:pl-0 group">
        <Icon
          name="material-symbols:arrow-insert-rounded"
          class="text-2xl dark:text-gray-200 transition-all duration-200 ease-in dark:group-hover:text-white"
        />
        <p class="dark:text-gray-200 transition-all duration-200 ease-in dark:group-hover:text-white">
          back
        </p>
      </NuxtLink>
      <div class="grid px-4 place-items-center md:px-0">
        <img
          v-if="Array.isArray(post?.imageUrl)" class="object-cover w-full rounded-xl"
          :src="`${'/_nuxt/content/'}${post?.imageUrl[0]}`" :alt="post?.title"
        >
        <img
          v-else class="object-cover w-full rounded-xl"
          :src="`${post?.imageUrl}`" :alt="post?.title"
        >
      </div>
    </div>
    <ContentDoc class="max-w-2xl px-4 md:px-6 lg:px-0 md:max-w-4xl dark:text-white">
      <template #not-found>
        <div class="grid w-full min-h-screen place-items-center">
          <div class="space-y-3">
            <h1 class="text-2xl text-center dark:text-white">
              OOPS! You shouldn't be here
            </h1>
            <p class="text-center dark:text-zinc-200">
              Let me take you back to <NuxtLink
                to="/"
                class="underline transition-all duration-200 hover:text-purple-500"
              >
                safety
              </NuxtLink>
            </p>
          </div>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<style scoped>
img {
  view-transition-name: selected-film;
}
</style>
