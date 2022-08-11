const UpdateTaskForm=({updateTask,UpdateTask, changeTask,cancelUpdate})=>{
    return(
        <>
        <div className='row'>
        <div className='col'>
           <input
            value={ updateTask&& updateTask.title}
            onChange={(e)=>changeTask(e)}
            className='form-control form-control-lg'/>
        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-success mr-20' onClick={UpdateTask}>Update</button>
          <button 
           className='btn btn-lg btn-warning'
           onClick={cancelUpdate}>Cancel</button>
        </div>

    </div>
    <br/>

        </>
    )
}
export default UpdateTaskForm;