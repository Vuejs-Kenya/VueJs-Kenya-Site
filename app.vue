<template>
  <div class="relative min-h-screen mx-auto max-w-7xl">
    <ClientOnly>
      <Toaster position="top-right" rich-colors />
    </ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
