<script setup lang="ts">
const card = ref<HTMLDivElement>()
const { elementX, elementY } = useMouseInElement(card)
</script>

<template>
  <div
    ref="card"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
    class="border-gradient group relative h-[270px] sm:h-[370px] rounded-xl bg-gray-700 p-8 before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl lg:h-[250px] lg:p-16"
  >
    <div
      class="absolute inset-0 rounded-[11px] bg-[#07130B] transition-colors duration-300 "
    />

    <slot />
  </div>
</template>

<style>
.border-gradient::before {
  background: radial-gradient(
    300px circle at var(--x) var(--y),
    #1cd1c6 0,
    #28C862 50%,
    transparent 100%
  );
}
</style>
