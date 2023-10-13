<script setup lang='ts'>
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
  <div class="flex items-center space-x-4">
    <div v-for="{ id, icon, name } in props.colorSchemes" :key="id" class="grid rounded-lg place-items-center">
      <div>
        <button @click="handleColorScheme(name)">
          <Icon :name="icon" class="text-lg transition-all duration-200 ease-in hover:scale-150" />
        </button>
      </div>
    </div>
  </div>
</template>
