<script setup lang='ts'>
import { Button } from '@/components/ui/button'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <Button
      class="py-1 h-6 rounded-md px-2 border border-green-500 font-semibold bg-[#EFFDF5] disabled:opacity-40 dark:bg-green-500/20 dark:text-[#54DC82] text-[#48C16A] hover:enabled:bg-[#3BA34A] hover:enabled:text-white duration-200 ease-in text-[13px]"
    >
      {{ props.title }}
    </Button>
  </div>
</template>
