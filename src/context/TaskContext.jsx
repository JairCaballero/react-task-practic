import React, {createContext, useState, useEffect} from 'react'
import jsonData  from '../data/task.json'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([])

  function createTask (task) {
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      descripcion: task.descripcion
    }]) //coje todos los elementos de task, y añade lo nuevo
  }

  function deleteTask (taskId) {
    setTasks(tasks.filter(task => task.id !== taskId)) // nos da todos menos cuando si es igual => es lo quita
  }

  useEffect( () => {
    setTasks(jsonData)
  }, [])

  return (
    <TaskContext.Provider value={{
      tasks, createTask, deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider