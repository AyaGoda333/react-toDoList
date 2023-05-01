import React, { useState,useEffect } from 'react';
//import axios from 'axios';
import AddTaskForm from './componants/AddTaskForm';
import UpdateTaskForm from './componants/UpdateForm';
import TodoTaskForm from './componants/ToDo';
import store from './componants/j.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App1.css';
console.log(store);

function App() {
  //state of the project
 
  const [toDo,setToDo]=useState(store);
  //new and update tasks
  const[newTask,setNewTask]=useState("");
  const[updateTask,setUpdateTask]=useState("");


  //Add Task
  const addTask=()=>{
   if(newTask){
    let num=toDo.length+1;
    let newEntry={id:num, title:newTask, status:"false"}
    setToDo([...toDo,newEntry]) //معناها ضيف ال toDo عادي و رود عليها كمان الnewEntery
    setNewTask('');
   }
  }

  //Delete Task
  const deleteTask=(id)=>{
  const newTasks=toDo.filter(m=> m.id!==id);
  setToDo(newTasks);
  }
  //Mark Task as done or completed
  const MarkDone=(id)=>{
   let newTask=toDo.map(task=>{
    if(task.id===id){
      return({...task,status:!task.status})
    }
    return task;
   })
   setToDo(newTask)
  }

   //cancel update
   const cancelUpdate=(id)=>{
    setUpdateTask('');
  }
  //change task for update
  const changeTask=(e)=>{ //e will take an event and get the value from the event
   let newEntry={
    id:updateTask.id,
    title:e.target.value,
    status:updateTask.status ? true:false 
   }
   setUpdateTask(newEntry);
  }
   // update task
   const UpdateTask=()=>{ //e will take an event and get the value from the event
       let filterRecords=[...toDo].filter(task=>task.id !==updateTask.id);
       let updateObject=[...filterRecords,updateTask]
       setToDo(updateObject);
       setUpdateTask('');

   }
  
  return (
     <>
     {console.log(toDo)}
     <div className='container App'>
       <br/><br/>
       <h1>To Do List App</h1>
       <br/><br/>
       {/*update task*/}
       {updateTask  &&  updateTask  ? (
          <UpdateTaskForm
          updateTask={updateTask}
          changeTask={changeTask}
          UpdateTask={UpdateTask}
          cancelUpdate={cancelUpdate}
          />
       ) : (
     /*AddTask*/
    <AddTaskForm
    newTask={newTask}
    setNewTask={setNewTask}
    addTask={addTask}
    />
       )}

       {toDo && toDo.length ? "" : "No Tasks....."}
       <TodoTaskForm
        toDo={toDo}
        MarkDone={MarkDone}
        setUpdateTask={setUpdateTask}
        deleteTask={deleteTask}
        />
       

     </div>
       
     
     </>
  );
}

export default App;
