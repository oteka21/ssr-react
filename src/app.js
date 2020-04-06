import React, {useState} from 'react'
import { Router, Link } from "@reach/router"


const PageOne = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>esta es la pagina 1</h1>
            <button onClick={() => setCount(count => count - 1)}>-</button>
        <h3>{count}</h3>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </div>
  )
}


const PageTwo = () => {
  return (
    <h1>esta es la pagina 2</h1>
  )
}


const PageThree = () => {
  return (
    <h1>esta es la pagina 3</h1>
  )
}

export default function (){
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
        <li><Link to="/three">Three</Link></li>
      </ul>
      <Router>
        <PageOne path="/one" />
        <PageTwo path="/two"/>
        <PageThree path="/three"/>
      </Router>
    </div>
  )
}