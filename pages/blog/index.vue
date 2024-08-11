<script setup lang="ts">
import BlogList from '~/components/blog/BlogList.vue'

definePageMeta({
  layout: 'blog',
})
const { data: articles } = useAsyncData('blog', () => queryContent('/blog').only(['headline', '_path', 'date', 'description', 'author', 'imageUrl', 'authorImg', 'body']).sort({ date: -1 }).find(), {
  transform: articles => articles.sort((a: { date: number }, b: { date: number }) => b.date - a.date),
})
</script>

<template>
  <div class="h-full w-full">
    <div class="relative z-20 px-4 space-y-6">
      <main class=" mt-12 flex items-center flex-col space-y-10">
        <div class="mb-4 text-center">
          <h1 class="text-4xl text-black dark:text-white font-semibold">
            Blog
          </h1>
        </div>
        <BlogList :data="articles" />
      </main>
    </div>
  </div>
</template>
