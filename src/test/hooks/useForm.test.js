/* 
1. Importaciones:

- act y renderHook de @testing-library/react para renderizar hooks y simular interacciones.
- useForm desde los hooks personalizados.

2. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el hook useForm.

3. Prueba de valores por defecto:

- Define el estado inicial del formulario.
- Renderiza useForm con el estado inicial.
- Verifica que los valores devueltos por el hook sean los esperados, incluyendo el name, email, formState, y las funciones onInputChange y onResetForm.

4. Prueba de cambio de nombre en el formulario:

- Define un nuevo valor para el nombre.
- Renderiza useForm con el estado inicial.
- Obtiene la función onInputChange del hook.
- Simula un cambio en el input del nombre.
- Verifica que el name y el formState.name se actualicen con el nuevo valor.

5. Prueba de reset del formulario:

- Define un nuevo valor para el nombre.
- Renderiza useForm con el estado inicial.
- Obtiene las funciones onInputChange y onResetForm del hook.
- Simula un cambio en el input del nombre y luego un reset.
- Verifica que el name y el formState.name se restablezcan al valor inicial. */


import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../hooks';

// Descripción del grupo de pruebas para el hook useForm
describe('Pruebas en el useForm', () => {

  // Estado inicial del formulario para las pruebas
  const initialForm = {
    name: 'Juan Perez',
    email: 'juan@google.com',
  }
  
  // Prueba para verificar que se devuelvan los valores por defecto
  test('Debe de regresar los valores por defecto', () => {
    
    // Renderiza el hook useForm con el estado inicial
    const { result } = renderHook(() => useForm( initialForm ));

    // Comprueba que los valores devueltos por el hook sean los esperados
    expect( result.current ).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any( Function ) ,
      onResetForm: expect.any( Function ),
    });
  });

  // Prueba para verificar el cambio del nombre en el formulario
  test('Debe de cambiar el nombre del formulario', () => { 

    const newValue = "Pedro";

    // Renderiza el hook useForm con el estado inicial
    const { result } = renderHook(() => useForm( initialForm ));
    const { onInputChange } = result.current;

    // Act simula un cambio en el input del formulario
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    // Comprueba que el nombre en el formulario haya cambiado correctamente
    expect( result.current.name ).toBe( newValue );
    expect( result.current.formState.name ).toBe( newValue );

  });

  // Prueba para verificar el reset del formulario
  test('Debe de realizar el reset del formulario', () => { 

    const newValue = "Pedro";

    // Renderiza el hook useForm con el estado inicial
    const { result } = renderHook(() => useForm( initialForm ));
    const { onInputChange, onResetForm } = result.current;

    // Act simula un cambio en el input del formulario y luego un reset
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    // Comprueba que el nombre en el formulario haya vuelto a su estado inicial
    expect( result.current.name ).toBe( initialForm.name );
    expect( result.current.formState.name ).toBe( initialForm.name );

  });
});