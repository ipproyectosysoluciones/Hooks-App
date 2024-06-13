/* 
1. Importaciones:

- Se importan useContext de React y UserContext del archivo de contexto.

2. Uso del Contexto:

- Se utiliza useContext para acceder al contexto UserContext. Esto nos proporciona el estado user y la función setUser.

3. Renderizado del Componente:

- Se muestra el título de la página "LoginPage".
- Se muestra una línea horizontal <hr /> para separar secciones.
- Se utiliza un elemento <pre> para mostrar el estado actual del usuario (user) en formato JSON.
- Se añade un botón que, al hacer clic, llama a setUser para establecer un nuevo usuario con id, nombre y email específicos. */


import { useContext } from 'react'; // Importamos useContext desde React
import { UserContext } from './context'; // Importamos UserContext desde nuestro contexto


// Componente LoginPage
export const LoginPage = () => {

  // Utilizamos useContext para acceder al contexto UserContext
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      {/* Mostramos el estado actual del usuario en formato JSON */}
      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      {/* Botón para establecer un nuevo usuario */}
      <button
        className="btn btn-primary"
        onClick={ () => setUser({ id: 123, name: 'Juan', email: 'juan@juan.com' }) }
      >
        Establecer Usuario
      </button>
    </>
  );
};
