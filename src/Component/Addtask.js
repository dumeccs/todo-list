import React from 'react';
import { useState, useEffect , useContext } from 'react';
import TaskContext from '../Context/Taskcontext';



export const Addtask = () => {
    const {addTask,extTask,updateTask} = useContext(TaskContext)
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    useEffect(() => {
        if(extTask.edit === true){
            setText(extTask.task.text)
            setDay(extTask.task.day)
            setReminder(extTask.task.reminder)
        }

    },[extTask])
  

    const onSubmit =(e) => {

        let newTask = {
            text,
            day,
            reminder
        }

        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        if(extTask.edit === true){
            updateTask(extTask.task.id , newTask)
        }

        else{
            addTask(newTask)
        }

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
        <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Task</label>
                    <input 
                        type ="text"
                        placeholder='Add task'
                        value = {text}
                        onChange ={(e) => setText(e.target.value)}
                    
                    />
                </div>
                <div className='form-control'>
                    <label>Day & Time</label>
                    <input 
                        type ="text"
                        placeholder='Add Day& Time'
                        value ={day}
                        onChange = {(e) => setDay(e.target.value)}

                    />
                </div>
                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input 
                        type ="Checkbox"
                        value={reminder}
                        onChange ={(e)=>setReminder(e.currentTarget.checked)}

                    />
                </div>
                <div className='form-control'>
                    <input 
                        type ="submit"
                        value ="Save task"
                        className = "btn btn"
                    />
                </div>
                
        </form>
  );
};
