# Bitácora de trabajo - FreeToGame React
 
En este documento se registran las actividades realizadas por los integrantes del equipo durante el desarrollo del proyecto.
 
---
 
## Yoseth Lloreda
 
### 18/09/2026
 
**¿Qué hice?**
 
Trabajé en la integración de la API de FreeToGame con la aplicación. Implementé el servicio encargado de consultar los videojuegos, definí los tipos necesarios para manejar la información recibida y agregué los estados de carga y error del catálogo.
 
También trabajé en el requisito de manejo de errores y reintento, permitiendo realizar nuevamente la petición cuando ocurre un problema sin tener que recargar toda la página.
 
Finalmente, implementé `AbortController` para cancelar peticiones cuando el componente deja de utilizarlas y evitar mantener solicitudes anteriores activas.
 
**¿En qué me bloqueé?**
 
Durante la implementación de `AbortController` se presentó un error de TypeScript (`TS1005`) después de modificar el servicio de la API. El problema estaba relacionado con la forma en que había quedado escrita la URL construida con `BASE_URL`.
 
**¿Cómo lo resolví?**
 
Revisé el archivo `freeToGameApi.ts`, corregí la construcción de la URL y comprobé nuevamente el proyecto ejecutando el comando de compilación. Después de la corrección, el proyecto compiló correctamente.
 
**Commits relacionados:**
 
- `3a0e071` - Servicio inicial para consultar la API.
- `91be0df` - Definición del tipo Game.
- `5ad7b4d` - Tipado del servicio.
- `97eee04` - Manejo de errores de la API.
- `8d37807` - Integración del catálogo con la API.
- `8a879e2` - Estado de carga.
- `a8bb9d7` - Estado de error.
- `bd16674` - Campos adicionales del tipo Game.
- `bdac1c5` - Tipo GameDetails.
- `87269a8` - Consulta de videojuego por ID.
- `09eae14` - Respuesta tipada del catálogo.
- `46ec96a` - Respuesta tipada del detalle.
- `d3b8e0e` - Reintento al cargar videojuegos.
- `220b032` - Cancelación de peticiones con AbortController.

---
 
## Oscar Uñates
 
 
### 17/09/2026 y 18/09/2026
 
**¿Qué hice?**
 
Trabajé en la construcción inicial de la interfaz del catálogo de videojuegos. Implementé la estructura visual de las tarjetas, las imágenes, la cuadrícula responsive, los estilos del catálogo, el encabezado y la búsqueda de videojuegos.
 
También agregué el filtro por género, el manejo visual cuando no existen resultados y el contador de videojuegos encontrados.
 
Posteriormente trabajé en la vista de detalle de los videojuegos, organizando la aplicación en componentes más pequeños para mantener el código estructurado.
 
También implementé el sistema de favoritos, incluyendo la posibilidad de agregar y quitar videojuegos, mostrar el contador de favoritos y conservar la selección utilizando `localStorage`.
 
**¿En qué me bloqueé?**
 
Durante el desarrollo fue necesario reorganizar el componente principal porque la incorporación de nuevas funcionalidades estaba aumentando la cantidad de lógica y contenido dentro de `App.tsx`.
 
**¿Cómo lo resolví?**
 
Separé responsabilidades en componentes y archivos adicionales, como los filtros, la lista de videojuegos y las utilidades de filtrado y ordenamiento. Esto permitió mantener el componente principal más organizado y facilitar la integración de las demás funcionalidades.
 
**Commits relacionados:**
 
- `ac233c2` - Configuración inicial del proyecto.

- `8f8c6ec` - Interfaz inicial del catálogo.

- `2c9a509` - Imágenes en las tarjetas.

- `a24e2ef` - Estilos de las tarjetas.

- `80cc7ef` - Búsqueda de videojuegos.

- `488b1dd` - Estilos de búsqueda.

- `9261523` - Filtro por género.

- `9ef3cc3` - Manejo de resultados vacíos.

- `f2fd57e` - Estilos para resultados vacíos.

- `d710497` - Contador de resultados.

- `0e740ce` - Vista de detalle de videojuegos.

- `5e8e91a` - Sistema de videojuegos favoritos.

---
 
## Felipe Lopera
 
### 18/09/2026
 
**¿Qué hice?**
 
Trabajé en la ampliación de la información mostrada en el catálogo y en las herramientas para filtrar y organizar los videojuegos.
 
Agregué información como descripción, publisher, developer y fecha de lanzamiento durante el desarrollo de las tarjetas. También implementé el filtro por plataforma, el ordenamiento alfabético, el ordenamiento por fecha de lanzamiento, la opción para limpiar los filtros y el acceso al enlace del videojuego.
 
Posteriormente trabajé en la búsqueda con debounce, utilizando un input controlado y un tiempo de espera de 400 ms antes de actualizar los resultados.
 
**¿En qué me bloqueé?**
 
Durante la implementación de los filtros fue necesario controlar correctamente los videojuegos disponibles en diferentes plataformas y mantener funcionando de forma conjunta la búsqueda, los filtros y el ordenamiento.
 
También fue necesario evitar que la búsqueda se actualizara inmediatamente con cada tecla presionada.
 
**¿Cómo lo resolví?**
 
Ajusté la lógica del filtrado por plataforma y organicé las funciones de filtrado y ordenamiento para que pudieran trabajar juntas.
 
Para la búsqueda implementé manualmente un debounce de 400 ms mediante `setTimeout` dentro de `useEffect` y utilicé `clearTimeout` en la función de limpieza para cancelar el temporizador anterior cuando el usuario continúa escribiendo.
 
**Commits relacionados:**
 
- `cd66b7e` - Descripción en las tarjetas.
- `c614ff8` - Información del publisher.
- `b0e27d8` - Información del developer.
- `91d2cb9` - Fecha de lanzamiento.
- `32237fb` - Filtro por plataforma.
- `a51f553` - Ordenamiento alfabético.
- `b08ded4` - Ajuste del filtrado multiplataforma.
- `4008dcb` - Ordenamiento por fecha de lanzamiento.
- `821d2de` - Opción para limpiar filtros.
- `3c8aef5` - Enlace del videojuego.
- `486940c` - Géneros dinámicos.
- `bae44f6` - Manejo de filtros activos.
- `6d6814f` - Debounce de 400 ms para la búsqueda.
 