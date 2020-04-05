import React, {useState} from 'react'


export default function (){
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}>-</button>
        <h3>{count}</h3>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </div>
  )
}