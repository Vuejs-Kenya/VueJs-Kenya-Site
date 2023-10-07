<script setup lang='ts'>
defineProps<{
  title: string
}>()
</script>

<template>
  <NuxtLink to="https://nuxtnation.com/" target="_blank">
    <button
      class="group relative grid overflow-hidden border-none rounded-full px-6 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
    >
      <span>
        <span
          class="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,green_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
        />
      </span>
      <span
        class="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200"
      />
      <span class="text-sm z-10 text-[#cbd5e1]"> <span
        class="inline-flex animate-text-gradient bg-gradient-to-br from-[#29ab59] via-[#27C862] to-[#27C862]
 bg-[200%_auto] bg-clip-text text-transparent"
      >
        FREE
      </span> {{ title }}</span>
    </button>
  </NuxtLink>
</template>
