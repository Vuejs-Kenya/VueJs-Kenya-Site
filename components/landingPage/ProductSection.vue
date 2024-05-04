<script setup lang='ts'>
import BaseContainerComponent from '../base/ContainerComponent.vue'
import ButtonCustomComponent from '../button/CustomComponent.vue'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const products = [
  {
    id: 1,
    name: 'QuickByte',
    icon: 'https://api.iconify.design/streamline:balloon.svg?color=%23550202',
    image: '/quickByte.png',
    link: 'https://www.quickbyte.io/',
  },

  {
    id: 2,
    name: 'MailChimp Nuxt Module',
    icon: 'https://images.ctfassets.net/cxsachrr7h0p/4bV5cUR8fSfjlgmTrXNk3X/962e86e4e101b4d119ae252405147db7/mc-logo-two-toned__2_.svg',
    image: '',
    link: '#',
  },

  {
    id: 3,
    name: 'VueJs Kenya Extension Pack',
    icon: 'https://selemondev.gallerycdn.vsassets.io/extensions/selemondev/vuejs-kenya-extension-pack/0.0.2/1708727263791/Microsoft.VisualStudio.Services.Icons.Small',
    image: '/vuejs-kenya-extension.png',
    link: 'https://marketplace.visualstudio.com/items?itemName=Selemondev.vuejs-kenya-extension-pack',
  },

  {
    id: 4,
    name: 'Create Vue3 App CLI',
    icon: 'https://vitejs.dev/logo-with-shadow.png',
    image: 'https://raw.githubusercontent.com/selemondev/create-vue-next/master/image/create-vue-next.png',
    link: 'https://github.com/selemondev/create-vue3-app',
  },

  {
    id: 5,
    name: 'Shadcn Vue VSCode Extension',
    icon: 'https://selemondev.gallerycdn.vsassets.io/extensions/selemondev/shadcn-vue/0.0.8/1710016261532/Microsoft.VisualStudio.Services.Icons.Small',
    image: 'https://raw.githubusercontent.com/selemondev/vscode-shadcn-vue/master/src/assets/images/add-new-components.png',
    link: 'https://marketplace.visualstudio.com/items?itemName=Selemondev.shadcn-vue',
  },

  {
    id: 6,
    name: 'Auto Extension Manager',
    icon: 'https://selemondev.gallerycdn.vsassets.io/extensions/selemondev/vscode-auto-extension-manager/0.0.7/1712437688718/Microsoft.VisualStudio.Services.Icons.Small',
    image: 'https://api.iconify.design/noto:magic-wand.svg',
    link: 'https://marketplace.visualstudio.com/items?itemName=Selemondev.vscode-auto-extension-manager',
  },

  {
    id: 7,
    name: 'Preview Docs',
    icon: 'https://api.iconify.design/vscode-icons:folder-type-docs.svg?color=%23550202',
    image: 'https://raw.githubusercontent.com/selemondev/vscode-preview-docs/master/src/assets/images/preview-docs.png',
    link: 'https://marketplace.visualstudio.com/items?itemName=Selemondev.vscode-preview-docs',
  },
]
</script>

<template>
  <BaseContainerComponent>
    <div class="flex flex-col space-y-8">
      <div class="items-center">
        <h1 class="text-3xl sm:text-4xl text-center font-semibold">
          Products built by the <br><span class="text-green-500">Community</span>
        </h1>
      </div>

      <div class="grid place-items-center">
        <div class="grid grid-cols-3 md:grid-cols-5 gap-5">
          <ul v-for="product in products" :key="product.id" class="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <NuxtLink :to="product.link" target="_blank">
                    <div class="flex flex-col items-center space-y-3">
                      <div class="rounded-md bg-black/5 dark:bg-white/5 p-2 ring-1 cursor-pointer ring-white/10">
                        <img :src="product.icon" class="w-10 h-10 rounded-md" :alt="product.name">
                      </div>
                    </div>
                  </NuxtLink>
                </TooltipTrigger>
                <TooltipContent>
                  <div class="flex flex-col items-center space-y-3">
                    <img :src="product.image" class="w-64">
                    <h4 class="dark:text-white text-black font-semibold">
                      {{ product.name }}
                    </h4>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ul>
        </div>
      </div>

      <div class="grid place-items-center">
        <ButtonCustomComponent label="Add yours" />
      </div>
    </div>
  </BaseContainerComponent>
</template>
