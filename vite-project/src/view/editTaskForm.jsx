import PropTypes from 'prop-types';
import { useState } from 'react';

const EditTaskForm = ({ task, onEditTask  }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
  

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedTask = {
          ...task,
          title,
          description,
        };
        onEditTask(editedTask);
        alert("Tarea modificada!");
        window.location.href = "/list"
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Guardar</button>
      </form>
    );
  };

EditTaskForm.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      onEditTask: PropTypes.func.isRequired,
};


export default EditTaskForm;