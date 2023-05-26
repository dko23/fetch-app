import React, { useEffect, useState } from 'react'

export default function Active() {

useEffect(()=>{Action()},[])
const [task, setTask]=useState([])
  
function Action() {
  fetch('https://www.boredapi.com/api/activity')
    .then(res => res.json())
  .then(data=>setTask([data.activity]))
  }
  

  return (
      <div>
          <>
      <h3>{task}</h3>
        <br></br>
    <button type="button" class="btn btn-success" onClick={Action}>CLick me to find out!! Like this is going to make a difference, wink wink!</button>     
          </>  
    </div>
  )
}
