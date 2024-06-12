/* Explicación:
1. Definición del componente ShowIncrement:

- Se define un componente funcional llamado ShowIncrement utilizando la función React.memo. Este componente memoizado se encarga de evitar renderizaciones innecesarias cuando sus props no cambian.

2. Renderizado del componente:

- El componente muestra un botón que al hacer clic llama a la función increment pasándole el valor 5 como argumento.

3. Mensaje en consola:

- Se imprime en la consola un mensaje que indica que el componente se ha vuelto a renderizar. Esto puede ser útil para propósitos de depuración y seguimiento de renderizaciones. */


import React from 'react';

// Definición del componente funcional ShowIncrement utilizando React.memo
export const ShowIncrement = React.memo(({ increment }) => {
  // Mensaje en consola para indicar que el componente se ha vuelto a renderizar
  console.log("Me genere de neuvo");

  // Renderizado del componente
  return (
    // Botón que llama a la función increment cuando se hace clic
    <button
      className="btn btn-primary"
      onClick={() => {
        increment( 5 ); // Llama a la función increment con el valor 5 como argumento
      }}
    >
      Incrementar
    </button>
  );
});
