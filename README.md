# Vue 3 Boilerplate

Boilerplate profesional y minimalista para proyectos Vue 3 con TypeScript, Vite, Pinia, TanStack Query y TailwindCSS v4.

## 🚀 Requisitos

- **Node.js**: ^20.19.0 o >=22.12.0
- **pnpm**: 9.x o superior

## 📦 Instalación

```bash
# Instalar pnpm si no lo tienes
npm install -g pnpm

# Instalar dependencias
pnpm install

# Copiar variables de entorno
cp .env.example .env
```

## 🛠️ Scripts disponibles

```bash
# Desarrollo
pnpm dev              # Inicia servidor de desarrollo en http://localhost:3000

# Build
pnpm build            # Compila para producción
pnpm preview          # Preview del build de producción

# Calidad de código
pnpm lint             # Ejecuta ESLint y corrige errores
pnpm format           # Formatea código con Prettier
pnpm typecheck        # Verifica tipos con TypeScript

# Testing
pnpm test             # Ejecuta tests unitarios con Vitest
pnpm test:e2e         # Ejecuta tests e2e con Playwright
```

## 📁 Estructura del proyecto

```
frontend/
├── public/              # Archivos estáticos
├── src/
│   ├── app/            # Configuración de la app
│   │   ├── config/     # Variables de entorno
│   │   ├── providers/  # Setup de plugins
│   │   └── router/     # Configuración de rutas
│   ├── assets/         # Assets (imágenes, etc.)
│   ├── components/     # Componentes reutilizables
│   │   ├── base/       # Componentes base
│   │   └── layout/     # Layouts
│   ├── modules/        # Módulos por dominio
│   │   ├── auth/       # Módulo de autenticación
│   │   └── dashboard/  # Módulo de dashboard
│   ├── composables/    # Composables globales
│   ├── services/       # Servicios (HTTP, etc.)
│   ├── stores/         # Stores globales de Pinia
│   ├── styles/         # Estilos globales
│   ├── types/          # Tipos TypeScript globales
│   ├── utils/          # Utilidades
│   └── views/          # Vistas principales
├── tests/
│   ├── unit/           # Tests unitarios
│   └── e2e/            # Tests e2e
└── amplify.yml         # Configuración AWS Amplify
```

## 🏗️ Stack tecnológico

- **Vue 3** (^3.5) - Framework progresivo
- **Vite 7** - Build tool ultrarrápido
- **TypeScript** (^5.9) - Tipado estático
- **Vue Router 5** - Enrutamiento
- **Pinia 3** - State management
- **TanStack Query** (vue-query) - Server state management
- **Tailwind CSS v4** - Framework CSS utility-first
- **Vitest** - Testing unitario
- **Playwright** - Testing e2e
- **ESLint** + **Prettier** - Linting y formato

## 🌐 Deploy en AWS Amplify

### Configuración inicial

1. Conecta tu repositorio Git a AWS Amplify
2. Amplify detectará automáticamente el archivo `amplify.yml`
3. Configura las variables de entorno en la consola de Amplify:
   - `VITE_API_BASE_URL`
   - `VITE_APP_NAME`
   - `VITE_APP_ENV`

### Configuración de rewrites para SPA

**Importante**: Para que Vue Router funcione correctamente en modo history, debes configurar rewrites en AWS Amplify:

1. Ve a **App Settings** → **Rewrites and redirects**
2. Agrega la siguiente regla:

```
Source address: /<*>
Target address: /index.html
Type: 200 (Rewrite)
```

Esto asegura que todas las rutas no resueltas por archivos estáticos se redirijan a `index.html`, permitiendo que Vue Router maneje la navegación del lado del cliente.

### Build y deploy

Amplify ejecutará automáticamente:

```bash
pnpm install
pnpm build
```

El contenido de la carpeta `dist/` se desplegará automáticamente.

## 🔧 Configuración de variables de entorno

Crea un archivo `.env` en la raíz del proyecto (basado en `.env.example`):

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=Vue3 Boilerplate
VITE_APP_ENV=development
```

Las variables deben tener el prefijo `VITE_` para ser accesibles en el cliente.

## 📚 Documentación adicional

Para una guía más detallada sobre la arquitectura, patrones y mejores prácticas, consulta [boilerplate_readme.md](./boilerplate_readme.md).

## 🤝 Contribuir

Este es un boilerplate base. Siéntete libre de adaptarlo a tus necesidades específicas.

## 📄 Licencia

MIT
