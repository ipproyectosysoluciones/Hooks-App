/* 
1. Importaciones:

- act y renderHook de @testing-library/react para renderizar hooks y simular interacciones.
- useCounter desde los hooks personalizados.

2. Descripción del grupo de pruebas:

- describe define un grupo de pruebas para el hook useCounter.

3. Prueba de valores por defecto:

- Renderiza useCounter sin parámetros.
- Verifica que el counter sea 10.
- Verifica que decrement, increment y reset sean funciones.

4. Prueba de inicialización del counter con valor específico:

- Renderiza useCounter con un valor inicial de 100.
- Verifica que el counter sea 100.

5. Prueba de incremento del counter:

- Renderiza useCounter con un valor inicial de 100.
- Realiza dos incrementos: uno por defecto y otro con valor 2.
- Verifica que el counter sea 103.

6. Prueba de decremento del counter:

- Renderiza useCounter con un valor inicial de 100.
- Realiza dos decrementos: uno por defecto y otro con valor 2.
- Verifica que el counter sea 97.

7. Prueba de reseteo del counter:

- Renderiza useCounter con un valor inicial de 100.
- Realiza un decremento y luego un reset.
- Verifica que el counter vuelva a ser 100. */


import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../hooks';

// Descripción del grupo de pruebas para el hook useCounter
describe('Pruebas en el useCounter', () => {
  // Prueba para verificar los valores por defecto
  test("Debe de retornar los valores por defecto", () => {
    // Renderiza el hook y obtiene los valores actuales
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    // Comprueba que el valor del counter sea 10
    expect( counter ).toBe( 10 );
    // Verifica que decrement, increment y reset sean funciones
    expect( decrement ).toEqual(expect.any( Function ));
    expect( increment ).toEqual(expect.any( Function ));
    expect( reset ).toEqual(expect.any( Function ));
  });

  // Prueba para verificar que el counter se inicialice con 100
  test("Debe de generar el counter con el valor de 100", () => {

    // Renderiza el hook con un valor inicial de 100
    const { result } = renderHook(() => useCounter( 100 ));

    // Comprueba que el valor del counter sea 100
    expect( result.current.counter ).toBe( 100 );
  });

  // Prueba para verificar el incremento del counter
  test("Debe de incrementar el counter", () => {

    // Renderiza el hook con un valor inicial de 100
    const { result } = renderHook(() => useCounter( 100 ));
    const { counter, increment } = result.current;

    // Realiza incrementos en el counter
    act(() => {
      increment();
      increment( 2 );
    });

    // Comprueba que el valor del counter sea 103
    expect( result.current.counter ).toBe( 103 );
  });

  // Prueba para verificar el decremento del counter
  test("Debe de decrementar el counter", () => {

    // Renderiza el hook con un valor inicial de 100
    const { result } = renderHook(() => useCounter( 100 ));
    const { counter, decrement } = result.current;

    // Realiza decrementos en el counter
    act(() => {
      decrement();
      decrement( 2 );
    });

    // Comprueba que el valor del counter sea 97
    expect( result.current.counter ).toBe( 97 );
  });

  // Prueba para verificar el reseteo del counter
  test("Debe de realizar el reset del counter", () => {

    // Renderiza el hook con un valor inicial de 100
    const { result } = renderHook(() => useCounter( 100 ));
    const { counter, decrement, reset } = result.current;

    // Realiza un decremento y luego un reset en el counter
    act(() => {
      decrement();
      reset();
    });

    // Comprueba que el valor del counter sea 100
    expect( result.current.counter ).toBe( 100 );
  });
});