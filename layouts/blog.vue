<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div class="space-y-10">
      <HeaderNavbar />
      <main>
        <slot />
      </main>
    </div>

    <footer>
      <FooterBar />
    </footer>
  </div>
</template>
