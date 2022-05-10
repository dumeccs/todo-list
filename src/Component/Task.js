import React from 'react';
import {FaTimes, FaEdit} from "react-icons/fa/index.esm"

export const Task = ({task,onDelete,onToggle,editTaskFunc}) => {
 
  return (
  <div className ={`task ${task.reminder ? "reminder" : ''}` } onDoubleClick={()=>onToggle(task.id)}>
      <h3 >
        
          {task.text}
          <FaEdit 
            onClick = {()=>editTaskFunc(task)}
          /> 
          <FaTimes 
          style={{color :"red"}} 
          onClick={()=>onDelete(task.id)}
          />
       


       </h3>
      <p>{task.day}</p>
  </div>
  );
};
