<script setup lang='ts'>
import type { Color } from '~/types/colorscheme.interface.ts'
import CardTicketComponent from '~/components/card/TicketComponent.vue'
import BaseContainerComponent from '~/components/base/ContainerComponent.vue'
import IconsColorScheme from '~/components/icons/ColorScheme.vue'

const colorSchemes: Color[] = [
  {
    id: 1,
    name: 'vite',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-pink-900',
    icon: 'logos:vitejs',
    borderColor: 'border border-pink-800',
    textColor: 'text-pink-300',
    svgColor: '#26022C',
    svgBorder: '#E078D8',
  },
  {
    id: 5,
    name: 'Vue',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-[#1F421E]',
    textColor: 'text-green-700',
    borderColor: 'border border-green-800',
    icon: 'logos:vue',
    svgColor: '#1F421E',
    svgBorder: '#A9DDA3',
  },
  {
    id: 2,
    name: 'nuxt',
    icon: 'logos:nuxt-icon',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-green-900',
    borderColor: 'border border-green-800',
    textColor: 'text-green-300',
    svgColor: '#274228',
    svgBorder: '#C4F8C4',
  },
  {
    id: 3,
    name: 'veutify',
    icon: 'logos:vuetifyjs',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-blue-900',
    borderColor: 'border border-blue-800',
    textColor: 'text-blue-300',
    svgColor: '#14304D',
    svgBorder: '#567195',
  },
  {
    id: 4,
    name: 'Vitest',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-yellow-900',
    textColor: 'text-yellow-300',
    borderColor: 'border border-yellow-800',
    icon: 'logos:vitest',
    svgColor: '#745C1E',
    svgBorder: '#F3D995',
  },
  {
    id: 6,
    name: 'Windi UI',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-cyan-900',
    textColor: 'text-cyan-300',
    borderColor: 'border border-cyan-800',
    icon: 'logos:windi-css',
    svgColor: '#267e7e',
    svgBorder: '#46ffff',
  },

  {
    id: 7,
    name: 'Pinia',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-yellow-600',
    textColor: 'text-yellow-300',
    borderColor: 'border border-yellow-800',
    icon: 'logos:pinia',
    svgColor: '#a88e0a',
    svgBorder: '#FBE36A',
  },

  {
    id: 8,
    name: 'Supabase',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-yellow-600',
    textColor: 'text-yellow-300',
    borderColor: 'border border-yellow-800',
    icon: 'devicon:supabase',
    svgColor: '#a88e0a',
    svgBorder: '#FBE36A',
  },

  {
    id: 9,
    name: 'Firebase',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-yellow-600',
    textColor: 'text-yellow-300',
    borderColor: 'border border-yellow-800',
    icon: 'devicon:firebase',
    svgColor: '#a88e0a',
    svgBorder: '#FBE36A',
  },

  {
    id: 10,
    name: 'Appwrite',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-yellow-600',
    textColor: 'text-yellow-300',
    borderColor: 'border border-yellow-800',
    icon: 'devicon:appwrite',
    svgColor: '#a88e0a',
    svgBorder: '#FBE36A',
  },

  {
    id: 11,
    name: 'Vueuse',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-yellow-600',
    textColor: 'text-yellow-300',
    borderColor: 'border border-yellow-800',
    icon: 'logos:vueuse',
    svgColor: '#a88e0a',
    svgBorder: '#FBE36A',
  },

  {
    id: 12,
    name: 'Vue Query',
    backgroundColor: 'bg-gradient-to-b from-black via-black to-yellow-600',
    textColor: 'text-yellow-300',
    borderColor: 'border border-yellow-800',
    icon: 'logos:react-query-icon',
    svgColor: '#a88e0a',
    svgBorder: '#FBE36A',
  },
]

const colorScheme = ref<Color | null>(colorSchemes[2])
function handleColorChange(value: string) {
  const selectedColor = colorSchemes.find(color => color.name.toLowerCase() === value.toLowerCase())
  if (selectedColor)
    colorScheme.value = selectedColor
}
</script>

<template>
  <BaseContainerComponent>
    <div class="w-full pt-20 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-10 xl:gap-y-0 xl:grid-cols-2 xl:items-center">
        <div class="grid place-items-center xl:grid xl:place-items-start xl:h-96">
          <div class="space-y-4">
            <h1
              class="block text-3xl text-center xl:text-start font-semibold dark:text-white sm:text-4xl lg:text-4xl lg:leading-[50px]"
            >
              Unlock the ultimate <br> <span class="text-[#28C962]">Vue</span> experience.
            </h1>
            <p class="max-w-sm text-center sm:max-w-lg xl:text-start text-black leading-7 dark:text-gray-300">
              Join us for a Vue Conference that will elevate your skills. Connect with experts, attend
              workshops, and stay updated on Vue.js trends. Get ready to unlock the ultimate Vue experience!
              Reserve your ticket today.
            </p>

            <!-- <div class="flex items-center flex-col space-y-2">
                            <ButtonCustomComponent :loading="false" iconName="line-md:github"
                                label="Register with Github account"
                                class="w-full flex items-center font-normal space-x-3 bg-[#34A34A] hover:bg-green-700 text-white" />
                        </div> -->
            <div class="hidden md:space-y-4 md:grid place-items-center xl:place-items-start">
              <h2 class="text-xl dark:text-white">
                Customize your ticket
              </h2>
              <div>
                <IconsColorScheme
                  :color-schemes="colorSchemes"
                  @handle-color-scheme-change="handleColorChange"
                />
              </div>
            </div>

            <p class="pt-10 text-center text-red-500 md:hidden">
              To customize your ticket, please use a device that has a screen width of more than 768px
            </p>
          </div>
        </div>

        <div>
          <div class="hidden md:grid md:place-items-center">
            <div>
              <CardTicketComponent :color-scheme="colorScheme" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseContainerComponent>
</template>
