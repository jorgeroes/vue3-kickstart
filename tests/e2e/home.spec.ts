import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('debe cargar la página de inicio correctamente', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Vue 3 Boilerplate/)
    await expect(
      page.getByRole('heading', { name: /Bienvenido a Vue 3 Boilerplate/i })
    ).toBeVisible()
  })

  test('debe navegar a la página de login', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /Login/i }).click()
    await expect(page).toHaveURL(/\/login/)
    await expect(
      page.getByRole('heading', { name: /Iniciar sesión/i })
    ).toBeVisible()
  })

  test('debe mostrar las características del boilerplate', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/Modular/i)).toBeVisible()
    await expect(page.getByText(/TypeScript/i)).toBeVisible()
    await expect(page.getByText(/Listo para producción/i)).toBeVisible()
  })
})
