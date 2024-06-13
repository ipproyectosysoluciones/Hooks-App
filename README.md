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

### Conclusión

Esta sección está dedicada a comprender y aplicar el concepto de un Reducer en React. Los conocimientos adquiridos aquí son esenciales para trabajar con Redux o Context API, permitiendo manejar estados complejos de manera eficiente. Además, sentamos las bases para secciones futuras donde se profundizará en pruebas y otras herramientas avanzadas de React.
