
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
        //console.log(newTask);
        alert("Tarea modificada!");
        //navigate("/list");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Guardar</button>
      </form>
    );
  };


export default EditTaskForm;