/* Explicación:
1. Importación del hook personalizado useForm: Se importa el hook personalizado desde la carpeta hooks.

2. Definición del componente FormWithCustomHook: Se define una función que representa el componente React.

3. Uso del hook personalizado useForm:

- Se llama al hook useForm pasando un objeto con los valores iniciales para username, email y password.
- Se desestructura el resultado del hook para obtener formState (estado del formulario), onInputChange (función para manejar cambios en los inputs), username, email, password (valores actuales de los campos del formulario) y onResetForm (función para reiniciar el formulario).

4. Renderizado del componente:

- Se muestra un título para el formulario.
- Se añade un separador horizontal <hr />.
- Se definen tres inputs controlados (username, email, password) que utilizan el manejador onInputChange para actualizar el estado del formulario.
- Se añade otro separador horizontal.
- Se define un botón que llama a la función onResetForm para reiniciar el formulario.

Este componente utiliza un hook personalizado para manejar la lógica del formulario, lo que simplifica la gestión del estado y los manejadores de eventos. Los inputs están vinculados al estado del formulario y se actualizan automáticamente en función de los cambios realizados por el usuario. */


// Importación del hook personalizado useForm desde la carpeta de hooks
import { useForm } from '../hooks';

// Definición del componente funcional FormWithCustomHook
export const FormWithCustomHook = () => {
  // Uso del hook personalizado useForm
  // Se extraen formState (estado del formulario), onInputChange (manejador de cambios en los inputs),
  // y las propiedades específicas del formulario: username, email y password.
  // También se extrae la función onResetForm para reiniciar el formulario.
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // La línea comentada a continuación es una alternativa para desestructurar formState
  // const { username, email, password } = formState;

  // Renderizado del componente
  return (
    <>
      {/* Título del formulario */}
      <h1>Formm With Custom Hook</h1>

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

      {/* Input para la contraseña */}
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <hr />

      {/* Botón para reiniciar el formulario */}
      <button
        className="btn btn-primary"
        onClick={ onResetForm }
      >
        Borrar
      </button>
    </>
  );
};
