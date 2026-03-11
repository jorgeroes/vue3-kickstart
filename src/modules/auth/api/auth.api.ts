import { httpClient } from '@/services/http/client'
import type { LoginCredentials, LoginResponse, User } from '../types/auth.types'

const MOCK_USER: User = {
  id: 'mock-user-1',
  email: 'demo@example.com',
  name: 'Usuario Demo',
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    await new Promise((r) => setTimeout(r, 300))
    return {
      token: 'mock-token-' + Date.now(),
      user: {
        ...MOCK_USER,
        email: credentials.email || MOCK_USER.email,
        name: credentials.email?.split('@')[0] || MOCK_USER.name,
      },
    }
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
