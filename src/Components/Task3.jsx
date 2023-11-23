import React, { useState } from 'react'


const Task3 = () => {
  
    let time = new Date().toLocaleTimeString();
    const [currenttime,setcurrenttime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setcurrenttime(time);
    }
    setInterval(updateTime,1000)

  return(
    <>
        <h1>{currenttime}</h1>
    </>
  )
}


export default Task3;
