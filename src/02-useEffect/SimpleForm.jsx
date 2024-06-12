/* Explicación:
1. Importación de useEffect y useState: Se importan los hooks useEffect y useState desde React.

2. Importación del componente Message: Se importa el componente Message desde el directorio actual.

3. Definición del componente SimpleForm:

- Estado inicial: Se define el estado inicial del formulario utilizando useState, con username y email.
- Desestructuración del estado: Se desestructura el estado para obtener username y email.

4. Función onInputChange:

- Actualización del estado: La función maneja los cambios en los inputs del formulario, actualizando el estado correspondiente.

5. Efectos con useEffect:

- Efecto al montar el componente: Un useEffect que se ejecuta una vez al montar el componente.
- Efecto cuando cambia formState: Un useEffect que se ejecuta cada vez que el estado del formulario cambia.
- Efecto cuando cambia email: Un useEffect que se ejecuta cada vez que cambia el valor de email.

6. Renderizado del componente:

- Título y inputs: Se renderiza un título y dos inputs controlados para username y email.
- Renderizado condicional: Si el valor de username es 'Bladimir2', se renderiza el componente Message.

Este componente maneja un formulario simple con dos campos, username y email, y utiliza hooks para gestionar el estado y efectos secundarios, como el registro de cambios en los valores del formulario. Además, incluye una lógica condicional para mostrar el componente Message basado en el valor del username. */

import { useEffect, useState } from 'react'; // Importación de useEffect y useState desde React
import { Message } from './'; // Importación del componente Message desde el directorio actual

// Definición del componente funcional SimpleForm
export const SimpleForm = () => {
  // Estado inicial del formulario con useState
  const [formState, setFormState] = useState({
    username: "Bladimir",
    email: "info@ipproyectosysoluciones.com.co",
  });

  // Desestructuración del estado del formulario
  const { username, email } = formState;

  // Función para manejar los cambios en los inputs del formulario
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // Actualización del estado del formulario
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // useEffect que se ejecuta una vez al montar el componente
  useEffect(() => {
    // console.log('useEffect called!!');
  }, []);

  // useEffect que se ejecuta cuando cambia formState
  useEffect(() => {
    // console.log('formState changed!!');
  }, [formState]);

  // useEffect que se ejecuta cuando cambia el email
  useEffect(() => {
    // console.log('email changed!!');
  }, [email]);

  // Renderizado del componente
  return (
    <>
      {/* Título del formulario */}
      <h1>Simple Form</h1>

      <hr />

      {/* Input para el nombre de usuario */}
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {/* Input para el correo electrónico */}
      <input
        type="email"
        className="form-control mt-2"
        placeholder="info@ipproyectosysoluciones.com.co"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <hr />

      {/* Renderizado condicional del componente Message si el username es 'Bladimir2' */}
      {username === "Bladimir2" && <Message />}
    </>
  );
};
