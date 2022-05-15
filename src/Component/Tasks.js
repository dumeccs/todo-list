import React from 'react';
import { Task } from './Task';
import { useContext } from 'react';
import TaskContext from '../Context/Taskcontext';



export const Tasks = () => {
    const {tasks} = useContext(TaskContext)
    const taskList = tasks.map(task => {
        return <Task key={task.id}/>
    })

    console.log(taskList)
  return (
  <> 

      {taskList}

  </ >);
};

