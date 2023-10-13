<script setup lang='ts'>
defineProps<{
  label: string
  loading: boolean
}>()
</script>

<template>
  <div
    class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-600 rounded-md cursor-pointer group hover:ring-1 hover:ring-green-500 ease focus:outline-none"
  >
    <span
      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
    />
    <span
      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
    />
    <span v-if="loading" class="relative z-20 flex items-center text-sm">
      <Icon name="ph:spinner" class="text-xl text-white animate-spin" />
    </span>
    <span v-else class="relative z-20 flex items-center text-sm">
      {{ label }}
    </span>
  </div>
</template>
