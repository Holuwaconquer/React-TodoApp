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
  
  const completeTask = (index) => {
    const confirm = window.confirm('You are about to mark this task as completed, Are you sure?');
    if(confirm){
      const updatedTasks = [...taskArray];
      const completedTask = { ...updatedTasks[index], completed: true };
      setCompletedArray([...completedArray, completedTask]);
      updatedTasks.splice(index, 1);
      settaskArray(updatedTasks);
    }

  };
  const deleteTask = (i) =>{
    const confirm = window.confirm('Are you sure you want to delete this task?')
    if(confirm){
      const deletedArray = taskArray.filter((__, index) => index !=i)
      settaskArray(deletedArray)
    }
    // return;
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
        taskToEdit={editIndex !==null ? taskArray[editIndex] : null}
      />
      <Footer />
    </>
  )
}

export default App