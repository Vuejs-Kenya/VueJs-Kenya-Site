<script setup lang='ts'>
import { Input } from '../ui/input'
import ButtonCustomComponent from '~/components/button/CustomComponent.vue'
import BaseContainerComponent from '~/components/base/ContainerComponent.vue'

const userEmailAddress = ref('')

const { $toast } = useNuxtApp()
const loading = ref(false)
async function handleSubscribe() {
  loading.value = true
  const response = await $fetch('/api/subscribe', {
    method: 'POST',
    body: {
      email: userEmailAddress.value,
    },
  })

  if (response?.status === 'subscribed') {
    $toast.success('Thank you for joining our newsletter!')
    userEmailAddress.value = ''
    loading.value = false
  }
  else {
    if (response!.statusCode === 400 || 500) {
      userEmailAddress.value = ''
      loading.value = false
      $toast.error('OOPS! An error occurred. Please try again!')
    }
  }
}
</script>

<template>
  <BaseContainerComponent>
    <div class="relative isolate overflow-hidden  dark:bg-[#070c1a] bg-gray-50 rounded-md py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div class="lg:max-w-lg">
            <h2 class="text-3xl font-bold text-center lg:text-start tracking-tight dark:text-white sm:text-4xl">
              Subscribe to our <br><span class="text-[#28C962]"> resource </span> newsletter.
            </h2>
            <p class="mt-4 text-lg leading-8 text-center lg:text-start text-gray-700 dark:text-gray-300">
              Drop
              your email and
              once a
              week we’ll send you some great resources you will love.
            </p>
            <div
              class="mt-6 flex flex-col items-center justify-center lg:justify-start md:flex-row md:space-y-0 space-y-4 gap-x-4"
            >
              <label for="email-address" class="sr-only">Email address</label>
              <Input
                id="userEmailAddress" v-model="userEmailAddress" placeholder="Email address"
                name="userEmailAddress" section="footer"
                class="w-56 dark:border dark:border-gray-700 sm:w-72"
              />
              <ButtonCustomComponent :loading="loading" label="Subscribe" @click="handleSubscribe" />
            </div>
          </div>
          <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  class="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true"
                >
                  <path
                    stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </div>
              <dt class="mt-4 font-semibold dark:text-white">
                Weekly articles
              </dt>
              <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                Stay up-to-date with our weekly
                newsletter packed with curated articles and valuable resources delivered straight to your
                inbox.
              </dd>
            </div>
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  class="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true"
                >
                  <path
                    stroke-linecap="round" stroke-linejoin="round"
                    d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                  />
                </svg>
              </div>
              <dt class="mt-4 font-semibold dark:text-white">
                No spam
              </dt>
              <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                We take your privacy
                and time seriously. Rest assured, when you subscribe to our newsletter, you won't receive
                any spams.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-green-200 to-green-300 dark:from-green-600 dark:to-green-800 opacity-30 dark:opacity-40"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </div>
  </BaseContainerComponent>
</template>
