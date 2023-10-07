<script setup lang='ts'>
interface SocialIcons {
  id: number
  icon: string
  url: string
  name: string
}
defineProps<{
  socialIcons: SocialIcons[]
}>()
</script>

<template>
  <div class="flex space-x-3">
    <div v-for="{ id, icon, url } in socialIcons" :key="id">
      <NuxtLink :path="url" target="_blank" class="flex items-center cursor-pointer">
        <div class="w-10 h-10 bg-[#181818] border-2 border-[#1E1E1E] hover:bg-[#1E1E1E] transition-all duration-200 ease-in grid place-items-center rounded-full">
          <Icon :name="icon" class="text-xl text-white" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
