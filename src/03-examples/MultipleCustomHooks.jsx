/* Explicación:
1. Importación de hooks personalizados y componentes:

- Se importan los hooks useCounter y useFetch desde la carpeta hooks.
- Se importan los componentes LoadingMessage y PokemonCard desde el directorio actual.

2. Definición del componente MultipleCustomHooks:

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

  Este componente combina múltiples hooks personalizados para gestionar el estado del contador y la obtención de datos de la API de Pokémon. Muestra información del Pokémon basado en el valor actual del contador y permite navegar entre diferentes Pokémon utilizando botones. Si los datos están cargando, muestra un mensaje de carga; de lo contrario, muestra una tarjeta con la información del Pokémon. */


// Importación de los hooks personalizados useCounter y useFetch desde la carpeta de hooks
import { useCounter, useFetch } from '../hooks';
// Importación de los componentes LoadingMessage y PokemonCard desde el directorio actual
import { LoadingMessage, PokemonCard } from './';

// Definición del componente funcional MultipleCustomHooks
export const MultipleCustomHooks = () => {

  // Uso del hook personalizado useCounter con un valor inicial de 1
  const { counter, decrement, increment } = useCounter(1);

  // Uso del hook personalizado useFetch para obtener datos de la API de Pokémon
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
        disabled={ isLoading }
      >
        Siguiente
      </button>
    </>
  );
};
