import React from 'react'

const TaskCount = ({ taskArray, completedArray }) => {
  return (
    <>
        <div>
            <div className='taskCountDiv'>
                <div>
                    <h2>Total Task</h2>
                    <h1>
                        { taskArray.length > 0 && taskArray.length < 10 ? `0${taskArray.length}` : taskArray.length }
                    </h1>
                </div>
                <div>
                    <h2>Completed Task</h2>
                    <h1>
                        { completedArray.length > 0 && completedArray.length < 10 ? `0${completedArray.length}` : completedArray.length }
                    </h1>
                </div>
                <div>
                    <h2>Pending Task</h2>
                    <h1>
                        { taskArray.length > 0 && taskArray.length < 10 ? `0${taskArray.length}` : taskArray.length }
                    </h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskCount