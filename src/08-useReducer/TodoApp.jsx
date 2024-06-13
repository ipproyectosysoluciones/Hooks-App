// Importamos el hook useTodos y los componentes TodoAdd y TodoList desde sus respectivos directorios
import { useTodos } from "../hooks";
import { TodoAdd, TodoList } from "./";


// Componente principal de la aplicación de Todo
export const TodoApp = () => {

  // Utilizamos el hook useTodos para gestionar el estado de las tareas y las funciones de manejo
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  return (
    <>
      {/* Título de la aplicación con el número total de tareas y las pendientes */}
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        {/* Columna que muestra la lista de tareas */}
        <div className="col-7">
          <TodoList
            todos={ todos } // Pasamos la lista de tareas al componente TodoList
            onDeleteTodo={ handleDeleteTodo } // Pasamos la función para eliminar tareas
            onToggleTodo={ handleToggleTodo } // Pasamos la función para alternar el estado de las tareas
          />
        </div>

        {/* Columna que muestra el formulario para agregar nuevas tareas */}
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd
            onNewTodo={ handleNewTodo } // Pasamos la función para agregar nuevas tareas
          />
        </div>
      </div>
    </>
  );
};
