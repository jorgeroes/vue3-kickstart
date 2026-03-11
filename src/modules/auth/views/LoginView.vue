<template>
  <AppLayout>
    <div class="max-w-md mx-auto mt-16">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          Iniciar sesión
        </h1>
        <LoginForm @success="handleLoginSuccess" />
        <p class="mt-4 text-sm text-gray-600 text-center">
          Demo: usa cualquier email y contraseña (sin backend real)
        </p>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import LoginForm from '../components/LoginForm.vue'

const router = useRouter()

const handleLoginSuccess = () => {
  router.push('/dashboard')
}
</script>
