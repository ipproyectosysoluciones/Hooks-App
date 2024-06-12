/* Explicación:
1. Importación de los hooks personalizados y componentes:

- Se importan los hooks useCounter y useFetch desde el directorio hooks.
- Se importan los componentes LoadingMessage y PokemonCard desde el directorio 03-examples.

2. Definición del componente Layout:

- Uso de useCounter:
  - Se inicializa el hook useCounter con un valor inicial de 1, obteniendo counter, decrement e increment.
- Uso de useFetch:
  - Se llama al hook useFetch con la URL de la API de Pokémon, obteniendo data, hasError e isLoading.

3. Renderizado del componente:

- Título: Se muestra un título "Información de Pokémon".
- Condicional de carga:
  - Si isLoading es true, se muestra el componente LoadingMessage.
  - Si isLoading es false, se muestra el componente PokemonCard con la información del Pokémon.
- Botones de navegación:
  - Botón "Anterior": Decrementa el contador si el valor actual del contador es mayor a 1.
  - Botón "Siguiente": Incrementa el contador.

  Este componente Layout combina los hooks personalizados useCounter y useFetch para manejar el estado del contador y obtener datos de la API de Pokémon respectivamente. Muestra información del Pokémon basado en el valor actual del contador y permite navegar entre diferentes Pokémon utilizando botones. Si los datos están cargando, muestra un mensaje de carga; de lo contrario, muestra una tarjeta con la información del Pokémon. */


// Importación de los hooks personalizados useCounter y useFetch desde el directorio 'hooks'
import { useCounter, useFetch } from '../hooks';
// Importación de los componentes LoadingMessage y PokemonCard desde el directorio '03-examples'
import { LoadingMessage, PokemonCard } from '../03-examples';

// Definición del componente funcional Layout
export const Layout = () => {

  // Uso del hook useCounter para manejar el estado del contador
  const { counter, decrement, increment } = useCounter(1);

  // Uso del hook useFetch para obtener los datos de la API de Pokémon
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  // Renderizado del componente
  return (
    <>
      {/* Título del componente */}
      <h1>Información de Pokémon</h1>

      <hr />

      {/* Renderizado condicional basado en el estado de carga */}
      {isLoading ? (
        // Mostrar LoadingMessage si los datos están cargando
        <LoadingMessage />
      ) : (
        // Mostrar PokemonCard si los datos han sido cargados
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <hr />

      {/* Botones para navegar entre Pokémon */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        Siguiente
      </button>
    </>
  );
};
