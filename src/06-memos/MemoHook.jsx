/* Explicación:
1. Definición de heavyStuff:

- heavyStuff es una función que realiza una tarea pesada, simulada con un bucle for. Retorna un mensaje que indica el número de iteraciones realizadas.

2. Uso de useCounter:

- Se utiliza el hook useCounter para obtener un contador inicializado en 4000, y se extraen counter e increment.

3. Uso de useState:

- Se utiliza el hook useState para manejar el estado de visibilidad del componente.

4. Uso de useMemo:

- Se utiliza useMemo para memorizar el valor resultante de la función heavyStuff. Se vuelve a calcular solo cuando el valor de counter cambia.

5. Renderizado del componente:

- Se muestra el título con el valor del contador.
- Se muestra el valor memorizado.
- Se muestran botones para incrementar el contador y alternar la visibilidad del componente. */


import { useMemo, useState } from 'react'; // Importación de useMemo y useState desde React
import { useCounter } from '../hooks'; // Importación del hook personalizado useCounter desde '../hooks'

// Función que realiza una tarea pesada
const heavyStuff = ( iterationNumber = 100 ) => {
  // Ciclo for para simular una tarea pesada
  for ( let i = 0; i < iterationNumber; i++ ) {
    console.log( 'Ahí vamos...' );
  }

  // Retorna un mensaje con el número de iteraciones realizadas
  return `${ iterationNumber } iteraciones realizadas`;
};

// Definición del componente funcional MemoHook
export const MemoHook = () => {

  // Uso del hook personalizado useCounter para manejar el estado del contador
  const { counter, increment } = useCounter( 4000 );
  // Uso del hook useState para manejar el estado de visibilidad
  const [ show, setShow ] = useState( true );

  // Utilización de useMemo para memorizar el valor resultante de la tarea pesada
  const memorizedValue = useMemo(() => heavyStuff( counter ), [ counter ]);

  // Renderizado del componente
  return (
    <>
      {/* Título que muestra el valor del contador */}
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      {/* Visualización del valor memorizado */}
      <h4>{memorizedValue}</h4>

      {/* Botón para incrementar el contador */}
      <button
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        +1
      </button>

      {/* Botón para alternar la visibilidad */}
      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow( !show ) }
      >
        Show/Hide {JSON.stringify( show )}
      </button>
    </>
  );
};
