<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        id="email"
        v-model="email"
        type="email"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="tu@email.com"
      />
    </div>

    <div>
      <label
        for="password"
        class="block text-sm font-medium text-gray-700 mb-1"
      >
        Contraseña
      </label>
      <input
        id="password"
        v-model="password"
        type="password"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="••••••••"
      />
    </div>

    <div v-if="error" class="text-red-600 text-sm">
      {{ errorMessage }}
    </div>

    <BaseButton
      type="submit"
      :disabled="isLoading"
      class="w-full"
    >
      {{ isLoading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useAuth } from '../composables/useAuth'

const emit = defineEmits<{
  success: []
}>()

const { login, isLoggingIn, loginError } = useAuth()

const email = ref('')
const password = ref('')

const isLoading = computed(() => isLoggingIn.value)
const error = computed(() => loginError.value)
const errorMessage = computed(() => {
  if (!error.value) return ''
  return 'Error al iniciar sesión. Verifica tus credenciales.'
})

const handleSubmit = () => {
  login(
    { email: email.value, password: password.value },
    {
      onSuccess: () => {
        emit('success')
      },
    }
  )
}
</script>
