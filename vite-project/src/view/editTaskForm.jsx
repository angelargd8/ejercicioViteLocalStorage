
import { useState, useEffect } from 'react';
import TaskList from '../component/taskList';
const EditTaskForm = ({ task, onEditTask }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onEditTask({ ...task, title, description });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Guardar</button>
      </form>
    );
  };


export default EditTaskForm;