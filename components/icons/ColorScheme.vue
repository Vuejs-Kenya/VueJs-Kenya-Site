<script setup lang='ts'>
import type { Color } from '~/types/colorscheme.interface.ts'

const props = defineProps<{
  colorSchemes: Color[]
}>()

const emit = defineEmits<{
  (e: 'handleColorSchemeChange', value: string): void
}>()

function handleColorScheme(val: string) {
  emit('handleColorSchemeChange', val)
}
</script>

<template>
  <div class="grid grid-cols-6 gap-6">
    <div v-for="{ id, icon, name } in props.colorSchemes" :key="id" class="grid rounded-lg place-items-center">
      <div class="group">
        <button
          class="w-12 h-12 border dark:border-gray-800 rounded-md grid place-items-center"
          @click="handleColorScheme(name)"
        >
          <Icon :name="icon" class="text-2xl transition-all duration-200 ease-in group-hover:scale-150" />
        </button>
      </div>
    </div>
  </div>
</template>
