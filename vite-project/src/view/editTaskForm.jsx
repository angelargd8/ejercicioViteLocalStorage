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
    <div className="div">
        <h3>Edicion de : {task.title}</h3>
        <form onSubmit={handleSubmit}  style={{display: "inline-flex", flexDirection: "column", marginTop:"10%" }}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginTop:"10%" }}/>
        <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} style={{ marginTop:"10%", padding:"10%"}}/>
        <button type="submit" style={{ marginTop:"10%" }}>Guardar</button>
      </form>
    </div>
      
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