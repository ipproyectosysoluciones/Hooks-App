/* Explicación:
1. Definición del componente Padre:

- Padre es un componente funcional que utiliza el hook useState para gestionar un estado local (valor).

2. Definición de incrementar con useCallback:

- incrementar es una función definida utilizando el hook useCallback. Esta función incrementa el valor en base al número pasado como argumento.
- Se utiliza useCallback para memorizar la función y evitar que se cree nuevamente en cada renderizado del componente.

3. Renderizado del componente:

- Se muestra un título "Padre".
- Se muestra el total del valor.
- Se renderiza el componente Hijo varias veces, pasando números como props.
- Se incluye un componente Hijo como comentario. */


import { useCallback, useState } from 'react';
import { Hijo } from './Hijo';

// Definición del componente funcional Padre
export const Padre = () => {

  // Array de números
  const numeros = [ 2, 4, 6, 8, 10 ];
  // Estado local para el valor
  const [ valor, setValor ] = useState( 0 );

  // Definición de la función incrementar utilizando useCallback
  const incrementar = useCallback(
    ( num ) => {
      // Incrementa el valor sumando el número pasado como argumento
      setValor(( oldValue ) => oldValue + num);
    },
    [], // No depende de ninguna variable externa
  );

  // Renderizado del componente
  return (
    <div>
      {/* Título del componente */}
      <h1>Padre</h1>
      {/* Muestra el total del valor */}
      <p> Total: {valor} </p>
      {/* Línea divisoria */}
      <hr />

      {/* Renderiza varios componentes Hijo, pasando números como props */}
      { numeros.map(( n ) => (
        <Hijo
          key={ n } numero={ n }
          incrementar={ incrementar }
        />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
