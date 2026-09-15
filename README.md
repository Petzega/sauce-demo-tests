# Sauce Demo Tests

Automatización de pruebas para [Sauce Demo](https://www.saucedemo.com/) con Playwright + Cucumber + TypeScript.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
npx playwright install chromium
```

## Lanzar pruebas

| Necesidad | Comando |
|----------|---------|
| Todos los features | `npx cucumber-js` |
| Un feature (todos sus escenarios) | `npx cucumber-js --tags "@products"` |
| Un escenario específico | `npx cucumber-js --tags "@products-01"` |
| Varios tags (OR) | `npx cucumber-js --tags "@login-01 or @login-02"` |
| Excluir un feature | `npx cucumber-js --tags "not @products"` |
| Combinado feature + tag específico | `npx cucumber-js --tags "@products and @products-01"` |

## Cambiar modo headless

Editar en `src/support/world.ts`:

```typescript
const HEADED = true;  // false para no ver el navegador
```

## Credenciales de prueba

| Usuario | Contraseña |
|---------|-----------|
| `standard_user` | `secret_sauce` |
| `locked_out_user` | `secret_sauce` |
