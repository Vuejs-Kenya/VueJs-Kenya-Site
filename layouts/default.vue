<template>
  <div class="flex flex-col justify-between">
    <HeaderNavbar />
    <main>
      <slot />
    </main>

    <footer>
      <FooterBar />
    </footer>
  </div>
</template>
