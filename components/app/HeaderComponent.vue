<script setup lang='ts'>
import ThemeSwitchToggle from '~/components/theme/SwitchToggle.vue'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const colorMode = useColorMode()

const navLinks = [
  {
    id: 1,
    name: 'Workshops',
    path: '#',
  },
  {
    id: 2,
    name: 'Jobs',
    path: '#',
  },

  {
    id: 3,
    name: 'Speakers',
    path: '#',
  },

  {
    id: 4,
    name: 'Events',
    path: '#',
  },

  {
    id: 5,
    name: 'Tickets',
    path: '/ticket',
  },

  {
    id: 6,
    name: 'Blog',
    path: '#',
  },
]

const socialMediaLinks = [
  {
    id: 1,
    name: 'Github',
    link: 'https://github.com/Vuejs-Kenya',
    icon: 'line-md:github',
  },

  {
    id: 2,
    name: 'X',
    link: 'https://twitter.com/KenyaVue',
    icon: 'line-md:twitter-x',
  },
]

const isScrolling = ref(false)

function handleIsScrolling() {
  if (typeof document !== 'undefined') {
    if (window.scrollY > 0)
      return isScrolling.value = true
  }

  return isScrolling.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleIsScrolling)
})
</script>

<template>
  <header
    :class="{ 'bg-background/50': isScrolling }"
    class="sticky top-0 z-50 w-full px-6 -mb-px backdrop-blur dark:border-gray-800 lg:mb-0 lg:border-0"
  >
    <nav class="flex items-center justify-between h-16 mx-auto max-w-7xl">
      <NuxtLink to="/" class="flex items-center space-x-1" :class="{ 'space-x-3': colorMode.preference === 'dark' }">
        <img src="/logo.png" alt="VueJs Kenya Logo" class="rounded-lg bg-transparent dark:bg-white w-7 h-7 md:w-9 md:h-9">
        <h1 class="md:text-lg font-semibold">
          VueJs Kenya
        </h1>
      </NuxtLink>

      <div class="lg:block hidden">
        <ul class="flex  text-sm font-normal tracking-wide text-black dark:text-gray-200">
          <li v-for="{ id, name, path } in navLinks" :key="id">
            <NuxtLink
              :to="path" :class="{ 'text-green-500': path === $route.fullPath }"
              class="transition-all duration-200 ease-in cursor-pointer md:px-4 hover:text-green-500"
            >
              {{ name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-5">
        <ThemeSwitchToggle />
        <div>
          <ul class="flex items-center space-x-4">
            <li v-for="{ id, link, icon } in socialMediaLinks" :key="id">
              <NuxtLink :to="link" target="_blank" class="cursor-pointer hover:text-green-500">
                <Icon
                  :name="icon"
                  class="w-5 h-5 text-gray-500 transition-all duration-200 ease-in hover:text-black dark:hover:text-gray-200 dark:text-gray-500"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <button type="button" class="w-8 h-8 grid place-items-center rounded-full border dark:border-gray-600">
              <Icon name="charm:menu-hamburger" class="text-lg text-black dark:text-white" />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle />
              <div>
                <ul
                  class="flex flex-col space-y-3 text-sm font-normal tracking-wide text-start text-black dark:text-gray-200"
                >
                  <li v-for="{ id, name, path } in navLinks" :key="id">
                    <NuxtLink
                      :to="path" :class="{ 'text-green-500': path === $route.fullPath }"
                      class="transition-all duration-200 ease-in cursor-pointer hover:text-green-500"
                    >
                      {{ name }}
                    </NuxtLink>
                  </li>

                  <li class="flex items-center justify-between">
                    Appearance
                    <span>
                      <ThemeSwitchToggle />
                    </span>
                  </li>
                </ul>
              </div>
              <SheetDescription />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
</template>
