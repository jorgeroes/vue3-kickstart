import { useQuery } from '@tanstack/vue-query'
import { httpClient } from '@/services/http/client'

interface DashboardStats {
  totalUsers: number
  activeUsers: number
  revenue: number
  growth: number
}

async function fetchDashboardStats(): Promise<DashboardStats> {
  return httpClient.get<DashboardStats>('/dashboard/stats')
}

export function useDashboard() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: fetchDashboardStats,
    staleTime: 1000 * 60 * 5,
  })

  return {
    stats: data,
    isLoading,
    error,
    refetch,
  }
}
