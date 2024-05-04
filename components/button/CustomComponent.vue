<script setup lang='ts'>
defineProps<{
  label?: string
  loading?: boolean
  iconName?: string
}>()

const emits = defineEmits<{
  (e: 'btnClick'): void
}>()

function handleClickEvent() {
  emits('btnClick')
}
</script>

<template>
  <div
    as="button"
    :class="{ 'cursor-not-allowed hover:ring-0 bg-[#27803C]': loading }" class="box-border relative z-30 inline-flex items-center justify-center w-auto px-6 py-2 overflow-hidden font-normal text-white transition-all duration-300 bg-green-600 rounded-md cursor-pointer group hover:ring-1 hover:ring-green-500 ease focus:outline-none"
    @click="handleClickEvent"
  >
    <span
      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
    />
    <span
      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
    />
    <span v-if="loading" class="relative z-20 flex items-center text-sm">
      <Icon name="ph:spinner" class="text-xl text-white animate-spin" />
    </span>
    <div v-else class="relative z-20 text-sm flex items-center space-x-3">
      <Icon v-if="iconName" :name="iconName" class="text-xl" />
      <p class="text-[16px] font-semibold leading-[22px]">
        {{ label }}
      </p>
    </div>
  </div>
</template>
