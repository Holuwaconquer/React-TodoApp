import React, { useState } from 'react'

const TaskCount = ({ taskArray, completedArray }) => {

    //sure mercies of david
    //isaiah 55 v 3

    const [showModal, setShowModal] = useState(false)

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
                <div style={{cursor: 'pointer'}} onClick={() => setShowModal(true)}>
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

        {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" style={{background: showModal ? "rgba(0,0,0,0.5)" : "transparent"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Completed Tasks</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
                {completedArray.length === 0 ? (
                  <p className='noContent' style={{
                    textAlign: 'center', 
                    fontSize: '2em',
                    }}
                    >No task added yet! 
                    <br/> 
                    use the input above to start adding task
                </p>
                ) : (
                  completedArray.map((task, idx) => (
                    <div key={idx}
                        style={{
                            backgroundColor: '#F0D1A8',
                            padding: '20px',
                            borderRadius: '8px',
                            margin: '10px 0',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                        className='cardContent'>
                        <div>
                            <h2>{task.title}</h2>
                            <p>{task.details}</p>
                            <h4>Completed</h4>
                        </div>
                        <div>
                            <button
                                style={{cursor: 'pointer', backgroundColor: 'transparent', border: 'none'}}
                                onClick={() => {
                                    const confirm = window.confirm('Are you sure you want to delete this task?');
                                    if (confirm) {
                                        const updatedCompletedArray = completedArray.filter((_, index) => index !== idx);
                                        localStorage.setItem('completedArray', JSON.stringify(updatedCompletedArray));
                                    }
                                }}
                            >🚮</button>
                        </div>
                    </div>
                  ))
                )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskCount