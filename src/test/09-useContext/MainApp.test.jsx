/* 
1. Importaciones:

- render y screen desde @testing-library/react para renderizar el componente y acceder a los elementos de la pantalla.
- MemoryRouter desde react-router-dom para simular la navegación y proporcionar rutas a los componentes anidados.
- MainApp desde la ruta relativa ../../09-useContext/MainApp.

2. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el componente <MainApp />.

3. Prueba para mostrar el HomePage:

- test define una prueba para verificar que el componente MainApp muestre correctamente la página de inicio (HomePage).
- Se renderiza el componente MainApp dentro de un MemoryRouter para simular la navegación.
- Se verifica que el texto 'HomePage' esté presente en la pantalla.
- Se muestra la salida de depuración del componente en la consola.

4. Prueba para mostrar el LoginPage:

- test define una prueba para verificar que el componente MainApp muestre correctamente la página de inicio de sesión (LoginPage).
- Se renderiza el componente MainApp dentro de un MemoryRouter con la ruta inicial establecida en /login.
- Se verifica que el texto 'LoginPage' esté presente en la pantalla.
- Se muestra la salida de depuración del componente en la consola. */


import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../09-useContext/MainApp';

describe('Pruebas en <MainApp />', () => {

  // Prueba para verificar que se muestra correctamente la página de inicio (HomePage)
  test('Deve de mostrar el HomePage', () => {

    // Renderiza el componente MainApp dentro de un MemoryRouter para simular la navegación
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    // Verifica que el texto 'HomePage' esté presente en la pantalla
    expect(screen.getByText( 'HomePage' )).toBeTruthy();

    // screen.debug(); // Muestra la salida de depuración del componente en la consola
  });

  // Prueba para verificar que se muestra correctamente la página de inicio de sesión (LoginPage)
  test('Deve de mostrar el LoginPage', () => {

    // Renderiza el componente MainApp dentro de un MemoryRouter con la ruta inicial establecida en '/login'
    render(
      <MemoryRouter initialEntries={[ '/login' ]}>
        <MainApp />
      </MemoryRouter>
    );

    // Verifica que el texto 'LoginPage' esté presente en la pantalla
    expect(screen.getByText( 'LoginPage' )).toBeTruthy();

    // screen.debug(); // Muestra la salida de depuración del componente en la consola
  });
});