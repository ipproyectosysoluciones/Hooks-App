/* 
1. Importación:

- useState: Importamos useState de React para manejar el estado del usuario.
- UserContext: Importamos UserContext que hemos creado anteriormente.

2. Componente UserProvider:

- UserProvider: Definimos el componente UserProvider, que recibirá children como props. Este componente envolverá otros componentes y les proporcionará el contexto de usuario.

3. Estado del usuario:

- useState(): Inicializamos el estado del usuario con useState. En este caso, el estado inicial es indefinido (undefined).

4. Provisión del contexto:

- UserContext.Provider: Utilizamos UserContext.Provider para envolver a los children y proporcionarles acceso al contexto. El valor del contexto es un objeto que contiene user y setUser, permitiendo a los componentes hijos acceder y actualizar el estado del usuario.

Este patrón es común en React cuando se desea compartir estado o funciones entre múltiples componentes sin necesidad de pasar props manualmente por cada nivel de la jerarquía de componentes. */


import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//   id: 123,
//   name: 'Juan Perez',
//   email: 'juan@juan.com',
// }

// Definimos el UserProvider, que será el componente proveedor del contexto de usuario
export const UserProvider = ({ children }) => {

  // Creamos un estado para el usuario que será compartido a través del contexto
  const [ user, setUser ] = useState();

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    // Utilizamos el componente UserContext.Provider para envolver a los hijos y proporcionarles acceso al valor del contexto
    <UserContext.Provider value={ { user, setUser } }>
      { children }
    </UserContext.Provider>
  );
};
