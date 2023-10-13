<script setup lang='ts'>
definePageMeta({
  layout: 'blog',
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <NuxtLink to="/blog" class="flex items-center space-x-2 cursor-pointer group">
      <Icon name="material-symbols:arrow-insert-rounded" class="text-2xl text-gray-200 transition-all duration-200 ease-in group-hover:text-white" />
      <p class="text-gray-200 transition-all duration-200 ease-in group-hover:text-white">
        back
      </p>
    </NuxtLink>
    <ContentDoc class="max-w-2xl px-4 md:px-6 lg:px-0 md:max-w-4xl dark:text-white">
      <template #not-found>
        <div class="grid w-full min-h-screen place-items-center">
          <div class="space-y-3">
            <h1 class="text-2xl text-center dark:text-white">
              OOPS! You shouldn't be here
            </h1>
            <p class="text-center dark:text-zinc-200">
              Let me take you back to <NuxtLink to="/" class="underline transition-all duration-200 hover:text-purple-500">
                safety
              </NuxtLink>
            </p>
          </div>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>
