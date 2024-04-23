// Recibe la ruta y renderiza el componente
import TaskComponent from '../view/taskComponent'
import PropTypes from 'prop-types';
import AddTaskForm from '../view/addTaskForm';
import React, { useEffect } from 'react';

function Router({ ruta, setRoute , tasks, setTasks}) {

    //const [editingTask, setEditingTask] = useState(null);

    const navigate = (newRoute) => {
        setRoute(newRoute);
    };

    useEffect(() => {
        // Acceder a las propiedades del sessison y del local storage
        console.log("Local Storage: ", localStorage)
        console.log("Session Storage: ", sessionStorage)

        // Almacenar un dato en nuestro storage por medio de setItem (propiedad, valor)
        //localStorage.setItem("nombre", "Ludwing");
        //localStorage.setItem("apellido", "Cano");

        // Obtener un dato de nuestro storage por medio de getItem
       console.log(localStorage.getItem("nombre")); 

        // Eliminar un dato de nuestro storage por medio de removeItem
        localStorage.removeItem("nombre");
        
        // limpiar todos los datos 
        localStorage.clear();
    }, [])

    switch (ruta) {
        case "/":
            //return <TaskComponent tasks={tasks} setTasks={setTasks} editingTask={editingTask} setEditingTask={setEditingTask} />;
            return <TaskComponent tasks={tasks} setTasks={setTasks}/>;
        case "/list":
            //return <TaskComponent tasks={tasks} setTasks={setTasks} editingTask={editingTask} setEditingTask={setEditingTask} />;
            return <TaskComponent tasks={tasks} setTasks={setTasks}/>;
        case "/add":
            return <AddTaskForm onAddTask={(task) => {
                setTasks([...tasks, task]);
                localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
                window.location.replace("/list");
              }} />
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
};

export default Router