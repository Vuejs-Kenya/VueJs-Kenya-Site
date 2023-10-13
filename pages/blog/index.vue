<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})

const { data: articles } = useAsyncData('blog', () => queryContent('/blog').only(['headline', '_path', 'date', 'description', 'author', 'imageUrl', 'authorImg']).sort({ date: -1 }).find(), {
  transform: articles => articles.sort((a, b) => b.date - a.date),
})
</script>

<template>
  <div class="h-full text-white ">
    <div
      class="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
    >
      <div
        class="absolute left-0 right-0 top-0 mx-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"
      />
    </div>
    <div class="relative z-20 px-4 space-y-6">
      <main>
        <div class="mb-4 text-center">
          <h1 class="text-4xl font-semibold">
            Blog
          </h1>
        </div>
        <BlogList :data="articles" />
      </main>
    </div>
  </div>
</template>
