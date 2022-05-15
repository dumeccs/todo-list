import { useState, createContext } from "react";

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
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


      const addTask = (task) =>{
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id,...task}
        const updatedTask =([...tasks,newTask])
        setTask(updatedTask)
      }


      const updateTask =(id, updatedTask) =>{
        setTask(
          tasks.map((task) => (task.id === id ? {...task,...updatedTask} : task)))
      }
      

      function deleteTask(id){
        setTask(tasks.filter(task => task.id !== id))
      }
      

      function toggleReminder(id){
        setTask(prevState => {
          return prevState.map(task=>{
            return task.id === id ? {...task, reminder: !task.reminder} : task
          })
        })
      }

      const [extTask, setExtTask] = useState({
        task:{},
        edited:false
    })
    
    
    const editTask = (task) =>{
      //with this we can read the specific task and Id we want from the task component.
    
      setExtTask({
        task,
        edit:true
      })
    }


    return (
        <TaskContext.Provider
            value = {{
                tasks,
                addTask,
                updateTask,
                deleteTask,
                toggleReminder,
                extTask,
                editTask
            }}>

            {children}

        </TaskContext.Provider>
    )
}

export default TaskContext