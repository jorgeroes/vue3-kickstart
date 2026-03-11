<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="bg-white p-6 rounded-lg shadow"
    >
      <p class="text-sm text-gray-600 mb-1">{{ stat.label }}</p>
      <p class="text-3xl font-bold text-gray-900">{{ stat.value }}</p>
      <p
        v-if="stat.change"
        :class="[
          'text-sm mt-2',
          stat.change > 0 ? 'text-green-600' : 'text-red-600',
        ]"
      >
        {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}%
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Stat {
  label: string
  value: string | number
  change?: number
}

defineProps<{
  stats: Stat[]
}>()
</script>
