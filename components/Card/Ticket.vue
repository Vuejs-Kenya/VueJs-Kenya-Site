<script setup lang='ts'>
const props = defineProps<{
  colorScheme: Color
}>()

const cardTarget = ref()

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(cardTarget)

const cardTransform = computed(() => {
  const MAX_ROTATION = 20
  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
  const rY = (MAX_ROTATION / 2 - (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateX(${rY}deg) scale3d(1, 1, 1)`
})
</script>

<template>
  <div class="grid w-full place-items-center">
    <div
      ref="cardTarget" :style="{
        transform: cardTransform,
        transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
      }" :class="[props.colorScheme?.backgroundColor]"
      class="rounded-lg shadow-lg flex justify-between items-center flex-col border border-gray-900 w-72 h-80 md:w-[600px] lg:w-[500px] xl:w-[595px] p-6"
    >
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center space-x-4">
          <div>
            <img src="https://github.com/selemondev.png" alt="Selemondev" class="w-10 h-10 rounded-full">
          </div>

          <div>
            <h1 class="font-semibold text-white">
              Selemondev
            </h1>
            <p :class="props.colorScheme?.textColor" class="text-sm">
              @selemondev
            </p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <Icon v-auto-animate :name="props.colorScheme?.icon" class="text-2xl" />
          <span class="text-xl text-white">#017929</span>
        </div>
      </div>
      <div class="relative grid w-full h-64 place-items-center">
        <div class="space-y-5">
          <div class="flex w-full space-x-3">
            <div class="flex items-center">
              <svg
                width="56px" height="56px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet" fill="#ffffff" :stroke="props.colorScheme?.svgBorder"
                stroke-width="6.4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M114.75 17.2a2.375 2.375 0 0 0-1.94-1.01H90.5c-.98 0-1.86.6-2.21 1.51L64 81.01L39.71 17.7a2.365 2.365 0 0 0-2.21-1.51H15.2a2.364 2.364 0 0 0-2.22 3.18l36.95 99.96c.01 0 .01 0 .01.01c.06.18.16.35.27.51c.02.02.04.04.05.06c.04.06.1.11.14.16c.1.11.2.21.32.31c.06.05.12.09.19.13c.13.08.26.14.4.2c.07.02.13.05.19.07c.21.06.43.1.66.1h23.71c.23 0 .45-.04.65-.1c.07-.02.13-.05.2-.07c.14-.06.27-.12.4-.2c.07-.04.13-.08.19-.13c.12-.09.22-.19.32-.31c.05-.05.1-.1.14-.16c.02-.02.04-.03.05-.06c.11-.16.2-.33.27-.51v-.01l36.95-99.96c.25-.73.15-1.54-.29-2.17z"
                    :fill="props.colorScheme?.svgColor"
                  />
                </g>
              </svg>

              <svg
                width="56px" height="56px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet" fill="#ffffff" :stroke="props.colorScheme?.svgBorder"
                stroke-width="6.4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M109.05 16.65H84.42c-1.24 0-2.24 1-2.24 2.24v49.74c0 .07-.1 6.96-.36 11.03C80.24 89.6 74.73 94.04 64 94.04s-16.23-4.43-17.79-14.17c-.29-4.28-.38-11.17-.38-11.21V18.89c0-1.24-1.01-2.24-2.24-2.24H18.95c-1.23 0-2.24 1-2.24 2.24v49.76c0 .32.02 7.82 1.09 16.76c1.64 10.26 7 19.63 11.59 24.37c2.99 3.07 14.3 13.11 34.61 13.11c20.32 0 31.62-10.04 34.61-13.11c4.59-4.73 9.95-14.1 11.6-24.45c1.08-8.87 1.09-16.37 1.09-16.68V18.89a2.251 2.251 0 0 0-2.25-2.24z"
                    :fill="props.colorScheme?.svgColor"
                  />
                </g>
              </svg>

              <svg
                width="56px" height="56px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet" fill="#ffffff" :stroke="props.colorScheme?.svgBorder"
                stroke-width="6.4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M98.89 36.51c1.23 0 2.24-1 2.24-2.24V17.55c0-1.24-1.01-2.24-2.24-2.24H29.1c-1.24 0-2.24 1-2.24 2.24v100.97c0 1.24 1 2.24 2.24 2.24h69.8c1.23 0 2.24-1 2.24-2.24V101.8c0-1.24-1.01-2.24-2.24-2.24H53.24V77.51h35.12c1.23 0 2.24-1 2.24-2.24V58.55c0-1.24-1.01-2.24-2.24-2.24H53.24v-19.8h45.65z"
                    :fill="props.colorScheme?.svgColor"
                  />
                </g>
              </svg>
            </div>

            <div class="flex items-center">
              <svg
                width="56px" height="56px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet" fill="#ffffff" :stroke="props.colorScheme?.svgBorder"
                stroke-width="6.4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M111.21 107.69L99.92 85.46c-.16-.32-.46-.55-.81-.63s-.71.01-.99.23c-6.32 5.01-17.18 8.79-25.27 8.79c-15.63 0-26.55-10.58-26.55-25.73s10.92-25.73 26.55-25.73c8.46 0 17.14 2.72 22.64 7.11c.27.22.64.3.98.24c.34-.07.64-.29.81-.6l12.52-22.81c.28-.51.15-1.15-.31-1.51c-9.47-7.5-21.49-11.15-36.75-11.15c-32.5 0-56.08 22.91-56.08 54.46c0 31.56 23.58 54.46 56.08 54.46c14.87 0 27.72-4.52 38.18-13.45c.42-.36.54-.96.29-1.45z"
                    :fill="props.colorScheme?.svgColor"
                  />
                </g>
              </svg>
              <svg
                width="56px" height="56px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet" fill="#ffffff" :stroke="props.colorScheme?.svgBorder"
                stroke-width="6.4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M64.01 15.06c-34.13 0-55.46 24.1-55.46 53.82c0 29.73 21.33 53.82 55.46 53.82c34.12 0 55.45-24.1 55.45-53.82c-.01-29.73-21.33-53.82-55.45-53.82zm0 81.78c-17.73 0-28.82-12.52-28.82-27.96s11.08-27.96 28.82-27.96c17.73 0 28.81 12.52 28.81 27.96c-.01 15.44-11.09 27.96-28.81 27.96z"
                    clip-rule="evenodd" :fill="props.colorScheme?.svgColor" fill-rule="evenodd"
                  />
                </g>
              </svg>
              <svg
                width="56px" height="56px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet" fill="#ffffff" :stroke="props.colorScheme?.svgBorder"
                stroke-width="6.4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M108.54 15.2H86.65c-1.31 0-2.36 1.06-2.36 2.36v62.91L43.35 16.29a2.35 2.35 0 0 0-1.99-1.09h-21.9c-1.3 0-2.36 1.06-2.36 2.36v100.97c0 1.3 1.06 2.36 2.36 2.36h21.9c1.3 0 2.37-1.06 2.37-2.36V55.61l40.93 64.18c.43.68 1.19 1.09 2 1.09h21.89c1.3 0 2.36-1.06 2.36-2.36V17.56a2.38 2.38 0 0 0-2.37-2.36z"
                    :fill="props.colorScheme?.svgColor"
                  />
                </g>
              </svg>
              <svg
                width="56px" height="56px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet" fill="#ffffff" :stroke="props.colorScheme?.svgBorder"
                stroke-width="6.4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M101.15 15.54H34.86c-1.23 0-2.24 1-2.24 2.24v100.97c0 1.24 1.01 2.24 2.24 2.24h21.89c1.24 0 2.24-1 2.24-2.24v-44H94.1c1.24 0 2.24-1 2.24-2.24V55.79c0-1.24-1-2.24-2.24-2.24H58.99v-16.8h42.16c1.24 0 2.24-1 2.24-2.24V17.78c0-1.24-1-2.24-2.24-2.24z"
                    :fill="props.colorScheme?.svgColor"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div :class="props.colorScheme?.textColor" class="grid text-xl place-items-center">
            <div class="flex items-center space-x-3">
              <p class="text-sm">
                October 28th, 2023
              </p>
              <p class="text-sm">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid text-white place-items-center">
        <div class="flex items-center space-x-3">
          <p class="flex items-center space-x-2 text-sm">
            <span class="text-gray-300">Powered by Vite</span>
            <Icon name="logos:vitejs" class="text-sm" />
          </p>
          <div class="inline-block w-px h-4 bg-gray-500" role="separator" />
          <p class="flex items-center space-x-2 text-sm">
            <span class="text-gray-300">Hosted by VueJs Kenya</span>
            <img src="/logo.png" alt="VueJs Logo" class="w-6 h-6 md:h-4 md:w-4">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
