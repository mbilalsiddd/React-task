import React from 'react'


const Task1 = () => {

const date = new Date().getHours();
let message = ""
if(date>=1 && date<12)
{
 message = "good morning"
}else if(date>=12 && date<19)
{
 message = "Good afternoon"
}else if(date>=19 && date<24)
{
  message = "good night"
}

  return(
    <>
      <h1>Hello sir {message}</h1>
    </>
  )
}


export default Task1;
