import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid red;
  background : #000;
  color: red;
  width: 100px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
`

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>esta es la pagina 1</h1>
      <Button onClick={() => setCount(count => count - 1)}>-</Button>
      <h3>{count}</h3>
      <Button onClick={() => setCount(count => count + 1)}>+</Button>
    </div>
  )
}
