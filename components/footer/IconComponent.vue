<script setup lang='ts'>
defineProps<{
  icon: string
  link: string
}>()
</script>

<template>
  <NuxtLink :path="link" target="_blank" class="flex px-2 cursor-pointer">
    <Icon
      :name="icon"
      class="text-xl text-gray-500 hover:text-black transition-all duration-200 ease-in dark:hover:text-white"
    />
  </NuxtLink>
</template>
