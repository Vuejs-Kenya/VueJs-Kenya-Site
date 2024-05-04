<script setup lang="ts">
import ButtonCustomComponent from '../button/CustomComponent.vue'
import BaseContainerComponent from '../base/ContainerComponent.vue'
import UIInput from '../ui/input/Input.vue'
import ButtonPillComponent from '../button/PillComponent.vue'

const userEmailAddress = ref('')
const loading = ref(false)
const { $toast } = useNuxtApp()
async function handleSubscribe() {
  loading.value = true
  const response = await $fetch('/api/subscribe', {
    method: 'POST',
    body: {
      email: userEmailAddress.value,
    },
  })

  if (response.status === 'subscribed') {
    $toast.success('Thank you for joining our newsletter!')
    userEmailAddress.value = ''
    loading.value = false
  };
}
</script>

<template>
  <BaseContainerComponent>
    <section class="w-full mt-16 lg:mt-0">
      <div class="relative items-center w-full mx-auto space-y-8 md:px-12 lg:px-16 lg:py-24">
        <div class="grid place-items-center">
          <ButtonPillComponent title="May 4th: Vue Meetup" description="Vue Conference is here. RSVP now!" />
        </div>
        <div class="flex w-full mx-auto text-left">
          <div class="relative inline-flex items-center mx-auto align-middle">
            <div class="space-y-4 text-center">
              <h1 class="block text-3xl font-bold dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                A community of <span class="text-green-500">Vue</span> developers <br class="hidden lg:block">
                supercharging the web
              </h1>
              <p class="max-w-xl mx-auto font-Inter text-base leading-relaxed dark:text-gray-400 text-gray-700">
                Join 500 fellow Nuxt & Vue
                Developers to learn everything Nuxt and Vue have to offer!
              </p>
            </div>
          </div>
        </div>
        <div class="grid place-items-center">
          <div class="grid items-center space-x-3 space-y-4 place-items-center md:space-y-0 md:flex">
            <UIInput
              v-model="userEmailAddress" placeholder="Email Address"
              class="w-72 border border-gray-300 dark:border-gray-700"
            />
            <ButtonCustomComponent :loading="loading" label="Join" @btn-click="handleSubscribe" />
          </div>
        </div>
      </div>
    </section>
  </BaseContainerComponent>
</template>
