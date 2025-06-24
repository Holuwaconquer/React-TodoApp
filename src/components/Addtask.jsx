import React, { useState } from 'react'

const Addtask = ({ addToTask, }) => {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")

    const userTask = {title, details}
    const addTask = () =>{
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
        <button onClick={addTask} 
            className='addTaskBtn'>+</button>
    </div>
  )
}

export default Addtask