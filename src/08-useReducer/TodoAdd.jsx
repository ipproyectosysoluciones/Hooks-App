import { useForm } from '../hooks';

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const handleSubmit = ( event ) => {
    event.preventDefault();

    if ( description.length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    }
    
    onNewTodo( newTodo );
    onResetForm();
  };

  // Renderizado del componente
  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  );
};
