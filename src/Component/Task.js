import React from 'react';
import {FaTimes, FaEdit} from "react-icons/fa/index.esm"
import { useContext } from 'react';
import TaskContext from '../Context/Taskcontext';




export const Task = () => {

  const {tasks,deleteTask,editTask, toggleReminder} = useContext(TaskContext)
 
  
  return (
    
  <div className ={`task ${tasks.reminder ? "reminder" : ''}` } onDoubleClick={()=>toggleReminder(tasks.id)}>
      <h3 >
         
          {tasks.text}
          <FaEdit 
            onClick={() => editTask(tasks)}
            style = {{

              
            }}
          /> 
          <FaTimes 
          style={{color :"red"}} 
          onClick={()=>deleteTask(tasks.id)}
          />
       


       </h3>
      <p>{tasks.day}</p>
  </div>
  );
};
