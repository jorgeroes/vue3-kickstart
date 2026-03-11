<template>
  <AppLayout>
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Bienvenido a Vue 3 Boilerplate
      </h1>
      <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Un boilerplate profesional y minimalista para proyectos Vue 3 con
        TypeScript, Vite, Pinia, TanStack Query y TailwindCSS.
      </p>
      <div class="flex gap-4 justify-center">
        <BaseButton @click="router.push('/dashboard')">
          Ver Dashboard
        </BaseButton>
        <BaseButton variant="secondary" @click="router.push('/login')">
          Iniciar sesión
        </BaseButton>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-2">Modular</h3>
          <p class="text-gray-600">
            Organizado por módulos para escalar fácilmente
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-2">TypeScript</h3>
          <p class="text-gray-600">
            Tipado estricto para mayor seguridad
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-2">Listo para producción</h3>
          <p class="text-gray-600">
            Deploy fácil en AWS Amplify
          </p>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
</script>
