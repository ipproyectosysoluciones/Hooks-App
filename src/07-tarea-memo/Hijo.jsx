/* Explicación:
1. Definición del componente Hijo:

- Se define un componente funcional llamado Hijo utilizando la función React.memo. Este componente memoizado se encarga de evitar renderizaciones innecesarias cuando sus props no cambian.

2. Renderizado del componente:

- El componente muestra un botón que contiene el número recibido como prop.
- Cuando se hace clic en el botón, se llama a la función incrementar pasando el número como argumento.

3. Mensaje en consola:

- e imprime en la consola un mensaje que indica que el componente se ha vuelto a renderizar. Esto puede ser útil para propósitos de depuración y seguimiento de renderizaciones. */


import React from 'react';

// Definición del componente funcional Hijo utilizando React.memo
export const Hijo = React.memo(({ numero, incrementar }) => {

  // Mensaje en consola para indicar que el componente se ha vuelto a renderizar
  console.log('  Me volví a generar :(  ');

  // Renderizado del componente
  return (
    // Botón que muestra el número recibido como prop y llama a la función incrementar cuando se hace clic
    <button
      className="btn btn-primary mr-3"
      onClick={ () => incrementar( numero ) }
    >
      { numero }
    </button>
  );
});
