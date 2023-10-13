<script setup lang='ts'>
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]"
  >
    <div class="text-center">
      <h1
        class="text-white mb-11 text-3xl translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-5xl [.is-visible_&]:translate-y-0"
      >
        {{ props.title }}
      </h1>
    </div>
  </div>
</template>
