/* 
1. Exportación de UserContext:

- export { UserContext } from './UserContext';: Esta línea exporta UserContext desde el archivo UserContext.js. Esto permite que otros archivos puedan importar UserContext y utilizarlo para consumir el contexto.

2. Exportación de UserProvider:

- export { UserProvider } from './UserProvider';: Esta línea exporta UserProvider desde el archivo UserProvider.js. Esto permite que otros archivos puedan importar UserProvider y utilizarlo para envolver sus componentes, proporcionando así acceso al contexto de usuario a través de UserContext.Provider.

Este archivo de barril facilita la importación de múltiples módulos desde un solo punto, mejorando la organización y la legibilidad del código */


export { UserContext } from './UserContext'; // Exportamos UserContext desde el archivo UserContext.jsx
export { UserProvider } from './UserProvider'; // Exportamos UserProvider desde el archivo UserProvider.jsx
