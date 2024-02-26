import {useState} from 'react';


export default function Counter() {
  const [counter,setCounter] = useState(0) 

const Increment =()=>  setCounter(counter + 1)

  return (
      <div>
        <p>The count is: {counter} </p>
        <button onClick={Increment}>Increment</button>
      </div>
  )
}
