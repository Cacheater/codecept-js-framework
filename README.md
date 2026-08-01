# codecept-js-framework

Framework de automatizacion de pruebas **Web** y **API** basado en [CodeceptJS](https://codecept.io), TypeScript, [Playwright](https://playwright.dev) y el helper REST nativo de CodeceptJS. Incluye Page Objects, reporte [Allure](https://allurereport.org), CI con GitHub Actions y soporte para Docker.

## Stack

- **CodeceptJS 4.x** (ESM) como runner de pruebas
- **TypeScript** + [`tsx`](https://github.com/privatenumber/tsx) como loader
- **Playwright** (Chromium/Firefox/WebKit) para pruebas web
- **REST** (helper nativo de CodeceptJS, basado en axios) para pruebas de API
- **Allure** para reportes
- **ESLint + Prettier** para linting y formateo
- **Docker** para ejecucion reproducible
- **GitHub Actions** para CI

## Prerrequisitos

- Node.js 22+ (probado con Node 26)
- Java (JRE) instalado localmente si quieres generar el reporte Allure fuera de Docker/CI (`java -version`). Si no lo tienes, usa Docker para generar el reporte.
- Docker (opcional, para ejecucion en contenedor)

## Instalacion

```bash
npm install
npx playwright install --with-deps
```

## Estructura de carpetas

```
config/           Constantes de entorno
data/web/         Fixtures para pruebas web
data/api/         Fixtures/payloads para pruebas de API
pages/            Page Objects (patron POM) para pruebas web
tests/web/        Pruebas de UI (tag @web)
tests/api/        Pruebas de API (tag @api)
steps_file.ts     Actor custom (extension de I)
codecept.conf.ts  Configuracion unica con los helpers Playwright + REST
```

## Ejecutar pruebas

```bash
npm run test:web    # solo pruebas web (tag @web)
npm run test:api    # solo pruebas de API (tag @api)
npm run test:all    # todas las pruebas
```

Variables de entorno soportadas:

- `WEB_BASE_URL` — URL base para las pruebas web (default: `https://the-internet.herokuapp.com`)
- `API_BASE_URL` — URL base para las pruebas de API (default: `https://jsonplaceholder.typicode.com`)
- `HEADLESS` — `false` para ver el navegador durante las pruebas web (por defecto corre headless)

```bash
HEADLESS=false npm run test:web
```

## Agregar un nuevo Page Object

1. Crea la clase en `pages/` siguiendo el patron de `pages/LoginPage.ts` (usa `inject()` para obtener `I`).
2. Registra el page object en el bloque `include` de `codecept.conf.ts`.
3. Regenera los tipos para tener autocompletado:

```bash
npm run codecept:def
```

## Reporte Allure

```bash
npm run report   # genera y abre el reporte HTML (requiere Java instalado)
```

O por separado:

```bash
npm run allure:generate
npm run allure:open
```

Si no tienes Java instalado localmente, genera el reporte dentro de Docker (ver abajo).

## Docker

```bash
docker compose up --build
```

Esto corre `tests-web` y `tests-api` en contenedores con Playwright y sus dependencias preinstaladas, y genera el reporte Allure en `./allure-report/` usando los resultados montados desde `./allure-results/`.

## Linting y formateo

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## CI

El workflow `.github/workflows/tests.yml` corre en cada push/PR a `main`: instala dependencias, instala los navegadores de Playwright, corre lint, ejecuta las suites de API y Web por separado, genera el reporte Allure y lo publica como artifact descargable desde la ejecucion del workflow en GitHub Actions.

## Convenciones

- Cada archivo de prueba termina en `_test.ts`.
- Cada `Feature(...)` debe llevar el tag `@web` o `@api` segun corresponda, para permitir filtrar la ejecucion con `--grep`.
- Los Page Objects viven en `pages/` y solo se usan en pruebas web; las pruebas de API no usan el patron POM.
