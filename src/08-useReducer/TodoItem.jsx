
// Componente TodoItem que representa un elemento individual en la lista de tareas
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    // Elemento de la lista con clases de Bootstrap para el estilo
    <li className="list-group-item d-flex justify-content-between">
      {/* Elemento span que muestra la descripción de la tarea */}
      <span
        // Clases condicionales para tachar el texto si la tarea está completada
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        // Llamada a la función onToggleTodo con el id de la tarea al hacer clic
        onClick={ () => onToggleTodo( todo.id ) }
      >
        {todo.description}
      </span>

      {/* Botón para borrar la tarea */}
      <button
        className="btn btn-danger"
        // Llamada a la función onDeleteTodo con el id de la tarea al hacer clic
        onClick={ () => onDeleteTodo( todo.id ) }
      >
        Borrar
      </button>
    </li>
  );
};
