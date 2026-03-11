import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import type { App } from 'vue'
import router from '../router'

export function registerPlugins(app: App) {
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)
  app.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5,
          gcTime: 1000 * 60 * 10,
          retry: 1,
          refetchOnWindowFocus: false,
        },
      },
    },
  })
}
