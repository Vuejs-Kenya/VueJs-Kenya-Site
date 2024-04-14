<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const colorMode = useColorMode()
</script>

<template>
  <SwitchRoot
    v-bind="forwarded" :class="cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center dark:bg-green-400 rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      props.class,
    )"
  >
    <SwitchThumb
      :class="cn('pointer-events-none h-5 w-5 rounded-full grid place-items-center bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0')"
    >
      <Icon v-if="colorMode.preference === 'dark'" name="lucide:sun" class="w-3 h-3 text-green-400" />
      <Icon v-if="colorMode.preference === 'light'" name="lucide:moon" class="w-3 h-3" />
    </SwitchThumb>
  </SwitchRoot>
</template>
