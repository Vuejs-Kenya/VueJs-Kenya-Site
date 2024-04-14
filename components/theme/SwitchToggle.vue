<script setup lang='ts'>
const colorMode = useColorMode()
function toggleTheme(event: boolean) {
  return colorMode.preference = 'dark' ? event === true ? 'dark' : 'light' : 'dark'
};
</script>

<template>
  <div>
    <UISwitch @update:checked="toggleTheme" />
  </div>
</template>
