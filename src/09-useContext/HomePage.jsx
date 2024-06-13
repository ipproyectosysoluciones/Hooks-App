/* 
1. Importaciones:

- useContext: Importamos el hook useContext de React, que nos permite acceder a los valores del contexto.
- UserContext: Importamos UserContext desde el archivo context, donde se define el contexto del usuario.

2. Definición del componente HomePage:

- Usamos el hook useContext para obtener el valor de user desde UserContext. Esto nos permite acceder a la información del usuario en cualquier parte del componente.

3. Renderizado del componente:

- Utilizamos una etiqueta h1 para mostrar el título de la página, incluyendo el nombre del usuario si está definido (user?.name utiliza la sintaxis de encadenamiento opcional para evitar errores si user es null o undefined).
- Utilizamos una etiqueta hr para añadir una línea horizontal.
- Utilizamos una etiqueta pre para mostrar el objeto user en formato JSON con una indentación de 3 espacios. Esto es útil para depurar y visualizar el estado del objeto user. */


import { useContext } from 'react';
import { UserContext } from './context';


// Definición del componente HomePage
export const HomePage = () => {

  // Usamos el hook useContext para acceder al contexto de UserContext
  const { user } = useContext(UserContext);

  return (
    <>
      {/* Mostramos el título de la página y el nombre del usuario si existe */}
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />

      {/* Mostramos el objeto user en formato JSON para depuración */}
      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>
    </>
  );
};
