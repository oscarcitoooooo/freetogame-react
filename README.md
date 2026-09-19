# FreeToGame React

## Descripción

FreeToGame React es una aplicación web desarrollada con React, TypeScript y Vite que consume la API pública de FreeToGame para mostrar un catálogo de videojuegos.

La aplicación permite consultar los videojuegos disponibles, realizar búsquedas por nombre, aplicar filtros y ordenamientos, consultar información detallada de cada juego y gestionar una lista de favoritos que se conserva mediante localStorage.

También se implementaron diferentes estados de la interfaz para informar al usuario cuando los datos están cargando, cuando no existen resultados o cuando ocurre un error en la petición. En caso de error, la aplicación permite volver a intentar la carga del catálogo sin necesidad de recargar la página.

## Integrantes

- Oscar Uñates
- Yoseth Lloreda
- Felipe Lopera

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS
- Fetch API
- LocalStorage
- Git
- GitHub
- FreeToGame API

## Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js
- npm
- Git
- Un navegador web moderno como Google Chrome, Microsoft Edge o Firefox

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/oscarcitoooooo/freetogame-react.git
   ```

2. Ingresar a la carpeta del proyecto:

   ```bash
   cd freetogame-react
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

## Ejecución del proyecto

Para iniciar el proyecto en modo desarrollo se debe ejecutar:

```bash
npm run dev
```

Vite iniciará el servidor de desarrollo y mostrará en la terminal la dirección local desde la cual se puede abrir la aplicación en el navegador.

## Compilación

Para generar la versión de producción del proyecto se debe ejecutar:

```bash
npm run build
```

Este comando ejecuta la compilación de TypeScript y posteriormente genera la versión de producción utilizando Vite.

También se puede verificar el código con ESLint mediante:

```bash
npm run lint
```

Para visualizar localmente la versión compilada se puede utilizar:

```bash
npm run preview
```

## Funcionalidades

La aplicación implementa los siguientes requisitos funcionales:

### RF-01 - Listado de videojuegos

La aplicación obtiene los videojuegos desde la API de FreeToGame y los presenta mediante un catálogo de tarjetas. Cada videojuego muestra información básica como su título, género, plataforma e imagen.

### RF-02 - Estados de la interfaz

Se manejan diferentes estados durante la consulta y visualización de los videojuegos:

- Cargando.
- Error en la petición.
- Sin resultados.
- Visualización correcta del catálogo.

Esto permite informar al usuario sobre lo que está ocurriendo mientras utiliza la aplicación.

### RF-03 - Búsqueda con debounce

La aplicación permite buscar videojuegos por su título mediante un campo de búsqueda controlado.

Para evitar realizar el filtrado inmediatamente después de cada tecla, se implementó manualmente un debounce de 400 ms utilizando `setTimeout` dentro de `useEffect`.

El temporizador anterior se elimina utilizando `clearTimeout` cuando el usuario continúa escribiendo.

### RF-04 - Vista de detalle

Cada videojuego cuenta con una opción para consultar información más detallada.

Al seleccionar un videojuego se realiza una consulta de sus detalles y se presenta una vista individual. El usuario también puede regresar al catálogo principal.

### RF-05 - Favoritos

Los videojuegos pueden agregarse o eliminarse de una lista de favoritos.

La aplicación muestra la cantidad de videojuegos marcados como favoritos y guarda sus identificadores utilizando `localStorage`, permitiendo conservar la selección al recargar la página.

### RF-06 - Manejo de errores y reintento

Cuando ocurre un error al cargar el catálogo, la aplicación muestra un mensaje y un botón de reintento.

El usuario puede realizar nuevamente la petición sin necesidad de recargar manualmente la página.

## Estructura del proyecto

El código principal se encuentra dentro de la carpeta `src`.

```text
src/
├── components/
│   ├── GameCard.tsx
│   ├── GameDetails.tsx
│   ├── GameFilters.tsx
│   ├── GameList.tsx
│   └── Header.tsx
├── hooks/
│   ├── useFavorites.ts
│   └── useGames.ts
├── services/
│   └── freeToGameApi.ts
├── types/
│   ├── Game.ts
│   └── GameDetails.ts
├── utils/
│   └── gameUtils.ts
├── App.tsx
└── main.tsx
```

La aplicación fue dividida en componentes, hooks, servicios, tipos y utilidades para mantener separadas las diferentes responsabilidades del proyecto.

## Decisiones técnicas

### React con TypeScript

Se utilizó React junto con TypeScript para desarrollar la interfaz y trabajar con datos tipados durante el consumo de la API.

### Fetch API

Las peticiones HTTP se realizan utilizando la API nativa `fetch`.

Las respuestas son verificadas mediante `response.ok` antes de procesar la información recibida.

### Hooks personalizados

Se crearon hooks para separar parte de la lógica de la interfaz.

`useGames` se encarga de manejar la carga del catálogo, los estados de carga y error y el reintento de la petición.

`useFavorites` administra los videojuegos favoritos y su almacenamiento local.

### AbortController

La petición principal del catálogo utiliza `AbortController` para permitir cancelar solicitudes cuando corresponde.

También se cancela una solicitud anterior antes de realizar una nueva petición, evitando mantener solicitudes innecesarias activas.

### Debounce manual

La búsqueda utiliza un debounce de 400 ms implementado manualmente con `setTimeout` y `clearTimeout` dentro de `useEffect`.

No se utilizó una librería externa para esta funcionalidad.

### Persistencia de favoritos

Los identificadores de los videojuegos favoritos se almacenan en `localStorage`, permitiendo conservarlos después de actualizar o volver a abrir la aplicación.

### Organización en componentes

La interfaz fue dividida en diferentes componentes para evitar concentrar toda la aplicación en un único archivo y facilitar la organización del código.

## API utilizada

El proyecto utiliza la API pública de FreeToGame.

Los principales recursos utilizados por la aplicación son:

- Catálogo de videojuegos: `/games`
- Información individual de un videojuego: `/game?id={id}`

El consumo de la API se encuentra centralizado en:

```text
src/services/freeToGameApi.ts
```

## Control de versiones

El proyecto utiliza Git y GitHub para el control de versiones y el trabajo colaborativo.

El flujo de trabajo se organizó utilizando:

- Rama `main` como rama principal.
- Rama `develop` para integrar el desarrollo.
- Ramas `feature` para trabajar funcionalidades específicas.
- Issues para identificar los requisitos funcionales.
- Pull Requests para integrar los cambios.
- Revisiones de código entre integrantes del equipo.

## Uso de inteligencia artificial

Durante el desarrollo y la documentación del proyecto se utilizó ChatGPT como herramienta de apoyo para comprender errores, revisar implementaciones, orientar el uso de Git y GitHub y apoyar la redacción y organización de la documentación.

El uso de inteligencia artificial realizado durante el proyecto se registra con mayor detalle en el archivo `DECLARACION-IA.md`.