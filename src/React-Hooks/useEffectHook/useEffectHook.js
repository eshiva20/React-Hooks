import React from 'react'
import './useEffectHook.css'
import { useState, useEffect } from 'react';

const useEffectHook = () => {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)

    useEffect(()=>{
        alert("Page Rendered (Only will be called on click of btn 1)")
    },[count])

  return (
    <div className='main'>
      <h1>useEffect Hook</h1>
      <button onClick={()=>setCount(count+1)} className='effect-btn'>Increment {count}</button>
      <button onClick={()=>setCount1(count1+1)} className='effect-btn'>Increment {count1}</button>
    </div>
  )
}

export default useEffectHook
