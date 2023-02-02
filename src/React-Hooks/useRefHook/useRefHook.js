import React, { useRef,useState } from 'react'
import { Link } from 'react-router-dom';

const useRefHook = () => {
    const[name,setName]=useState('')
    let userName=useRef()

  return (
    <div className='main'>
      <h1>useRef Hook</h1>
      <input onChange={()=>setName(userName.current.value)} type="text" ref={userName}/>
      <p>The userInput is " {name} "</p>
      <Link style={{marginTop:'3rem'}} to="/">Exit to Main</Link>
    </div>
  )
}

export default useRefHook
