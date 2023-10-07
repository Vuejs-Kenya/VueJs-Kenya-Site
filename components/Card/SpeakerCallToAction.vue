<template>
  <div
    class="grid px-2 pt-16 place-items-center md:px-16"
  >
    <div class="w-full md:max-w-5xl">
      <BaseCard class="w-full">
        <div
          class="absolute bottom-0 flex items-center left-2 lg:inset-y-0 lg:h-full"
        >
          <img
            src="https://nuxtnation.com/images/nn-bg-right.svg"
            class="hidden object-cover h-48 cursor-pointer lg:block"
          >

          <img
            src="https://nuxtnation.com/images/nn-bg-right.svg"
            class="cursor-pointer lg:hidden"
          >
        </div>
        <div class="relative z-10 grid h-full place-items-center">
          <div class="grid space-y-6 place-items-center ">
            <h2 class="text-2xl font-medium text-center text-white">
              Become the next VueJs Kenya <span class="text-green-500 "> <br> Speaker</span>
            </h2>
            <ButtonSpeakerCTA />
          </div>
        </div>

        <div
          class="absolute bottom-0 flex items-center right-2 lg:inset-y-0 lg:h-full"
        >
          <img
            src="https://nuxtnation.com/images/nn-bg-right.svg"
            class="hidden object-cover h-48 cursor-pointer lg:block"
          >

          <img
            src="https://nuxtnation.com/images/nn-bg-right.svg"
            class="cursor-pointer lg:hidden"
          >
        </div>
      </BaseCard>
    </div>
  </div>
</template>
