import React, {useState} from 'react';
import { Tasks } from './Component/Tasks';
import { Header } from './Component/Header';
import { Addtask } from './Component/Addtask';
import { useContext } from 'react';
import TaskContext from './Context/Taskcontext';


export default function App() {
 
  const {tasks} = useContext(TaskContext)
  
//
const [toggle,setToggle] = useState(false)
const toggleAdd = () =>{
  setToggle(prevState => !prevState)
}
  return (

  <div className='container'> 

    <Header setToggle = {toggleAdd}  text = {toggle ? "Close" : "Add"} color={toggle ? 'red' : 'green'}/>
    {toggle && <Addtask/>}
    {tasks.length > 0 ?<Tasks/> : <h3>Add a task</h3> }

  </div>);

};
