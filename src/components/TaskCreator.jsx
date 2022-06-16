import { useState } from "react";

export const TaskCreator = ({ createTask }) => {

  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(task)
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
        <div className="col-md-9">
          <input className="form-control" type='text' placeholder='type' value={task} onChange={(e) => { setTask(e.target.value) }}></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary btn-sm">Save task</button>
        </div>
      </form>
  )
}