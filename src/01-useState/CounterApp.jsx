/* Explicación:
Importación de useState: Se importa el hook useState de React para manejar el estado del componente.

Definición del componente CounterApp: Se define una función que representa el componente React.

Estado inicial: Se utiliza useState para definir el estado inicial del componente, que es un objeto con tres propiedades: counter1, counter2, y counter3, con valores iniciales de 10, 20 y 30 respectivamente.

Desestructuración del estado: Se extraen las propiedades counter1, counter2 y counter3 del estado utilizando desestructuración.

Renderizado del componente: Se retorna el JSX que define la estructura visual del componente:

Se muestran los valores de los tres contadores dentro de elementos <h1>.
Se agrega un separador horizontal <hr />.
Se define un botón que, al ser clicado, incrementa el valor de counter1 en 1, manteniendo los valores de counter2 y counter3 inalterados utilizando el operador spread (...state).
De esta manera, el componente CounterApp muestra tres contadores y permite incrementar el primer contador con el botón provisto. */

import { useState } from "react";

// Definición del componente funcional CounterApp
export const CounterApp = () => {
  // Declaración del estado inicial usando useState
  // El estado es un objeto con tres contadores: counter1, counter2 y counter3
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  // Desestructuración del estado para obtener los valores de los contadores
  const { counter1, counter2, counter3 } = state;

  // Renderizado del componente
  return (
    <>
      {/* Mostrando los valores de los contadores */}
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>

      <hr />

      {/* Botón que incrementa el valor de counter1 en 1 */}
      <button
        className="btn btn-primary"
        onClick={() =>
          // Actualización del estado usando setCounter
          // Se usa el operador spread para mantener los valores actuales de counter2 y counter3
          setCounter({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
