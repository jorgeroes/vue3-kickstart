import { httpClient } from '@/services/http/client'
import type { LoginCredentials, LoginResponse, User } from '../types/auth.types'

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    return httpClient.post<LoginResponse>('/auth/login', credentials)
  },

  logout: async (): Promise<void> => {
    return httpClient.post<void>('/auth/logout')
  },

  getCurrentUser: async (): Promise<User> => {
    return httpClient.get<User>('/auth/me')
  },

  refreshToken: async (): Promise<{ token: string }> => {
    return httpClient.post<{ token: string }>('/auth/refresh')
  },
}
