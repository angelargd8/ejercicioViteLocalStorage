
import PropTypes from 'prop-types';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="botones">
        <button onClick={onDelete}>Eliminar</button>
        <button onClick={onDelete}>editar</button>
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
};

export default TaskItem;
