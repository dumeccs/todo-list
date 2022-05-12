import React from 'react';
import { Task } from './Task';

export const Tasks = ({tasks,onDelete, onToggle, editTask}) => {

    const taskList = tasks.map(task => {
        return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} editTask={editTask}/>
    })
  return (
  <> 

      {taskList}

  </ >);
};
