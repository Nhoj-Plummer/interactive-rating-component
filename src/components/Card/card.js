import React from "react"
import './card.css'

const Card = props => {
  return <div className="card-container section-padding">{props.children}</div>
}

export default Card
