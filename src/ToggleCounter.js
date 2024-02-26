import React from 'react'
import { useState } from 'react'

function TogglerCounter() {
const [mood,setMood] = useState (true)
const [number,setNumber] = useState(0)

const reaction =()=>setMood(!mood)

const Increment=()=> setNumber(number + 1) 
console.log(`new number: ${number}`)
  
  return (
    <div>
     <p onClick={reaction}> {mood ? ' 😊': '😔'} </p>
     <button onClick={ Increment}>{number}</button>
    </div>
  )
}

export default TogglerCounter
