// Recibe la ruta y renderiza el componente
import TaskComponent from '../view/taskComponent'
import PropTypes from 'prop-types';
import AddTaskForm from '../view/addTaskForm';
import EditTaskForm from '../view/editTaskForm';

function Router({ ruta, setRoute , tasks, setTasks}) {
    //const [editingTask, setEditingTask] = useState(null);

    const navigate = (newRoute) => {
        setRoute(newRoute);
    };

    switch (ruta) {
        case "/":
            return <TaskComponent tasks={tasks} setTasks={setTasks}/>;
        case "/list":
            return <TaskComponent tasks={tasks} setTasks={setTasks}/>;
        case "/add":
            return <AddTaskForm onAddTask={(task) => {
                setTasks([...tasks, task]);
                localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
                navigate("/list");
              }} navigate={navigate} />
        
        default:
            return (
                <div>
                    <h1>Bienvenidos</h1>
                </div>
            )
    }
}

Router.propTypes = {
    ruta: PropTypes.string.isRequired,
    setRoute: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
};

export default Router