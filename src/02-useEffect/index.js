/* Explicación:
1. Exportación del componente FormWithCustomHook:

- Se exporta el componente FormWithCustomHook desde su archivo correspondiente (./FormWithCustomHook). Esto permite que otros archivos importen y utilicen este componente.

2. Exportación del componente Message:

- Se exporta el componente Message desde su archivo correspondiente (./Message). Esto facilita la reutilización de este componente en otros lugares del proyecto.

3. Exportación del componente SimpleForm:

- Se exporta el componente SimpleForm desde su archivo correspondiente (./SimpleForm). Al igual que los otros componentes, esto permite su importación y uso en diferentes partes de la aplicación.

Este archivo de exportaciones centraliza la exportación de múltiples componentes, lo que simplifica la importación de estos componentes en otros archivos del proyecto. Al utilizar una única ubicación para las exportaciones, se mejora la organización y la mantenibilidad del código. */


export { FormWithCustomHook } from './FormWithCustomHook'; // Exportación del componente FormWithCustomHook desde el archivo FormWithCustomHook
export { Message } from './Message'; // Exportación del componente Message desde el archivo Message
export { SimpleForm } from './SimpleForm'; // Exportación del componente SimpleForm desde el archivo SimpleForm
