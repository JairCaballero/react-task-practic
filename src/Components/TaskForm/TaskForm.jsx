import React,{useContext} from 'react'
import { useState } from 'react'
import { TaskContext } from '../../context/TaskContext'

const TaskForm = () => {

  const [title, setTitle] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({ title,descripcion })
    setTitle('')
    setDescripcion('')
  }

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4 ' onSubmit={ handleSubmit }>
        <h1 className='text-2xl font-bold text-white mb-3 text-center'>Crea tu Tarea</h1>
        <input type="text" placeholder='Escribe la tarea'
          onChange={ e => setTitle(e.target.value)}
          value={ title }
          autoFocus
          className='bg-slate-300 p-3 w-full mb-2 rounded-md'
        />
        <textarea placeholder='Descripcion' cols="50" rows="5"
          onChange={ e => setDescripcion(e.target.value) }
          value={ descripcion }
          className='bg-slate-300 p-3 w-full mb-2 rounded-md' >
        </textarea>
        <button className='bg-indigo-500 px-3 py-1 w-full text-white rounded-md'>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm