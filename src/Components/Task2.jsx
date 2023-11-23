import React from 'react'


const Task2 = () => {
    let name = "Muhammad Bilal siddiqui";
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
  return (
   
    <>
     <h1>My name is {name}</h1>
     <p>current date{date}</p>
     <p>current time{time}</p>
    </>
  )
}


export default Task2;
