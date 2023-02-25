import TaskList from './Components/Task/TaskList'
import TaskForm from './Components/TaskForm/TaskForm'

function App() {
  return (
    <main className="App bg-zinc-900 h-screen">
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App
