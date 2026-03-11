import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '@/modules/auth/store/auth.store'

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it('inicializa con usuario no autenticado', () => {
    const store = useAuthStore()
    expect(store.isAuthenticated).toBe(false)
    expect(store.user).toBe(null)
    expect(store.token).toBe(null)
  })

  it('establece autenticación correctamente', () => {
    const store = useAuthStore()
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    }
    const mockToken = 'mock-token-123'

    store.setAuth(mockToken, mockUser)

    expect(store.isAuthenticated).toBe(true)
    expect(store.user).toEqual(mockUser)
    expect(store.token).toBe(mockToken)
    expect(localStorage.getItem('auth_token')).toBe(mockToken)
  })

  it('cierra sesión correctamente', () => {
    const store = useAuthStore()
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    }

    store.setAuth('token', mockUser)
    store.logout()

    expect(store.isAuthenticated).toBe(false)
    expect(store.user).toBe(null)
    expect(store.token).toBe(null)
    expect(localStorage.getItem('auth_token')).toBe(null)
  })

  it('carga autenticación almacenada', () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    }
    const mockToken = 'stored-token'

    localStorage.setItem('auth_token', mockToken)
    localStorage.setItem('auth_user', JSON.stringify(mockUser))

    const store = useAuthStore()
    store.loadStoredAuth()

    expect(store.isAuthenticated).toBe(true)
    expect(store.user).toEqual(mockUser)
    expect(store.token).toBe(mockToken)
  })
})
