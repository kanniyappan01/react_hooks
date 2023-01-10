import React, { useMemo, useState } from 'react'

function Memo() {
    const [value,setValue] = useState(0)
    const [number,setNumber] = useState([1,2,3,4,5])

    let showMax = ()=>{
        console.log("changing max");
        return Math.max(number)
    }
    const memo = useMemo(()=> showMax(),[number])
  return (
    <div>
        <p> state : {value}</p>
        <p> numbers : {number}</p>
        <button onClick={()=> setValue(value +1)}>Add</button>
    </div>
  )
}

export default Memo