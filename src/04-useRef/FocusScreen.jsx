/* Explicación:
1. Importación de useRef:

- Se importa el hook useRef desde React. Este hook se utiliza para crear referencias mutables que pueden ser asociadas a elementos del DOM.

2. Creación de la referencia inputRef:

- Se crea una referencia mutable llamada inputRef utilizando useRef(). Esta referencia será asociada al elemento input.

3. Función onClick:

- Se define una función onClick que se ejecutará cuando se haga clic en el botón "Set Focus".
- Dentro de esta función, se utiliza inputRef.current.select() para seleccionar todo el texto dentro del input asociado a la referencia inputRef.

4. Renderizado del componente:

- Se muestra un título "Focus Screen" seguido de una línea horizontal (<hr />).
- Se renderiza un input de tipo texto con la referencia inputRef asignada.
- Se muestra otra línea horizontal.
- Se renderiza un botón con el texto "Set Focus" que ejecutará la función onClick cuando sea clickeado.

Este componente FocusScreen muestra un input de texto y un botón. Cuando se hace clic en el botón, el input recibe el foco y todo su contenido es seleccionado. Esto se logra utilizando el hook useRef para crear una referencia al input y luego accediendo a ella con inputRef.current. */


import { useRef } from 'react'; // Importación del hook useRef desde React

// Definición del componente funcional FocusScreen
export const FocusScreen = () => {

  // Creación de una referencia mutable con useRef
  const inputRef = useRef();

  // Función que maneja el evento onClick del botón
  const onClick = () => {
    // document.querySelector('input').select();
    // console.log(inputRef);
    // Selecciona el input utilizando la referencia
    inputRef.current.select();
  };

  // Renderizado del componente
  return (
    <>
      {/* Título del componente */}
      <h1>Focus Screen</h1>

      <hr />

      {/* Input con referencia asignada */}
      <input
        ref={ inputRef } // Asignación de la referencia al input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <hr />

      {/* Botón para establecer el foco en el input */}
      <button
        className="btn btn-primary mt-2"
        onClick={ onClick } // Asignación de la función onClick al evento onClick del botón
      >
        Set Focus
      </button>
    </>
  );
};
