<template>
  <BaseContainer>
    <section class="w-full mt-20 lg:mt-0">
      <div
        class="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
      >
        <div
          class="absolute left-0 right-0 z-10 top-0 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"
        />
      </div>
      <div class="relative items-center w-full mx-auto space-y-8 md:px-12 lg:px-16 lg:py-24">
        <div class="grid place-items-center">
          <ButtonPill title="Nuxt Nation Event" />
        </div>
        <div class="flex w-full mx-auto text-left">
          <div class="relative inline-flex items-center mx-auto align-middle">
            <div class="space-y-4 text-center">
              <h1 class="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight">
                A community of <span class="text-green-500">Vue</span> developers <br
                  class="hidden lg:block"
                >
                supercharging the web
              </h1>
              <p class="max-w-xl mx-auto text-base leading-relaxed text-gray-500">
                Join 5,000 fellow Nuxt & Vue
                Developers to learn everything Nuxt and Vue have to offer!
              </p>
            </div>
          </div>
        </div>
        <div class="grid place-items-center">
          <div class="grid items-center space-x-3 space-y-4 place-items-center md:space-y-0 md:flex">
            <InputEmail section="hero" />
            <ButtonEmail label="Join" />
          </div>
        </div>
      </div>
    </section>
  </BaseContainer>
</template>
