<script setup lang="ts">
const props = defineProps<{
  section: string
  modelValue: string | number
  name: string
  id: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
const inputClass = computed(() => {
  return classNames(
    props.section === 'hero' ? 'bg-black border border-slate-800' : 'bg-[#181818] border border-[#181818]',
  )
})
const inputRef = ref(null)
const isFocused = ref(false)
const position = reactive({ x: 0, y: 0 })
const opacity = ref(0)

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function handleMouseMove(e: any) {
  if (!inputRef.value || isFocused.value)
    return

  const div = inputRef.value
  const rect = div.getBoundingClientRect()

  position.x = e.clientX - rect.left
  position.y = e.clientY - rect.top
}

function handleFocus() {
  isFocused.value = true
  opacity.value = 1
}

function handleBlur() {
  isFocused.value = false
  opacity.value = 0
}

function handleMouseEnter() {
  opacity.value = 1
}

function handleMouseLeave() {
  opacity.value = 0
}

const borderStyle = computed(() => ({
  border: '1px solid green',
  opacity: opacity.value,
  WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
}))
</script>

<template>
  <div class="relative w-64 md:w-80">
    <input
      :id="props.id"
      autocomplete="off"
      placeholder="Enter your email address"
      type="email"
      :name="props.name"
      :value="props.modelValue"
      :class="inputClass"
      class=" h-12 w-full cursor-default rounded-md p-3.5 text-white transition-colors duration-500 placeholder:select-none placeholder:text-gray-400 focus:border-[#22C55E] focus:outline-none"
      @mousemove="handleMouseMove"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="onInput"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
    <input
      ref="inputRef"
      :disabled="true"
      :style="borderStyle"
      aria-hidden="true"
      class="border-[rgb(228, 115, 32)] pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border bg-[transparent] p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
    >
  </div>
</template>
