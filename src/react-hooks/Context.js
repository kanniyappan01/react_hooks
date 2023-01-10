import React, { createContext, useState } from 'react'
const data = createContext();

const Context = () => {
    const [color] = useState("red")
  return (
        <data.Provider value={color}>
          <p>kani</p>
        </data.Provider>
  )
}

export default Context