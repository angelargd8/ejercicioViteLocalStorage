import { useEffect, useState } from 'react'
import './App.css'
import Router from './component/router'

function App() {

  //const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
 
  const [rutaActual, setRutaActual] = useState("app")
  useEffect(() => {
    console.log("Se ha montado el componente")
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setRutaActual(window.location.pathname)
    console.log(window.location);

  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <div className='sitio-web'>
      <div className='header'>
      <nav style={{ flexDirection: "row"}}>
        <a href="/list" style={{border:"1px solid black", padding:"8px", borderRadius:"8px", color:"white"}}>Lista de Tareas</a>
        <a href="/add" style={{border:"1px solid black", padding:"8px", borderRadius:"8px",color:"white"}} >Agregar Tarea</a>
      </nav>
      </div>
      <div className='paginas'>
          <Router ruta={rutaActual} setRoute={setRutaActual}  tasks={tasks} setTasks={setTasks}  ></Router> 
      </div>
    </div>
  )
}

export default App
