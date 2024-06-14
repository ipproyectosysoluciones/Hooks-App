/* 
1. Importaciones:

- render y screen desde @testing-library/react para renderizar el componente y realizar verificaciones.
- HomePage desde la ruta relativa ../../09-useContext/HomePage.
- UserContext desde la ruta relativa ../../09-useContext/context.

2. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el componente <HomePage />.

3. Definición del usuario para las pruebas:

- Se define un objeto user que representa un usuario para las pruebas.

4. Prueba para mostrar el componente sin el usuario:

- test define una prueba para verificar que el componente HomePage se muestra correctamente sin un usuario.
- Se renderiza el componente HomePage proporcionando un valor null al contexto UserContext.
- Se obtiene el elemento pre del documento y se verifica que su contenido sea 'null'.

5. Prueba para mostrar el componente CON el usuario:

- test define una prueba para verificar que el componente HomePage se muestra correctamente con un usuario.
- Se renderiza el componente HomePage proporcionando un objeto de usuario al contexto UserContext.
- Se obtiene el elemento pre del documento y se verifica que su contenido contenga el nombre y el ID del usuario. */


import { render, screen } from '@testing-library/react';
import { HomePage } from '../../09-useContext/HomePage';
import { UserContext } from '../../09-useContext/context';

describe('Pruebas en <HomePage />', () => {
  // Definición de usuario para las pruebas
  const user = {
    id: 123,
    name: "Juan Perez",
  };

  test("Debe mostrar el componente sin el usuario", () => {

    // Renderiza el componente HomePage sin usuario proporcionando un valor null al contexto UserContext
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText( "pre" ); // Obtiene el elemento pre del documento
    expect( preTag.innerHTML ).toBe( "null" ); // Verifica que el contenido del elemento pre sea 'null'
  });

  test("Debe mostrar el componente CON el usuario", () => {

    // Renderiza el componente HomePage con un usuario proporcionando un objeto de usuario al contexto UserContext
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText( "pre" ); // Obtiene el elemento pre del documento
    expect( preTag.innerHTML ).toContain( user.name ); // Verifica que el contenido del elemento pre contenga el nombre del usuario
    expect( preTag.innerHTML ).toContain( `${user.id}` ); // Verifica que el contenido del elemento pre contenga el ID del usuario
  });
});