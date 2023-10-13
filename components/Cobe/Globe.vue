<script setup lang="ts">
import createGlobe from 'cobe'

const el = ref()
const mobileEl = ref()
const mobilePhi = ref(0)
const phi = ref(0)

onMounted(() => {
  createGlobe(el.value, {
    devicePixelRatio: 2,
    width: 500 * 2,
    height: 500 * 2,
    phi: 3.60,
    theta: 0.15,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0, 0.8, 0],
    glowColor: [1, 1, 1],
    markers: [
      // longitude latitude
      { location: [37.7595, -122.4367], size: 0.1 },
      { location: [-1.2921, 36.8219], size: 0.2 },
      { location: [9.1450, 40.4897], size: 0.1 },
      { location: [-30.5595, 22.9375], size: 0.1 },
      { location: [9.0820, 8.6753], size: 0.1 },
      { location: [42.7339, 25.4858], size: 0.1 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi.value
      phi.value += 0.01
    },
  })
})

onMounted(() => {
  createGlobe(mobileEl.value, {
    devicePixelRatio: 2,
    width: 250 * 2,
    height: 250 * 2,
    phi: 3.60,
    theta: 0.15,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0, 0.8, 0],
    glowColor: [1, 1, 1],
    markers: [
      // longitude latitude
      { location: [37.7595, -122.4367], size: 0.1 },
      { location: [-1.2921, 36.8219], size: 0.2 },
      { location: [9.1450, 40.4897], size: 0.1 },
      { location: [-30.5595, 22.9375], size: 0.1 },
      { location: [9.0820, 8.6753], size: 0.1 },
      { location: [42.7339, 25.4858], size: 0.1 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi.value
      mobilePhi.value += 0.01
    },
  })
})
</script>

<template>
  <div class="hidden w-full place-items-center md:grid">
    <canvas ref="el" :style="{ width: '500px', height: '500px' }" />
  </div>
  <div class="grid w-full place-items-center md:hidden">
    <canvas ref="mobileEl" :style="{ width: '250px', height: '250px' }" />
  </div>
</template>
