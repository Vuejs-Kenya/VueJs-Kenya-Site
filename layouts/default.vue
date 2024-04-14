<script setup lang='ts'>

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative w-full">
      <div class="absolute inset-x-0 top-0 flex items-start h-64">
        <div class="h-24 w-2/3 bg-gradient-to-br from-[#00D8A5] opacity-20 blur-2xl " />
        <div class="h-20 w-3/5 bg-gradient-to-r from-[#00D8A5] opacity-20 blur-2xl " />
      </div>
    </div>
    <ClientOnly>
      <AppHeaderComponent />
    </ClientOnly>

    <div class="flex-1 flex-col">
      <main class="flex-1">
        <slot />
      </main>
    </div>

    <AppFooterComponent />
  </div>
</template>
