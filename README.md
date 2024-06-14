# Curso de React de Cero a Experto (Hooks y MERN)

En este repositorio encontrarás los componentes desarrollados y comentados hasta el momento en el curso de React de Cero a Experto (Hooks y MERN) de Fernando Herrera. Utilizamos el gestor de dependencias yarn y React 18 para la realización de los ejemplos.

1. Clonar el repositorio desde GitHub:

```code
git clone git@github.com:ipproyectosysoluciones/Hooks-App.git
```

2. Navegar al directorio del proyecto:

```code
cd <nombre_del_directorio>
```

3. Instalar las dependencias utilizando yarn:

```code
yarn install
```

4. Iniciar la aplicación:

```code
yarn dev
```

## Temas Abordados

### 1. Profundización en el tema de los Hooks

En el curso se profundiza en el uso de los Hooks en React. Los Hooks son funciones que  permiten "enganchar" el estado de React y el ciclo de vida de los componentes en los componentes de función, proporcionando una forma más limpia y concisa de escribir código.

### 2. Creación de otros customHooks

Además de los Hooks proporcionados por React, también aprendemos a crear nuestros propios customHooks. Estos son Hooks personalizados que encapsulan la lógica comúnmente utilizada en componentes y permiten reutilizarla en múltiples componentes.

#### CustomHooks Desarrollados

- `useCounter`: Un customHook que gestiona un contador con métodos para incrementar, decrementar y restablecer el valor del contador.

- `useFetch`: Un customHook que realiza una solicitud HTTP GET y maneja el estado de carga, los datos y los errores.

### 3. Uso de useState

El Hook `useState` permite agregar estado a los componentes de función en React. Lo utilizamos para almacenar y actualizar el estado local de los componentes.

### 4. useEffect y sus precauciones

El Hook `useEffect` se utiliza para realizar efectos secundarios en componentes de función. Aprendemos a usar `useEffect` de manera efectiva y las precauciones a tener en cuenta, como la necesidad de limpiar los efectos secundarios para evitar problemas de memoria y rendimiento.

### 5. useRef

El Hook `useRef` se utiliza para mantener una referencia mutable a un elemento del DOM o a un valor mutable en un componente de función. Lo utilizamos para acceder a nodos DOM de manera imperativa y realizar otras tareas relacionadas con el DOM.

### 6. useLayoutEffect

El Hook `useLayoutEffect` se comporta de manera similar a `useEffect`, pero se ejecuta de manera síncrona después de que todas las mutaciones del DOM son realizadas. Lo utilizamos para realizar tareas que requieren acceso al DOM después de que se haya actualizado.

### 7. Memo

El componente `Memo` se utiliza para memoizar componentes funcionales y evitar su renderización innecesaria. Aprendemos a utilizar `React.memo` para optimizar el rendimiento de nuestros componentes.

### 8. useMemo

El Hook `useMemo` se utiliza para memoizar valores calculados de manera costosa y evitar su recalculación en renders posteriores. Lo utilizamos para optimizar el rendimiento al memoizar valores derivados de otros valores.

### 9. useCallback

El Hook `useCallback` se utiliza para memoizar funciones y evitar su recreación en cada renderizado. Lo utilizamos para optimizar el rendimiento al memoizar callbacks que se pasan como propiedades a componentes hijos.

## TodoApp con useReducer

Este proyecto es una aplicación de gestión de tareas (TodoApp) que utiliza el hook `useReducer` de React para manejar el estado de las tareas. Este enfoque es fundamental para comprender el concepto de un Reducer, el cual es esencial para trabajar con Redux o utilizar el Context API de manera eficiente.

### Contenido

- [useReducer](#usereducer)
- [Reducers](#reducers)
- [Aplicación de TODOs](#aplicación-de-todos)
- [CRUD local](#crud-local)

### useReducer

El hook `useReducer` es una alternativa a `useState` para manejar estados más complejos en componentes de React. En lugar de actualizar el estado directamente, se envían acciones al reducer, que se encarga de calcular el nuevo estado.

### Reducers

Un reducer es una función pura que toma el estado actual y una acción, y retorna un nuevo estado. Es una pieza clave en la gestión de estados complejos y en la implementación de patrones como Redux.

### Aplicación de TODOs

En esta aplicación de TODOs, utilizamos un reducer para manejar las siguientes acciones:

- `Add Todo`: Agregar una nueva tarea.
- `Remove Todo`: Eliminar una tarea existente.
- `Toggle Todo`: Alternar el estado de una tarea (completada/no completada).

### CRUD local

La aplicación maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de manera local, utilizando el almacenamiento local del navegador (localStorage) para persistir las tareas.

### Conclusión TodoApp

Esta sección está dedicada a comprender y aplicar el concepto de un Reducer en React. Los conocimientos adquiridos aquí son esenciales para trabajar con Redux o Context API, permitiendo manejar estados complejos de manera eficiente. Además, sentamos las bases para secciones futuras donde se profundizará en pruebas y otras herramientas avanzadas de React.

## SPA useContext

Este proyecto se enfoca en el uso del hook `useContext` de React dentro de una aplicación de una sola página (SPA, Single Page Application). A continuación, se explica cada uno de los conceptos y componentes utilizados en el proyecto.

### Context

El `Context` de React se utiliza para compartir datos entre componentes sin necesidad de pasar props manualmente en cada nivel de la jerarquía de componentes.

### Provider

El `Provider` es un componente que se utiliza para envolver los componentes que necesitan acceder al contexto. Este componente acepta una prop `value` que será accesible para cualquier componente que consuma el contexto.

### useContext

El hook `useContext` permite a los componentes funcionales suscribirse a contextos de React. Este hook acepta un contexto (creado con `createContext`) y devuelve el valor actual del contexto para ese contexto.

### React Router

`React Router` es una biblioteca de enrutamiento para React que permite la navegación dinámica entre diferentes componentes sin recargar la página. Facilita la creación de rutas y la gestión de la navegación en una SPA.

### Links y NavLinks

`Link` y `NavLink` son componentes proporcionados por `React Router` que se utilizan para la navegación dentro de la aplicación.

- `Link`: Proporciona una navegación simple entre rutas.
- `NavLink`: Similar a `Link`, pero permite aplicar estilos adicionales cuando la ruta está activa.

### CreateContext

`createContext` es una función de React que se utiliza para crear un contexto. Esta función devuelve un objeto con dos propiedades: `Provider` y `Consumer`.

- `Provider`: Se utiliza para proporcionar el valor del contexto.
- `Consumer`: Se utiliza para suscribirse a los cambios en el contexto.

### SPA (Single Page Application)

Una SPA es una aplicación web que se carga una sola vez y que actualiza el contenido dinámicamente sin necesidad de recargar la página completa. Esto proporciona una experiencia de usuario más rápida y fluida.

### Objetivo de la Sección

El objetivo de esta sección es principalmente aprender sobre el uso del Context en React. El uso del Router es un valor agregado que se explotará mucho más en secciones posteriores. Al utilizar un Router, podemos explicar claramente el problema y la necesidad del context para compartir datos de manera eficiente entre componentes.

### Conclusión SPA useContext

Este proyecto es una excelente manera de entender cómo funciona el contexto en React y cómo se puede utilizar junto con `React Router` para manejar el estado global en una SPA. El uso del contexto facilita el manejo y la compartición de datos entre componentes sin la necesidad de pasar props manualmente en cada nivel, lo que simplifica el código y mejora la mantenibilidad.

## Pruebas sobre Hooks y CustomHooks

En esta sección, nos enfocaremos en realizar pruebas unitarias y de integración sobre los hooks y custom hooks que hemos desarrollado previamente. El objetivo principal es demostrar cómo podemos evaluar cada uno de los hooks aplicados en situaciones de uso reales.

### Contenido Pruebas Unitarias

1. **Pruebas Unitarias de Hooks**
   - Realizaremos pruebas específicas para cada hook desarrollado, como `useCounter`, `useFetch`, `useTodos`, entre otros.
   - Demostraremos cómo verificar el comportamiento esperado de estos hooks en diferentes situaciones, como incrementar o decrementar un contador, manejar el estado de una solicitud de API, gestionar una lista de tareas, entre otros.

2. **Pruebas de Integración de CustomHooks**
   - Además de las pruebas unitarias, también realizaremos pruebas de integración para nuestros custom hooks.
   - Verificaremos cómo interactúan estos hooks con otros componentes y cómo se comportan en el contexto de una aplicación más amplia.

3. **Prueba de Reducer**
   - Incluiremos una prueba de un reducer, que aunque no es un hook en sí mismo, es una parte importante del flujo de datos en nuestra aplicación.
   - Mostraremos cómo evaluar el comportamiento del reducer al agregar, eliminar o actualizar elementos en el estado.

### Consideraciones Adicionales

- **Responsabilidad de las Pruebas**:
  - Aclararemos qué aspectos son responsabilidad de nuestras pruebas y cuáles no lo son.
  - Explicaremos cómo centrarnos en evaluar el comportamiento de los hooks y custom hooks, sin preocuparnos por la implementación interna de React u otros componentes.

- **Casos de Uso Real**:
  - Nos enfocaremos en pruebas que reflejen casos de uso real de los hooks y custom hooks.
  - Demostraremos cómo nuestras pruebas pueden proporcionar confianza en el correcto funcionamiento de estos elementos dentro de nuestra aplicación.

Con esta guía, esperamos brindar una comprensión clara de cómo realizar pruebas efectivas sobre nuestros hooks y custom hooks, asegurando así la calidad y robustez de nuestra aplicación.
