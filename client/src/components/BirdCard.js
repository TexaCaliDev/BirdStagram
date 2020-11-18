import React from 'react'

const BirdCard = ({ onClick, picture, bird_name, description, range, prey, nesting }) => (
  <div className="card bird-card" onClick={onClick}>
    <div className="img-wrapper">
      <img src={picture} />
    </div>
    <div className="info-wrapper flex-col">
      
      <h3>BirdName:{bird_name}</h3>
      <p>Description:{description}</p>
      <p>Range:{range}</p>
      <p>Prey:{prey}</p>
      <p>Nesting:{nesting}</p>
    </div>
  </div>
)

export default BirdCard