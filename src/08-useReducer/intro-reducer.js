
// Estado inicial del reducer, contiene una tarea (todo) con id, descripción y estado (done)
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}];

// Definición del reducer para manejar los todos (tareas)
const todoReducer = ( state = initialState, action = {} ) => {

  // Verifica si el tipo de acción es 'add todo', si es así, añade la nueva tarea al estado
  if ( action.type === '[TODO] add todo' ) {
    return [ ...state, action.payload ];
  }

  // Si la acción no es reconocida, retorna el estado actual sin cambios
  return state;
};

// Estado inicial llamando al reducer sin acción (obtiene el estado por defecto)
let todos = todoReducer();

// Nueva tarea a ser añadida
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del Poder",
  done: false,
};

// Acción para añadir una nueva tarea
const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
};

// Llama al reducer con el estado actual y la acción para añadir una nueva tarea
todos = todoReducer( todos, addTodoAction );

// Muestra el nuevo estado en la consola
console.log({ state: todos });