import { useState, useEffect } from 'react';
import TaskList from '../component/taskList';

const TaskComponent = ({ tasks, setTasks }) => {
  /*const [tasks, setTasks] = useState([
    { id: 1, title: 'Hacer la compra', description: 'Comprar alimentos para la semana' },
    { id: 2, title: 'Lavar el coche', description: 'Limpiar el coche por fuera y por dentro' },
  ]);*/
  //const [tasks, setTasks] = useState([]);

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default TaskComponent;
