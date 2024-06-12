/* Explicación:
1. Definición del componente Small:

- Se define un componente funcional llamado Small utilizando la función React.memo. Este componente memoizado se encarga de evitar renderizaciones innecesarias cuando sus props no cambian.

2. Renderizado del componente:

- El componente muestra el valor recibido como prop dentro de un elemento <small>. Este valor puede ser cualquier tipo de dato (número, texto, etc.).

3. Mensaje en consola:

- Se imprime en la consola un mensaje que indica que el componente se ha vuelto a renderizar. Esto puede ser útil para propósitos de depuración y seguimiento de renderizaciones. */


import React from 'react';

// Definición del componente funcional Small utilizando React.memo
export const Small = React.memo(({ value }) => {
  // Mensaje en consola para indicar que el componente se ha vuelto a renderizar
  console.log("Me volví a pintar :)");

  // Renderizado del componente
  return (
    // Elemento <small> que muestra el valor recibido como prop
    <small>{value}</small>
  );
});
