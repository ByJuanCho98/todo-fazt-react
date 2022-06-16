export const VisibilityControl = ({ isChecked ,setShowCompleted, deleteTask }) => {

  const handleDelete = () => {
    if (window.confirm('Eliminar?')) {
      deleteTask()
    }
  }

  return(
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secundary">
      <div className="form-check form-switch">
        <input className="form-check-input" checked={isChecked} type='checkbox' onChange={ (e) => setShowCompleted(e.target.checked) } /> 
        <label>Show done</label>
      </div>
      <button onClick={handleDelete} className='btn btn-danger btn-sm'>
        Clear
      </button>
    </div>


  )
}