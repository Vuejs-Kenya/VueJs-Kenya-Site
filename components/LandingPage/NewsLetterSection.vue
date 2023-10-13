<script setup lang='ts'>
const userEmailAddress = ref('')

const { $toast } = useNuxtApp()
const loading = ref(false)
async function handleSubscribe() {
  loading.value = true
  const { data, error } = await useFetch('/api/subscribe', {
    method: 'POST',
    body: {
      email: userEmailAddress.value,
    },
  })

  if (data.value?.status === 'subscribed') {
    $toast.success('Thank you for joining our newsletter!')
    userEmailAddress.value = ''
    loading.value = false
  }
  else {
    if (error.value?.statusCode === 400 || 500) {
      userEmailAddress.value = ''
      loading.value = false
      $toast.error('OOPS! An error occurred. Please try again!')
    }
  }
}
</script>

<template>
  <BaseContainer>
    <div
      class="w-full cursor-pointer backdrop-blur-[12px] bg-[#111111] grid place-items-center py-10 transition-all duration-200 ease-in px-1 rounded-lg md:px-0 "
    >
      <div class="grid w-full h-full place-items-center">
        <div class="grid space-y-8 place-items-center">
          <div>
            <div class="grid place-items-center">
              <div class="space-y-6">
                <h1 class="block text-xl text-center font-bold text-white sm:text-4xl lg:text-4xl lg:leading-[50px]">
                  Subscribe to our <br><span class="text-[#28C962]">resource</span> newsletter.
                </h1>
                <p class="max-w-sm text-sm text-center text-[#CCCCCC]">
                  Drop your email and once per week we’ll send you some great resources you will love
                </p>
              </div>
            </div>
          </div>

          <div class="grid space-y-3 place-items-center md:space-y-0 md:space-x-3 md:items-center md:flex">
            <InputEmail id="userEmailAddress" v-model="userEmailAddress" name="userEmailAddress" section="footer" />
            <ButtonEmail :loading="loading" label="Join" @click="handleSubscribe" />
          </div>

          <p class="max-w-[200px] text-[#CCCCCC] text-sm text-center md:max-w-xs">
            You’re signing up for a weekly message from us
          </p>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
