import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {

  const [taskArray, settaskArray] = useState(() =>{
    const storedArray = localStorage.getItem('taskArray')
    return storedArray ? JSON.parse(storedArray)  : []
  })
  const [completedArray, setCompletedArray] = useState(() => {
    const completedTask = localStorage.getItem('completedArray')
    return completedTask ? JSON.parse(completedTask) : []
  })
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {  
    localStorage.setItem('taskArray', JSON.stringify(taskArray))
  }, [taskArray])
  
  const addToTask = (taskInfo) =>{
    if(editIndex !== null){
      const updatedTasks = [...taskArray]
      updatedTasks[editIndex] = taskInfo
      settaskArray(updatedTasks)
      setEditIndex(null)
    }else{
      settaskArray([...taskArray, taskInfo])
    }
  }
  useEffect(() => {
    localStorage.setItem('completedArray', JSON.stringify(completedArray))
  }, [completedArray])
  
  const completeTask = (index) =>{
    const updatedTasks = [...taskArray];
    updatedTasks[index] = {...updatedTasks[index], completed: true};
    settaskArray(updatedTasks)
    setCompletedArray([...completedArray, updatedTasks[index]])
  }
  const deleteTask = (i) =>{
    const deletedArray = taskArray.filter((__, index) => index !=i)
    settaskArray(deletedArray)
  }
  const editTask = (i) =>{
    setEditIndex(i)
  }

  return (
    <>
      <Navbar />
      <h1 
        style={{
          textAlign: 'center'
        }}
      >Hello, User! Start Planning today</h1>
      <Main 
        editTask={editTask} 
        completedArray={completedArray} 
        completeTask={completeTask} 
        deleteTask={deleteTask} 
        taskArray={taskArray} 
        addToTask={addToTask} 
        editIndex={editIndex}
        tastToEdit={editIndex !==null ? taskArray[editIndex] : null}
      />
      <Footer />
    </>
  )
}

export default App