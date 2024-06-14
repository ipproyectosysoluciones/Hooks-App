/* 
1. Importaciones:

- render, screen, y fireEvent desde @testing-library/react para renderizar el componente y realizar acciones de prueba.
- LoginPage desde la ruta relativa ../../09-useContext/LoginPage.
- UserContext desde la ruta relativa ../../09-useContext/context.

2. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el componente <LoginPage />.

3. Prueba para mostrar el componente sin el usuario:

- test define una prueba para verificar que el componente LoginPage se muestra correctamente sin un usuario.
- Se renderiza el componente LoginPage proporcionando un valor null al contexto UserContext.
- Se obtiene el elemento pre del documento y se verifica que su contenido sea 'null'.

4. Prueba para verificar que se llama setUser cuando se hace clic en el botón:

- test define una prueba para verificar que la función setUser se llama correctamente cuando se hace clic en el botón.
- Se define un mock de la función setUser utilizando jest.fn().
- Se renderiza el componente LoginPage con setUserMock proporcionando un objeto de usuario al contexto UserContext.
- Se obtiene el botón del documento y se simula un clic en él.
- Se verifica que la función setUserMock haya sido llamada con el usuario esperado. */


import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from '../../09-useContext/LoginPage';
import { UserContext } from '../../09-useContext/context';


describe('Pruebas en <LoginPage />', () => {
  
  // Prueba para verificar que el componente se muestra correctamente sin un usuario
  test('Debe de mostrar el componente sin el usuario', () => {

    // Renderiza el componente LoginPage sin un usuario proporcionando un valor null al contexto UserContext
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    // Obtiene el elemento pre del documento y verifica que su contenido sea 'null'
    const preTag = screen.getByLabelText( 'pre' );
    expect( preTag.innerHTML ).toBe( 'null' );
  });

  // Prueba para verificar que se llama setUser cuando se hace clic en el botón
  test('Debe de llamar el setUser cuando se hace click en el boton', () => {

    // Mock de la función setUser
    const setUserMock = jest.fn();

    // Renderiza el componente LoginPage con setUserMock proporcionando un objeto de usuario al contexto UserContext
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    // Obtiene el botón del documento y simula un clic en él
    const button = screen.getByRole( 'button' );
    fireEvent.click( button );

    // Verifica que la función setUserMock haya sido llamada con el usuario esperado
    expect(setUserMock).toHaveBeenCalledWith({
      email: "juan@juan.com",
      id: 123,
      name: "Juan",
    });
  });
});