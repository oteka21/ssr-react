import React from 'react'
import { Router, Link } from '@reach/router'
import { Counter } from './pages/counter'
import { Caracters } from './pages/caracters'

export default function App () {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/caracters">Caracters</Link></li>
      </ul>
      <Router>
        <Counter path="/counter" />
        <Caracters path="/caracters"/>
      </Router>
    </div>
  )
}
