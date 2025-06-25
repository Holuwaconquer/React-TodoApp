import React, { useEffect } from 'react'
import Delete from '../assets/delete.svg'
import Edit from '../assets/edit.svg'
import Checkbox from '../assets/CheckCircle.svg'

const DisplayTask = ({ addToTask, taskArray, deleteTask, completeTask, editTask }) => {
    
    const archiveTask = (index) =>{
        completeTask(index)
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
                                    {!task.completed && (
                                        <button onClick={() =>archiveTask(index)}>
                                            <img style={{width: '35px'}} src={Checkbox} alt="" />
                                        </button>

                                    )}
                                    <button onClick={() => editTask(index)}>
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