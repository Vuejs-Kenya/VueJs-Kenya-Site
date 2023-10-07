<script setup lang='ts'>
interface Partner {
  id: number
  partner: string
  icon: string
  link: string
}

defineProps<{
  partners: Partner[]
}>()
</script>

<template>
  <div class="space-y-4">
    <div class="grid grid-cols-1 md:auto-rows-[192px] w-full md:grid-cols-3 gap-4">
      <div
        v-for="{ id, partner, icon, link } in partners" :key="id"
        class="row-span-1 p-4 cursor-pointer backdrop-blur-[12px] bg-green-800 hover:bg-green-900 transition-all duration-200 ease-in bg-opacity-40 border-2 border-green-500 rounded-lg"
      >
        <div class="grid w-full h-full place-items-center">
          <div class="grid space-y-4 place-items-center">
            <div>
              <NuxtLink :to="link" target="_blank">
                <Icon :name="icon" class="text-5xl text-white" />
              </NuxtLink>
            </div>

            <div>
              <h1 class="text-2xl text-white">
                {{ partner }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="row-span-1 p-4 cursor-pointer backdrop-blur-[12px] bg-green-800  h-48 transition-all duration-200 ease-in bg-opacity-40 border-2 border-green-500 rounded-lg"
    >
      <div class="grid w-full h-full place-items-center">
        <div class="grid space-y-4 place-items-center">
          <div>
            <div class="grid w-10 h-10 bg-green-800 border-2 border-green-600 rounded-lg place-items-center">
              <Icon name="ph:plus" class="text-2xl text-white" />
            </div>
          </div>

          <div>
            <h1 class="text-2xl text-white">
              Your logo
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
