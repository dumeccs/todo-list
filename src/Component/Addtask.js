import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export const Addtask = ({onAdd,extTask}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    useEffect(() => {
        if(extTask.edit === true){
            setText(extTask.task.text)
            setDay(extTask.task.day)
        }

    },[extTask])
  

    const onSubmit =(e) => {
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }

        

        
            onAdd({text, day, reminder})
        
       
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
