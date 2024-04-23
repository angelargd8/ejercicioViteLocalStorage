import { useState } from 'react';
import TaskList from '../component/taskList';
import EditTaskForm from '../view/editTaskForm';

const TaskComponent = ({ tasks, setTasks }) => {

  const [editingTask, setEditingTask] = useState(null);

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const startEditingTask = (task) => {
    setEditingTask(task);
  };

  const saveEditedTask = (editedTask) => {
    const updatedTasks = tasks.map(task => task.id === editedTask.id ? editedTask : task);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {editingTask ? (
      <EditTaskForm task={editingTask} onEditTask={saveEditedTask} />
      ) : (
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onEditTask={startEditingTask} />
      )}
      
    </div>
  );
};

export default TaskComponent;
