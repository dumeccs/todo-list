import React, {useState} from 'react';
import { Tasks } from './Component/Tasks';
import { Header } from './Component/Header';
import { Addtask } from './Component/Addtask';

export default function App() {
  const [tasks, setTask] = useState(
    [

    
      {
          id: 1,
          text: 'Chris birthday',
          day: 'Feb 5th at 2:30pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting at school',
          day: 'Feb 6th at 1:30pm',
          reminder: true,
      },
      {
          id: 3,
          text: 'Eat buffet with the gang',
          day: 'Feb 14th at 1:30pm',
          reminder: true,
      }
  
  ]
  )
  
//
const [toggle,setToggle] = useState(false)
const toggleAdd = () =>{
  setToggle(prevState => !prevState)
}


const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id,...task}
  const updatedTask =([...tasks,newTask])
  setTask(updatedTask)
}

// set a new state to handle the new task you wanna add


const [extTask, setExtTask] = useState({
    task:{},
    edited:false
})


const editTask = (task) =>{
  setExtTask({
    task,
    edit:true
  })
}
  //update task




  // delete task
  function deleteTask(id){
    setTask(tasks.filter(task => task.id !== id))
  }
  
  // Sets a reminder
  function toggleReminder(id){
    setTask(prevState => {
      return prevState.map(task=>{
    
        return task.id === id ? {...task, reminder: !task.reminder} : task
      })
    })
  }

  return (

  <div className='container'> 

    <Header setToggle = {toggleAdd}  text = {toggle ? "Close" : "Add"} color={toggle ? 'red' : 'green'}/>
    {toggle && <Addtask onAdd = {addTask}  task={tasks} extTask={extTask} />}
    {tasks.length > 0 ?<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder} editTask = {editTask} /> : <h3>Add a task</h3> }

  </div>);

};
