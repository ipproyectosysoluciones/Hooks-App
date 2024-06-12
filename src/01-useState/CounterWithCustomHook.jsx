/* Explicación:
1. Importación del hook personalizado useCounter: Se importa el hook personalizado desde la carpeta hooks.

2. Definición del componente CounterWithCustomHook: Se define una función que representa el componente React.

3. Uso del hook personalizado useCounter:

- Se llama al hook useCounter y se desestructura para obtener counter (el valor actual del contador), increment (función para incrementar el contador), decrement (función para decrementar el contador) y reset (función para reiniciar el contador).

4. Renderizado del componente:

- Se muestra el valor actual del contador dentro de un elemento <h1>.
- Se añade un separador horizontal <hr />.
- Se define un botón para incrementar el contador en 2, llamando a la función increment con el argumento 2.
- Se define un botón para resetear el contador, llamando a la función reset.
- Se define un botón para decrementar el contador en 2, llamando a la función decrement con el argumento 2.

Este componente utiliza un hook personalizado para manejar la lógica del contador, haciendo el código más modular y reutilizable. Los botones permiten incrementar, decrementar y resetear el valor del contador. */


// Importación del hook personalizado useCounter desde la carpeta de hooks
import { useCounter } from '../hooks';

// Definición del componente funcional CounterWithCustomHook
export const CounterWithCustomHook = () => {

  // Uso del hook personalizado useCounter
  // Se extraen las funciones y el estado proporcionados por el hook: counter, increment, decrement y reset
  const { counter, increment, decrement, reset } = useCounter();

  // Renderizado del componente
  return (
    <>
      {/* Mostrar el valor actual del contador */}
      <h1>Counter With Hook: {counter}</h1>

      <hr />

      {/* Botón para incrementar el contador en 2 */}
      <button
        className="btn btn-primary"
        onClick={ () => increment(2) }
      >
        +1
      </button>

      {/* Botón para resetear el contador */}
      <button
        className="btn btn-primary"
        onClick={ reset }
      >
        Reset
      </button>

      {/* Botón para decrementar el contador en 2 */}
      <button
        className="btn btn-primary"
        onClick={ () => decrement(2) }
      >
        -1
      </button>
    </>
  );
};
