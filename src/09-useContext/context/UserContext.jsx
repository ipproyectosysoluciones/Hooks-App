/* 
1. Importación:

- createContext: Importamos la función createContext de React, que se utiliza para crear un nuevo contexto.

2. Creación del contexto:

- UserContext: Utilizamos createContext para crear un nuevo contexto llamado UserContext. Este contexto nos permitirá compartir información del usuario a través de los componentes de nuestra aplicación sin tener que pasar props manualmente en cada nivel.

Este contexto se puede usar en combinación con el hook useContext para acceder a los valores del contexto en cualquier componente que esté envuelto por un UserProvider. */


import { createContext } from 'react';

// Creamos un nuevo contexto llamado UserContext
export const UserContext = createContext();