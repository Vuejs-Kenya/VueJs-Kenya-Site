export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatDate: (dateStr: string) => {
        if (dateStr) {
          const inputDate = new Date(dateStr) // Parse the input date string
          const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
          return inputDate.toLocaleDateString('en-US', options)
        }
        else {
          return undefined
        }
      },

    },
  }
})
