/* 
1. Importaciones:

- fireEvent, render, screen de @testing-library/react para renderizar componentes y simular eventos.
- MultipleCustomHooks del directorio de ejemplos.
useFetch y useCounter de los hooks personalizados.

2. Mocks de los hooks:

- Se utiliza jest.mock para crear mocks de useFetch y useCounter.

3. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el componente <MultipleCustomHooks />.

4. Configuración del mock de useCounter:

- Define el valor de retorno para el mock de useCounter con un counter inicial de 1 y una función increment.

5. Limpieza de mocks antes de cada prueba:

- beforeEach utiliza jest.clearAllMocks para limpiar los mocks antes de cada prueba.

6. Prueba del componente por defecto:

- Configura el mock de useFetch para simular el estado de carga.
- Renderiza el componente <MultipleCustomHooks /> y verifica que se muestren los textos "Cargando..." e "Información de Pokémon".
- Verifica que el botón "Siguiente" esté deshabilitado.

7. Prueba de mostrar un Pokémon:

- Configura el mock de useFetch para simular la obtención de datos de un Pokémon.
- Renderiza el componente <MultipleCustomHooks /> y verifica que se muestre el nombre "Ivysaur" y sus imágenes.
- Verifica que el botón "Siguiente" esté habilitado.

8. Prueba de llamada a la función incrementar:

- Configura el mock de useFetch para simular la obtención de datos de un Pokémon.
- Renderiza el componente <MultipleCustomHooks /> y simula un clic en el botón "Siguiente".
- Verifica que la función mockIncrement haya sido llamada. */



import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../03-examples';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

// Mock de los hooks useFetch y useCounter
jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

  const mockIncrement = jest.fn();

  // Definición del valor de retorno para el mock de useCounter
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  // Limpia todos los mocks antes de cada prueba
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('Debe de mostrar el componente por defecto', () => {
 
    // Definición del valor de retorno para el mock de useFetch cuando está cargando
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    // Renderiza el componente <MultipleCustomHooks />
    render( <MultipleCustomHooks /> );

    // Comprueba que se muestre el texto "Cargando..."
    expect(screen.getByText('Cargando...'));
    // Comprueba que se muestre el texto "Información de Pokémon"
    expect(screen.getByText( 'Información de Pokémon' ));

    // Obtiene el botón "Siguiente" y comprueba que esté deshabilitado
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    expect( nextButton.disabled ).toBeTruthy();

    // screen.debug(); // Muestra el árbol de componentes en la consola para depuración
  });

  test('Debe de mostrar un Pokemon', () => {

    const sprite =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png";

    // Definición del valor de retorno para el mock de useFetch cuando tiene datos
    useFetch.mockReturnValue({
      data: {
        id: 2,
        name: "Ivysaur",
        sprites: {
          front_default: sprite,
          back_default: sprite,
          front_shiny: sprite,
          back_shiny: sprite,
        },
      },
      isLoading: false,
      hasError: null,
    });

    // Renderiza el componente <MultipleCustomHooks />
    render( <MultipleCustomHooks /> );

    // Comprueba que se muestre el nombre del Pokémon
    expect(screen.getByText(/Ivysaur/i)).toBeInTheDocument();
    // Comprueba que se muestren las imágenes del Pokémon
    expect(screen.getAllByAltText( 'Ivysaur' )).toHaveLength( 4 );

    // Obtiene el botón "Siguiente" y comprueba que esté habilitado
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect( nextButton.disabled ).toBeFalsy();
    // screen.debug(); // Muestra el árbol de componentes en la consola para depuración
  });

  test('Debe de llamar la funcion incrementar', () => {
    
    const sprite =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png";
 
    // Definición del valor de retorno para el mock de useFetch cuando tiene datos
    useFetch.mockReturnValue({
      data: {
        id: 2,
        name: "Ivysaur",
        sprites: {
          front_default: sprite,
          back_default: sprite,
          front_shiny: sprite,
          back_shiny: sprite,
        },
      },
      isLoading: false,
      hasError: null,
    });

    // Renderiza el componente <MultipleCustomHooks />
    render( <MultipleCustomHooks /> );

    // Obtiene el botón "Siguiente"
    const nextButton = screen.getByRole("button", { name: "Siguiente" });

    // Simula un clic en el botón "Siguiente"
    fireEvent.click( nextButton );

    // Comprueba que la función mockIncrement haya sido llamada
    expect( mockIncrement ).toHaveBeenCalled();
  });
});