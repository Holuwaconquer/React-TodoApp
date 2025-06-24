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

  useEffect(() => {  
    localStorage.setItem('taskArray', JSON.stringify(taskArray))
  }, [taskArray])
  
  const addToTask = (taskInfo) =>{
    settaskArray([...taskArray, taskInfo])
    console.log(taskArray);
    console.log('lol');
  }
  useEffect(() => {
    localStorage.setItem('completedArray', JSON.stringify(completedArray))
  }, [completedArray])
  
  const completeTask = (taskComplete) =>{
    setCompletedArray([...completedArray, taskComplete])
  }
  const deleteTask = (i) =>{
    const deletedArray = taskArray.filter((__, index) => index !=i)
    settaskArray(deletedArray)
  }

  return (
    <>
      <Navbar />
      <h1 
        style={{
          textAlign: 'center'
        }}
      >Hello, User! Start Planning today</h1>
      <Main completedArray={completedArray} completeTask={completeTask} deleteTask={deleteTask} taskArray={taskArray} addToTask={addToTask} />
      <Footer />
    </>
  )
}

export default App