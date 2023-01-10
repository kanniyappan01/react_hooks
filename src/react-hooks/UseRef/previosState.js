import React,{useEffect, useRef, useState} from 'react'

function PreviosState() {
    const [value,setValue] = useState("")

    const valueRef = useRef("")
    useEffect(()=>{
        valueRef.current = value
    },[value])

  return (
    <div>
        <input
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
        ></input>

        <p>Curent State : {value}</p>
        <p>previous State : {valueRef.current}</p>
    </div>
  )
}

export default PreviosState