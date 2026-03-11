<template>
  <AppLayout>
    <div class="text-center py-16">
      <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-8">Página no encontrada</p>
      <BaseButton @click="router.push('/')">Volver al inicio</BaseButton>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
</script>
