/* Explicación:
1. Definición del componente LoadingMessage:

- Se define una función que representa el componente React LoadingMessage.

2. Renderizado del componente:

- Elemento section:
  - Se utiliza un elemento <section> para contener el mensaje de carga.
  - Estilo en línea: Se aplica un estilo en línea que establece la altura de la sección a 200 píxeles.
  - Clases CSS: Se aplican varias clases CSS para estilizar la sección:
  - alert y alert-info: Estilos de Bootstrap para mostrar la sección con un estilo de alerta informativa.
  - text-center: Centra el texto horizontalmente.
  - p-0 y m-0: Elimina el padding y margin, respectivamente.
  - d-flex: Aplica un display flex a la sección.
  - align-items-center y justify-content-center: Centran el contenido dentro de la sección tanto vertical como horizontalmente.
- Elemento h1:
  - Contiene el mensaje "Cargando..." que se muestra mientras se carga la información.

  Este componente LoadingMessage muestra un mensaje de "Cargando..." centrado tanto horizontal como verticalmente dentro de una sección con altura de 200 píxeles. Utiliza clases de Bootstrap para la estilización y flexbox para centrar el contenido. */


// Definición del componente funcional LoadingMessage
export const LoadingMessage = () => {
  // Renderizado del componente
  return (
    <section
      // Estilo en línea para definir la altura de la sección
      style={{ height: 200 }}
      // Clases CSS para estilizar la sección
      className="alert alert-info text-center p-0 m-0 d-flex aling-items-center justify-content-center"
    >
      {/* Mensaje de carga */}
      <h1>Cargando...</h1>
    </section>
  );
};
