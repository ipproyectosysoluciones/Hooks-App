/* Explicación:
1. Importación de hooks y componentes:

- Se importa el hook useState desde React para manejar el estado local.
- Se importa el hook personalizado useCounter desde el directorio ../hooks para manejar el estado del contador.
- Se importa el componente Small desde el archivo ./Small para mostrar un valor pequeño.

2. Definición del componente Memorize:

- Se declara el componente funcional Memorize.
- Se inicializa el estado del contador utilizando el hook personalizado useCounter con un valor inicial de 10.
- Se inicializa el estado show con el hook useState para controlar la visibilidad del componente Small.

3. Renderizado del componente:

- Se muestra un título con el valor del contador y el componente Small.
- Se muestra un botón para incrementar el contador en 1.
- Se muestra un botón para alternar la visibilidad del componente Small. El texto del botón se actualiza dinámicamente utilizando JSON.stringify(show) para mostrar el valor actual del estado show.

Este componente Memorize muestra el valor de un contador y un botón para incrementarlo. También incluye un botón para alternar la visibilidad del componente Small. El valor de Small se muestra u oculta según el estado de show. */


import { useState } from 'react'; // Importación del hook useState desde React
import { useCounter } from '../hooks'; // Importación del hook personalizado useCounter desde '../hooks'
import { Small } from './Small'; // Importación del componente Small desde './Small'


// Definición del componente funcional Memorize
export const Memorize = () => {

  // Uso del hook personalizado useCounter para manejar el estado del contador
  const { counter, increment } = useCounter( 10 );
  // Uso del hook useState para manejar el estado de visibilidad del componente Small
  const [ show, setShow ] = useState( true );

  // Renderizado del componente
  return (
    <>
      {/* Título del contador con el valor de Small */}
      <h1>
        Counter: <Small value={ counter } />
      </h1>
      <hr />

      {/* Botón para incrementar el contador */}
      <button
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        +1
      </button>

      {/* Botón para alternar la visibilidad del componente Small */}
      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow( !show ) }
      >
        Show/Hide { JSON.stringify( show ) }
      </button>
    </>
  );
};
