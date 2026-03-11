<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between items-center">
          <div class="flex items-center">
            <RouterLink to="/" class="text-xl font-bold text-gray-900">
              {{ appName }}
            </RouterLink>
          </div>
          <div class="flex items-center gap-4">
            <RouterLink
              to="/"
              class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </RouterLink>
            <RouterLink
              v-if="isAuthenticated"
              to="/dashboard"
              class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </RouterLink>
            <RouterLink
              v-if="!isAuthenticated"
              to="/login"
              class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </RouterLink>
            <BaseButton
              v-if="isAuthenticated"
              variant="secondary"
              size="sm"
              @click="handleLogout"
            >
              Cerrar sesión
            </BaseButton>
          </div>
        </div>
      </nav>
    </header>

    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/modules/auth/store/auth.store'
import BaseButton from '@/components/base/BaseButton.vue'
import { env } from '@/app/config/env'

const authStore = useAuthStore()
const router = useRouter()

const appName = env.appName
const isAuthenticated = computed(() => authStore.isAuthenticated)

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>
