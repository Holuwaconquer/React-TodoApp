import React from 'react'
import Delete from '../assets/delete.svg'
import Edit from '../assets/edit.svg'
import Checkbox from '../assets/CheckCircle.svg'

const DisplayTask = ({ addToTask, taskArray, deleteTask, completeTask }) => {
    
    const archiveTask = () =>{
        completeTask(taskArray)
    }
  return (
    <>
        <div className='cardContainer'>
                {
                    taskArray.map((task, index) => (
                        <div key={index} className='cardDiv'>
                            <div className='cardContent'>
                                <h2>{task.title}</h2>
                                <p>{task.details}</p>
                                <h4>Date Added: {new Date().toLocaleDateString()}</h4>
                            </div>
                            <div className='icon'>
                                <div>
                                    <button onClick={archiveTask}>
                                        <img style={{width: '35px'}} src={Checkbox} alt="" />
                                    </button>
                                    <button>
                                        <img src={Edit} alt="" />
                                    </button> 
                                    <button onClick={() => deleteTask(index)}>
                                        <img src={Delete} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    </>
  )
}

export default DisplayTask