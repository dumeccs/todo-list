import React from 'react';
import { Task } from './Task';

export const Tasks = ({tasks,onDelete, onToggle,editTaskFunc}) => {

    const taskList = tasks.map(task => {
        return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} updateTask={()=>editTaskFunc(task)}/>
    })
  return (
  <> 

      {taskList}

  </ >);
};
