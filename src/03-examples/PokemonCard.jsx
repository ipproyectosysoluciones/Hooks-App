/* Explicación:
1. Importación de useLayoutEffect:

- Se importa el hook useLayoutEffect desde React. Este hook se utiliza para ejecutar efectos que necesitan suceder antes del pintado del componente.

2. Definición del componente PokemonCard:

- Props: El componente recibe id, name, y sprites como propiedades (props).

3. Uso de useLayoutEffect:

- Efecto: Se define un efecto que se ejecuta justo después de que el componente se ha renderizado pero antes de que se haya pintado en la pantalla.
- Mensaje en consola: Se imprime un mensaje en la consola cuando el efecto se ejecuta.
- Array vacío: El array vacío [] indica que el efecto solo se ejecutará una vez después del primer renderizado del componente.

4. Renderizado del componente:

- Sección contenedora: Se utiliza una sección (<section>) con un estilo en línea que establece su altura en 200 píxeles.
- Título: Un elemento <h2> muestra el ID y el nombre del Pokémon, y se utiliza la clase text-capitalize para capitalizar el texto.
- Imágenes: Un contenedor (<div>) que mapea sobre el array de sprites y genera un <img> para cada sprite. Cada imagen tiene una key única (el URL del sprite), una src (fuente) y un alt (texto alternativo).

Este componente PokemonCard muestra la información de un Pokémon incluyendo su ID, nombre e imágenes (sprites). Utiliza useLayoutEffect para ejecutar cualquier lógica necesaria antes de que el componente se pinte en la pantalla. El renderizado incluye un título y las imágenes del Pokémon. */


import { useLayoutEffect } from 'react'; // Importación del hook useLayoutEffect desde React

// Definición del componente funcional PokemonCard que recibe props: id, name, y sprites
export const PokemonCard = ({ id, name, sprites }) => {

  // Uso del hook useLayoutEffect
  useLayoutEffect(() => {
    // Aquí puedes poner cualquier lógica que necesite ejecutarse antes del pintado
    console.log("El componente se ha renderizado y useLayoutEffect se ha ejecutado");
  }, []); // Array vacío indica que este efecto solo se ejecutará una vez después del primer renderizado

  // Renderizado del componente
  return (
    // Sección contenedora de la tarjeta de Pokémon con estilo en línea
    <section style={{ height: 200 }}>
      {/* Título que muestra el id y el nombre del Pokémon */}
      <h2 className="text-capitalize">
        #{ id }-{ name }
      </h2>

      {/* Contenedor de las imágenes del Pokémon */}
      <div>
        {/* Mapeo de las imágenes (sprites) del Pokémon */}
        {sprites.map(( sprite ) => (
          <img
            key={ sprite } // Asignación de una key única para cada imagen
            src={ sprite } // Fuente de la imagen
            alt={ name } // Texto alternativo para la imagen
          />
        ))}
      </div>
    </section>
  );
};
