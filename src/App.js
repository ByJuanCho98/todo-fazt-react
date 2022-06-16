import { TaskCreator } from './components/TaskCreator'
import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/Container';

function App() {

  const [items, setItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const createTask = (taskName) => {
    const existingTask = items.find(item => item.name === taskName)
    if (!existingTask) {
      setItems([ ...items, {name: taskName, done: false} ])
    }
  }

  const toggleTask = (task) => {
    setItems(
      items.map((t) => (
        t.name === task.name ? {...t, done: !t.done} : t
      ))
    )
  }

  const deleteTasks = () => {
    setItems(items.filter(item => !item.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    let db = localStorage.getItem('task-name')
    if (db) {
      setItems(JSON.parse(db))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('task-name', JSON.stringify(items))
  },[ items ])

  return (
    <main className='bg-dark vh-100 text-white'>
      <Container>
        <TaskCreator createTask={createTask} />

        <TaskTable tasks={items} toggleTask={toggleTask} />

        <VisibilityControl isChecked={showCompleted} setShowCompleted={(checked) => setShowCompleted(checked)} deleteTask={deleteTasks}/>

        {
          showCompleted && <TaskTable tasks={items} toggleTask={toggleTask} showCompleted={showCompleted} />
        }
      </Container>
    </main>
  );
}

export default App;
