import { TodoItem } from './'; // Importamos el componente TodoItem desde el directorio actual


// Componente TodoList que recibe una lista de tareas y funciones para manejar la eliminación y el toggle de tareas
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    // Elemento ul con clases de Bootstrap para el estilo
    <ul className="list-group">
      {/* Iteramos sobre la lista de tareas y generamos un TodoItem para cada tarea */}
      {todos.map( ( todo, index ) => (
        <TodoItem
          key={ index } // Asignamos una clave única a cada elemento basado en el id de la tarea
          todo={ todo } // Pasamos la tarea completa como prop al componente TodoItem
          onDeleteTodo={ onDeleteTodo } // Pasamos la función onDeleteTodo como prop
          onToggleTodo={ onToggleTodo } // Pasamos la función onToggleTodo como prop
        />
      ))}
    </ul>
  );
};
