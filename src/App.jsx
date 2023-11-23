import React from 'react'
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import './App.css'



const App = () => {
  return (
    <>
      <h1><center>Perform Task</center></h1>
      <div className='container'>
        <h3><center>Task1</center></h3>
        <Task1 />
      </div>
      <br />
      <hr />
      <div className='container'>
        <h3><center>Task2</center></h3>
        <Task2 />
      </div>
      <br />
      <hr />
      <div className='container'>
        <h3><center>Task3</center></h3>
        <Task3 />
      </div>
    </>
  )
}


export default App;
