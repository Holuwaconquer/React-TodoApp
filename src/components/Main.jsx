import React, { useState } from 'react'
import Addtask from './Addtask'
import DisplayTask from './DisplayTask'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import TaskCount from './TaskCount'

const Main = ({ addToTask, taskArray, editIndex, taskToEdit, deleteTask, completeTask, completedArray, editTask }) => {
    const [value, setValue] = useState(new Date())
  return (
    <>
        <div className='MainSection'>
            <div className='mainTop'>
                <div className='calendarSection'>
                    <h2
                        style={{
                            color: '#F87777',
                            fontFamily: 'cursive'
                        }}
                    >{
                        new Date().toLocaleDateString('default', {
                            weekday: 'long'
                        })
                    }</h2>
                    <h1>{
                        new Date().toLocaleDateString('default', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })
                    }</h1>
                    <div className='calenderFeatures' style={
                        {
                            backgroundColor: 'white',
                            textAlign: 'center',
                            borderRadius: '8px',
                            marginTop: '20px'
                        }
                    }>
                        <h1>{
                        new Date().toLocaleDateString('default', {
                            month: 'long'
                        })
                    }</h1>
                        <Calendar 
                            onChange={setValue}
                            value={value}
                            activeStartDate={new Date()}
                            showWeekNumbers={true}
                            showNavigation={false}
                            showNeighboringMonth={false}
                        />
                    </div>
                </div>
                <div className='taskSection'>
                    <Addtask 
                        addToTask={addToTask} 
                        editIndex={editIndex}
                        taskToEdit={taskToEdit}
                    />
                    <DisplayTask editTask={editTask} completeTask={completeTask} deleteTask={deleteTask} taskArray={taskArray} addToTask={addToTask}/>
                </div>
            </div>
            <div className='taskCount'>
                <TaskCount completedArray={completedArray} taskArray={taskArray} />
            </div>
        </div>
    </>
  )
}

export default Main