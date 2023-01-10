import React, { useEffect, useState } from 'react'

function Effect() {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0)

    // type 1 ==> every time state was it render this useEffet

    // useEffect(()=>{
    //     console.log("useEffet called")
    // })

    // type 2 ==> dependecy upon the state

    // useEffect(()=>{
    //     console.log("useEffet called")
    // },[counter2])


    // type 3 ==> only one time 

    useEffect(()=>{
        console.log("useEffet called")
    },[])

  return (
    
    <div>
        <p>{counter1}</p>
        <p>{counter2}</p>
        <br/>
        <button onClick={()=> setCounter1(counter1 +1)}>First</button>
        <button onClick={()=> setCounter2(counter2 +1)}>Second</button>
    </div>
  )
}

export default Effect