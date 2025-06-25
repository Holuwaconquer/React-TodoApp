import React, { useEffect, useState } from 'react'

const Addtask = ({ addToTask, taskToEdit, editIndex }) => {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")

    useEffect(() => {
        if(taskToEdit){
            setTitle(taskToEdit.title);
            setDetails(taskToEdit.details)
        }else{
            setTitle('')
            setDetails('')
        }
    }, [taskToEdit])

    const userTask = {title, details}
    const addTask = () =>{
        if(!title.trim()) return;
        addToTask(userTask)
        console.log(userTask);
        setTitle('')
        setDetails('')
    }

  return (
    <div className='TaskInput'>
        <input 
            type="text" 
            value={title} 
            placeholder='Type Title of Task' 
            onChange={(e)=> setTitle(e.target.value)} />
        <input 
            type="text" 
            value={details} 
            placeholder='Details of Your Task' 
            onChange={(e)=>setDetails(e.target.value)} />
        <button 
            onClick={addTask} 
            className='addTaskBtn'
        >{editIndex !== null ? '✔' : '+'}
        </button>
    </div>
  )
}

export default Addtask