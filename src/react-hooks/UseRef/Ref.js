import React, { useRef, useState } from 'react'

function Ref() {
    const [counterState,SetCounterState] = useState(0);

    const counterRef = useRef(0)

    const SetCounterRef = ()=>{
        counterRef.current++
        console.log("ref rendring")
    }

  return (
    <div>
        <p>State : {counterState}</p>
        <p> UseRef : {counterRef.current}</p>
        <br/>
        <button onClick={()=> SetCounterState(counterState +1)}>State</button>
        <button onClick={SetCounterRef}>Ref</button>
    </div>
  )
}

export default Ref