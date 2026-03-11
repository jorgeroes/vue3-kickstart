interface EnvConfig {
  apiBaseUrl: string
  appName: string
  appEnv: string
}

function getEnvVariable(key: string, defaultValue?: string): string {
  const value = import.meta.env[key]
  if (!value && !defaultValue) {
    throw new Error(`Variable de entorno ${key} no está definida`)
  }
  return value || defaultValue || ''
}

export const env: EnvConfig = {
  apiBaseUrl: getEnvVariable('VITE_API_BASE_URL', 'http://localhost:8000'),
  appName: getEnvVariable('VITE_APP_NAME', 'Vue3 Boilerplate'),
  appEnv: getEnvVariable('VITE_APP_ENV', 'development'),
}
