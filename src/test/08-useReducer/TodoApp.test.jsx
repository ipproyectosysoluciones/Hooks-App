/* 
1. Importaciones:

- render y screen desde @testing-library/react para renderizar el componente y realizar verificaciones.
- TodoApp desde la ruta relativa ../../08-useReducer/TodoApp.
- useTodos desde la ruta relativa ../../hooks/useTodos.

2. Mock de useTodos:

- Se utiliza jest.mock para crear un mock del hook useTodos y controlar su comportamiento durante las pruebas.

3. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el componente <TodoApp />.

4. Configuración del mock de useTodos:

- useTodos.mockReturnValue define el valor de retorno del mock, simulando un estado de prueba con dos tareas (todos), una completada y otra pendiente, y funciones mock para manejar nuevas tareas, eliminar tareas y alternar el estado de las tareas.

5. Prueba para mostrar el componente correctamente:

- test define una prueba para verificar que el componente TodoApp se muestra correctamente.
- Se renderiza el componente TodoApp.
- Se utilizan afirmaciones (expect) para verificar que los textos "Piedra del Alma" y "Piedra del Tiempo" están presentes en el documento.
- Se verifica que existe un elemento con el rol textbox en el documento, lo cual asegura que el campo de entrada del formulario está presente. */


import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../08-useReducer/TodoApp';
import { useTodos } from '../../hooks/useTodos';

// Mockea el hook useTodos para controlar su comportamiento en las pruebas
jest.mock( '../../hooks/useTodos' );

describe('Pruebas en el <TodoApp />', () => {

  // Define el valor de retorno del mock de useTodos
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Piedra del Alma",
        done: false,
      },
      {
        id: 2,
        description: "Piedra del Tiempo",
        done: true,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });
  
  test('Debe de mostrar el componente correctamente', () => {
    
    // Renderiza el componente TodoApp
    render(<TodoApp />);
    // screen.debug(); // Línea de depuración para visualizar el output del render

    // Verifica que los textos "Piedra del Alma" y "Piedra del Tiempo" estén presentes en el documento
    expect(screen.getByText( 'Piedra del Alma' )).toBeTruthy();
    expect(screen.getByText( 'Piedra del Tiempo' )).toBeTruthy();

    // Verifica que haya un elemento con el rol 'textbox' en el documento
    expect(screen.getByRole( 'textbox' )).toBeTruthy();

  });
});