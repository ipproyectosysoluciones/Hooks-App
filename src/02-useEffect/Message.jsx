/* Explicación:
1. Importación de useEffect: Se importa el hook useEffect desde React, que se utiliza para manejar efectos secundarios en los componentes funcionales.

2. Definición del componente Message: Se define una función que representa el componente React.

3. Uso de useEffect:

- Definición de onMouseMove: Se define una función onMouseMove que recibe el evento del mouse y desestructura las coordenadas x e y. Luego, se crea un objeto coords con estas coordenadas y se imprime en la consola.
- Agregar event listener: Se agrega un event listener al objeto window para escuchar el evento mousemove y ejecutar la función onMouseMove cada vez que el mouse se mueve.
- Cleanup function: Se retorna una función que se ejecuta cuando el componente se desmonta. Esta función remueve el event listener para evitar posibles fugas de memoria.

4. Renderizado del componente:

- Se retorna un fragmento de JSX que contiene un mensaje en un elemento <h3>.

Este componente muestra un mensaje indicando que el usuario ya existe y registra un event listener para rastrear los movimientos del mouse, imprimiendo las coordenadas en la consola. El uso del hook useEffect asegura que el listener se agregue cuando el componente se monta y se elimine correctamente cuando se desmonta. */


// Importación del hook useEffect desde React
import { useEffect } from 'react';


// Definición del componente funcional Message
export const Message = () => {
  // Uso del hook useEffect para manejar efectos secundarios
  useEffect(() => {
    // Definición de la función onMouseMove
    // Esta función se ejecuta cuando se mueve el mouse y recibe el evento como argumento
    const onMouseMove = ({ x, y }) => {
      // Se crean las coordenadas a partir de la posición x e y del mouse
      const coords = { x, y };
      // Se imprimen las coordenadas en la consola
      console.log(coords);
    };

    // Se agrega un event listener para el evento 'mousemove' en el objeto window
    window.addEventListener("mousemove", onMouseMove);

    // Cleanup function para remover el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

  // Renderizado del componente
  return (
    <>
      {/* Mensaje mostrado en el componente */}
      <h3>Usuario ya existe</h3>
    </>
  );
};
