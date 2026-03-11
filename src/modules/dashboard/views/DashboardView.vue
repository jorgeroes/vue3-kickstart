<template>
  <AppLayout>
    <div>
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p class="text-gray-600 mt-2">
          Bienvenido de vuelta, {{ userName }}
        </p>
      </div>

      <div v-if="isLoading" class="text-center py-12">
        <p class="text-gray-600">Cargando estadísticas...</p>
      </div>

      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
        <p class="text-red-800">
          Error al cargar datos. Mostrando datos de ejemplo.
        </p>
      </div>

      <DashboardStats :stats="displayStats" />

      <div class="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Ejemplo de TanStack Query</h2>
        <p class="text-gray-600 mb-4">
          Este dashboard usa <code class="bg-gray-100 px-2 py-1 rounded">@tanstack/vue-query</code>
          para gestionar el estado remoto. Los datos se cargan automáticamente y se cachean.
        </p>
        <BaseButton @click="handleRefresh" size="sm">
          Recargar datos
        </BaseButton>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import DashboardStats from '../components/DashboardStats.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useDashboard } from '../composables/useDashboard'
import { useAuthStore } from '@/modules/auth/store/auth.store'

const authStore = useAuthStore()
const { stats, isLoading, error, refetch } = useDashboard()

const userName = computed(() => authStore.user?.name || 'Usuario')

const mockStats = [
  { label: 'Total Usuarios', value: 1234, change: 12 },
  { label: 'Usuarios Activos', value: 856, change: 8 },
  { label: 'Ingresos', value: '$45,678', change: 15 },
  { label: 'Crecimiento', value: '23%', change: 5 },
]

const displayStats = computed(() => {
  if (stats.value) {
    return [
      { label: 'Total Usuarios', value: stats.value.totalUsers },
      { label: 'Usuarios Activos', value: stats.value.activeUsers },
      { label: 'Ingresos', value: `$${stats.value.revenue}` },
      { label: 'Crecimiento', value: `${stats.value.growth}%` },
    ]
  }
  return mockStats
})

const handleRefresh = () => {
  refetch()
}
</script>
