/* 
1. Importaciones:

- todoReducer del archivo todoReducer.js para realizar pruebas en el reducer.

2. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el reducer todoReducer.

3. Estado inicial para las pruebas:

- initialState define el estado inicial para realizar las pruebas.

4. Prueba de regresar el estado inicial:

- Verifica si el reducer devuelve el estado inicial cuando no recibe ninguna acción.

5. Prueba de agregar un todo:

- Verifica si el reducer agrega un nuevo todo correctamente.

6. Prueba de eliminar un todo:

- Verifica si el reducer elimina un todo correctamente.

7. Prueba de realizar el Toggle del todo:

- Verifica si el reducer realiza el toggle de un todo correctamente. */


import { todoReducer } from '../../08-useReducer/todoReducer';


describe('Pruebas en el todoReducer', () => {

  // Estado inicial para las pruebas
  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false,
  }]
  
  test('Debe regresar el estado inicial', () => {

    // Prueba para verificar si el reducer devuelve el estado inicial cuando no recibe ninguna acción
    const newState = todoReducer( initialState, {} );
    expect( newState ).toBe( initialState ); // El nuevo estado debe ser igual al estado inicial
    
  });

  test('Debe de agregar un todo', () => {

    // Acción para agregar un nuevo todo
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Demo Todo 2',
        done: false,
      }
    };

    // Prueba para verificar si el reducer agrega un nuevo todo correctamente
    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe( 2 ); // La longitud del nuevo estado debe ser 2
    expect( newState ).toContain( action.payload ); // El nuevo estado debe contener el nuevo todo
  });

  test('Debe de eliminar un todo', () => {

    // Acción para eliminar un todo
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1, // ID del todo a eliminar
    };

    // Prueba para verificar si el reducer elimina un todo correctamente
    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe( 0 ); // La longitud del nuevo estado debe ser 0 (sin todos)
  });

  test('Debe de realizar el Toggle del todo', () => {

    // Acción para realizar el toggle de un todo
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1 // ID del todo a realizar el toggle
    };

    // Prueba para verificar si el reducer realiza el toggle de un todo correctamente
    const newState = todoReducer( initialState, action );
    expect( newState[ 0 ].done ).toBe( true ); // El estado del primer todo debe cambiar a true (completado)
  });
});