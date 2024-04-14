<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { X } from 'lucide-vue-next'
import { type SheetVariants, sheetVariants } from '.'
import { cn } from '@/lib/utils'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class, 'flex flex-col space-y-6 dark:bg-[#OB210E] dark:border-gray-900')"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <DialogClose
        class="absolute right-4 top-3 w-7 h-7 flex items-center justify-center border dark:border-gray-800 rounded-full opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <X class="w-5 h-5 text-black dark:text-white" />
      </DialogClose>
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
