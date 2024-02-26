import React from 'react'
import { useState } from 'react'

function Toggler() {
const [mood,setMood] = useState (true)

const reaction =()=>
  setMood(!mood)
  
  return (
    <div>
     <p onClick={reaction}> {mood?' 😊': '😔'} </p>
    </div>
  )
}

export default Toggler
