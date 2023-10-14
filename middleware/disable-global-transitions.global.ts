export default defineNuxtRouteMiddleware((to) => {
  if (typeof document !== 'undefined' && !document.startViewTransition)
    return

  to.meta.pageTransition = false
  to.meta.layoutTransition = false
})
