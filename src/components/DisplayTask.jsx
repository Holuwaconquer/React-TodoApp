import React, { useEffect } from 'react'
import Delete from '../assets/delete.svg'
import Edit from '../assets/edit.svg'
import Checkbox from '../assets/CheckCircle.svg'

const DisplayTask = ({ taskArray, deleteTask, completeTask, editTask }) => {
    
    const archiveTask = (index) =>{
        completeTask(index)
    }

  return (
    <>
        <div className='cardContainer'>
                {taskArray.length > 0 ? 
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
                    )) : <p className='noContent' style={{
                            textAlign: 'center', 
                            fontSize: '2em',
                            transform: 'translate(50%, 50%)'
                            }}
                            >No task added yet! 
                            <br/> 
                            use the input above to start adding task
                        </p>
                }
        </div>
    </>
  )
}

export default DisplayTask