
import PropTypes from 'prop-types';

const TaskItem = ({ task, onDelete , onEdit}) => {
  const handleEditClick = () => {
    onEdit(task);
    //navigate('/edit');
  };
  
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="botones">
        <button onClick={onDelete}>Eliminar</button>
        <button onClick={handleEditClick}>editar</button>
      </div>
      
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  //navigate: PropTypes.func.isRequired,
};

export default TaskItem;
