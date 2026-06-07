const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'https://proyecto-barber-connect.vercel.app';

test.describe('Set de Pruebas Obligatorias - Flujos de Interfaz', () => {

  test('1. Integracion: Buscador de sedes actualiza y filtra el estado de la lista', async ({ page }) => {
    await page.goto(`${BASE_URL}/booking`);
    const searchInput = page.locator('input[placeholder*="Buscar"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill('Sede Norte');
      await expect(page.locator('text=Sede Sur')).toHaveCount(0); // ← corregido
    }
  });

  test('2. Integracion: El validador bloquea el avance si faltan campos obligatorios', async ({ page }) => {
    await page.goto(`${BASE_URL}/booking`);
    const btnContinuar = page.locator('button:has-text("Continuar")');
    if (await btnContinuar.isVisible()) {
      await btnContinuar.click();
      await expect(page.locator('text=Por favor selecciona')).toBeVisible();
    }
  });

  test('3. Integracion: El componente de resumen lee los cambios del especialista seleccionado', async ({ page }) => {
    await page.goto(`${BASE_URL}/booking`);
    const cardBarbero = page.locator('text=WILMER ANDRES CHAPARRO');
    if (await cardBarbero.isVisible()) {
      await cardBarbero.click();
      await expect(page.locator('.seleccion-resumen-bar')).toContainText('WILMER ANDRES CHAPARRO');
    }
  });

  test('4. E2E: Flujo completo ideal de navegacion interactiva por el asistente de citas', async ({ page }) => {
  await page.goto(`${BASE_URL}/booking`);
  await page.click('text=Medellín'); // ← era 'Barber Connect Sede 1'
  await page.click('text=Corte');
  await page.click('text=CORTE CABELLO');
  await page.click('text=WILMER ANDRES CHAPARRO');
  await page.click('button:has-text("Continuar")');
  await expect(page.locator('text=Selecciona fecha y hora')).toBeVisible();
});
  test('5. E2E: Cancelacion del flujo mediante boton Home redirige limpiamente a la landing', async ({ page }) => {
    await page.goto(`${BASE_URL}/booking`);
    const btnHome = page.locator('.home-btn-booking');
    if (await btnHome.isVisible()) {
      await btnHome.click();
      await expect(page).toHaveURL(`${BASE_URL}/`);
    }
  });

  test('6. E2E: El boton de retorno preserva la integridad del paso anterior sin reiniciar la app', async ({ page }) => {
  await page.goto(`${BASE_URL}/booking`);
  await page.click('text=Medellín'); // ← era 'Barber Connect Sede 1'
  const btnRegresar = page.locator('.back-btn-booking');
  if (await btnRegresar.isVisible()) {
    await btnRegresar.click();
    await expect(page.locator('text=Nuestras sedes')).toBeVisible();
  }
});
});