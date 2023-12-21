import React from 'react'
import './Card.css';

function Card(props) {
  return (
    <div id="card">
      <h1>{props.quote}</h1>
      <p>-{props.author}</p>
    </div>
  )
}

export default Card
