import { useMutation } from '@tanstack/vue-query'
import { useAuthStore } from '../store/auth.store'
import { authApi } from '../api/auth.api'
import type { LoginCredentials } from '../types/auth.types'

export function useAuth() {
  const authStore = useAuthStore()

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      authStore.setAuth(data.token, data.user)
    },
  })

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      authStore.logout()
    },
  })

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    isAuthenticated: authStore.isAuthenticated,
    user: authStore.user,
  }
}
