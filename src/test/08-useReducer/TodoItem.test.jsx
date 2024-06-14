/* 
1. Importaciones:

- render, screen, y fireEvent de @testing-library/react para realizar las pruebas del componente.
- TodoItem desde la ruta relativa ../../08-useReducer/TodoItem.

2. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el componente <TodoItem />.

3. Constantes de prueba:

- todo: un objeto que representa un "todo" de prueba.
- onDeleteTodoMock: un mock de la función para eliminar el todo.
- onToggleTodoMock: un mock de la función para alternar el estado del todo.

4. Limpieza antes de cada prueba:

- beforeEach limpia los mocks antes de ejecutar cada prueba.

5. Prueba para mostrar el Todo pendiente de completar:

- Renderiza el componente TodoItem.
- Verifica que el elemento <li> tenga las clases correctas.
- Verifica que el elemento <span> tenga las clases correctas cuando el todo no está completado.

6. Prueba para mostrar el Todo completado:

- Actualiza el estado del todo a completado.
- Renderiza el componente TodoItem.
- Verifica que el elemento <span> tenga la clase correcta cuando el todo está completado.

7. Prueba para alternar el estado del todo cuando se hace clic en el span:

- Renderiza el componente TodoItem.
- Simula un clic en el elemento <span> y verifica que se llame a la función onToggleTodo con el ID correcto.

8. Prueba para eliminar el todo cuando se hace clic en el botón:

- Renderiza el componente TodoItem.
- Simula un clic en el botón de eliminar y verifica que se llame a la función onDeleteTodo con el ID correcto. */


import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../08-useReducer/TodoItem';


describe('Pruebas en <TodoItem />', () => {

  // Todo de prueba
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  }
  
  const onDeleteTodoMock = jest.fn(); // Mock para la función de eliminar todo
  const onToggleTodoMock = jest.fn(); // Mock para la función de alternar el estado del todo

  beforeEach(() => jest.clearAllMocks()); // Limpia los mocks antes de cada prueba

  test('Debe de mostrar el Todo Pendiente de completar', () => {

    // Renderiza el componente TodoItem
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    // Verifica que el elemento <li> tenga la clase correcta
    const liElement = screen.getByRole( 'listitem' );
    expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );

    // Verifica que el elemento <span> tenga las clases correctas cuando el todo no está completado
    const spanElement = screen.getByLabelText( 'span' );
    expect( spanElement.className ).toContain( 'align-self-center' );
    expect( spanElement.className ).not.toContain( 'text-decoration-line-through' );

    // screen.debug();

  });

  test('Debe de mostrar el Todo completado', () => {
    
    todo.done = true; // Actualiza el estado del todo a completado

    // Renderiza el componente TodoItem
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    // Verifica que el elemento <span> tenga la clase correcta cuando el todo está completado
    const spanElement = screen.getByLabelText( 'span' );
    expect( spanElement.className ).toContain( 'text-decoration-line-through' );

    // screen.debug();

  });

  test('Span debe de llamar el toggleTodo cuando se hace click', () => {

    // Renderiza el componente TodoItem
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    // Simula un clic en el elemento <span> y verifica que se llame a la función onToggleTodo con el ID correcto
    const spanElement = screen.getByLabelText( 'span' );
    fireEvent.click( spanElement );
    expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
  });

  test('El button debe de llamar el deleTodo', () => {

    // Renderiza el componente TodoItem
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    // Simula un clic en el botón de eliminar y verifica que se llame a la función onDeleteTodo con el ID correcto
    const deleteButton = screen.getByRole( 'button' );
    fireEvent.click( deleteButton );
    expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
  });
});