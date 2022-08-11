import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
      faCircleCheck, faPen,faTrashCan
}from '@fortawesome/free-solid-svg-icons'



const TodoTaskForm=({toDo,MarkDone,setUpdateTask,deleteTask})=>{
    return(
<>
                           
        { toDo && toDo
            .sort((a,b)=>a.id>b.id?1:-1)
            .map(
             (task,index)=>{
               return(
                 <div key={task.id}>
                   <div className='col taskBg'>
                     <div  className={task.status ? "" : "done"}>
                        <span className='taskNumber'>{index+1}</span>
                        <span className='taskText'>{task.title}</span>
                     </div> 
                     <div className='iconsWrap'>
                        <span title="Completed / Not Completed"
                         onClick={(e)=>MarkDone(task.id)}><FontAwesomeIcon icon={faCircleCheck}/></span>
                         {task.status?(
                                  <span 
                                  title='Edit'
                                  onClick={()=>setUpdateTask({
                                   id:task.id,
                                   title:task.title,
                                   status:task.status ? true :false /////////////////
                                  })}  
                                  ><FontAwesomeIcon icon={faPen}/></span> 
                         ):null}
                       
                        <span title='delete' onClick={()=>deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan}/></span>
                     </div>
     
                   </div>
     
                 </div>
               )
             }
               )

            }
</>
              )
}
export default TodoTaskForm;