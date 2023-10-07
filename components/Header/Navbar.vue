<script setup lang='ts'>
const navLinks = [
  {
    id: 1,
    name: 'Workshops',
    path: '/',
  },
  {
    id: 2,
    name: 'Swags',
    path: '/',
  },

  {
    id: 3,
    name: 'Speakers',
    path: '/',
  },

  {
    id: 4,
    name: 'Partners',
    path: '/',
  },

  {
    id: 5,
    name: 'Sponsors',
    path: '/',
  },

  {
    id: 6,
    name: 'Blog',
    path: '/',
  },
]
</script>

<template>
  <header>
    <nav
      class="sticky top-0 inset-0 z-50 w-full border-b px-6 border-gray-900 border-transparent-white backdrop-blur-[12px] "
    >
      <div class="relative flex flex-wrap items-center justify-between gap-6 py-4 md:gap-0">
        <input id="toggle_nav" aria-hidden="true" type="checkbox" name="toggle_nav" class="hidden peer">
        <div class="relative top-0 z-50 flex justify-between w-full lg:w-max md:px-0">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="../../assets/images/logo.png" alt="VueJs Logo" class="w-6 h-6 md:h-8 md:w-8">
            <span class="text-lg font-bold text-white md:text-xl">VueJs Kenya</span>
          </NuxtLink>

          <div
            class="relative flex items-center justify-center w-8 h-8 border border-gray-800 rounded-full lg:hidden max-h-10"
          >
            <label id="hamburger" role="button" for="toggle_nav" aria-label="humburger">
              <div
                id="line" aria-hidden="true"
                class="m-auto h-0.5 w-5 rounded bg-white transition duration-300"
              />
              <div
                id="line2" aria-hidden="true"
                class="m-auto mt-2 h-0.5 w-5 rounded bg-white transition duration-300"
              />
            </label>
          </div>
        </div>
        <div
          aria-hidden="true"
          class="fixed inset-0 z-10 w-screen h-screen transition duration-500 origin-bottom scale-y-0 bg-black backdrop-blur-[12px] peer-checked:origin-top peer-checked:scale-y-100 lg:hidden"
        />
        <div
          class="absolute left-0 z-20 flex-col flex-wrap justify-end invisible w-full gap-6 py-6 transition-all duration-300 origin-top scale-95 translate-y-1 opacity-0 rounded-3xl top-full lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none"
        >
          <div class="w-full lg:pr-4 lg:w-auto lg:pt-0">
            <ul class="flex flex-col gap-6 font-medium tracking-wide text-white lg:text-sm lg:flex-row lg:gap-0">
              <li v-for="{ id, name, path } in navLinks" :key="id" class="pb-3 border-b border-gray-800 lg:border-none lg:pb-0">
                <NuxtLink :to="path" class="transition-all duration-200 ease-in md:px-4 hover:text-green-500">
                  {{ name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
#toggle_nav:checked~div #hamburger #line {
    @apply rotate-45 translate-y-1.5
}

#toggle_nav:checked~div #hamburger #line2 {
    @apply -rotate-45 -translate-y-1
}
</style>
