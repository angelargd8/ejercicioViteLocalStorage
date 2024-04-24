import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000), // Simulando un ID único
      title,
      description,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    console.log(newTask);
    alert("Tarea agregada!");
    //alert(newTask);
  };

  return (
    <div className="div">
      <h3>Nueva tarea</h3><center/>
      <form onSubmit={handleSubmit} style={{display: "inline-flex", flexDirection: "column"}}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginTop:"10%" }}
      />
      <textarea
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginTop:"10%" , padding:"10%"}}
      ></textarea>
      <button type="submit" style={{marginTop:"10%"}}>Agregar Tarea</button>
    </form>
    <center/>
    </div>
    
  );
};

AddTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
