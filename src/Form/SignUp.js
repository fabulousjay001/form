import {React,useState} from 'react'

export default function SignUp() {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')

const updateFirstName=(evt)=>{
    setFirstName(evt.target.value)
}

const updateLastName=(evt)=>{
    setLastName(evt.target.value)
}

const handleSubmit =()=>{
    console.log(firstName, lastName)
}
  return (
    <div>
        <label htmlFor='username'>Enter Firstname</label>
        <input
        type='text'
        placeholder='username'
        value={firstName}
        onChange={updateFirstName}
        id='firstName'
        />
         <label htmlFor='username'>Enter Lastname</label>
        <input
        type='text'
        placeholder='username'
        value={lastName}
        onChange={updateLastName}
        id='LastName'
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
