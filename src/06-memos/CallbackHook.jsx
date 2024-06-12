/* Explicación:
1. Definición de CallbackHook:

- CallbackHook es un componente funcional que utiliza el hook useState para gestionar un estado local (counter).

2. Definición de incrementFather con useCallback:

- incrementFather es una función definida utilizando el hook useCallback. Esta función incrementa el contador en base al valor pasado como argumento.
- Se utiliza useCallback para memorizar la función y evitar que se cree nuevamente en cada renderizado del componente.

3.Uso de useEffect:

- Se define un efecto que se ejecutará cuando incrementFather cambie. Actualmente está comentado para evitar efectos secundarios.

4. Renderizado del componente:

- Se muestra un título que incluye el valor del contador.
- Se renderiza el componente ShowIncrement, pasando la función incrementFather como prop. Este componente muestra un botón que, al hacer clic, llama a la función incrementFather para incrementar el contador. */


import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

// Definición del componente funcional CallbackHook
export const CallbackHook = () => {

  // Estado local para el contador
  const [ counter, setCounter ] = useState( 10 );

  // Definición de la función incrementFather utilizando useCallback
  const incrementFather = useCallback(
    ( value ) => {
      // Incrementa el contador usando el valor pasado como argumento
      setCounter(( counter ) => counter + value);
    },
    [] // No depende de ninguna variable externa
  );

  // Efecto para demostrar la re-renderización del componente cuando incrementFather cambia
  useEffect(() => {
    // Código comentado para evitar efectos secundarios
    // incrementFather();
  }, [ incrementFather ]);

  // const incrementFather = () => {
  //   setCounter( counter + 1 );
  // }

  // Renderizado del componente
  return (
    <>
      {/* Título que muestra el valor del contador */}
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      {/* Componente ShowIncrement que recibe la función incrementFather como prop */}
      <ShowIncrement increment={ incrementFather } />
    </>
  );
};
